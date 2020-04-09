import { Player } from "./playerGame.js";
export class Fighter extends Player{
    constructor(name, life = 12, mana = 40, attack=4, def=100, race="Combattant"){
        super(name, life, mana, attack, def)
        this.race = race
    }
}