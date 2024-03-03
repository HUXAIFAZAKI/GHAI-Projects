// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Define a function to strip whitespace
function stripWhitespace(Name: string): string {
    return Name.trim();
  }
  
  // Store the name with whitespace
  let Name: string = "\t Huzaifa Zaki \n";
  
  // Print the name with whitespace
  console.log("Name with whitespace:", Name);
  
  // Strip the whitespace from the name
  let strippedName = stripWhitespace(Name);
  
  // Print the name without whitespace
  console.log("Name without whitespace:", strippedName);

