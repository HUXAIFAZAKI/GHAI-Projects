const originalMagicians: string[] = ["Adeel Hashmi", "Sahir Ali Bagga", "Javed Iqbal"];

function copyArray(arr: string[]): string[] {
  const copy:string[] = [];
  for (const element of arr) {
    copy.push(element);
  }
  return copy;
}

function make_great_and_show(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `${magicians[i]} the Great`;
  }
  show_magicians(magicians);
}

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const modifiedMagicians = copyArray(originalMagicians);

make_great_and_show(modifiedMagicians);

console.log("Original magicians:");
show_magicians(originalMagicians);