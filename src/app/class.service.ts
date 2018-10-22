import { Injectable } from '@angular/core';
import { SkillTree } from './skill-tree';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

  getClasses(): Promise<string[]> {
    return Promise.resolve(CLASSES);
  }

  getClassesNoPromise() : string[] {
    return CLASSES;
  }

  getStats(playerClass: string) : string[] {
    return STATS[playerClass];
  }

}

const STATS = {
  "Warrior": ["STR", "STA"],
  "Archer": ["DEX", "INT"],
  "Mage": ["INT", "DEX"],
  "Dragonkin": ["STR", "INT"]
};

const CLASSES : string[] = [
  "Warrior",
  "Archer",
  "Mage",
  "Dragonkin"
];