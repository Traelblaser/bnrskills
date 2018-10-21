import { Skillrow } from '../../../skillrow';

export const DEF: Skillrow[] = 
[
    { depth: 1, stat: "INT", points: 1330, spend: 0, left: {
        name: "Frost Constraint",
        levels: 10, 
        required: 6, 
        stats: []
    }, center: {
        name: "Defense Mastery",
        levels: 10,
        required: 0,
        stats: []
    }, right: {
        name: "HP Absorb",
        levels: 10,
        required: 6,
        stats: [
            "Every time Ring of Blessing attacks, it can restore 20% more HP."
            ,"Every time Ring of Blessing attacks, it can restore 40% more HP."
            ,"Every time Ring of Blessing attacks, it can restore 60% more HP."
            ,"Every time Ring of Blessing attacks, it can restore 80% more HP."
            ,"Every time Ring of Blessing attacks, it can restore 100% more HP."
            ,"Every time Ring of Blessing attacks, it can restore 120% more HP."
            ,"Every time Ring of Blessing attacks, it can restore 140% more HP."
            ,"Every time Ring of Blessing attacks, it can restore 160% more HP."
            ,"Every time Ring of Blessing attacks, it can restore 180% more HP."
            ,"Every time Ring of Blessing attacks, it can restore 200% more HP."
        ]
    }},
    { depth: 2, stat: "INT", points: 1630, spend: 11, left: {
        name: "Elemental Guard",
        levels: 10,
        required: 6,
        stats: []
    }, center: null, right: {
        name: "Active Arcane",
        levels: 10,
        required: 6,
        stats: []
    }},
    { depth: 3, stat: "INT", points: 1930, spend: 18, left: null, center: {
        name: "Wing Mastery",
        levels: 20,
        required: 0,
        stats: [
            "Equip Lv 3+ wings to increase Max HP by 1.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 3%"
            ,"Equip Lv 3+ wings to increase Max HP by 4.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 6%"
            ,"Equip Lv 3+ wings to increase Max HP by 7.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 9%"
            ,"Equip Lv 3+ wings to increase Max HP by 10.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 12%"
            ,"Equip Lv 3+ wings to increase Max HP by 13.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 15%"
            ,"Equip Lv 3+ wings to increase Max HP by 16.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 18%"
            ,"Equip Lv 3+ wings to increase Max HP by 19.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 21%"
            ,"Equip Lv 3+ wings to increase Max HP by 22.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 24%"
            ,"Equip Lv 3+ wings to increase Max HP by 25.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 27%"
            ,"Equip Lv 3+ wings to increase Max HP by 28.5%"
            ,"Equip Lv 3+ wings to increase Max HP by 30%"
        ]
    }, right: null},
    { depth: 4, stat: "INT", points: 2180 , spend: 30, left: {
        name: "Volition",
        levels: 10,
        required: 10,
        stats: []
    }, center: null, right: {
        name: "Divine Miracle",
        levels: 5,
        required: 5,
        stats: []
    }},
    { depth: 5, stat: "INT", points: 2430 , spend: 40, left: {
        name: "Zero Zone",
        levels: 1,
        required: 1,
        stats: []
    }, center: null, right: null},
    { depth: 6, stat: "INT", points: 2460 , spend: 45, left: {
        name: "Ancient Seal (PvP)",
        levels: 10,
        required: 10,
        stats: []
    }, center: {
        name: "Wing Mastery",
        levels: 20,
        required: 0,
        stats: [
            "Equip Lv 4+ wings to increase Max HP by 1.5%"
            ,"Equip Lv 4+ wings to increase Max HP by 3%"
            ,"Equip Lv 4+ wings to increase Max HP by 4.5%"
            ,"Equip Lv 4+ wings to increase Max HP by 6%"
            ,"Equip Lv 4+ wings to increase Max HP by 7.5%"
            ,"Equip Lv 4+wings to increase Max HP by 9%"
            ,"Equip Lv 4+ wings to increase Max HP by 10.5%"
            ,"Equip Lv 4+ wings to increase Max HP by 12%"
            ,"Equip Lv 4+ wings to increase Max HP by 13.5%"
            ,"Equip Lv 4+ wings to increase Max HP by 15%"
            ,"Equip Lv 4+ wings to increase Max HP by 16.5%"
            ,"Equip Lv 4+ wings to increase Max HP by 18%"
            ,"Equip Lv 4+ wings to increase Max HP by 19.5%"
            ,"Equip Lv 4+ wings to increase Max HP by 21%"
            ,"Equip Lv 4+ wings to increase Max HP by 22.5%"
            ,"Equip Lv 4+ wings to increase Max HP by 24%"
            ,"Equip Lv 4+ wings to increase Max HP by 25.5%"
            ,"Equip Lv 4+ wings to increase Max HP by 27%"
            ,"Equip Lv 4+ wings to increase Max HP by 28.5%"
            ,"Equip Lv 4+ wings to increase Max HP by 30%"
        ]
    }, right: {
        name: "Soul Shield",
        levels: 10,
        required: 1,
        stats: []
    }},
    { depth: 7, stat: "INT", points: 2500 , spend: 60, left: {
        name: "Snow Blessing (PvP)", levels: 10, required: 0, stats: []
    }, center: null, right: {
        name: "Justice Shield (PvP)", levels: 10, required: 0 , stats: []
    }}
]