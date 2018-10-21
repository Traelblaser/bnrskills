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
      stats: [
          "Every 1 Storm Element will increase your ATK and DEF by 1.5% over 5s, can stack up to 3 times."
          ,"Every 1 Storm Element will increase your ATK and DEF by 3% over 5s, can stack up to 3 times."
          ,"Every 1 Storm Element will increase your ATK and DEF by 4.5% over 5s, can stack up to 3 times."
          ,"Every 1 Storm Element will increase your ATK and DEF by 6% over 5s, can stack up to 3 times."
          ,"Every 1 Storm Element will increase your ATK and DEF by 7.5% over 5s, can stack up to 3 times."
          ,"Every 1 Storm Element will increase your ATK and DEF by 9% over 5s, can stack up to 3 times."
          ,"Every 1 Storm Element will increase your ATK and DEF by 10.5% over 5s, can stack up to 3 times."
          ,"Every 1 Storm Element will increase your ATK and DEF by 12% over 5s, can stack up to 3 times."
          ,"Every 1 Storm Element will increase your ATK and DEF by 13.5% over 5s, can stack up to 3 times."
          ,"Every 1 Storm Element will increase your ATK and DEF by 15% over 5s, can stack up to 3 times."
      ]
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
      stats: [
          "When attacking players, gives a 20% chance to summon a Storm Element with ATK equal to 800% of your Elemental ATK. It lasts for 10s. Can summon up to 3."
      ]
  }, center: null, right: {
      name: "Natural Curse",
      levels: 1,
      required: 1,
      stats: [
          "Poison Arrow has a 50% chance to curse target and convert 10% target's HP to you per sec over 5s."
      ]
  }}
  , { depth: 6, stat: "DEX", points: 2460, spend: 45, left: {
      name: "Conquering Blade (PvP)",
      levels: 10,
      required: 10,
      stats: [
          ,"Every time Element attacks target, it will decrease target's DEF by 7.5% and Ignore Defense by 7.5%. Can stack up to 3x."
          ,"Every time Element attacks target, it will decrease target's DEF by 10% and Ignore Defense by 10%. Can stack up to 3x."
          ,"Every time Element attacks target, it will decrease target's DEF by 12.5% and Ignore Defense by 12.5%. Can stack up to 3x."
          ,"Every time Element attacks target, it will decrease target's DEF by 15% and Ignore Defense by 15%. Can stack up to 3x."
          ,"Every time Element attacks target, it will decrease target's DEF by 17.5% and Ignore Defense by 17.5%. Can stack up to 3x."
          ,"Every time Element attacks target, it will decrease target's DEF by 20% and Ignore Defense by 20%. Can stack up to 3x."
          ,"Every time Element attacks target, it will decrease target's DEF by 22.5% and Ignore Defense by 22.5%. Can stack up to 3x."
          ,"Every time Element attacks target, it will decrease target's DEF by 25% and Ignore Defense by 25%. Can stack up to 3x."
          ,"Every time Element attacks target, it will decrease target's DEF by 27.5% and Ignore Defense by 27.5%. Can stack up to 3x."
          ,"Every time Element attacks target, it will decrease target's DEF by 30% and Ignore Defense by 30%. Can stack up to 3x."
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
      name: "Void Banish (PvP)",
      levels: 10,
      required: 10,
      stats: [
          "Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 2.6s"
          ,"Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 3.2s"
          ,"Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 3.8s"
          ,"Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 4.4s"
          ,"Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 5s"
          ,"Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 5.6s"
          ,"Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 6.2s"
          ,"Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 6.8s"
          ,"Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 7.4s"
          ,"Target hit by Poison Arrow/Venom Arrow will be unable to restore HP for 8s"
      ]
  }}
  , { depth: 7, stat: "DEX", points: 2500, spend: 60, left: {
      name: "Domain Control",
      levels: 10,
      required: 0,
      stats: [
        "Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
          ,"Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
          ,"Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
          ,"Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
          ,"Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
          ,"Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
          ,"Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
          ,"Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
          ,"Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
          ,"Using Natural Realm/Divine Realm will deal 80% skill damage to surrounding targets per sec. When Element exists, damage will be increased by 3x over 5s."
      ]
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