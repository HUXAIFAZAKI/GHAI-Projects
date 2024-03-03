var currentUsers = ["Ali", "Ahmed", "Hamza", "Salman", "Huxaifa"];
var newUsers = ["Ali", "Jaffer", "Hammad", "Abdullah", "Ahmed"];
function checkUsernameAvailability(username) {
    var lowerCaseUsername = username.toLowerCase();
    for (var _i = 0, currentUsers_1 = currentUsers; _i < currentUsers_1.length; _i++) {
        var currentUser = currentUsers_1[_i];
        if (currentUser.toLowerCase() === lowerCaseUsername) {
            return "".concat(username, " is already taken. Please choose another username.");
        }
    }
    return "".concat(username, " is available.");
}
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var availabilityMessage = checkUsernameAvailability(newUser);
    console.log(availabilityMessage);
}
