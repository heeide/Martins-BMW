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