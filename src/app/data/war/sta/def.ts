import { Skillrow } from "src/app/skillrow";

export const DEF: Skillrow[] = [
    {
        depth: 1, stat: "STA", points: 600, spend: 0,
        left: {
            name: "Divine Guard",
            levels: 10,
            required: 6,
            stats: []
        },
        center: {
            name: "Healing Power",
            levels: 5,
            required: 0,
            stats: []
        },
        right: {
            name: "Defense Mastery",
            levels: 10,
            required: 6,
            stats: []
        }
    },
    {
        depth: 2, stat: "STA", points: 900, spend: 11,
        left: {
            name: "Suppression (PvP)",
            levels: 5,
            required: 3,
            stats: []
        },
        right: {
            name: "Thorn Armor",
            levels: 10,
            required: 6,
            stats: []
        }
    },
    {
        depth: 3, stat: "STA", points: 1200, spend: 18,
        left: {
            name: "Rampant(PvP)",
            levels: 5,
            required: 3,
            stats: []
        },
        center: {
            name: "Wing Mastery",
            levels: 20,
            required: 0,
            stats: []
        }
    },
    {
        depth: 4, stat: "STA", points: 1450, spend: 30,
        left: {
            name: "God Blessing",
            levels: 5,
            required: 5,
            stats: []
        },
        right: {
            name: "Divine Shelter",
            levels: 10,
            required: 10,
            stats: []
        }
    },
    {
        depth: 5, stat: "STA", points: 1700, spend: 40,
        left: {
            name: "Flare Reborn(PvP)",
            levels: 5,
            required: 5,
            stats: []
        },
        right: {
            name: "Ancestral Healing",
            levels: 1,
            required: 1,
            stats: []
        }
    },
    {
        depth: 6, stat: "STA", points: 1730, spend: 45,
        left: {
            name: "Faith Embrace",
            levels: 10,
            required: 10,
            stats: []
        },
        center: {
            name: "Wing Mastery",
            levels: 20,
            required: 0,
            stats: []
        },
        right: {
            name: "Revenge Deed",
            levels: 10,
            required: 10,
            stats: []

        }
    },
    {
        depth: 7, stat: "STA", points: 1770, spend: 60,
        left: {
            name: "Immobility",
            levels: 10,
            required: 0,
            stats: []
        },
        right: {
            name: "Godly Sanction",
            levels: 10,
            required: 0,
            stats: []
        }
    }
];
