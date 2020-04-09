import { Player } from "./playerGame.js";
export class Paladin extends Player{
    constructor(name, life = 16, mana = 160, attack=3, def=110, race="Paladin"){
        super(name, life, mana, attack, def)
        this.race = race
        this.skill_damage = 4
        this.manaCost = 40
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

    lighting(player){
        this.mana -= this.manaCost
        console.log("Le joueur " + this.name + " attaque " + player.name + " avec le sort lighting ")
        console.log("Le joueur " + this.name + " perd 40 points de mana")
        if(this.life < 16){
            this.life += 5
            console.log("Le joueur " + this.name + "se soigne de 5 points de vie")
        }else{
            console.log("Le joueur " + this.name + "se soigne de 5 points de vie")
            this.life = 16
        }
        this.dealDamage(player,this.skill_damage)
    }

    dealDamage(player, skill_damage=0){
        console.log("Le joueur " + this.name + " attaque " + player.name)
        if(skill_damage == 0){
            player.takeDamage(this.attack, player)
        }else{
            player.takeDamage(skill_damage, player)
        } 
    }
}