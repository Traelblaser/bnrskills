import { Skillrow } from '../../../skillrow';

export const DEF: Skillrow[] =
[
{ depth: 1, stat: "DEX", points: 1330, spend: 6, left: {
    name: "Divine Guard",
    levels: 5,
    required: 3,
    stats: []
}, center: {
    name: "Healing Blaze",
    levels: 10,
    required: 0,
    stats: []
}, right: {
    name: "Mirage DEF",
    levels: 10,
    required: 6,
    stats: []
}},    
{ depth: 2, stat: "DEX", points: 1630, spend: 11, left: {
    name: "Static",
    levels: 10,
    required: 6,
    stats: []
}, center: null, right: {
name: "Life Tap",
levels: 5,
required: 3,
stats: []
}},
{ depth: 3, stat: "DEX", points: 1930, spend: 18, left: {
name: "God Blessing",
levels: 5,
required: 1,
stats: []
}, center: {
name: "Wing Mastery",
levels: 20,
required: 0,
stats: []
}, right: {
name: "MP Regain",
levels: 5,
required: 3,
stats: []
}},
{ depth: 4, stat: "DEX", points: 2180, spend: 30, left: {
    name: "Celestial Shield",
    levels: 5,
    required: 1,
    stats: []
}, center: null, right: {
    name: "Soul Guard",
    levels: 10,
    required: 10,
    stats: []
}},    
{ depth: 5, stat: "DEX", points: 2430, spend: 40, left: {
    name: "Titan's Soul",
    levels: 1,
    required: 1,
    stats: []
}, center: null, right: {
    name: "Icy Shield",
    levels: 1,
    required: 1,
    stats: []
}},
{ depth: 6, stat: "DEX", points: 2460, spend: 45, left: {
    name: "Purify Flame (PvP)",
    levels: 10,
    required: 10,
    stats: []
}, center: {
    name: "Wing Mastery",
    levels: 20,
    required: 0,
    stats: []
}, right: {
    name: "Justice Light (PvP)",
    levels: 10,
    required: 10,
    stats: []
}} ,   
    { depth: 7, stat: "DEX", points: 2500, spend: 60, left: {
name: "Star Guard",
levels: 10,
required: 0,
stats: []
    }, center: null, right: {
name: "Ethereal Promise (PvP)",
levels: 10,
required: 0,
stats: []
    }}
];