function SandwichOrder() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
}
console.log("Sandwich must contain these following items:");
SandwichOrder("Chicken", "Cheese", "Tomato");
console.log("Sandwich must contain these following items:");
SandwichOrder("Beef", "Spinach", "Mustard");
console.log("Sandwich must contain these following items:");
SandwichOrder("Tomato", "Chicken", "Fried egg");