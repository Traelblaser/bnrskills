import { Skillrow } from '../../../skillrow';

export const General: Skillrow[] = [
    { depth: 1, stat: "INT", points: 550, spend: 6, left: {
        name: "Steel Armor",
        levels: 15,
        required: 10,
        stats: []
    }, center: null, right: {
        name: "Greater Stamina",
        levels: 10,
        required: 6,
        stats: []
    }},
    { depth: 2, stat: "INT", points: 850, spend: 11, left: {
        name: "Weapon Mastery",
        levels: 15,
        required: 10,
        stats: [
          "Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 10%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 15%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 20%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 25%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 30%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 35%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 40%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 45%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 50%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 55%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 60%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 65%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 70%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 75%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase weapon ATK by 80%"
  
        ]
    }, center: {
        name: "DEF Enhance",
        levels: 10,
        required: 0,
        stats: [
          "Every 380 INT pts will increase DEF by 30"
          ,"Every 380 INT pts will increase DEF by 60"
          ,"Every 380 INT pts will increase DEF by 90"
          ,"Every 380 INT pts will increase DEF by 120"
          ,"Every 380 INT pts will increase DEF by 150"
          ,"Every 380 INT pts will increase DEF by 180"
          ,"Every 380 INT pts will increase DEF by 210"
          ,"Every 380 INT pts will increase DEF by 240"
          ,"Every 380 INT pts will increase DEF by 270"
          ,"Every 380 INT pts will increase DEF by 300"
        ]
    }, right: {
        name: "Enhanced Power",
        levels: 10,
        required: 6,
        stats: [
          ,"Every 380 INT pts will increase ATK by 80"
          ,"Every 380 INT pts will increase ATK by 160"
          ,"Every 380 INT pts will increase ATK by 240"
          ,"Every 380 INT pts will increase ATK by 320"
          ,"Every 380 INT pts will increase ATK by 400"
          ,"Every 380 INT pts will increase ATK by 480"
          ,"Every 380 INT pts will increase ATK by 560"
          ,"Every 380 INT pts will increase ATK by 640"
          ,"Every 380 INT pts will increase ATK by 720"
          ,"Every 380 INT pts will increase ATK by 800"
        ]
    }},
    { depth: 3, stat: "INT", points: 1150, spend: 18, left: {
        name: "Speedy Slash",
        levels: 10,
        required: 6,
        stats: [
          "Increases ASPD by 2"
          ,"Increases ASPD by 4"
          ,"Increases ASPD by 6"
          ,"Increases ASPD by 8"
          ,"Increases ASPD by 10"
          ,"Increases ASPD by 12"
          ,"Increases ASPD by 14"
          ,"Increases ASPD by 16"
          ,"Increases ASPD by 18"
          ,"Increases ASPD by 20"
  
        ]
    }, center: null, right: {
        name: "Life Boost",
        levels: 10,
        required: 6,
        stats: [
          "Dmg Reduction +2%"
          ,"Dmg Reduction +4%"
          ,"Dmg Reduction +6%"
          ,"Dmg Reduction +8%"
          ,"Dmg Reduction +10%"
          ,"Dmg Reduction +12%"
          ,"Dmg Reduction +14%"
          ,"Dmg Reduction +16%"
          ,"Dmg Reduction +18%"
          ,"Dmg Reduction +20%"
  
        ]
    }},
    { depth: 4, stat: "INT", points: 1400, spend: 30, left: {
        name: "Charge Attack",
        levels: 10,
        required: 10,
        stats: [
          "After attacking 5 times, your next skill damage will be increased by 10%"
          ,"After attacking 5 times, your next skill damage will be increased by 20%"
          ,"After attacking 5 times, your next skill damage will be increased by 30%"
          ,"After attacking 5 times, your next skill damage will be increased by 40%"
          ,"After attacking 5 times, your next skill damage will be increased by 50%"
          ,"After attacking 5 times, your next skill damage will be increased by 60%"
          ,"After attacking 5 times, your next skill damage will be increased by 70%"
          ,"After attacking 5 times, your next skill damage will be increased by 80%"
          ,"After attacking 5 times, your next skill damage will be increased by 90%"
          ,"After attacking 5 times, your next skill damage will be increased by 100%"
  
        ]
    }, center: null, right: {
        name: "Elemental Aptitude",
        levels: 10,
        required: 10,
        stats: [
            "Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 40"
            ,"Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 80"
            ,"Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 120"
            ,"Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 160"
            ,"Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 200"
            ,"Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 240"
            ,"Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 280"
            ,"Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 320"
            ,"Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 360"
            ,"Every 380 INT pts will increase your Elemental ATK and Elemental DEF by 400"
        ]
    }},
    { depth: 5, stat: "INT", points: 1650, spend: 40, left: {
        name: "Feral Armor",
        levels: 10,
        required: 10,
        stats: [
          "Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 10%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 20%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 30%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 40%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 50%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 60%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 70%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 80%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 90%"
          ,"Equip the whole set (leggings, armor, gauntlets, boots, helmet) to increase skill damage by 100%"
  
        ]
    }, center: null, right: {
        name: "Burning Wrath",
        levels: 10,
        required: 10,
        stats: [
          "Increases all skill damage by 10%"
          ,"Increases all skill damage by 20%"
          ,"Increases all skill damage by 30%"
          ,"Increases all skill damage by 40%"
          ,"Increases all skill damage by 50%"
          ,"Increases all skill damage by 60%"
          ,"Increases all skill damage by 70%"
          ,"Increases all skill damage by 80%"
          ,"Increases all skill damage by 90%"
          ,"Increases all skill damage by 100%"
  
        ]
    }},
    { depth: 6, stat: "INT", points: 1680, spend: 45, left: {
        name: "Arcane Oracle",
        levels: 10,
        required: 10,
        stats: [
          "Equip the full Grail set to increase grail ATK by 8%"
          ,"Equip the full Grail set to increase grail ATK by 16%"
          ,"Equip the full Grail set to increase grail ATK by 24%"
          ,"Equip the full Grail set to increase grail ATK by 32%"
          ,"Equip the full Grail set to increase grail ATK by 40%"
          ,"Equip the full Grail set to increase grail ATK by 48%"
          ,"Equip the full Grail set to increase grail ATK by 56%"
          ,"Equip the full Grail set to increase grail ATK by 64%"
          ,"Equip the full Grail set to increase grail ATK by 72%"
          ,"Equip the full Grail set to increase grail ATK by 80%"
  
        ]
    }, center: null, right: {
        name: "Celestial Shelter",
        levels: 10,
        required: 10,
        stats: [
          "Every 380 INT pts added to your character will increase your Dmg Reduction by 0.5%"
          ,"Every 380 INT pts added to your character will increase your Dmg Reduction by 1%"
          ,"Every 380 INT pts added to your character will increase your Dmg Reduction by 1.5%"
          ,"Every 380 INT pts added to your character will increase your Dmg Reduction by 2%"
          ,"Every 380 INT pts added to your character will increase your Dmg Reduction by 2.5%"
          ,"Every 380 INT pts added to your character will increase your Dmg Reduction by 3%"
          ,"Every 380 INT pts added to your character will increase your Dmg Reduction by 3.5%"
          ,"Every 380 INT pts added to your character will increase your Dmg Reduction by 4%"
          ,"Every 380 INT pts added to your character will increase your Dmg Reduction by 4.5%"
          ,"Every 380 INT pts added to your character will increase your Dmg Reduction by 5%"
  
        ]
    }},
    { depth: 7, stat: "INT", points: 1720, spend: 60, left: {
        name: "Arcane Pray",
        levels: 10,
        required: 10,
        stats: [
          "Equip the full Grail set to increase Dmg Reduction by 10%"
          ,"Equip the full Grail set to increase Dmg Reduction by 20%"
          ,"Equip the full Grail set to increase Dmg Reduction by 30%"
          ,"Equip the full Grail set to increase Dmg Reduction by 40%"
          ,"Equip the full Grail set to increase Dmg Reduction by 50%"
          ,"Equip the full Grail set to increase Dmg Reduction by 60%"
          ,"Equip the full Grail set to increase Dmg Reduction by 70%"
          ,"Equip the full Grail set to increase Dmg Reduction by 80%"
          ,"Equip the full Grail set to increase Dmg Reduction by 90%"
          ,"Equip the full Grail set to increase Dmg Reduction by 100%"
  
        ]
    }, center: null, right: {
        name: "Bloodrage",
        levels: 10,
        required: 10,
        stats: [
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
          ,"Every 380 INT pts added to your character will increase your Dmg Up by 6%"
        ]
    }}
];