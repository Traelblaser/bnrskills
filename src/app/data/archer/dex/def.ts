import { Skillrow } from '../../../skillrow';

export const DEF: Skillrow[] = [
    { depth: 1, stat: "DEX", points: 1400, spend: 0, left: {
        name: "Storm Shield",
        levels: 10,
        required: 6,
        stats: [
            "Ring of Element will summon a stronger Storm Element with 30% of your character's ATK"
            ,"Ring of Element will summon a stronger Storm Element with 35% of your character's ATK"
        ]
    }, center: {
        name: "Glare Slash",
        levels: 5,
        required: 0,
        stats: [
            "Changes Frost Trap of Ring of Oracle to Frozen Trap. Trap explodes in 1.5s and freezes enemy for 0.6s"
            ,"Changes Frost Trap of Ring of Oracle to Frozen Trap. Trap explodes in 1.5s and freezes enemy for 0.8s"
            ,"Changes Frost Trap of Ring of Oracle to Frozen Trap. Trap explodes in 1.5s and freezes enemy for 1.0s"
            ,"Changes Frost Trap of Ring of Oracle to Frozen Trap. Trap explodes in 1.5s and freezes enemy for 2.4s"
        ]
    }, right: {
        name: "HP Absorb",
        levels: 10,
        required: 6,
        stats: [
            "Deals 3% extra damage to poisoned enemies"
            ,"Deals 4% extra damage to poisoned enemies"
            ,"Deals 5% extra damage to poisoned enemies"
            ,"Deals 6% extra damage to poisoned enemies"
            ,"Deals 7% extra damage to poisoned enemies"
            ,"Deals 8% extra damage to poisoned enemies"
            ,"Deals 9% extra damage to poisoned enemies"
            ,"Deals 10% extra damage to poisoned enemies"
            ,"Deals 11% extra damage to poisoned enemies"
            ,"Deals 12% extra damage to poisoned enemies"
        ]
    }}
  , { depth: 2, stat: "DEX", points: 1700, spend: 11, left: {
      name: "Elemental Mastery",
      levels: 10,
      required: 6,
      stats: [
          ,"Element Summon CD reduced by 5%"
          ,"Element Summon CD reduced by 10%"
          ,"Element Summon CD reduced by 15%"
          ,"Element Summon CD reduced by 20%"
          ,"Element Summon CD reduced by 25%"
          ,"Element Summon CD reduced by 30%"
          ,"Element Summon CD reduced by 35%"
          ,"Element Summon CD reduced by 40%"
          ,"Element Summon CD reduced by 45%"
          ,"Element Summon CD reduced by 50%"
      ]
  }, center: null, right: {
      name: "Dodge Shield",
      levels: 15,
      required: 10,
      stats: [
          ,"Every successful dodge will restore 2% of Max HP"
          ,"Every successful dodge will restore 3% of Max HP"
          ,"Every successful dodge will restore 4% of Max HP"
          ,"Every successful dodge will restore 5% of Max HP"
          ,"Every successful dodge will restore 6% of Max HP"
          ,"Every successful dodge will restore 7% of Max HP"
          ,"Every successful dodge will restore 8% of Max HP"
          ,"Every successful dodge will restore 9% of Max HP"
          ,"Every successful dodge will restore 10% of Max HP"
          ,"Every successful dodge will restore 11% of Max HP"
          ,"Every successful dodge will restore 12% of Max HP"
          ,"Every successful dodge will restore 13% of Max HP"
          ,"Every successful dodge will restore 14% of Max HP"
          ,"Every successful dodge will restore 15% of Max HP"
          ,"Every successful dodge will restore 16% of Max HP"
      ]
  }}
  , { depth: 3, stat: "DEX", points: 2000, spend: 18, left: null, center: {
      name: "Wing Mastery",
      levels: 20,
      required: 0,
      stats: [
        "Equip Lv 3+ wings to increase Max HP 1.5%"
        ,"Equip Lv 3+ wings to increase Max HP 3.0%"
        ,"Equip Lv 3+ wings to increase Max HP 4.5%"
        ,"Equip Lv 3+ wings to increase Max HP 6.0%"
        ,"Equip Lv 3+ wings to increase Max HP 7.5%"
        ,"Equip Lv 3+ wings to increase Max HP 9.0%"
        ,"Equip Lv 3+ wings to increase Max HP 10.5%"
        ,"Equip Lv 3+ wings to increase Max HP 12.0%"
        ,"Equip Lv 3+ wings to increase Max HP 13.5%"
        ,"Equip Lv 3+ wings to increase Max HP 15.0%"
        ,"Equip Lv 3+ wings to increase Max HP 16.5%"
        ,"Equip Lv 3+ wings to increase Max HP 18.0%"
        ,"Equip Lv 3+ wings to increase Max HP 19.5%"
        ,"Equip Lv 3+ wings to increase Max HP 21.0%"
        ,"Equip Lv 3+ wings to increase Max HP 22.5%"
        ,"Equip Lv 3+ wings to increase Max HP 24.0%"
        ,"Equip Lv 3+ wings to increase Max HP 25.5%"
        ,"Equip Lv 3+ wings to increase Max HP 27.0%"
        ,"Equip Lv 3+ wings to increase Max HP 28.5%"
        ,"Equip Lv 3+ wings to increase Max HP 30.0%"
      ]
  }, right: null}
  , { depth: 4, stat: "DEX", points: 2250, spend: 30, left: {
      name: "Gale Blessing",
      levels: 10, 
      required: 10,
      stats: [
          "When summoning a Storm Element, your dodge rate increases by 30% over 5s, can stack up to 3 times"
      ]
  }, center: null, right: {
      name: "Elf Divinity",
      levels: 5,
      required: 5,
      stats: [
          "Decreases the CD for Ring of Divinity to dispel negative effects by 50%"

      ]
  }}
  , { depth: 5, stat: "DEX", points: 2500, spend: 40, left: {
      name: "Life Recovery",
      levels: 1,
      required: 1,
      stats: [
          "Every time when a Storm Elemental disappears, you will restore 20% of Max HP"
      ]
  }, center: null, right: {
      name: "Desperate Fight",
      levels: 1,
      required: 1,
      stats: [
          "When receiving deadly damage, your HP will be reduced to 1 but you cannot die within 5s, during which you will reflect 120% damage but ATK will be decreased by 40%. CD:90s"
      ]
  }}
  , { depth: 6, stat: "DEX", points: 2460, spend: 45, left: {
      name: "Storm Baptism",
      levels: 10,
      required: 10,
      stats: [
        "Every time an Element disappears, it grants a 10% chance to dispel all negative effects"
          ,"Every time an Element disappears, it grants a 20% chance to dispel all negative effects"
          ,"Every time an Element disappears, it grants a 30% chance to dispel all negative effects"
          ,"Every time an Element disappears, it grants a 40% chance to dispel all negative effects"
          ,"Every time an Element disappears, it grants a 50% chance to dispel all negative effects"
          ,"Every time an Element disappears, it grants a 60% chance to dispel all negative effects"
          ,"Every time an Element disappears, it grants a 70% chance to dispel all negative effects"
          ,"Every time an Element disappears, it grants a 80% chance to dispel all negative effects"
          ,"Every time an Element disappears, it grants a 90% chance to dispel all negative effects"
          ,"Every time an Element disappears, it grants a 100% chance to dispel all negative effects"
      ]
  }, center: {
      name: "Wing Mastery",
      levels: 20,
      required: 0,
      stats: [
        "When equipping Lv 4+ wings, HP+1.5%"
        ,"When equipping Lv 4+ wings, HP+3.0%"
        ,"When equipping Lv 4+ wings, HP+4.5%"
        ,"When equipping Lv 4+ wings, HP+6.0%"
        ,"When equipping Lv 4+ wings, HP+7.5%"
        ,"When equipping Lv 4+ wings, HP+9.0%"
        ,"When equipping Lv 4+ wings, HP+10.5%"
        ,"When equipping Lv 4+ wings, HP+12.0%"
        ,"When equipping Lv 4+ wings, HP+13.5%"
        ,"When equipping Lv 4+ wings, HP+15.0%"
        ,"When equipping Lv 4+ wings, HP+16.5%"
        ,"When equipping Lv 4+ wings, HP+18.0%"
        ,"When equipping Lv 4+ wings, HP+19.5%"
        ,"When equipping Lv 4+ wings, HP+21.0%"
        ,"When equipping Lv 4+ wings, HP+22.5%"
        ,"When equipping Lv 4+ wings, HP+24.0%"
        ,"When equipping Lv 4+ wings, HP+25.5%"
        ,"When equipping Lv 4+ wings, HP+27.0%"
        ,"When equipping Lv 4+ wings, HP+28.5%"
        ,"When equipping Lv 4+ wings, HP+30.0%"

      ]
  }, right: {
      name: "Final Struggle",
      levels: 10,
      required: 10,
      stats: [
          "Grants a 100% chance to reset skill CD of Bloodlust after Desperate Fight ends" //10
      ]
  }}
  , { depth: 7, stat: "DEX", points: 2500, spend: 60, left: {
      name: "Storm Wrath",
      levels: 10,
      required: 0,
      stats: [
          "Every time Element Attacks, it grants a 10% chance to decrease CD of Natural Realm/Divine Realm by 6s"
          ,"Every time Element Attacks, it grants a 20% chance to decrease CD of Natural Realm/Divine Realm by 6s"
          ,"Every time Element Attacks, it grants a 30% chance to decrease CD of Natural Realm/Divine Realm by 6s"
          ,"Every time Element Attacks, it grants a 40% chance to decrease CD of Natural Realm/Divine Realm by 6s"
          ,"Every time Element Attacks, it grants a 50% chance to decrease CD of Natural Realm/Divine Realm by 6s"
          ,"Every time Element Attacks, it grants a 60% chance to decrease CD of Natural Realm/Divine Realm by 6s"
          ,"Every time Element Attacks, it grants a 70% chance to decrease CD of Natural Realm/Divine Realm by 6s"
          ,"Every time Element Attacks, it grants a 80% chance to decrease CD of Natural Realm/Divine Realm by 6s"
          ,"Every time Element Attacks, it grants a 90% chance to decrease CD of Natural Realm/Divine Realm by 6s"
          ,"Every time Element Attacks, it grants a 100% chance to decrease CD of Natural Realm/Divine Realm by 6s"
      ]
  }, center: null, right: {
      name: "Blessed Ball",
      levels: 10,
      required: 0,
      stats: [
          "Flash Bolt/Blind Array improves HP restoring effect by 5% and decreases damage received by 8% when triggered. Lasts for 4s"
          ,"Flash Bolt/Blind Array improves HP restoring effect by 7.5% and decreases damage received by 16% when triggered. Lasts for 4s"
          ,"Flash Bolt/Blind Array improves HP restoring effect by 10% and decreases damage received by 24% when triggered. Lasts for 4s"
          ,"Flash Bolt/Blind Array improves HP restoring effect by 12.5% and decreases damage received by 32% when triggered. Lasts for 4s"
          ,"Flash Bolt/Blind Array improves HP restoring effect by 15% and decreases damage received by 40% when triggered. Lasts for 4s"
          ,"Flash Bolt/Blind Array improves HP restoring effect by 17.5% and decreases damage received by 48% when triggered. Lasts for 4s"
          ,"Flash Bolt/Blind Array improves HP restoring effect by 15% and decreases damage received by 56% when triggered. Lasts for 4s"
          ,"Flash Bolt/Blind Array improves HP restoring effect by 16.5% and decreases damage received by 64% when triggered. Lasts for 4s"
          ,"Flash Bolt/Blind Array improves HP restoring effect by 5% and decreases damage received by 72% when triggered. Lasts for 4s"
          ,"Flash Bolt/Blind Array improves HP restoring effect by 20% and decreases damage received by 80% when triggered. Lasts for 4s"
      ]
  }}
];
