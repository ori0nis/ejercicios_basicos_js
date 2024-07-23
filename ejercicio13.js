/* Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función:*/



const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  // Tengo dos soluciones. No he borrado la Versión 1 porque creo que el planteamiento está bien.

  // Version 1:

    function nameFinder(nameList) {
    
    let nameIsInside = 'Clint';

    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i].includes(nameIsInside)) {
            let position = nameList.indexOf('Clint');
            console.log(position);
            return true
        } else if (nameList[i].includes('Clint') === false) {
            
        }
  } return false;
  }

    console.log(nameFinder(names));
    
    // Versión 2:

    /* function nameFinder(nameList, name) {
        
        for (let i = 0; i < nameList.length; i++) {
            if (nameList[i] === name) {
                let position = nameList.indexOf(name);
                console.log(position);
                return true;
            }
        }
        return false;
    }

    console.log(nameFinder(names, 'Clint')); */