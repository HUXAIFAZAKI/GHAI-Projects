//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guests = ["Hamza", "Ali", "Hammad"];

// Loop through the guest list and print invitations
for (let guest of guests) {
  console.log(`Dear ${guest}, I would be honored if you could join me for dinner.`);
}