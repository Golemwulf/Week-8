class Soldier {
    constructor(name, specialty) {
    this.name = name;
    this.specialty = specialty;
    }
    
    describe() {
    return `Name: ${this.name}. Specialty: ${this.specialty}`;
    }
    }


class Faction {
    constructor(name) {
        this.name = name;
        this.soldiers = [];
    }
    
    addSoldier(soldier) {
        if (soldier instanceof Soldier) {
        this.soldiers.push(soldier);
        } else {
        throw new Error(`You can only add an instance of Soldier. 
        argument is not a soldier: ${soldier}`);
        }
    }
    
    describe() {
        return `${this.name} has ${this.soldiers.length} soldiers.`;
    }
}


class Menu { 
    constructor() {
    this.factions = [];
    this.selectedFaction = null; 
    }
    
    start() { 
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {
        switch(selection) {
            case '1' :
                this.createFaction();
                break;
            case '2' :
                this.viewFaction();
                break;
            case '3' :
                this.deleteFaction();
                break;
            case '4' :
                this.displayFactions();
                break;
            default:
                selection = 0;
        }
        selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new faction
    2) view a faction
    3) delete a faction
    4) display all factions
    `);
    }
    
    showFactionMenuOptions(factionInfo) {
    return prompt(`
    0) back
    1) add a new soldier
    2) delete a soldier
    -----------------
    ${factionInfo}
    `);
    }
    
    displayFactions() {
    let factionString = '';
    // for (let i = 0; i < this.factions.length; i++) {
    // factionString += i+ ') ' + this.factions[i].name + '\n';
    for (const element of this.factions.length){
        
    }
    }
    alert(factionString);
    }
    
    createFaction() {
    let name = prompt('Enter name for new faction: ');
    this.factions.push(new Faction(name));
    }
    
    viewFaction() {
    let index = prompt("Enter the index of the faction that you want to view:");
    if (index > -1 && index < this.factions.length) {
    this.selectedFaction = this.factions[index];
    let description = 'Faction Name: ' + this.selectedFaction.name + '\n';
    description += ' ' + this.selectedFaction.describe() + '\n ';
    for (let i = 0; i < this.selectedFaction.soldiers.length; i++) {
    description += i + ') ' + this.selectedFaction.soldiers[i].describe() + '\n';
    }
    let selection1 = this.showFactionMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createSoldier();
    break;
    case '2' :
    this.deleteSoldier();
    }
    } 
    }
    
    deleteFaction() {
    let index = prompt('Enter the index of the faction that you wish to delete: ');
    if (index > -1 && index < this.factions.length) {
    this.factions.splice(index,1);
    }
    }
    
    
    createSoldier() {
    let name = prompt('Enter name for new soldier: ');
    let specialty = prompt('Enter specialty for new soldier: ');
    this.selectedFaction.addSoldier(new Soldier(name,specialty));
    }
    
    deleteSoldier() {
    let index = prompt('Enter the index of the soldier that you wish to delete: ');
    if (index > -1 && index < this.selectedFaction.soldiers.length) { this.selectedFaction.soldiers.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start();
    