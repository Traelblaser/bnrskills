import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Skillrow } from '../skillrow';
import { Skill } from '../skill';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-skills-master',
  templateUrl: './skills-master.component.html',
  styleUrls: ['./skills-master.component.scss']
})
export class SkillsMasterComponent implements OnInit {
  tabs: string[];
  constructor(route: ActivatedRoute) {
    this.route = route; 
    this.selectedSkill = null;
    this.total = 0;
    this.tabs = ["ATK", "DEF", "General"];
    this.skills = [{ depth: 1, stat: "STR", points: 1330, spend: 0, 
    left: 
        { name: "Dark Slave", levels: 10, required: 6, stats: [
            "Umbra element summoned by Ring of Element will be stronger and possesses 5% of your ATK"
            ,"Umbra element summoned by Ring of Element will be stronger and possesses 10% of your ATK"
            ,"Umbra element summoned by Ring of Element will be stronger and possesses 15% of your ATK"
            ,"Umbra element summoned by Ring of Element will be stronger and possesses 20% of your ATK"
            ,"Umbra element summoned by Ring of Element will be stronger and possesses 25% of your ATK"
            ,"Umbra element summoned by Ring of Element will be stronger and possesses 30% of your ATK"
            ,"Umbra element summoned by Ring of Element will be stronger and possesses 35% of your ATK"
            ,"Umbra element summoned by Ring of Element will be stronger and possesses 40% of your ATK"
            ,"Umbra element summoned by Ring of Element will be stronger and possesses 45% of your ATK"
            ,"Umbra element summoned by Ring of Element will be stronger and possesses 50% of your ATK"
            ]
        },
    center:
        { name: "Fury of Divinity", levels: 5, required: 0, stats: [
            "Normal attack will restore 1 more Rage when in human form"
            ,"Normal attack will restore 2 more Rage when in human form"
            ,"Normal attack will restore 3 more Rage when in human form"
            ,"Normal attack will restore 4 more Rage when in human form"
            ,"Normal attack will restore 5 more Rage when in human form"
        ]},
    right: 
        { name: "Dragon Power", levels: 15, required: 9, stats: [
            "Damage dealt by normal attack increases bt 10% when in dragon form"
            ,"Damage dealt by normal attack increases bt 20% when in dragon form"
            ,"Damage dealt by normal attack increases bt 30% when in dragon form"
            ,"Damage dealt by normal attack increases bt 40% when in dragon form"
            ,"Damage dealt by normal attack increases bt 50% when in dragon form"
            ,"Damage dealt by normal attack increases bt 60% when in dragon form"
            ,"Damage dealt by normal attack increases bt 70% when in dragon form"
            ,"Damage dealt by normal attack increases bt 80% when in dragon form"
            ,"Damage dealt by normal attack increases bt 90% when in dragon form"
            ,"Damage dealt by normal attack increases bt 100% when in dragon form" //10
            ,"Damage dealt by normal attack increases bt 110% when in dragon form"
            ,"Damage dealt by normal attack increases bt 120% when in dragon form"
            ,"Damage dealt by normal attack increases bt 130% when in dragon form"
            ,"Damage dealt by normal attack increases bt 140% when in dragon form"
            ,"Damage dealt by normal attack increases bt 150% when in dragon form"
        ]}
},
{ depth: 2, stat: "STR", points: 1630, spend: 11,left: {
    name: "Steal", levels: 10, required: 6, stats: [
      "Attack of Umbra element grants a 2% chance to steal 1 class buff from the target"
      ,"Attack of Umbra element grants a 4% chance to steal 1 class buff from the target"
      ,"Attack of Umbra element grants a 6% chance to steal 1 class buff from the target"
      ,"Attack of Umbra element grants a 8% chance to steal 1 class buff from the target"
      ,"Attack of Umbra element grants a 10% chance to steal 1 class buff from the target"  
      ,"Attack of Umbra element grants a 12% chance to steal 1 class buff from the target"
      ,"Attack of Umbra element grants a 14% chance to steal 1 class buff from the target"
      ,"Attack of Umbra element grants a 16% chance to steal 1 class buff from the target"
      ,"Attack of Umbra element grants a 18% chance to steal 1 class buff from the target"
      ,"Attack of Umbra element grants a 20% chance to steal 1 class buff from the target"

    ]
}, center: null, right: {
    name: "Bloody Bite (PvP)", levels: 5, required: 3, stats: [
        "Converts 1% damage dealt to HP when in dragon form"
        ,"Converts 2% damage dealt to HP when in dragon form"
        ,"Converts 3% damage dealt to HP when in dragon form"
        ,"Converts 4% damage dealt to HP when in dragon form"
        ,"Converts 5% damage dealt to HP when in dragon form"
    ]
}},
{ depth: 3, stat: "STR", points: 1930, spend: 18, left: null, center: {
    name: "Dragon Rage", levels: 15, required: 0, stats: [
        "Changes Thunder Tempest effect to summoning dragon flame and deals 400% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 425% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 450% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 475% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 500% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 525% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 550% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 575% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 600% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 625% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 650% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 675% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 700% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 725% skill damage to 4 targets within the range (Also valid in PvP)"
        ,"Changes Thunder Tempest effect to summoning dragon flame and deals 750% skill damage to 4 targets within the range (Also valid in PvP)"

    ]
}, right: null},
{ depth: 4, stat: "STR", points: 2180, spend: 30,left: {
    name: "Umbra Guardian", levels: 10, required: 10, stats: [
        "Each attack of Umbra element grants a _% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
        ,"Each attack of Umbra element grants a _% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
        ,"Each attack of Umbra element grants a _% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
        ,"Each attack of Umbra element grants a _% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
        ,"Each attack of Umbra element grants a _% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
        ,"Each attack of Umbra element grants a _% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
        ,"Each attack of Umbra element grants a _% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
        ,"Each attack of Umbra element grants a _% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
        ,"Each attack of Umbra element grants a _% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
        ,"Each attack of Umbra element grants a 20% chance to increase your Block Rate by 5%. It can be stacked up to 3x and last for 3s."
    ]
}, center: null, right: {
    name: "Awakened Dragon", levels: 10, required: 10, stats: [
        "Grants a 1% chance to transform directly if Rage maxes out when in human form"
        ,"Grants a 2% chance to transform directly if Rage maxes out when in human form"
        ,"Grants a 3% chance to transform directly if Rage maxes out when in human form"
        ,"Grants a 4% chance to transform directly if Rage maxes out when in human form"
        ,"Grants a 5% chance to transform directly if Rage maxes out when in human form"
        ,"Grants a 6% chance to transform directly if Rage maxes out when in human form"
        ,"Grants a 7% chance to transform directly if Rage maxes out when in human form"
        ,"Grants a 8% chance to transform directly if Rage maxes out when in human form"
        ,"Grants a 9% chance to transform directly if Rage maxes out when in human form"
        ,"Grants a 10% chance to transform directly if Rage maxes out when in human form"
    ]
}},
{ depth: 5, stat: "STR", points: 2430, spend: 40,left: {
    name: "Umbra Despair", levels: 1, required: 1, stats: [
        "Umbra element will explode when it disappears to deal 400% skill damage to surrounding players and disables them to regen HP for 2s"
    ]
}, center: null, right: {
    name: "Bloody Tempest (PvP)", levels: 1, required: 1, stats: [
        "When Rage >50, Ignore Defense+100%, damage+200%, 30% damage will be converted to HP for 3s. CD: 60s"
    ]
}},
{ depth: 6, stat: "STR", points: 2530, spend: 45,left: {
    name: "Life Circle",
    levels: 10,
    required: 10,
    stats: [
        "Every time the Element disappears, it has a 75?% chance to summon another Element"
        ,"Every time the Element disappears, it has a 75?% chance to summon another Element"
        ,"Every time the Element disappears, it has a 75?% chance to summon another Element"
        ,"Every time the Element disappears, it has a 75?% chance to summon another Element"
        ,"Every time the Element disappears, it has a 75?% chance to summon another Element"
        ,"Every time the Element disappears, it has a 75?% chance to summon another Element"
        ,"Every time the Element disappears, it has a 75?% chance to summon another Element"
        ,"Every time the Element disappears, it has a 75?% chance to summon another Element"
        ,"Every time the Element disappears, it has a 75?% chance to summon another Element"
        ,"Every time the Element disappears, it has a 75% chance to summon another Element"
    ]

}, center: {
    name: "Wing Master",
    levels: 20,
    required: 0,
    stats: [
        "When equipping Lv 4+ wings, ATK+0.5%"
        ,"When equipping Lv 4+ wings, ATK+1%"
        ,"When equipping Lv 4+ wings, ATK+1.5%"
        ,"When equipping Lv 4+ wings, ATK+2%"
        ,"When equipping Lv 4+ wings, ATK+2.5%"
        ,"When equipping Lv 4+ wings, ATK+3%"
        ,"When equipping Lv 4+ wings, ATK+3.5%"
        ,"When equipping Lv 4+ wings, ATK+4%"
        ,"When equipping Lv 4+ wings, ATK+4.5%"
        ,"When equipping Lv 4+ wings, ATK+5%"
        ,"When equipping Lv 4+ wings, ATK+5.5%"
        ,"When equipping Lv 4+ wings, ATK+6%"
        ,"When equipping Lv 4+ wings, ATK+6.5%"
        ,"When equipping Lv 4+ wings, ATK+7%"
        ,"When equipping Lv 4+ wings, ATK+7.5%"
        ,"When equipping Lv 4+ wings, ATK+8%"
        ,"When equipping Lv 4+ wings, ATK+8.5%"
        ,"When equipping Lv 4+ wings, ATK+9%"
        ,"When equipping Lv 4+ wings, ATK+9.5%"
        ,"When equipping Lv 4+ wings, ATK+10%"
    ]
}, right: {
    name: "Fatal Blow",
    levels: 10,
    required: 10,
    stats: [
        "If you trigger a critical attack when in human form, you can restore 0.5% HP"
        ,"If you trigger a critical attack when in human form, you can restore 1% HP"
        ,"If you trigger a critical attack when in human form, you can restore 1.5% HP"
        ,"If you trigger a critical attack when in human form, you can restore 2% HP"
        ,"If you trigger a critical attack when in human form, you can restore 2.5% HP"
        ,"If you trigger a critical attack when in human form, you can restore 3% HP"
        ,"If you trigger a critical attack when in human form, you can restore 3.5% HP"
        ,"If you trigger a critical attack when in human form, you can restore 4% HP"
        ,"If you trigger a critical attack when in human form, you can restore 4.5% HP"
        ,"If you trigger a critical attack when in human form, you can restore 5% HP"
        
    ]    
}},
{ depth: 7, stat: "STR", points: 2570, spend: 60,left: {
    name: "Umbra Bless",
    levels: 10,
    required: 0,
    stats: [
      "Every time the Element disappears, it has a 25?% chance to trigger Damage Immunity 5x continuously"
        ,"Every time the Element disappears, it has a 34?% chance to trigger Damage Immunity 5x continuously"
        ,"Every time the Element disappears, it has a 42% chance to trigger Damage Immunity 5x continuously"
        ,"Every time the Element disappears, it has a 50% chance to trigger Damage Immunity 5x continuously"
        ,"Every time the Element disappears, it has a 58% chance to trigger Damage Immunity 5x continuously"
        ,"Every time the Element disappears, it has a 64% chance to trigger Damage Immunity 5x continuously"
        ,"Every time the Element disappears, it has a 72% chance to trigger Damage Immunity 5x continuously"
        ,"Every time the Element disappears, it has a 80% chance to trigger Damage Immunity 5x continuously"
        ,"Every time the Element disappears, it has a 88% chance to trigger Damage Immunity 5x continuously"
        ,"Every time the Element disappears, it has a 100% chance to trigger Damage Immunity 5x continuously"
    ]
}, center: null, right: {
    name: "Abyss Pillage (PvP)",
    levels: 10,
    required: 0,
    stats: [
        "Every time Dragon Realm hits the target, it will steal 3% of target's ATK and DEF to yourself for 5s. CD: 1s"
        ,"Every time Dragon Realm hits the target, it will steal 4% of target's ATK and DEF to yourself for 5s. CD: 1s"
        ,"Every time Dragon Realm hits the target, it will steal 5% of target's ATK and DEF to yourself for 5s. CD: 1s"
        ,"Every time Dragon Realm hits the target, it will steal 6% of target's ATK and DEF to yourself for 5s. CD: 1s"
        ,"Every time Dragon Realm hits the target, it will steal 7% of target's ATK and DEF to yourself for 5s. CD: 1s"
        ,"Every time Dragon Realm hits the target, it will steal 8% of target's ATK and DEF to yourself for 5s. CD: 1s"
        ,"Every time Dragon Realm hits the target, it will steal 9% of target's ATK and DEF to yourself for 5s. CD: 1s"
        ,"Every time Dragon Realm hits the target, it will steal 10% of target's ATK and DEF to yourself for 5s. CD: 1s"
        ,"Every time Dragon Realm hits the target, it will steal 11% of target's ATK and DEF to yourself for 5s. CD: 1s"
        ,"Every time Dragon Realm hits the target, it will steal 12% of target's ATK and DEF to yourself for 5s. CD: 1s"
    ]
}}
];
  this.reset();
  }
  
  ngOnInit() {
    console.log("init");
    console.log(this.route);
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
