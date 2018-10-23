import { Skillrow } from '../../../skillrow';

export const ATK: Skillrow[] = [
    { depth: 1, stat: "INT", points: 550, spend: 0, left: {
        name: "Bloodthirsty",
        levels: 3,
        required: 2,
        stats: [
            "Increases attacking attempts of Bloodlust by 3 times and converts 60% damage received into HP for 6s"
        ]
    }, center: {
        name: "Heavenly Bless", 
        levels: 15,
        required: 0,
        stats: []
    }, right: {
        name: "Storm Giant",
        levels: 1,
        required: 1,
        stats: [
            "Divine Force turns you into a Storm Giant and grants Whirlwind Attack, Whirlwind Smite, and Star Summon"
        ]
    }},
    { depth: 2, stat: "INT", points: 850, spend: 11, left: {
        name: "Bloody Curse (PvP)",
        levels: 10,
        required: 6,
        stats: []
    }, center: null, right: {
        name: "Life Connection",
        levels: 5,
        required: 3,
        stats: []
    }},
    { depth: 3, stat: "INT", points: 1150, spend: 18, left: null, center: {
        name: "Healing Light",
        levels: 15,
        required: 0,
        stats: []
    }, right: {
        name: "Whirlwind Attack",
        levels: 10,
        required: 6,
        stats: []
    }},
    { depth: 4, stat: "INT", points: 1400, spend: 30, left: {
        name: "Ares Carol",
        levels: 10,
        required: 10,
        stats: []
    }, center: null, right: {
        name: "Demon Curse",
        levels: 5,
        required: 5,
        stats: []
    }},
    { depth: 5, stat: "INT", points: 1650, spend: 40, left: {
        name: "Holy Protection",
        levels: 5,
        required: 5,
        stats: []
    }, center: null, right: {
        name: "Power Corrosion (PvP)",
        levels: 1,
        required: 1,
        stats: [
            "Life Connection will convert 40% of target's ATK and DEF to you and reduce target's MSPD by 30%"
        ]
    }},
    { depth: 6, stat: "INT", points: 1680, spend: 45, left: {
        name: "Godly Piety",
        levels: 10,
        required: 10,
        stats: []
    }, center: {
        name: "Wing Master",
        levels: 20,
        required: 0,
        stats: []
    }, right: {
        name: "Heavenly Faith",
        levels: 10,
        required: 10,
        stats: []
    }},
    { depth: 7, stat: "INT", points: 1720, spend: 60, left: {
        name: "Celestial Majesty",
        levels: 10,
        required: 0,
        stats: []
    }, center: null, right: {
        name: "Holy Nova",
        levels: 10,
        required: 0,
        stats: []
    }}
];