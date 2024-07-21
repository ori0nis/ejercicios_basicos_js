const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...

edad: 25;

// 2. Presentación al estilo Leia Organa:

let firstName = "Leia";
let surName = "Organa";
let age = 20;

console.log("Soy " + firstName + " " + surName + "," + " tengo " + age + " años y soy una princesa de Alderaan" + ".");

// 3. Calculando el coste total de sables de luz:

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

const totalPrice = sable1.precio + sable2.precio;
console.log(totalPrice);

// 4. Actualizando el precio final de las naves:

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);