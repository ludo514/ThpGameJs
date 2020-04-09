export class Player{
    constructor(name, life, mana, attack, def, race){
        this.name = name
        this.life = life
        this.mana = mana
        this.attack = attack
        this.def = def
        this.race = race
    }

    info(){
        return " Classe du perso : " + this.race + "\n nom perso : " + this.name + "\n nombre de point de vie : " + this.life + "\n mana : " + this.mana + "\n dégats d'attaque : " + this.attack + "\n point de défence : " + this.def
    }

    takeDamage(damage, player){
        if(player.life >= damage){
            console.log(player.name + " le joueur reçois " + damage + " points de dégats")
            player.life -= damage
            console.log(player.name + " lui reste " + this.life)
        }else{
            player.life = 0
        }
        
    }

    dealDamage(player){
        console.log("Le joueur " + this.name + " attaque " + player.name)
        player.takeDamage(this.attack, player)
    }

    boost(){
        this.attack += 10
        console.log("Le joueur " + this.name + " est enragé il gagne 10 points de dégats, total des dégats d'attaque : " + this.attack)
    }
}