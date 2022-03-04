import { Skill } from "./skill.model";
export class Developer {
    lastname: string;
    firstname: string;
    age: number;
    sexe: boolean;
    bio: string;
    skills: Skill[] = [];
    laptop?: string

    constructor(firstname: string, lastname: string, age: number, sexe: boolean, bio: string, skill: Skill[], laptop?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.sexe = sexe
        this.bio = bio;
        this.skills = skill;
        this.laptop = laptop
     }
}
