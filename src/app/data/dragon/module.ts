import {SkillTree} from '../../skill-tree';
import { StrTree } from './str/module';
import { IntTree} from './int/module';

export const Dragon : SkillTree = {
    SkillTrees: [ StrTree, IntTree ],
    stats: ["STR", "INT"]
};
    
