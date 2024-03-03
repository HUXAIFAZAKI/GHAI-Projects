function makeSandwich(...ingredients: string[]): void {
    if (ingredients.length === 0) {
      console.log("You ordered a plain sandwich.");
    } else {
      console.log("Your sandwich has:");
      for (const ingredient of ingredients) {
        console.log(`- ${ingredient}`);
      }
    }
  }
  
  makeSandwich();
  makeSandwich("bread", "cheese", "chicken");
  makeSandwich("bread", "chicken", "lettuce", "egg");