function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    if (ingredients.length === 0) {
        console.log("You ordered a plain sandwich.");
    }
    else {
        console.log("Your sandwich has:");
        for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
            var ingredient = ingredients_1[_a];
            console.log("- ".concat(ingredient));
        }
    }
}
makeSandwich();
makeSandwich("bread", "cheese", "chicken");
makeSandwich("bread", "chicken", "lettuce", "egg");
