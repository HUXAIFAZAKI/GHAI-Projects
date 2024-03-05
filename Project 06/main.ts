// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

function stripWhitespace(Name: string): string {
    return Name.trim();
  }
  
  let Name: string = "\t Huzaifa Zaki \n";
  
  console.log("Name with whitespace:", Name);

  let strippedName = stripWhitespace(Name);

  console.log("Name without whitespace:", strippedName);

