import { Skillrow } from '../../../skillrow';

export const General: Skillrow[] =
    [
        {
            depth: 1, stat: "INT", points: 1330, spend: 6, left: {
                name: "Frost Armor",
                levels: 15,
                required: 10,
                stats: []
            }, center: null, right: {
                name: "Arcane Shelter",
                levels: 10,
                required: 6,
                stats: []
            }
        },
        {
            depth: 2, stat: "INT", points: 1630, spend: 11, left: {
                name: "Frost Staff",
                levels: 15,
                required: 10,
                stats: []
            }, center: {
                name: "Cryptic Shield",
                levels: 10,
                required: 0,
                stats: []
            }, right: {
                name: "Arcane Blade",
                levels: 10,
                required: 6,
                stats: []
            }
        },
        {
            depth: 3, stat: "INT", points: 1930, spend: 18,
            left: {
                name: "Fury",
                levels: 10,
                required: 6,
                stats: []
            },
            center: null, right: {
                name: "Life Boost",
                levels: 10,
                required: 6,
                stats: []
            }
        },
        {
            depth: 4, stat: "INT", points: 2180, spend: 30, left: {
                name: "Whirlwind Dance",
                levels: 10,
                required: 10,
                stats: []
            }, center: null, right: {
                name: "Elemental Aptitude",
                levels: 10,
                required: 10,
                stats: []
            }
        },
        {
            depth: 5, stat: "INT", points: 2430, spend: 40, left: {
                name: "Frostbite",
                levels: 10,
                required: 10,
                stats: []
            }, center: null, right: {
                name: "Heavenly Might",
                levels: 10,
                required: 10,
                stats: []

            }
        },
        {
            depth: 6, stat: "INT", points: 2460, spend: 45, left: {
                name: "Arcane Oracle",
                levels: 10,
                required: 10,
                stats: []

            }, center: null, right: {
                name: "Celestial Shelter",
                levels: 10,
                required: 10,
                stats: []
            }
        },
        {
            depth: 7, stat: "INT", points: 2500, spend: 60, left: {
                name: "Arcane Pray",
                levels: 10,
                required: 0,
                stats: []
            }, center: null, right: {
                name: "Bloodrage",
                levels: 10,
                required: 0,
                stats: []
            }
        }
    ];