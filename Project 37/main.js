function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("I made a ".concat(size, " t-shirt that says '").concat(message, "'."));
}
make_shirt();
make_shirt("medium", "I love AI!");
make_shirt("small", "I love programming!");
