import { Skillrow } from "src/app/skillrow";

export const General: Skillrow[] = [
    {
        depth: 1, stat: "STR", points: 1330, spend: 6,
        left: {
            name: "Flare Armor",
            levels: 15,
            required: 10,
            stats: []
        },
        right: {
            name: "Greater Stamina",
            levels: 10,
            required: 6,
            stats: []
        }
    },
    {
        depth: 2, stat: "STR", points: 1630, spend: 11,
        left: {
            name: "Magma Sword",
            levels: 15,
            required: 10,
            stats: []
        },
        center: {
            name: "DEF Enhance",
            levels: 10,
            required: 0,
            stats: []
        },
        right: {

            name: "Enhanced Power",
            levels: 10,
            required: 6,
            stats: []
        }
    },
    {
        depth: 3, stat: "STR", points: 1930, spend: 18,
        left: {
            name: "Speedy Slash",
            levels: 10,
            required: 6,
            stats: []
        },
        right: {
            name: "Life Boost",
            levels: 10,
            required: 6,
            stats: []
        }
    },
    {
        depth: 4, stat: "STR", points: 2180, spend: 30,
        left: {
            name: "Charge Attack",
            levels: 10,
            required: 10,
            stats: []
        },
        right: {
            name: "Elemental Aptitude",
            levels: 10,
            required: 10,
            stats: []
        }
    },
    {
        depth: 5, stat: "STR", points: 2430, spend: 40,
        left: {
            name: "Flaming Power",
            levels: 10,
            required: 10,
            stats: []
        },
        right: {
            name: "Burning Wrath",
            levels: 10,
            required: 10,
            stats: []
        }
    },
    {
        depth: 6, stat: "STR", points: 2460, spend: 45,
        left: {
            name: "Arcane Oracle",
            levels: 10,
            required: 10,
            stats: []
        },
        right: {
            name: "Celestial Shelter",
            levels: 10,
            required: 10,
            stats: []
        }
    },
    {
        depth: 7, stat: "STR", points: 2500, spend: 60,
        left: {
            name: "Arcane Pray",
            levels: 10,
            required: 0,
            stats: []
        },
        right: {
            name: "Bloodrage",
            levels: 10,
            required: 0,
            stats: []
        }
    }
];
/*
Flare Armor
Greater Stamina
Magma Sword
DEF Enhance
Enhanced Power
Speedy Slash
Life Boost
Charge Attack
Elemental Aptitude
Flaming Power
Burning Wrath
Arcane Oracle
Celestial Shelter
Arcane Pray
Bloodrage
*/