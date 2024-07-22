/* Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/


const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
    let longestWord = [];
    let anotherLongWord = longestWord.length; 
    for (let i = 0; i < stringList.length; i++) {
        let word = stringList[i];

      if (word.length > longestWord.length) {
        longestWord = word;
        console.log(word);
      } else if (anotherLongWord === longestWord.length) {
        console.log(anotherLongWord);
      }
    }
  }

  console.log(findLongestWord(avengers));

  // He decidido dejar este ejercicio porque no consigo sacarlo y llevo como 3 horas con él


