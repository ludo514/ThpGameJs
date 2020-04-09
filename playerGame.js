class Player{
    constructor(name, life, mana, attack, def, race){
        this.name = name
        this.life = life
        this.mana = mana
        this.attack = attack
        this.def = def
        this.race = race
    }

    info(){
        switch(this.race){
            case "Combattant":
                document.getElementById("lifePointC").innerHTML = this.life
                document.getElementById("manaPointC").innerHTML = this.mana
                break;
            case "Healer":
                document.getElementById("lifePointH").innerHTML = this.life
                document.getElementById("manaPointH").innerHTML = this.mana
                break;
            case "Paladin":
                document.getElementById("lifePointP").innerHTML = this.life
                document.getElementById("manaPointP").innerHTML = this.mana
                break;
        }
        return " Classe du perso : " + this.race + "\n nom perso : " + this.name + "\n nombre de point de vie : " + this.life + "\n mana : " + this.mana + "\n dégats d'attaque : " + this.attack + "\n point de défence : " + this.def
    }

    boost(){
        this.attack += 10
        console.log("Le joueur " + this.name + " est enragé il gagne 10 points de dégats, total des dégats d'attaque : " + this.attack)
    }
}