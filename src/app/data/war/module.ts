import {SkillTree} from '../../skill-tree';
import { StrTree } from './str/module';
import { StaTree } from './sta/module';

export const Warrior : SkillTree = {
    SkillTrees: [ StrTree, StaTree ],
    stats: [ "STR", "STA" ]
};
    
