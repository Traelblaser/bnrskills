import { Skillrow } from '../../../skillrow';

export const DEF: Skillrow[] =
[
    { depth: 1, stat: "INT", points: 550, spend: 0, left: {
        name: "Frozen Realm (PvP)",
        levels: 5,
        required: 3,
        stats: [
            "Dragon Domain will slow down target by 10% when hitting target. Its effect can be stacked up to 3x and lasts for 3s."
        ]
    }, center: {
        name: "Life Spring",
        levels: 10,
        required: 0,
        stats: [
            "HP restored by Ring of Blessing will be increased by 20%"
            ,"HP restored by Ring of Blessing will be increased by 40%"
            ,"HP restored by Ring of Blessing will be increased by 60%"
            ,"HP restored by Ring of Blessing will be increased by 80%"
            ,"HP restored by Ring of Blessing will be increased by 100%"
            ,"HP restored by Ring of Blessing will be increased by 120%"
            ,"HP restored by Ring of Blessing will be increased by 140%"
            ,"HP restored by Ring of Blessing will be increased by 160%"
            ,"HP restored by Ring of Blessing will be increased by 180%"
            ,"HP restored by Ring of Blessing will be increased by 200%"
        ]
    }, right: {
        name: "Dragon Prestige",
        levels: 5,
        required: 3,
        stats: [
            "Gain 30 extra Rage when transforming from dragon to human"
        ]
    }}
  , { depth: 2, stat: "INT", points: 850, spend: 11, left: {
      name: "Endless Winter (PvP)",
      levels: 10,
      required: 6,
      stats: [
            "Triggers Stun for 0.2s when Frozen Realm effect is stacked 3x. CD:20s"
            ,"Triggers Stun for 0.4s when Frozen Realm effect is stacked 3x. CD:20s"
            ,"Triggers Stun for 0.6s when Frozen Realm effect is stacked 3x. CD:20s"
            ,"Triggers Stun for 0.8s when Frozen Realm effect is stacked 3x. CD:20s"
            ,"Triggers Stun for 1.0s when Frozen Realm effect is stacked 3x. CD:20s"
            ,"Triggers Stun for 1.2s when Frozen Realm effect is stacked 3x. CD:20s"
            ,"Triggers Stun for 1.4s when Frozen Realm effect is stacked 3x. CD:20s"
            ,"Triggers Stun for 1.6s when Frozen Realm effect is stacked 3x. CD:20s"
            ,"Triggers Stun for 1.8s when Frozen Realm effect is stacked 3x. CD:20s"  
            ,"Triggers Stun for 2s when Frozen Realm effect is stacked 3x. CD:20s"
      ]
  }, center: null, right: {
      name: "Dragon Leech (PvP)",
      levels: 10,
      required: 6,
      stats: [
          "If you fail to kill the player after using Dragon Justice of Dragon Verdict, your HP will be restored by 25% of your Max HP"
      ]
  }}
  , { depth: 3, stat: "INT", points: 1150, spend: 18, left: null, center: {
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
  }, right: {
      name: "Thunder Pierce",
      levels: 5,
      required: 3,
      stats: [
          ,"Thunder Slash or Celestial Tempest will electrify target dealing 20% skill damage every 2s and grant a 50% chance to paralyze target for 0.5s over 6s"
          ,"Thunder Slash or Celestial Tempest will electrify target dealing 40% skill damage every 2s and grant a 50% chance to paralyze target for 0.5s over 6s"
          ,"Thunder Slash or Celestial Tempest will electrify target dealing 60% skill damage every 2s and grant a 50% chance to paralyze target for 0.5s over 6s"
          ,"Thunder Slash or Celestial Tempest will electrify target dealing 80% skill damage every 2s and grant a 50% chance to paralyze target for 0.5s over 6s"
          ,"Thunder Slash or Celestial Tempest will electrify target dealing 100% skill damage every 2s and grant a 50% chance to paralyze target for 0.5s over 6s"
      ]
  }}
  , { depth: 4, stat: "INT", points: 1400, spend: 30, left: {
      name: "Corrosion Realm (PvP)",
      levels: 5,
      required: 5,
      stats: [ // wrong
        "Dragon Domain will decrease target's damage dealt by 5% every time it hits the target. Its effect can be stacked up to 3x and lasts for 2s"
        ,"Dragon Domain will decrease target's damage dealt by 5% every time it hits the target. Its effect can be stacked up to 3x and lasts for 2s"
        ,"Dragon Domain will decrease target's damage dealt by 5% every time it hits the target. Its effect can be stacked up to 3x and lasts for 2s"
        ,"Dragon Domain will decrease target's damage dealt by 5% every time it hits the target. Its effect can be stacked up to 3x and lasts for 2s"  
        ,"Dragon Domain will decrease target's damage dealt by 5% every time it hits the target. Its effect can be stacked up to 3x and lasts for 2s"
      ]
  }, center: null, right: {
      name: "Constant Alert",
      levels: 5,
      required: 5,
      stats: [ // wrong
        "Increases duration time of Soul Morale, Morale Strike or Divine Blessing by 1s"
        ,"Increases duration time of Soul Morale, Morale Strike or Divine Blessing by 1s"
        ,"Increases duration time of Soul Morale, Morale Strike or Divine Blessing by 1s"
        ,"Increases duration time of Soul Morale, Morale Strike or Divine Blessing by 1s"
        ,"Increases duration time of Soul Morale, Morale Strike or Divine Blessing by 1s"
      ]
  }}
  , { depth: 5, stat: "INT", points: 1650, spend: 40, left: {
      name: "Absolute Realm (PvP)",
      levels: 1,
      required: 1,
      stats: [
          "When Dragon Domain hits the target, it has a 30% chance to decrease damage received by 60% and increase Crit Res by 100% over 5s. CD: 45s"
      ]
  }, center: null, right: {
      name: "Stratagem (PvP)",
      levels: 5,
      required: 5,
      stats: [ //wrong
        "Transforms into human and restores HP equal to 60% of Max HP after receiving deadly attack when in dragon form. CD:60s"
        ,"Transforms into human and restores HP equal to 60% of Max HP after receiving deadly attack when in dragon form. CD:60s"
        ,"Transforms into human and restores HP equal to 60% of Max HP after receiving deadly attack when in dragon form. CD:60s"
        ,"Transforms into human and restores HP equal to 60% of Max HP after receiving deadly attack when in dragon form. CD:60s"
        ,"Transforms into human and restores HP equal to 60% of Max HP after receiving deadly attack when in dragon form. CD:60s"
      ]
  }}
  , { depth: 6, stat: "INT", points: 1680, spend: 45, left: {
      name: "Scorching Spell (PvP)",
      levels: 10,
      required: 10,
      stats: [ //wrong
          "Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
          ,"Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
          ,"Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
          ,"Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
          ,"Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
          ,"Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
          ,"Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
          ,"Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
          ,"Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
          ,"Every time Dragon Domain hit the target, it grants a 20% chance to trigger one negative effect among Stun, Silent and Taunt for target for 2s"
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
      name: "Godly Will",
      levels: 10,
      required: 10,
      stats: [
          "Desperate Hope will decrease your damage received by 10% over 5s"
          ,"Desperate Hope will decrease your damage received by 10% over 5s"
          ,"Desperate Hope will decrease your damage received by 10% over 5s"
          ,"Desperate Hope will decrease your damage received by 10% over 5s"
          ,"Desperate Hope will decrease your damage received by 10% over 5s"
          ,"Desperate Hope will decrease your damage received by 10% over 5s"
          ,"Desperate Hope will decrease your damage received by 10% over 5s"
          ,"Desperate Hope will decrease your damage received by 10% over 5s"
          ,"Desperate Hope will decrease your damage received by 10% over 5s"
          ,"Desperate Hope will decrease your damage received by 40% over 5s"
      ]
  }}
  , { depth: 7, stat: "INT", points: 1720, spend: 60, left: {
      name: "Doom Tremor (PvP)",
      levels: 10,
      required: 0,
      stats: [ //wrong
        "Every time Dragon Domain hits the target, it will decrease target's HP by 3.3% and restore equivalent HP for you"
          ,"Every time Dragon Domain hits the target, it will decrease target's HP by 3.3% and restore equivalent HP for you"
          ,"Every time Dragon Domain hits the target, it will decrease target's HP by 4.2% and restore equivalent HP for you"
          ,"Every time Dragon Domain hits the target, it will decrease target's HP by 5.1% and restore equivalent HP for you"
          ,"Every time Dragon Domain hits the target, it will decrease target's HP by 6.0% and restore equivalent HP for you"
          ,"Every time Dragon Domain hits the target, it will decrease target's HP by 6.9% and restore equivalent HP for you"
          ,"Every time Dragon Domain hits the target, it will decrease target's HP by 3.3% and restore equivalent HP for you"
          ,"Every time Dragon Domain hits the target, it will decrease target's HP by 3.3% and restore equivalent HP for you"
          ,"Every time Dragon Domain hits the target, it will decrease target's HP by 3.3% and restore equivalent HP for you"
          ,"Every time Dragon Domain hits the target, it will decrease target's HP by 3.3% and restore equivalent HP for you"
      ]
  }, center: null, right: {
      name: "Bless Flash",
      levels: 10,
      required: 0,
      stats: [
          "Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 10% of the damage received to your HP. CD: 60s"
          ,"Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 20% of the damage received to your HP. CD: 60s"
          ,"Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 30% of the damage received to your HP. CD: 60s"
          ,"Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 40% of the damage received to your HP. CD: 60s"
          ,"Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 50% of the damage received to your HP. CD: 60s"
          ,"Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 60% of the damage received to your HP. CD: 60s"
          ,"Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 70% of the damage received to your HP. CD: 60s"
          ,"Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 80% of the damage received to your HP. CD: 60s"
          ,"Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 90% of the damage received to your HP. CD: 60s"
          ,"Enter Invincible state for 3s when receiving deadly damage: avoids any damage and converts 100% of the damage received to your HP. CD: 60s"
      ]
  }}
]