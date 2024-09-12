// View 
function updateView(responseText, className) {
    document.getElementById('coolness').textContent = carCoolness;
    const responseElement = document.getElementById('response');
    responseElement.textContent = responseText;
    responseElement.className = className;
    //Merget to view funksjoner her
    app.innerHTML = /*HTML*/ `
    ${displayInventory()}
    
    `;
    //Coolnessbar
    <div id="coolnessBar">
        <div id="barProgress"></div>
    </div> 
}

function updateView(){
    app.innerHTML = /*HTML*/ `
    ${displayInventory()}
    
    `;

}

function displayInventory(){ //Viser inventory i en liste som bygges etterhvert som ting blir lagt til i inventory.
    let html = '<ul>';
    
    for(i=0; i<inventory.length; i++){
        html += '<li>' + inventory[i] + '</li>'
        
    }

    html += '</ul>'
    return html;

}

function showCoolnessBar() {
    if (coolnessmeter < 0) {
        coolnessmeter = 0;
    }
    else if (coolnessmeter >= 1000) {
        coolnessmeter = 1000;
        winScreen();
    }
}