var countries = [
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
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log("Name: ".concat(country.name));
    console.log("Continent: ".concat(country.continent));
    console.log("Population: ".concat(country.population, " million"));
    console.log("---");
}
