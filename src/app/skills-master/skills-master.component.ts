import { Component, OnInit } from '@angular/core';

import { Skillrow } from '../skillrow';
import { Skill } from '../skill';
import { ActivatedRoute } from '@angular/router';

import { StatFamily } from '../stat-family';
import { SkillTreeService } from '../skill-tree.service';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-skills-master',
  templateUrl: './skills-master.component.html',
  styleUrls: ['./skills-master.component.scss']
})
export class SkillsMasterComponent implements OnInit {
  tabs: string[];
  skillTree: StatFamily;
  stats: string[];
  classService: ClassService;

  constructor(route: ActivatedRoute, skillTreeService: SkillTreeService, classService: ClassService) {
    this.route = route; 
    this.selectedSkill = null;
    this.skillTreeService = skillTreeService;
    this.total = 0;
    this.classService = classService;
    this.tabs = ["ATK", "DEF", "General"];
    this.reset();
  }
  
  ngOnInit() {
    if (this.route) {
      const role = this.route.snapshot.paramMap.get("role");
      const id = this.route.snapshot.paramMap.get('id');
      if (id) this.load(role, id);
    }
    else {
      this.selectedClass="Warrior";
      this.stats = this.classService.getStats(this.selectedClass);
      this.skillTree = this.skillTreeService.getTree(this.selectedClass, this.stats[0]);
    }
    this.updateTotal();
  }

  updateTotal() :void {
    let total = 0;
    for (let t in this.skillTree) {
      for (let row of this.skillTree[t]) {
        if (row.left) total += row.left.level;
        if (row.center) total += row.center.level;
        if (row.right) total += row.right.level;
      }
    }
    this.total = total;
  }
  load(role: any, id: any) {
    let index = 0;
    let alphabet = "0123456789ABCDEFGHIJK"; // base 21
    this.selectedClass = role;
    this.stats = this.classService.getStats(this.selectedClass);
    this.skillTree = this.skillTreeService.getTree(this.selectedClass, this.stats[0]);

    for (let t in this.skillTree) {
      for (let row of this.skillTree[t]) {
        if (row.left) {
          row.left.level = alphabet.indexOf(id[index++]);
        }
        if (row.center) {
          row.center.level = alphabet.indexOf(id[index++]);
        }
        if (row.right) { 
          row.right.level = alphabet.indexOf(id[index++]);
        }
      }
    }
  }

  reset() {
    for (let t in this.skillTree) {
    for(let row of this.skillTree[t]) {
      if (row.left) row.left.level = 0;
      if (row.center) row.center.level = 0;
      if (row.right) row.right.level = 0;
    }
    this.updateTotal();
    }
  }

  checkRules() {
    this.skillTreeService.checkRules(this.skillTree);
  }

  link() : string {
    var address = this.skillTreeService.link(this.skillTree);
    this.linkText = `/skills/build/${this.selectedClass}/${address}`;
    return address;
  }

  clickRow(row: Skillrow, skill: Skill, tab:string) {
    this.selectedSkill = skill;
    this.selectedRow = row;
    this.tab = tab;
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
    
    let pos = -1;
    if (row.left == skill) { pos = 0;}
    else if (row.center == skill) { pos = 1; }
    else if (row.right == skill) { pos = 2; }

    let totalAtk = this.skillTreeService.getAtkTotal(this.skillTree);
    let totalDef = this.skillTreeService.getDefTotal(this.skillTree);
    
    let total = 0;
    for (let t in this.skillTree) {
      if (t != this.tab) continue;

      for (let r of this.skillTree[t]) {
        if (row == r) {
          if (t == "ATK" || t == "DEF") {
            if (total < row.spend) {
              console.log("haven't spent enough");
              return;
            }
          }
          else {
            if (pos == 0 && totalAtk < row.spend) {
              console.log("haven't spent enough in ATK");
              return;
            }
            if (pos != 0 && totalDef < row.spend) {
              console.log("haven't spent enough in DEF");
              return;
            }
          }
      
        break;
        }
        if (r.left) {
          if (!r.left.level) r.left.level = 0;
            total+= r.left.level;
            if (pos == 0 && r.left.level < r.left.required) {
              console.log("left");
              return;  
            }
        }
        if (r.center) {
          if (!r.center.level) r.center.level = 0;
            total+= r.center.level;
            if (pos == 1 && r.center.level < r.center.required) {
              console.log("center");
              return;
            }
          }
        if (r.right) {
          if (!r.right.level) r.right.level = 0;
            total+= r.right.level;
            if (pos == 2 && r.right.level < r.right.required) {
              console.log("right");
              return;
            }
        }
      }
    }
    skill.level++;
    this.total++;
    this.link();
  }

  selectClass(selectedClass) : void {
    this.stats = this.classService.getStats(selectedClass);
    this.selectedClass = selectedClass;
  }
  selectFamily(selectedClass, selectedFamily) : void {
    let tree = this.skillTreeService.getTree(selectedClass, selectedFamily);
    this.skillTree = tree;
  }

  private route: ActivatedRoute;

  //skills: Skillrow[];
  selectedClass: string;
  selectedSkill: Skill;
  selectedRow: Skillrow;
  linkText: string;
  total: number;
  tab: string;
  skillTreeService: SkillTreeService;
}
