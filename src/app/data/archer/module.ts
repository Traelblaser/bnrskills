import {SkillTree} from '../../skill-tree';
import { DexTree } from './dex/module';
import { IntTree} from './int/module';

export const Archer : SkillTree = {
    SkillTrees: [ DexTree, IntTree ],
    stats: ["DEX", "INT"]
};
    
