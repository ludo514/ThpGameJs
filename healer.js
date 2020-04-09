import { Player } from "./playerGame.js";
export class Healer extends Player{
    constructor(name, life = 8, mana = 200, attack=2, def=180, race="Healer"){
        super(name, life, mana, attack, def)
        this.race = race
        this.skill_damage = 5
        this.manaCost = 25
    }

    takeDamage(damage, player){
        if(player.life >= damage){
            console.log(player.name + " le joueur reçois " + damage + " points de dégats")
            player.life -= damage
            console.log(player.name + " lui reste " + this.life)
        }else{
            console.log("Le joueur " + player.name + " est mort")
            player.life = 0
        }
        
    }

    dealDamage(player, skill_damage=0){
        console.log("Le joueur " + this.name + " attaque " + player.name)
        if(skill_damage == 0){
            player.takeDamage(this.attack, player)
        }else{
            player.takeDamage(skill_damage, player)
        } 
    }

    heal(){
        if(this.life >= 8){
            console.log("Le joueur " + this.name + " perd 25 points de mana ")
            this.mana -= this.manaCost
            this.life = 8
        }else{
            console.log("Le joueur " + this.name + " perd 25 points de mana ")
            console.log("Il ce heal de 8 points de vie")
            this.mana -= this.manaCost
            this.life += 8
        }
    }
}