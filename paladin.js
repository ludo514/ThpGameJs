
class Paladin extends Player{
    constructor(name, life = 16, mana = 160, attack=3, def=110, race="Paladin"){
        super(name, life, mana, attack, def)
        this.race = race
        this.skill_damage = 4
        this.manaCost = 40
    }

    takeDamage(damage, player){
        if(player.life >= damage){
            this.update("takeDamage", player, damage)
            console.log("Le joueur "+ player.name + " reçois " + damage + " points de dégats")
            player.life -= damage
            this.update("stateLife", player)
            console.log(player.name + " lui reste " + this.life)
        }else{
            this.update("dead", player)
            console.log("Le joueur " + player.name + " est mort")
            player.life = 0
        }
        
    }

    lighting(player){
        this.mana -= this.manaCost
        this.update("lighting",player)
        this.update("stateMana")
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
            this.update("dealDamage", player)
            player.takeDamage(skill_damage, player)
        } 
    }

    update(fonctionCall, player=null, damage=0){
        switch(fonctionCall){
            case "dealDamage":
                let paragraphe1 = document.createElement("p")
                let word1 = document.createTextNode("Le joueur " + this.name + " attaque " + player.name)
                paragraphe1.appendChild(word1)
                document.getElementById("state").appendChild(paragraphe1)
                break;
            case "takeDamage":
                let paragraphe2 = document.createElement("p")
                let word2 = document.createTextNode(player.name + " reçois " + damage + " points de dégats")
                paragraphe2.appendChild(word2)
                document.getElementById("state").appendChild(paragraphe2)
                break;
            case "stateLife":
                let paragraphe3 = document.createElement("p")
                let word3 = document.createTextNode(player.name + " lui reste " + this.life)
                paragraphe3.appendChild(word3)
                document.getElementById("state").appendChild(paragraphe3)
                break;
            case "lighting":
                let paragraphe4 = document.createElement("p")
                let word4 = document.createTextNode("Le joueur " + this.name + " attaque " + player.name + " avec le sort lighting ")
                paragraphe4.appendChild(word4)
                document.getElementById("state").appendChild(paragraphe4)
                break;
            case "stateMana":
                let paragraphe5 = document.createElement("p")
                let word5 = document.createTextNode("Le joueur " + this.name + " perd 40 points de mana")
                paragraphe5.appendChild(word5)
                document.getElementById("state").appendChild(paragraphe5)
                break;
            case "moreLife":
                let paragraphe6 = document.createElement("p")
                let word6 = document.createTextNode("Le joueur " + this.name + "se soigne de 5 points de vie")
                paragraphe6.appendChild(word6)
                document.getElementById("state").appendChild(paragraphe6)
                break;
            case "dead":
                let paragraphe7 = document.createElement("p")
                let word7 = document.createTextNode("Le joueur " + this.name + "se soigne de 5 points de vie")
                paragraphe7.appendChild(word7)
                document.getElementById("state").appendChild(paragraphe7)
                break;
        }
    }
}