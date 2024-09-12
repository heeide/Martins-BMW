// Model
const hilsener = ["Vink", "Tommel opp", "Håndtrykk"];
let riktigHilsen = Math.floor(Math.random() * 3);
let carCoolness = Math.floor(Math.random() * 11);

// View Update Function
function updateView(responseText, className) {
    document.getElementById('coolness').textContent = carCoolness;
    const responseElement = document.getElementById('response');
    responseElement.textContent = responseText;
    responseElement.className = className;
}