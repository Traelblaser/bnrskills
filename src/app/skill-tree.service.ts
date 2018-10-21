import { Injectable } from '@angular/core';
import { StatFamily } from './stat-family';
import { Skillrow } from './skillrow';

import { Dragon } from './data/dragon/module';
import { ClassService } from './class.service';
import { Archer } from './data/archer/module';
import { Mage } from './data/mage/module';
import { Warrior } from './data/war/module';

//import { Archer } from './data/arch/module';

@Injectable({
  providedIn: 'root'
})
export class SkillTreeService{
  classService: ClassService;

  constructor(classService: ClassService) { 
    this.classService = classService;
  }

  link(tree: StatFamily) : string {
    var address = "";
    address += this.subTreeLink(tree.ATK);
    address += this.subTreeLink(tree.DEF);
    address += this.subTreeLink(tree.General);
    return address;
}

private getTotal(tree : Skillrow[]) : number {
    let total = 0;
    for (let row of tree) {
        if (row.left) total += row.left.level;
        if (row.center) total += row.center.level;
        if (row.right) total += row.right.level;
    }
    return total;
}
getAtkTotal(tree : StatFamily) : number {
    return this.getTotal(tree.ATK);
}

getDefTotal(tree : StatFamily) : number {
    return this.getTotal(tree.DEF);
}

getGeneralTotal(tree: StatFamily) : number {
    return this.getTotal(tree.General);
}

private subTreeLink?(tree: Skillrow[]) : string {
    let alphabet = "0123456789ABCDEFGHIJK"; // base 21
    var address = "";
    for (let row of tree) {
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
    return address;

}

checkRules(tree: StatFamily) : void {
    this.checkRulesSubTree(tree.ATK);
    this.checkRulesSubTree(tree.DEF);
    this.checkRulesSubTree(tree.General);
}

loadTrees() :void {

}

getTree(playerClass: string, playerFamily: string) : any {
    let classes: string[] = this.classService.getClassesNoPromise();
    if (!classes.includes(playerClass)) 
      return;

    if (playerClass == "Dragonkin") {
      if (Dragon.stats.includes(playerFamily)) {
        let index = Dragon.stats.indexOf(playerFamily);
        return Dragon.SkillTrees[index];
      }
    }
    else if (playerClass == "Archer") {
      if (Archer.stats.includes(playerFamily)) {
        let index = Archer.stats.indexOf(playerFamily);
        return Archer.SkillTrees[index];
      }
    }
    else if (playerClass == "Mage") {
      if (Mage.stats.includes(playerFamily)) {
        let index = Mage.stats.indexOf(playerFamily);
        return Mage.SkillTrees[index];
      }
    }
    else if (playerClass == "Warrior") {
      if (Warrior.stats.includes(playerFamily)) {
        let index = Warrior.stats.indexOf(playerFamily);
        return Warrior.SkillTrees[index];
      }
    }
  }

  private checkRulesSubTree?(tree: Skillrow[]) : void {
      let left = 0;
      let center = 0;
      let right = 0;
      for(let row of tree) {
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

}
