// variables [type annotations]
let toName: string = 'Patrick Lucas'
console.log(toName)

// arrays [type annotations]
let animals: string[] = ['Elefante', 'Gato', 'Cachorro', 'Guaxinim']
console.log(animals)

// objects [type annotations]
let car: {
  name: string,
  year: number,
  price: number,
}
car = {
  name: 'Toyota Yaris Sedan XS',
  year: 2019,
  price: 80000  
}
console.log(car)

// functions [type annotations]
function multiplyNumbers(num1: number, num2: number) {
  return num1 * num2
}
console.log(multiplyNumbers(2,5))