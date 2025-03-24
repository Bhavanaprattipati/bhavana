// Add Food Item
function addItem() {
    let inventory = document.getElementById("inventory-list");
    let newItem = document.createElement("div");
    newItem.innerHTML = `🥦 Broccoli - Expires in 3 days <button onclick="removeItem(this)">❌</button>`;
    inventory.appendChild(newItem);
}

// Remove Food Item
function removeItem(element) {
    element.parentElement.remove();
}

// Add Grocery Item
function addGrocery() {
    let input = document.getElementById("groceryInput");
    let list = document.getElementById("groceryList");

    if (input.value.trim() === "") {
        alert("Enter a grocery item!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerHTML = `${input.value} <button onclick="removeGrocery(this)">❌</button>`;
    list.appendChild(listItem);

    input.value = "";
}

// Remove Grocery Item
function removeGrocery(element) {
    element.parentElement.remove();
}

// Suggest Recipe
function suggestRecipe() {
    let recipes = ["Veggie Stir Fry", "Pasta Primavera", "Fruit Salad", "Grilled Cheese"];
    let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    document.getElementById("recipe-result").innerText = `Try making: ${randomRecipe}! 🍽`;
}
