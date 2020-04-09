
class Fighter extends Player{
    constructor(name, life = 12, mana = 40, attack=4, def=100, race="Combattant"){
        super(name, life, mana, attack, def)
        this.race = race
        this.skill_damage = 5
        this.manaCost = 20
    }

    takeDamage(damage, player){
        if(player.life >= damage){
            this.update("takeDamage",player, damage)
            console.log(player.name + " le joueur reçois " + damage + " points de dégats")
            player.life -= damage
            this.update("stateLife", player)
            console.log(player.name + " lui reste " + this.life)
        }else{
            console.log("Le joueur " + player.name + " est mort")
            player.life = 0
        }
        
    }
    
    darkVision(player){
        this.mana -= this.manaCost
        this.update("darkVision",player)
        this.update("stateMana")
        console.log("Le joueur " + this.name + " perd 20 points de mana")
        this.dealDamage(player,this.skill_damage)
    }

    dealDamage(player, skill_damage=0){
        console.log("Le joueur " + this.name + " attaque " + player.name)
        
        if(skill_damage == 0){
            this.update("dealDamage", player)
            player.takeDamage(this.attack, player)
        }else{
            player.takeDamage(skill_damage, player)
        } 
    }

    update(fonctionCall, player, damage=0){
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
            case "darkVision":
                let paragraphe4 = document.createElement("p")
                let word4 = document.createTextNode("Le joueur " + this.name + " lance le sort DarkVision sur " + player.name)
                paragraphe4.appendChild(word4)
                document.getElementById("state").appendChild(paragraphe4)
                break;
            case "stateMana":
                let paragraphe5 = document.createElement("p")
                let word5 = document.createTextNode("Le joueur " + this.name + " perd 20 points de mana")
                paragraphe5.appendChild(word5)
                document.getElementById("state").appendChild(paragraphe5)
                break;
        }
    }
}