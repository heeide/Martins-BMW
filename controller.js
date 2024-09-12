// Controller
function hilse(valgtHilsen) {
    if (valgtHilsen === riktigHilsen) {
        if (carCoolness > 5) {
            updateView("Kul hilsen fra kompisen!", "cool");
        } else {
            updateView("Lite kul hilsen fra kompisen.", "not-cool");
        }
    } else {
        updateView("Feil hilsen! Prøv igjen.", "not-cool");
    }
}

function actions(){
    let rng = Math.round(Math.random() * 10);
    if (rng <= 7){
        randomevent()
    }
    else{
        randombuddy()
    }
}

function randomevent(){
    let rng = Math.round(Math.random()* events.length);
    let activeevent = events[rng]
    console.log(activeevent)
    createtask(activeevent)
}

function randombuddy(){
    let rng = Math.round(Math.random()* buddies.length);
    let activebuddy = buddies[rng]
    console.log(activebuddy)
    console.log(activebuddy.greeting)
    createtask(activebuddy)
}

function createtask(active){
    
}

function addToInventory (item){ //Sjekker om inventory har item, hvis ikke pushes det til inventory, må kalles fra et sted da.
    
    if(!inventory.includes(item)){
 
     if (items.includes(item)) {
     inventory.push(item)
     updateview()
     }
 } 
 
 }