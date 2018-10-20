import { Injectable } from '@angular/core';
import { SkillTree } from './skill-tree';
import { Skillrow } from './skillrow';

@Injectable({
  providedIn: 'root'
})
export class SkillTreeService{

  constructor() { }

  link(tree: SkillTree) : string {
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
getAtkTotal(tree : SkillTree) : number {
    return this.getTotal(tree.ATK);
}

getDefTotal(tree : SkillTree) : number {
    return this.getTotal(tree.DEF);
}

getGeneralTotal(tree: SkillTree) : number {
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

checkRules(tree: SkillTree) : void {
    this.checkRulesSubTree(tree.ATK);
    this.checkRulesSubTree(tree.DEF);
    this.checkRulesSubTree(tree.General);
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
