

// objekter

let Martin = {
    greeting: "thumbs",
}

let Terje = {
    greeting: "nod",
}

let Eskil = {
    greeting: "wave",
}

let oldlady ={
    action: "hit car"
}
let bump ={
    action: "break car"
}
let wunderbaum ={
    action: "good smell"
}
let spraypaint ={
    action: "cool stripes"
}


let buddies = [Martin, Terje, Eskil]
let events = [oldlady, bump, wunderbaum, spraypaint]

let inventory = [] //liste med gjenstander som blir lagt til, pushes opp av en funksjon som kan kalles fra UI, og er synlig i inventory UI. Ligger orginalt i annen array.
let items = ['spraypaint', 'wunderbaum'] //Liste med gjenstander som hentes, lages av andre. Items skal da leses i en event og så kunne flyttes til inventory. 
