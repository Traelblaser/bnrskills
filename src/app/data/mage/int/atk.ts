import { Skillrow } from '../../../skillrow';

export const ATK: Skillrow[] = 
[
{depth: 1, stat:"INT", points: 1330, spend: 0, left: {
    name: "Ice Element",
    levels: 10,
    required: 6,
    stats: [
        "Summons a stronger Ice Element that possesses 5% of your ATK"
        ,"Summons a stronger Ice Element that possesses 10% of your ATK"
        ,"Summons a stronger Ice Element that possesses15% of your ATK"
        ,"Summons a stronger Ice Element that possesses 20% of your ATK"
        ,"Summons a stronger Ice Element that possesses 25% of your ATK"
        ,"Summons a stronger Ice Element that possesses 30% of your ATK"
        ,"Summons a stronger Ice Element that possesses 35% of your ATK"
        ,"Summons a stronger Ice Element that possesses 40% of your ATK"
        ,"Summons a stronger Ice Element that possesses 45% of your ATK"
        ,"Summons a stronger Ice Element that possesses 50% of your ATK"
    ]
}, center: {
    name: "Blizzard", 
    levels: 15,
    required: 0,
    stats: [
        "Each attack grants a 10% chance to cast Blizzard, deal 60% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 70% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 80% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 90% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 100% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 110% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 120% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 130% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 140% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 150% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 160% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 170% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 180% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 190% skill dmg and reduce targets MSPD by 20% for 1s."
        ,"Each attack grants a 10% chance to cast Blizzard, deal 200% skill dmg and reduce targets MSPD by 20% for 1s."
    ]
}, right: {
    name: "Ice Blast",
    levels: 10,
    required: 6,
    stats: []
} },
{depth: 2, stat:"INT", points: 1630, spend: 11, left: {
    name: "Frost Blast (PvP)",
    levels: 5,
    required: 3,
    stats: []
}, center: null, right: {
    name: "MP Absorb(PvP)",
    levels: 5,
    required: 6,
    stats: []
}},
{depth: 3, stat:"INT", points: 1930, spend: 18, left: null, center: {
    name: "Ice Piton",
    levels: 15,
    required: 0,
    stats: []
}, right: null},
{depth: 4, stat:"INT", points: 2180, spend: 30, left: {
    name: "Elemental Absorption",
    levels: 10,
    required: 6,
    stats: []
}, center: null, right: {
    name: "Deadly Freeze",
    levels: 5,
    required: 3,
    stats: []
}},
{depth: 5, stat:"INT", points: 2430, spend: 40, left: {
    name: "Magic Devour (PvP)",
    levels: 1,
    required: 1,
    stats: []
}, center: null, right: {
    name: "Magic Rift (PvP)",
    levels: 1,
    required: 1,
    stats: []
}},
{depth: 6, stat:"INT", points: 2460, spend: 45, left: {
    name: "Ice Block",
    levels: 10,
    required: 10,
    stats: []
}, center: {
    name: "Wing Master",
    levels: 20,
    required: 0,
    stats: []
}, right: {
    name: "Mana Flame (PvP)",
    levels: 10,
    required: 10,
    stats: []
}},
{depth: 7, stat:"INT", points: 2500, spend: 60, left: {
    name: "Arcane Burst",
    levels: 10,
    required: 0,
    stats: []
}, center: null, right: {
    name: "Arcane Essence",
    levels: 10,
    required: 0,
    stats: []
}}
]