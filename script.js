document.addEventListener("DOMContentLoaded", function () {
    
    fetch("menu.json")
        .then(response => response.json())
        .then(data => displayMenu(data.menuItems));

    function displayMenu(menuItems) {
        const menuContainer = document.getElementById("menu");

        menuItems.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.innerHTML = `
                <h2>${item.name}</h2>
                <p>$${item.price.toFixed(2)}</p>
                <!-- Add quantity input and add to cart button as needed -->
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    
    const orderForm = document.getElementById("order-form");
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
    });
});
