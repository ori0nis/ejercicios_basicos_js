/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función:*/


const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];


function averageWord(list) {
  let totalSumNum = 0;
  let totalSumWord = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
        totalSumNum += list[i];
    } else if (typeof list[i] === 'string') {
      totalSumWord += list[i].length;
    }
}
return totalSumNum + totalSumWord;
}

console.log(averageWord(mixedElements));