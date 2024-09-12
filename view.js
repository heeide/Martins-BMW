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