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