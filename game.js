import { Fighter } from "./fighter.js";
import { Paladin } from "./paladin.js";
import { Healer } from "./healer.js";

class Game{
    constructor(player1, race){
        this.player1 = player1
        this.player2 = "Jack"
        this.player3 = "Francis"
        this.players = []
        this.race = race
        this.bot = this.lastClasse()
        this.races = [this.choiceClasse(this.race), this.bot[0], this.bot[1]]
        this.random1 = Math.floor(Math.random() * this.races.length)
        this.random2 = Math.floor(Math.random() * this.races.length)
        for (let i = 0; i < 3; i++) {
            this.players.push(this.races[i])
        }
        this.pos = this.getRandomIntInclusive(0,this.players.length-1)
        this.pos1 = this.getRandomIntInclusive(0,this.players.length-1)
        this.infoPlayers()
    }

    game(){

        while(this.players.length != 1){
            if(this.players[this.pos] != this.players[this.pos1] && this.players[this.pos] != null && this.players[this.pos1] != null){
                if(this.statePlayer(this.players[this.pos].life,this.pos) && this.statePlayer(this.players[this.pos1].life, this.pos1)){
                    console.log("======================================================")
                    this.skillOrNot()
                    this.infoPlayers()
                    console.log("======================================================")
                    this.pos = this.getRandomIntInclusive(0,this.players.length-1)
                    this.pos1 = this.getRandomIntInclusive(0,this.players.length-1)
                }
            }else{
                this.pos = this.getRandomIntInclusive(0,this.players.length-1)
                this.pos1 = this.getRandomIntInclusive(0,this.players.length-1)
            }
        }
        console.log("Le joueur " + this.players[0].name + " à gagner !!!!!")
        this.infoPlayers()
    }

    skillOrNot(){
        let random = this.getRandomIntInclusive(0,1)
        if(random == 0){
            console.log("Le joueur " + this.players[this.pos].name + " utilise sont attaque de base")
            this.players[this.pos].dealDamage(this.players[this.pos1])
        }else if(random == 1 && this.players[this.pos].mana >= this.players[this.pos].manaCost){
            switch(this.players[this.pos].race){
                case "Combattant":
                    console.log("Le joueur " + this.players[this.pos].name + " utilise le sort Dark Vision")
                    this.players[this.pos].darkVision(this.players[this.pos1])
                    break;
                case "Paladin":
                    console.log("Le joueur " + this.players[this.pos].name + " utilise le sort Lighting")
                    this.players[this.pos].lighting(this.players[this.pos1])
                    break;
                case "Healer":
                    console.log("Le joueur " + this.players[this.pos].name + " utilise le sort Soins")
                    this.players[this.pos].heal()
                    break;
            }
        }else if(random == 1  && this.players[this.pos].mana < this.players[this.pos].manaCost){
            console.log("Le joueur " + this.players[this.pos].name + "  tante de lancer sort mais il n'a plus de mana sont tour passe ")
        }
    }

    statePlayer(life, pos){
        if(life <= 0){
            console.log("Le joueur " + this.players[pos].name + " na plus de point vie il est iliminé !!!")
            this.players.splice(pos, 1)
            return false
        }else{
            return true
        }
    }

    infoPlayers(){
        for (let i = 0; i < this.players.length; i++) {
            console.log(this.players[i].info())
        }
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    choiceClasse(race){
        switch (race) {
            case "Paladin":
                return this.paladin = new Paladin(this.player1)
            case "Combattant":
                return this.fighter = new Fighter(this.player1)
            case "Healer":
                return this.healer = new Healer(this.player1)
            default:
                break;
        }
    }

    lastClasse(){
        switch (this.race) {
            case "Paladin":
                return [this.fighter = new Fighter(this.player2), this.healer = new Healer(this.player3)]
            case "Combattant":
                return [this.paladin = new Paladin(this.player2), this.healer = new Healer(this.player3)]
            case "Healer":
                return [this.paladin = new Paladin(this.player2), this.fighter = new Fighter(this.player3)]
            default:
                break;
        }
    }

}

/*let player1 = prompt("Entrez le nom du premier joueur : ")
let player2 = prompt("Entrez le nom du deuxième joueur : ")
let player3 = prompt("Entrez le nom du troisième joueur : ")*/
const main = () => {
    if(document.getElementById("name").value && document.getElementById("classe").value){
        let game = new Game(document.getElementById("name").value, document.getElementById("classe").value)
        game.game()
    }else{
        alert("Nom de personnage et classe obligatoire !!! ")
    }
    
}
document.getElementById("create").addEventListener("click", main);
