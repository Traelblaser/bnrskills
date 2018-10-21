import { Skillrow } from "src/app/skillrow";

export const ATK : Skillrow[] = [

{ depth: 1, stat: "STR", points: 1330, spend: 0, left: {
    name: "Battlerager",
    levels: 10,
    required: 6,
    stats: []
}, center: {
    name: "Berserker Charge",
    levels: 5,
    required: 0,
    stats: []
}, right: {
    name: "Deadly Wound",
    levels: 15,
    required: 9,
    stats: []
}},
{ depth: 2, stat: "STR", points: 1630, spend: 11, left: {
    name: "Flame Element",
    levels: 10,
    required: 6,
    stats: []

}, center: null,
right: {
    name: "Assassinate (PvP)",
    levels: 5,
    required: 3,
    stats: []
}},
{ depth: 3, stat: "STR", points: 1930, spend: 18, center: {
    name: "Divine Flame",
    levels: 15,
    required: 0,
    stats: []
}},
{ depth: 4, stat: "STR", points: 2180, spend: 30, left: {
    name: "Flaming Splash",
    levels: 10,
    required: 10,
    stats: []
}, right: {
    name: "Flaming Assault",
    levels: 10,
    required: 10,
    stats: []
}},
{ depth: 5, stat: "STR", points: 2430, spend: 40, left: {
    name: "Ancestral Spirit (PvP)",
    levels: 1,
    required: 1,
    stats: []
}, right: {
    name: "Max Potential(PvP)",
    levels: 1,
    required: 1,
    stats: []
}},
{ depth: 6, stat: "STR", points: 2460, spend: 45, left: {
    name: "Lifespring",
    levels: 10,
    required: 10,
    stats: []
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
    name: "Spirit Morale (PvP)",
    levels: 10,
    required: 10,
    stats: []
}},
{ depth: 7, stat: "STR", points: 2500, spend: 60, left: {
    name: "Inferno Flame",
    levels: 10,
    required: 0,
    stats: []
}, right: {
    name: "Slaughter Desire (PvP)",
    levels: 10,
    required: 0,
    stats: []
}}
];