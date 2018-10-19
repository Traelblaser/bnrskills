import { Skill } from "./skill";

export class Skillrow {
    depth: number;
    stat: string; // do we want to enum this?
    points: number;
    //required: number;
    spend: number;

    left?: Skill;
    center?: Skill;
    right?: Skill;
}
