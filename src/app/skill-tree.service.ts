import { Injectable } from '@angular/core';
import { StatFamily } from './stat-family';
import { Skillrow } from './skillrow';

import { Dragon } from './data/dragon/module';
import { ClassService } from './class.service';
import { Archer } from './data/archer/module';
import { Mage } from './data/mage/module';
import { Warrior } from './data/war/module';
import { SkillTree } from './skill-tree';

//import { Archer } from './data/arch/module';

@Injectable({
  providedIn: 'root'
})
export class SkillTreeService {
  classService: ClassService;

  constructor(classService: ClassService) {
    this.classService = classService;
  }

  link(tree: SkillTree) : string {
    var address = "";
    for (let family of tree.SkillTrees) {
      let family_link = this.linkForFamily(family);
      address += family_link;
    }
    return address;
  }
  linkForFamily(family: StatFamily): string {
    var address = "";
    address += this.subTreeLink(family.ATK);
    address += this.subTreeLink(family.DEF);
    address += this.subTreeLink(family.General);
    return address;
  }

  private getTotal(tree: Skillrow[]): number {
    let total = 0;
    for (let row of tree) {
      if (row.left) total += row.left.level;
      if (row.center) total += row.center.level;
      if (row.right) total += row.right.level;
    }
    return total;
  }
  getAtkTotal(tree: SkillTree, stat: string): number {
    let index = tree.stats.indexOf(stat);
    return this.getTotal(tree.SkillTrees[index].ATK);
  }

  getDefTotal(tree: SkillTree, stat: string): number {
    return this.getTotal(tree.SkillTrees[tree.stats.indexOf(stat)].DEF);
  }

  getGeneralTotal(tree: SkillTree, stat: string): number {
    return this.getTotal(tree.SkillTrees[tree.stats.indexOf(stat)].General);
  }

  private subTreeLink?(tree: Skillrow[]): string {
    let alphabet = "0123456789ABCDEFGHIJK"; // base 21
    var address = "";
    for (let row of tree) {
      if (row.left) {
        let level = row.left.level ? row.left.level : 0;
        address += alphabet[level];
      }
      if (row.center) {
        let level = row.center.level ? row.center.level : 0;
        address += alphabet[level];
      }
      if (row.right) {
        let level = row.right.level ? row.right.level : 0;
        address += alphabet[level];
      }
    }
    return address;

  }

  checkRules(tree: SkillTree) : void {
    for (let family of tree.SkillTrees) {
      this.checkRulesForFamily(family);
    }
  }

  checkRulesForFamily(family: StatFamily): void {
    this.checkRulesSubTree(family.ATK);
    this.checkRulesSubTree(family.DEF);
    this.checkRulesSubTree(family.General);
  }

  loadTrees(): void {

  }

  getTrees(playerClass: string) : SkillTree {
    let classes: string[] = this.classService.getClassesNoPromise();
    if (!classes.includes(playerClass))
      return null;

    if (playerClass == "Dragonkin") {
      return Dragon;
    }
    else if (playerClass == "Archer") {
      return Archer;
    }
    else if (playerClass == "Mage") {
      return Mage;
    }
    else if (playerClass == "Warrior") {
      return Warrior;
    }

  }

  getFamily(playerClass: string, playerFamily: string): StatFamily {
    let trees = this.getTrees(playerClass);
    if (trees == null) 
      return null;

    if (playerClass == "Dragonkin") {
      if (Dragon.stats.includes(playerFamily)) {
        let index = Dragon.stats.indexOf(playerFamily);
        return trees.SkillTrees[index];
      }
    }
    else if (playerClass == "Archer") {
      if (Archer.stats.includes(playerFamily)) {
        let index = Archer.stats.indexOf(playerFamily);
        return trees.SkillTrees[index];
      }
    }
    else if (playerClass == "Mage") {
      if (Mage.stats.includes(playerFamily)) {
        let index = Mage.stats.indexOf(playerFamily);
        return trees.SkillTrees[index];
      }
    }
    else if (playerClass == "Warrior") {
      if (Warrior.stats.includes(playerFamily)) {
        let index = Warrior.stats.indexOf(playerFamily);
        return trees.SkillTrees[index];
      }
    }
  }

  private checkRulesSubTree?(tree: Skillrow[]): void {
    let left = 0;
    let center = 0;
    let right = 0;
    for (let row of tree) {
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
