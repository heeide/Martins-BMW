// View Update Function
function updateView(responseText, className) {
    document.getElementById('coolness').textContent = carCoolness;
    const responseElement = document.getElementById('response');
    responseElement.textContent = responseText;
    responseElement.className = className;
}