import { Player } from "./playerGame.js";
export class Healer extends Player{
    constructor(name, life = 8, mana = 200, attack=2, def=180, race="Healer"){
        super(name, life, mana, attack, def)
        this.race = race
    }
}