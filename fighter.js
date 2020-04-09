import { Player } from "./playerGame.js";
export class Fighter extends Player{
    constructor(name, life = 12, mana = 40, attack=4, def=100, race="Combattant"){
        super(name, life, mana, attack, def)
        this.race = race
        this.skill_damage = 5
        this.manaCost = 20
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
    
    darkVision(player){
        this.mana -= this.manaCost
        console.log("Le joueur " + this.name + " perd 20 points de mana")
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