import { Skillrow } from '../../../skillrow';

export const ATK: Skillrow[] = 

[
    { depth: 1, stat: "DEX", points: 1400, spend: 0, left: {
        name: "Storm Element",
        levels: 10,
        required: 6,
        stats: [
            "Ring of Element will summon a stronger Storm Element with 30% of your character's ATK"
            ,"Ring of Element will summon a stronger Storm Element with 35% of your character's ATK"
        ]
    }, center: {
        name: "Frozen Trap",
        levels: 10,
        required: 0,
        stats: [
            "Changes Frost Trap of Ring of Oracle to Frozen Trap. Trap explodes in 1.5s and freezes enemy for 0.6s"
            ,"Changes Frost Trap of Ring of Oracle to Frozen Trap. Trap explodes in 1.5s and freezes enemy for 0.8s"
            ,"Changes Frost Trap of Ring of Oracle to Frozen Trap. Trap explodes in 1.5s and freezes enemy for 1.0s"
            ,"Changes Frost Trap of Ring of Oracle to Frozen Trap. Trap explodes in 1.5s and freezes enemy for 2.4s"
        ]
    }, right: {
        name: "Arrow Smash",
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
      name: "Elemental Damage",
      levels: 10,
      required: 6,
      stats: [
          "Every time Storm Element attacks, it grants a 10% chance to deal 3X etra damage" //10
      ]
  }, center: null, right: {
      name: "Dark Hold (PvP)",
      levels: 10,
      required: 6,
      stats: [
          "Each attack grants a 3% chance to reduce target's Hit Rate by 40% for 3s"
          ,"Each attack grants a 3% chance to reduce target's Hit Rate by 83% for 3s"

      ]
  }}
  , { depth: 3, stat: "DEX", points: 2000, spend: 18, left: null, center: {
      name: "Venom Spray",
      levels: 15,
      required: 0,
      stats: [
          "Changes T. Tempest to V. Spray: Deals 350% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 375% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 400% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 425% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 450% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 475% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 500% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 525% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 550% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 5750% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 600% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 625% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 650% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 675% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."
          ,"Changes T. Tempest to V. Spray: Deals 700% dmg to 4 targets. Has a 50% chance to poison them for 4s with 100% dmg per sec."

      ]
  }, right: null}
  , { depth: 4, stat: "DEX", points: 2250, spend: 30, left: {
      name: "Diehard",
      levels: 10, 
      required: 10,
      stats: []
  }, center: null, right: {
      name: "Venom Grip",
      levels: 5,
      required: 5,
      stats: [
          "Increases the chance of Bloodlust to kill poisoned targets by 5%"
          ,"Increases the chance of Bloodlust to kill poisoned targets by 10%"
          ,"Increases the chance of Bloodlust to kill poisoned targets by 15%"
          ,"Increases the chance of Bloodlust to kill poisoned targets by 20%"
          ,"Increases the chance of Bloodlust to kill poisoned targets by 25%"

      ]
  }}
  , { depth: 5, stat: "DEX", points: 2500, spend: 40, left: {
      name: "Multiple Summon (PvP)",
      levels: 1,
      required: 1,
      stats: []
  }, center: null, right: {
      name: "Natural Curse",
      levels: 1,
      required: 1,
      stats: []
  }}
  , { depth: 6, stat: "DEX", points: 2460, spend: 45, left: {
      name: "Conquering Blade (PvP)",
      levels: 10,
      required: 10,
      stats: []
  }, center: {
      name: "Wing Master",
      levels: 20,
      required: 0,
      stats: []
  }, right: {
      name: "Void Banish (PvP)",
      levels: 10,
      required: 10,
      stats: []
  }}
  , { depth: 7, stat: "DEX", points: 2500, spend: 60, left: {
      name: "Domain Control",
      levels: 10,
      required: 0,
      stats: []
  }, center: null, right: {
      name: "Death Decay (PvP)",
      levels: 10,
      required: 0,
      stats: [
          "When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 7.5% and ATK by 15% over 4s."
          ,"When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 10% and ATK by 20% over 4s."
          ,"When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 12.5% and ATK by 25% over 4s."
          ,"When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 15% and ATK by 30% over 4s."
          ,"When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 17.5% and ATK by 35% over 4s."
          ,"When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 20% and ATK by 40% over 4s."
          ,"When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 22.5% and ATK by 45% over 4s."
          ,"When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 25% and ATK by 50% over 4s."
          ,"When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 27.5% and ATK by 55% over 4s."
          ,"When Natural Realm/Divine Realm hits target, it will decrease target's Max HP by 30% and ATK by 60% over 4s."
      ]
  }}
];