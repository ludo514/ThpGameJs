import { Player } from "./playerGame.js";
export class Paladin extends Player{
    constructor(name, life = 16, mana = 160, attack=3, def=110, race="Paladin"){
        super(name, life, mana, attack, def)
        this.race = race
    }

}