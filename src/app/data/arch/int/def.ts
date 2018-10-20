import { Skillrow } from '../../../skillrow';

export const DEF: Skillrow[] = [
    { depth: 1, stat: "INT", points: 550, spend: 0, left: {
        name: "Divine Guard",
        levels: 5,
        required: 3,
        stats: []
    }, center: {
        name: "Healing Power", 
        levels: 10,
        required: 0,
        stats: []
    }, right: {
        name: "Lightning Speed",
        levels: 5,
        required: 3,
        stats: []
    }},
    { depth: 2, stat: "INT", points: 850, spend: 11, left: {
        name: "Immortal Hero",
        levels: 5,
        required: 3,
        stats: []
    }, center: null, right: {
        name: "Area Healing",
        levels: 10,
        required: 6,
        stats: []
    }},
    { depth: 3, stat: "INT", points: 1150, spend: 20, left: {
        name: "Guardian Aura",
        levels: 10,
        required: 6,
        stats: []
    }, center: {
        name: "Wing Mastery",
        levels: 20,
        required: 0,
        stats: []
    }, right: null},
    { depth: 4, stat: "INT", points: 1400, spend: 30, left: {
        name: "Rage Aura",
        levels: 5,
        required: 5,
        stats: []
    }, center: null, right: {
        name: "Wind Purify",
        levels: 1,
        required: 1,
        stats: []
    }},
    { depth: 5, stat: "INT", points: 1650, spend: 40, left: {
        name: "Resurrection",
        levels: 5,
        required: 5,
        stats: []
    }, center: null, right: {
        name: "Gale Fury",
        levels: 10,
        required: 10,
        stats: []
    }},
    { depth: 6, stat: "INT", points: 1680, spend: 45, left: {
        name: "Invincibility",
        levels: 10,
        required: 10,
        stats: []
    }, center: {
        name: "Wing Mastery",
        levels: 20,
        required: 0,
        stats: []
    }, right: {
        name: "Force of Nature",
        levels: 10,
        required: 10,
        stats: []
    }},
    { depth: 7, stat: "INT", points: 1720, spend: 60, left: {
        name: "Eternal Bless",
        levels: 10,
        required: 0,
        stats: []

    }, center: null, right: {
        name: "Inviolability",
        levels: 10, 
        required: 0,
        stats: []
    }}
];