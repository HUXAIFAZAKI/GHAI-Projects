const currentUsers: string[] = ["Ali", "Ahmed", "Hamza", "Salman", "Huxaifa"];
const newUsers: string[] = ["Ali", "Jaffer", "Hammad", "Abdullah", "Ahmed"];

function checkUsernameAvailability(username: string): string {
  const lowerCaseUsername = username.toLowerCase();
  for (const currentUser of currentUsers) {
    if (currentUser.toLowerCase() === lowerCaseUsername) {
      return `${username} is already taken. Please choose another username.`;
    }
  }
  return `${username} is available.`;
}

for (const newUser of newUsers) {
  const availabilityMessage = checkUsernameAvailability(newUser);
  console.log(availabilityMessage);
}