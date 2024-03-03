const originalMagicians: string[] = ["Adeel Hashmi", "Sahir Ali Bagga", "Javed Iqbal"];

function copyArray(arr: string[]): string[] {
  const copy:string[] = [];
  for (const element of arr) {
    copy.push(element);
  }
  return copy;
}

function make_great(magicians: string[]): string[] {
  const modifiedMagicians = copyArray(magicians);
  for (let i = 0; i < modifiedMagicians.length; i++) {
    modifiedMagicians[i] = `${modifiedMagicians[i]} the Great`;
  }
  return modifiedMagicians;
}

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const modifiedMagicians = make_great(originalMagicians);

console.log("Original magicians:");
show_magicians(originalMagicians);

console.log("\nGreat magicians:");
show_magicians(modifiedMagicians);
