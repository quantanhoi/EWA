'use strict';
const infoBlock = document.getElementById('info-block');
// Get all the pizza-desc elements
const pizzaDescElements = document.getElementsByClassName('pizza-desc');
const totalPrice = document.querySelector('.price');
const auswahlLoeschen = document.getElementById('Auswahl_loeschen');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const resetButton = document.getElementById('reset');
let total = 0;
const items = [
    { name: 'Margherita', price: 8.00 },
    { name: 'Hawaii', price: 11.00 },
    { name: 'Quattro Formaggi', price: 10.00 },
];



// Loop through the array and update the elements' content
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const element = pizzaDescElements[i];

    // Update the <p> element with the item name and price
    const p = element.querySelector('p');
    p.textContent = `${item.name}: ${item.price.toFixed(2)} €`;
    pizzaDescElements[i].addEventListener('click', function() {
        const p = document.createElement('p');
        p.textContent = items[i].name;
        infoBlock.appendChild(p);
        total += items[i].price;
        totalPrice.textContent = `Gesamtpreis: ${total.toFixed(2)} €`;
    });
}
auswahlLoeschen.addEventListener('click', function() {
    total = 0;
    totalPrice.textContent = `Gesamtpreis: ${total.toFixed(2)} €`;
    infoBlock.innerHTML= '';

});
resetButton.addEventListener('click', function() {
    nameField.value ='';
    emailField.value ='';
});