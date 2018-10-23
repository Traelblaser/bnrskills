import { Component, OnInit } from '@angular/core';

import { Skillrow } from '../skillrow';
import { Skill } from '../skill';
import { ActivatedRoute } from '@angular/router';

import { SkillTreeService } from '../skill-tree.service';
import { ClassService } from '../class.service';
import { SkillTree } from '../skill-tree';
import BigNumber from 'bignumber.js';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-skills-master',
  templateUrl: './skills-master.component.html',
  styleUrls: ['./skills-master.component.scss']
})
export class SkillsMasterComponent implements OnInit {
  tabs: string[];
  //statFamily: StatFamily;
  skillTree: SkillTree;
  stats: string[];
  classService: ClassService;

  constructor(route: ActivatedRoute, skillTreeService: SkillTreeService, classService: ClassService) {
    this.route = route;
    this.selectedSkill = null;
    this.skillTreeService = skillTreeService;
    this.total = 0;
    this.classService = classService;
    this.tabs = ["ATK", "DEF", "General"];
    this.statIndex = 0;
    /*
    this.selectedClass = "Warrior";
    this.stats = this.classService.getStats(this.selectedClass);
    this.skillTree = this.skillTreeService.getTrees(this.selectedClass);
    this.statFamily = this.skillTreeService.getFamily(this.selectedClass, this.stats[0]);
    */
    this.reset();
  }

  ngOnInit() {
    if (this.route) {
      const role = this.route.snapshot.paramMap.get("role");
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.load(role, id);
      }
      else {
        this.selectedClass = "Warrior";
        this.stats = this.classService.getStats(this.selectedClass);
        this.skillTree = this.skillTreeService.getTrees(this.selectedClass);
        this.stat = this.stats[this.statIndex];
        this.reset();
      }
    }
    this.updateTotal();
  }

  updateTotal(): void {
    let total = 0;
    for (let family of this.skillTree.SkillTrees) {
      for (let t in family) {
        for (let row of family[t]) {
          if (row.left) total += row.left.level;
          if (row.center) total += row.center.level;
          if (row.right) total += row.right.level;
        }
      }
    }
    this.total = total;
  }
  load(role: any, id: any) {
    let index = 0;
    let alphabet = "0123456789ABCDEFGHIJK"; // base 21
    this.selectedClass = role;
    this.skillTree = this.skillTreeService.getTrees(this.selectedClass);
    this.stats = this.classService.getStats(this.selectedClass);
    //this.statFamily = this.skillTreeService.getFamily(this.selectedClass, this.stats[0]);
    //var num = new BigNumber(id, 64);
    //var address = num.toString(21);
    //var address = Base64.decode(id);
    BigNumber.config({ ALPHABET: "0123456789ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz_~-" });
    var num = new BigNumber(id, 64);
    var address = num.toString(21);
    console.log("address decoded ", address);
    this.stat = this.stats[this.statIndex];

    for (let statFamily of this.skillTree.SkillTrees) {
      for (let t in statFamily) {
        for (let row of statFamily[t]) {
          if (row.left) {
            row.left.level = alphabet.indexOf(address[index++]);
          }
          if (row.center) {
            row.center.level = alphabet.indexOf(address[index++]);
          }
          if (row.right) {
            row.right.level = alphabet.indexOf(address[index++]);
          }
        }
      }
    }
  }

  reset() {
    if (!this.skillTree)
      return;
    for (let family of this.skillTree.SkillTrees) {
      for (let t in family) {
        for (let row of family[t]) {
          if (row.left) row.left.level = 0;
          if (row.center) row.center.level = 0;
          if (row.right) row.right.level = 0;
        }
      }
      this.updateTotal();
    }
  }

  checkRules() {
    this.skillTreeService.checkRules(this.skillTree);
  }

  link(): string {
    var address = this.skillTreeService.link(this.skillTree);
    this.linkText = `/skills/build/${this.selectedClass}/${address}`;
    return address;
  }

  clickRow(row: Skillrow, skill: Skill, tab: string) {
    this.selectedSkill = skill;
    this.selectedRow = row;
    this.tab = tab;
  }

  remove() {
    let skill = this.selectedSkill;
    let row = this.selectedRow;

    if (!skill) return;
    if (!row) return;

    if (!skill.level) skill.level = 0;
    if (skill.level <= 0) {
      skill.level = 0;
      return;
    }
    // the rules are different when removing skills..
    if (!this.isValid(row, skill))
      return;

    skill.level--;
    this.total--;
    this.link();
  }

  add() {
    let skill = this.selectedSkill;
    let row = this.selectedRow;
    if (!skill) return;
    if (!row) return;

    if (!skill.level) skill.level = 0;
    if (skill.level >= skill.levels) {
      skill.level = skill.levels;
      return;
    }

    if (!this.isValid(row, skill))
      return;

    skill.level++;
    this.total++;
    this.link();
  }


  isValid(row, skill) {
    let pos = -1;
    if (row.left == skill) { pos = 0; }
    else if (row.center == skill) { pos = 1; }
    else if (row.right == skill) { pos = 2; }

    let totalAtk = this.skillTreeService.getAtkTotal(this.skillTree, this.stat);
    let totalDef = this.skillTreeService.getDefTotal(this.skillTree, this.stat);

    let total = 0;

    let index = this.skillTree.stats.indexOf(this.stat);
    let family = this.skillTree.SkillTrees[index];
    for (let t in family) {
      if (t != this.tab) continue;

      for (let r of family[t]) {
        if (row == r) {
          if (t == "ATK" || t == "DEF") {
            if (total < row.spend) {
              console.log("haven't spent enough");
              return false;
            }
          }
          else {
            if (pos == 0 && totalAtk < row.spend) {
              console.log("haven't spent enough in ATK");
              return false;
            }
            if (pos != 0 && totalDef < row.spend) {
              console.log("haven't spent enough in DEF");
              return false;
            }
          }

          break;
        }
        if (r.left) {
          if (!r.left.level) r.left.level = 0;
          total += r.left.level;
          if (pos == 0 && r.left.level < r.left.required) {
            console.log("left");
            return false;
          }
        }
        if (r.center) {
          if (!r.center.level) r.center.level = 0;
          total += r.center.level;
          if (pos == 1 && r.center.level < r.center.required) {
            console.log("center");
            return false;
          }
        }
        if (r.right) {
          if (!r.right.level) r.right.level = 0;
          total += r.right.level;
          if (pos == 2 && r.right.level < r.right.required) {
            console.log("right");
            return false;
          }
        }
      }
    }
    return true;

  }

  selectClass(selectedClass): void {
    this.stats = this.classService.getStats(selectedClass);
    this.skillTree = this.skillTreeService.getTrees(selectedClass);
    this.selectedClass = selectedClass;
    this.statIndex = 0;
    this.stat = this.stats[this.statIndex];

  }
  selectFamily(selectedClass, selectedFamily): void {
    //let tree = this.skillTreeService.getFamily(selectedClass, selectedFamily);
    this.stat = selectedFamily;
    this.statIndex = this.stats.indexOf(selectedFamily);
    //this.statFamily = tree;
  }

  private route: ActivatedRoute;

  //skills: Skillrow[];
  selectedClass: string;
  selectedSkill: Skill;
  selectedRow: Skillrow;
  linkText: string;
  total: number;
  tab: string;
  stat: string;
  statIndex: number;
  skillTreeService: SkillTreeService;
}
