interface Country {
    name: string;
    continent: string;
    population: number;
  }
  
  const countries: Country[] = [
    {
      name: "Japan",
      continent: "Asia",
      population: 125.81,
    },
    {
      name: "France",
      continent: "Europe",
      population: 65.28,
    },
    {
      name: "Brazil",
      continent: "South America",
      population: 212.56,
    },
  ];
  
console.log("Information about countries:");
for (let country of countries)
{
    console.log(`Name: ${country.name}`);
    console.log(`Continent: ${country.continent}`);
    console.log(`Population: ${country.population} million`);
    console.log("---");
}