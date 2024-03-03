interface Car
{
    manufacturer: string;
    modelName: string;
    [key: string]: string | number; //key-string,value-string/number
}
  
function createCar(manufacturer: string, modelName: string, ...options: [string, string | number][]): Car
{
    const car: Car = 
    {
      manufacturer,
      modelName,
    };
  
    options.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
}
  
const myCar = createCar('Toyota', 'Corolla', ['color', 'blue'], ['features', 'navigation']);
  
console.log(myCar);