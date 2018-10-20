import { Skillrow } from "./skillrow";


export class SkillTree {
    ATK: Skillrow[];
    DEF: Skillrow[];
    General: Skillrow[];

    link?() : string {
        var address = "";
        address += this.subTreeLink(this.ATK);
        address += this.subTreeLink(this.DEF);
        address += this.subTreeLink(this.General);
        return address;
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

    checkRules?() : void {
        this.checkRulesSubTree(this.ATK);
        this.checkRulesSubTree(this.DEF);
        this.checkRulesSubTree(this.General);
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
