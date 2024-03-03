const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let ordinalSuffix;
  if (number === 1) {
    ordinalSuffix = "st";
  } else if (number === 2) {
    ordinalSuffix = "nd";
  } else if (number === 3) {
    ordinalSuffix = "rd";
  } else {
    ordinalSuffix = "th";
  }
  console.log(`${number}${ordinalSuffix}`);
}