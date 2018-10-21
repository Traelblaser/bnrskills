import { Skillrow } from '../../../skillrow';

export const ATK: Skillrow[] = 
[
{ depth: 1, stat: "DEX", points: 1330, spend: 0, left: {
    name: "Dark Thunder",
    levels: 10,
    required: 0,
    stats: []
}, center: {
    name: "Celestial Blessing",
    levels: 15,
    required: 10,
    stats: []
}, right: {
    name: "Arcane Giant",
    levels: 1,
    required: 1,
    stats: []
}},
{ depth: 2, stat: "DEX", points: 1630, spend: 11, left: {
    name: "Mirage Mastery",
    levels: 10,
    required: 6,
    stats: []
}, center: null, right: {
    name: "Void Erosion",
    levels: 10,
    required: 6,
    stats: []
}},
{ depth: 3, stat: "DEX", points: 1930, spend: 18, left: null, center: {
    name: "Incise Lightning",
    levels: 10,
    required: 0,
    stats: []
}, right: {
    name: "Mirage Power",
    levels: 5,
    required: 3,
    stats: []
}},
{ depth: 4, stat: "DEX", points: 2180, spend: 30, left: {
    name: "Real Phantom",
    levels: 5,
    required: 5,
    stats: []
}, center: null, right: {
name: "Arcane Judgment",
levels: 10,
required: 10,
stats: []
}},

{ depth: 5, stat: "DEX", points: 2430, spend: 40, left: {
    name: "Mirror Image",
    levels: 1,
    required: 1,
    stats: []
}, center: null, right: {
name: "Thunder Smash",
levels: 5,
required: 5,
stats: []
}},

{ depth: 6, stat: "DEX", points: 2460, spend: 45, left: {
    name: "Mirage Master",
    levels: 10,
    required: 10,
    stats: []
}, center: {
name: "Wing Master",
levels: 20,
required: 0,
stats: []
}, right: {
name: "Arcane Thirst",
levels: 10,
required: 10,
stats: []
}},
{ depth: 7, stat: "DEX", points: 2500, spend: 60, left: {

name: "Oblivion Might (PvP)",
levels: 10,
required: 0,
stats: []
}, center: null, right: {
name: "Justice Guardian",
levels: 10,
required: 0,
stats: []
}}
];