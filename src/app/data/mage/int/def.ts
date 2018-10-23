import { Skillrow } from '../../../skillrow';

export const DEF: Skillrow[] =
    [
        {
            depth: 1, stat: "INT", points: 1330, spend: 0, left: {
                name: "Frost Constraint",
                levels: 10,
                required: 6,
                stats: [
                    "Using Frozen Seal will decrease enemy's ATK by 3% over 5s"
                    , "Using Frozen Seal will decrease enemy's ATK by 6% over 5s"
                    , "Using Frozen Seal will decrease enemy's ATK by 9% over 5s"
                    , "Using Frozen Seal will decrease enemy's ATK by 12% over 5s"
                    , "Using Frozen Seal will decrease enemy's ATK by 15% over 5s"
                    , "Using Frozen Seal will decrease enemy's ATK by 18% over 5s"
                    , "Using Frozen Seal will decrease enemy's ATK by 21% over 5s"
                    , "Using Frozen Seal will decrease enemy's ATK by 24% over 5s"
                    , "Using Frozen Seal will decrease enemy's ATK by 27% over 5s"
                    , "Using Frozen Seal will decrease enemy's ATK by 30% over 5s"
                ]
            }, center: {
                name: "Defense Mastery",
                levels: 10,
                required: 0,
                stats: [
                    "Decreases CD of Elemental Cover by 2s"
                    , "Decreases CD of Elemental Cover by 4s"
                    , "Decreases CD of Elemental Cover by 6s"
                    , "Decreases CD of Elemental Cover by 8s"
                    , "Decreases CD of Elemental Cover by 10s"
                    , "Decreases CD of Elemental Cover by 12s"
                    , "Decreases CD of Elemental Cover by 14s"
                    , "Decreases CD of Elemental Cover by 16s"
                    , "Decreases CD of Elemental Cover by 18s"
                    , "Decreases CD of Elemental Cover by 20s"
                ]
            }, right: {
                name: "HP Absorb",
                levels: 10,
                required: 6,
                stats: [
                    "Every time Ring of Blessing attacks, it can restore 20% more HP."
                    , "Every time Ring of Blessing attacks, it can restore 40% more HP."
                    , "Every time Ring of Blessing attacks, it can restore 60% more HP."
                    , "Every time Ring of Blessing attacks, it can restore 80% more HP."
                    , "Every time Ring of Blessing attacks, it can restore 100% more HP."
                    , "Every time Ring of Blessing attacks, it can restore 120% more HP."
                    , "Every time Ring of Blessing attacks, it can restore 140% more HP."
                    , "Every time Ring of Blessing attacks, it can restore 160% more HP."
                    , "Every time Ring of Blessing attacks, it can restore 180% more HP."
                    , "Every time Ring of Blessing attacks, it can restore 200% more HP."
                ]
            }
        },
        {
            depth: 2, stat: "INT", points: 1630, spend: 11, left: {
                name: "Elemental Guard",
                levels: 10,
                required: 6,
                stats: [
                    "When Ring of Element summons an element, your Max HP will be increased by 3%"
                    , "When Ring of Element summons an element, your Max HP will be increased by 6%"
                    , "When Ring of Element summons an element, your Max HP will be increased by 9%"
                    , "When Ring of Element summons an element, your Max HP will be increased by 12%"
                    , "When Ring of Element summons an element, your Max HP will be increased by 15%"
                    , "When Ring of Element summons an element, your Max HP will be increased by 18%"
                    , "When Ring of Element summons an element, your Max HP will be increased by 21%"
                    , "When Ring of Element summons an element, your Max HP will be increased by 24%"
                    , "When Ring of Element summons an element, your Max HP will be increased by 27%"
                    , "When Ring of Element summons an element, your Max HP will be increased by 30%"
                ]
            }, center: null, right: {
                name: "Active Arcane",
                levels: 10,
                required: 6,
                stats: [
                    "When your HP is less than 20%, your received damage will be decreased by 6% over 5s."
                    , "When your HP is less than 20%, your received damage will be decreased by 8% over 5s."
                    , "When your HP is less than 20%, your received damage will be decreased by 10% over 5s."
                    , "When your HP is less than 20%, your received damage will be decreased by 12% over 5s."
                    , "When your HP is less than 20%, your received damage will be decreased by 14% over 5s."
                    , "When your HP is less than 20%, your received damage will be decreased by 16% over 5s."
                    , "When your HP is less than 20%, your received damage will be decreased by 18% over 5s."
                    , "When your HP is less than 20%, your received damage will be decreased by 20% over 5s."
                    , "When your HP is less than 20%, your received damage will be decreased by 22% over 5s."
                    , "When your HP is less than 20%, your received damage will be decreased by 24% over 5s."
                ]
            }
        },
        {
            depth: 3, stat: "INT", points: 1930, spend: 18, left: null, center: {
                name: "Wing Mastery",
                levels: 20,
                required: 0,
                stats: [
                    "Equip Lv 3+ wings to increase Max HP by 1.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 3%"
                    , "Equip Lv 3+ wings to increase Max HP by 4.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 6%"
                    , "Equip Lv 3+ wings to increase Max HP by 7.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 9%"
                    , "Equip Lv 3+ wings to increase Max HP by 10.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 12%"
                    , "Equip Lv 3+ wings to increase Max HP by 13.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 15%"
                    , "Equip Lv 3+ wings to increase Max HP by 16.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 18%"
                    , "Equip Lv 3+ wings to increase Max HP by 19.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 21%"
                    , "Equip Lv 3+ wings to increase Max HP by 22.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 24%"
                    , "Equip Lv 3+ wings to increase Max HP by 25.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 27%"
                    , "Equip Lv 3+ wings to increase Max HP by 28.5%"
                    , "Equip Lv 3+ wings to increase Max HP by 30%"
                ]
            }, right: null
        },
        {
            depth: 4, stat: "INT", points: 2180, spend: 30, left: {
                name: "Volition",
                levels: 10,
                required: 10,
                stats: [
                    "Increases Ring of Fortitude HP Regen effect by 3%."
                    , "Increases Ring of Fortitude HP Regen effect by 6%."
                    , "Increases Ring of Fortitude HP Regen effect by 9%."
                    , "Increases Ring of Fortitude HP Regen effect by 12%."
                    , "Increases Ring of Fortitude HP Regen effect by 15%."
                    , "Increases Ring of Fortitude HP Regen effect by 18%."
                    , "Increases Ring of Fortitude HP Regen effect by 21%."
                    , "Increases Ring of Fortitude HP Regen effect by 24%."
                    , "Increases Ring of Fortitude HP Regen effect by 27%."
                    , "Increases Ring of Fortitude HP Regen effect by 30%."
                ]
            }, center: null, right: {
                name: "Divine Miracle",
                levels: 5,
                required: 5,
                stats: [
                    "Decreases the CD of Ring of Divinity to dispel debuffs by 5s."
                    , "Decreases the CD of Ring of Divinity to dispel debuffs by 10s."
                    , "Decreases the CD of Ring of Divinity to dispel debuffs by 15s."
                    , "Decreases the CD of Ring of Divinity to dispel debuffs by 20s."
                    , "Decreases the CD of Ring of Divinity to dispel debuffs by 25s."
                ]
            }
        },
        {
            depth: 5, stat: "INT", points: 2430, spend: 40, left: {
                name: "Zero Zone",
                levels: 1,
                required: 1,
                stats: [
                    "Every attack grants a 10% chance to clear CD of Ice Prison."
                ]
            }, center: null, right: {
                name: "Frost Shield (PvP)",
                levels: 1,
                required: 1,
                stats: [
                    "Under Elemental Shield, when being attacked, you will have a 5% chance to freeze enemy for 1.2s"
                ]
            }
        },
        {
            depth: 6, stat: "INT", points: 2460, spend: 45, left: {
                name: "Ancient Seal (PvP)",
                levels: 10,
                required: 10,
                stats: [
                    "Using Frozen Seal will lower target's healing effect by 10% over 5s."
                    , "Using Frozen Seal will lower target's healing effect by 20% over 5s."
                    , "Using Frozen Seal will lower target's healing effect by 30% over 5s."
                    , "Using Frozen Seal will lower target's healing effect by 40% over 5s."
                    , "Using Frozen Seal will lower target's healing effect by 50% over 5s."
                    , "Using Frozen Seal will lower target's healing effect by 60% over 5s."
                    , "Using Frozen Seal will lower target's healing effect by 70% over 5s."
                    , "Using Frozen Seal will lower target's healing effect by 80% over 5s."
                    , "Using Frozen Seal will lower target's healing effect by 90% over 5s."
                    , "Using Frozen Seal will lower target's healing effect by 100% over 5s."
                ]
            }, center: {
                name: "Wing Mastery",
                levels: 20,
                required: 0,
                stats: [
                    "Equip Lv 4+ wings to increase Max HP by 1.5%"
                    , "Equip Lv 4+ wings to increase Max HP by 3%"
                    , "Equip Lv 4+ wings to increase Max HP by 4.5%"
                    , "Equip Lv 4+ wings to increase Max HP by 6%"
                    , "Equip Lv 4+ wings to increase Max HP by 7.5%"
                    , "Equip Lv 4+wings to increase Max HP by 9%"
                    , "Equip Lv 4+ wings to increase Max HP by 10.5%"
                    , "Equip Lv 4+ wings to increase Max HP by 12%"
                    , "Equip Lv 4+ wings to increase Max HP by 13.5%"
                    , "Equip Lv 4+ wings to increase Max HP by 15%"
                    , "Equip Lv 4+ wings to increase Max HP by 16.5%"
                    , "Equip Lv 4+ wings to increase Max HP by 18%"
                    , "Equip Lv 4+ wings to increase Max HP by 19.5%"
                    , "Equip Lv 4+ wings to increase Max HP by 21%"
                    , "Equip Lv 4+ wings to increase Max HP by 22.5%"
                    , "Equip Lv 4+ wings to increase Max HP by 24%"
                    , "Equip Lv 4+ wings to increase Max HP by 25.5%"
                    , "Equip Lv 4+ wings to increase Max HP by 27%"
                    , "Equip Lv 4+ wings to increase Max HP by 28.5%"
                    , "Equip Lv 4+ wings to increase Max HP by 30%"
                ]
            }, right: {
                name: "Soul Shield",
                levels: 10,
                required: 1,
                stats: [
                    "Elemental Shield grants a 40% chance to resist Silent and Taunt."
                    , "Elemental Shield grants a 45% chance to resist Silent and Taunt."
                    , "Elemental Shield grants a 50% chance to resist Silent and Taunt."
                    , "Elemental Shield grants a 55% chance to resist Silent and Taunt."
                    , "Elemental Shield grants a 60% chance to resist Silent and Taunt."
                    , "Elemental Shield grants a 65% chance to resist Silent and Taunt."
                    , "Elemental Shield grants a 70% chance to resist Silent and Taunt."
                    , "Elemental Shield grants a 75% chance to resist Silent and Taunt."
                    , "Elemental Shield grants a 80% chance to resist Silent and Taunt."
                    , "Elemental Shield grants a 85% chance to resist Silent and Taunt."
                ]
            }
        },
        {
            depth: 7, stat: "INT", points: 2500, spend: 60, left: {
                name: "Snow Blessing (PvP)", levels: 10, required: 0, stats: [
                    "When Frozen Seal hits the target, it will steal HP equal to 4% target's Max HP."
                    , "When Frozen Seal hits the target, it will steal HP equal to 6% target's Max HP."
                    , "When Frozen Seal hits the target, it will steal HP equal to 8% target's Max HP."
                    , "When Frozen Seal hits the target, it will steal HP equal to 10% target's Max HP."
                    , "When Frozen Seal hits the target, it will steal HP equal to 12% target's Max HP."
                    , "When Frozen Seal hits the target, it will steal HP equal to 14% target's Max HP."
                    , "When Frozen Seal hits the target, it will steal HP equal to 16% target's Max HP."
                    , "When Frozen Seal hits the target, it will steal HP equal to 18% target's Max HP."
                    , "When Frozen Seal hits the target, it will steal HP equal to 20% target's Max HP."
                    , "When Frozen Seal hits the target, it will steal HP equal to 22% target's Max HP."
                ]
            }, center: null, right: {
                name: "Justice Shield (PvP)", levels: 10, required: 0, stats: [
                    "Elemental Shield will absorb 14% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                    , "Elemental Shield will absorb 18% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                    , "Elemental Shield will absorb 22% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                    , "Elemental Shield will absorb 26% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                    , "Elemental Shield will absorb 30% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                    , "Elemental Shield will absorb 34% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                    , "Elemental Shield will absorb 38% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                    , "Elemental Shield will absorb 42% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                    , "Elemental Shield will absorb 46% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                    , "Elemental Shield will absorb 50% damage received with the cost of MP. Every 1% damage to HP will cost 1% MP. It becomes invalid when MP is lower than 20%."
                ]
            }
        }
    ]