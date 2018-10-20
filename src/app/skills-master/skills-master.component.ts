import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Skillrow } from '../skillrow';
import { Skill } from '../skill';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { tree } from '../data/dragon/str/module';
import { SkillTree } from '../skill-tree';
import { SkillTreeService } from '../skill-tree.service';

@Component({
  selector: 'app-skills-master',
  templateUrl: './skills-master.component.html',
  styleUrls: ['./skills-master.component.scss']
})
export class SkillsMasterComponent implements OnInit {
  tabs: string[];
  skillTree: SkillTree;

  constructor(route: ActivatedRoute, skillTreeService: SkillTreeService) {
    this.route = route; 
    this.selectedSkill = null;
    this.skillTreeService = skillTreeService;
    this.total = 0;
    this.tabs = ["ATK", "DEF", "General"];
    this.skillTree = tree;
    this.reset();
  }
  
  ngOnInit() {
    if (this.route) {
      const id = this.route.snapshot.paramMap.get('id');
      
      console.log(id);
      if (id) this.load(id);
    }
    this.updateTotal();
    /*
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.load(params.get("id")))
    );
    */
  }

  updateTotal() :void {
    let total = 0;
    for (let t in this.skillTree) {
      console.log("t", t);
      for (let row of this.skillTree[t]) {
        if (row.left) total += row.left.level;
        if (row.center) total += row.center.level;
        if (row.right) total += row.right.level;
      }
    }
    this.total = total;
  }
  load(id: any) {
    let index = 0;
    let alphabet = "0123456789ABCDEFGHIJK"; // base 21
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
    this.linkText = `/build/${address}`;
    console.log("Address", address);
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
      console.log("add(t)", t);
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

  private route: ActivatedRoute;

  //skills: Skillrow[];
  selectedSkill: Skill;
  selectedRow: Skillrow;
  linkText: string;
  total: number;
  tab: string;
  skillTreeService: SkillTreeService;
}
