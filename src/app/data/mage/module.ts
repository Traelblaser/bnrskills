import {SkillTree} from '../../skill-tree';
import { DexTree } from './dex/module';
import { IntTree} from './int/module';

export const Mage : SkillTree = {
    SkillTrees: [ IntTree, DexTree ],
    stats: [ "INT", "DEX"]
};
    
