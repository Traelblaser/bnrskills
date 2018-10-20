import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Skillrow } from '../skillrow';
import { Skill } from '../skill';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { tree } from '../data/dragon/str/module';
import { SkillTree } from '../skill-tree';

@Component({
  selector: 'app-skills-master',
  templateUrl: './skills-master.component.html',
  styleUrls: ['./skills-master.component.scss']
})
export class SkillsMasterComponent implements OnInit {
  tabs: string[];
  skillTree: SkillTree;
  
  constructor(route: ActivatedRoute) {
    this.route = route; 
    this.selectedSkill = null;
    this.total = 0;
    this.tabs = ["ATK", "DEF", "General"];
    this.skills = tree.ATK;
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
    for (let row of this.skills) {
      if (row.left) total += row.left.level;
      if (row.center) total += row.center.level;
      if (row.right) total += row.right.level;
    }
    this.total = total;
  }
  load(id: any) {
    let index = 0;
    let alphabet = "0123456789ABCDEFGHIJK"; // base 21
    for (let row of this.skills) {
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

  reset() {
    for(let row of this.skills) {
      if (row.left) row.left.level = 0;
      if (row.center) row.center.level = 0;
      if (row.right) row.right.level = 0;
    }
    this.updateTotal();
  }

  checkRules() {
    let left = 0;
    let center = 0;
    let right = 0;
    for(let row of this.skills) {
      if (row.left) {
        left = row.left.required;
        if (row.left.levels != row.left.stats.length) {
          console.log("stat mismatch", row.left);
        }
      }
      if (row.center) {
        center = row.center.required;
        if (row.center.levels != row.center.stats.length) {
          console.log("stat mismatch", row.center);
        }
      }
      if (row.right) {
        right = row.right.required;
        if (row.right.levels != row.right.stats.length) {
          console.log("stat mismatch", row.right);
        }
      }
    }
  }

  link() : string {
    let alphabet = "0123456789ABCDEFGHIJK"; // base 21
    var address = "";
    for (let row of this.skills) {
      if (row.left) {
        let level = row.left.level?row.left.level : 0;
        address += alphabet[level];
      }
      if (row.center) {
        let level = row.center.level?row.center.level:0;
        address += alphabet[level];
      }
      if (row.right) {
        let level = row.right.level?row.right.level:0;
        address += alphabet[level];
      }
    }
    this.linkText = `/build/${address}`;
    console.log("Address", address);
    return address;
  }

  clickRow(row: Skillrow, skill: Skill) {
    this.selectedSkill = skill;
    this.selectedRow = row;
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

    let total = 0;
   for (let r of this.skills) {
      if (row == r) {
        if (total < row.spend) {
          return;
        }
    
      break;
     }
    if (r.left) {
      if (!r.left.level) r.left.level = 0;
      total+= r.left.level;
      if (pos == 0 && r.left.level < r.left.required) {
        return;  
      }
    }
    if (r.center) {
      if (!r.center.level) r.center.level = 0;
      total+= r.center.level;
      if (pos == 1 && r.center.level < r.center.required) {
        return;
      }
    }
    if (r.right) {
      if (!r.right.level) r.right.level = 0;
      total+= r.right.level;
      if (pos == 2 && r.right.level < r.right.required) {
        return;
      }
    }

   }
    skill.level++;
    this.total++;
    this.link();

  }
  private route: ActivatedRoute;

  skills: Skillrow[];
  selectedSkill: Skill;
  selectedRow: Skillrow;
  linkText: string;
  total: number;
}
