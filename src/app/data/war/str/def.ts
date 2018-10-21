import { Skillrow } from "src/app/skillrow";

export const DEF : Skillrow[] = [

    { depth: 1, stat: "STR", points: 1330, spend: 0, left: {
        name: "HP Absorb",
        levels: 10,
        required: 6,
        stats: []
    }, center: {
        name: "Weapon Break",
        levels: 5,
        required: 0,
        stats: []
    }, right: {
        name: "Aura Blessing",
        levels: 15,
        required: 9,
        stats: []
    }},
    { depth: 2, stat: "STR", points: 1630, spend: 11, left: {
        name: "Volition (PvP)",
        levels: 10,
        required: 6,
        stats: []
    }, right: {
        name: "Oracle Enchant",
        levels: 10,
        required: 6,
        stats: []
    }},
    { depth: 3, stat: "STR", points: 1930, spend: 18, center: {
        name: "Wing Mastery",
        levels: 20,
        required: 0,
        stats: []
    }},
    { depth: 4, stat: "STR", points: 2180, spend: 30, left: {
        name: "Flame Keeper",
        levels: 10,
        required: 10,
        stats: []
    }, right: {
        name: "Elf Divinity",
        levels: 5,
        required: 5,
        stats: []
    }},
    { depth: 5, stat: "STR", points: 2430, spend: 40, left: {
        name: "Death Slash",
        levels: 1,
        required: 1,
        stats: []
    }, right: {
        name: "Will to Live",
        levels: 1,
        required: 1,
        stats: []
    }},
    { depth: 6, stat: "STR", points: 2460, spend: 45, left: {
        name: "Bloody Morale (PvP)",
        levels: 10,
        required: 10,
        stats: []
    }, center: {
        name: "Wing Mastery",
        levels: 20,
        required: 0,
        stats: []
    }, right: {
        name: "Combat Mastery (PvP)",
        levels: 10,
        required: 10,
        stats: []
    }},
    { depth: 7, stat: "STR", points: 2500, spend: 60, left: {
        name: "Courage",
        levels: 10,
        required: 0,
        stats: []
    }, right: {
        name: "Multiple Spell",
        levels: 10,
        required: 0,
        stats: []
    }}

];