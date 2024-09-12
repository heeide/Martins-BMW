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
