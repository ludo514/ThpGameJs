
class Healer extends Player{
    constructor(name, life = 8, mana = 200, attack=2, def=180, race="Healer"){
        super(name, life, mana, attack, def)
        this.race = race
        this.skill_damage = 5
        this.manaCost = 25
    }

    takeDamage(damage, player){
        if(player.life >= damage){
            this.update("takeDamage", player, damage)
            console.log(player.name + " le joueur reçois " + damage + " points de dégats")
            player.life -= damage
            this.update("stateLife", player, damage)
            console.log(player.name + " lui reste " + this.life)
        }else{
            this.update("dead", player)
            console.log("Le joueur " + player.name + " est mort")
            player.life = 0
        }
        
    }

    dealDamage(player, skill_damage=0){
        
        console.log("Le joueur " + this.name + " attaque " + player.name)
        if(skill_damage == 0){
            player.takeDamage(this.attack, player)
            this.update("dealDamage", player)
        }else{
            player.takeDamage(skill_damage, player)
        } 
    }

    heal(){
        if(this.life >= 8){
            this.update("heal")
            this.update("stateMana")
            console.log("Le joueur " + this.name + " perd 25 points de mana ")
            this.mana -= this.manaCost
        }else{
            this.update("heal")
            this.update("stateMana")
            console.log("Le joueur " + this.name + " perd 25 points de mana ")
            console.log("Il se heal de 8 points de vie")
            this.mana -= this.manaCost
            this.life += 8
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
            case "heal":
                let paragraphe4 = document.createElement("p")
                let word4 = document.createTextNode("Le joueur " + this.name +" lance sont sort de soin ")
                paragraphe4.appendChild(word4)
                document.getElementById("state").appendChild(paragraphe4)
                break;
            case "stateMana":
                let paragraphe5 = document.createElement("p")
                let word5 = document.createTextNode("Le joueur " + this.name + " perd 25 points de mana ")
                paragraphe5.appendChild(word5)
                document.getElementById("state").appendChild(paragraphe5)
                break;
            case "moreLife":
                let paragraphe6 = document.createElement("p")
                let word6 = document.createTextNode("Le joueur " + this.name + "se soigne de 8 points de vie")
                paragraphe6.appendChild(word6)
                document.getElementById("state").appendChild(paragraphe6)
                break;
            case "dead":
                let paragraphe7 = document.createElement("p")
                let word7 = document.createTextNode("Le joueur " + player.name + " est mort")
                paragraphe7.appendChild(word7)
                document.getElementById("state").appendChild(paragraphe7)
                break;
        }
    }
}