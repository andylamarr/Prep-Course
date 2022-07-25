// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]; 

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) { //DUDA
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var miArreglo = [];
  for (var i = 0; i < array.length; i++) {
    miArreglo.push(array[i]+1);
  }
    return miArreglo;
}



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) { //DUDA
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var cadena = palabras.join(' ');
  return cadena;

}


function arrayContiene(array, elemento) { //DUDA
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //var comparativa = elemento;
  for (var i = 0; i < array.length; i++) {
    if (elemento ===  array[i]) {
      return true;
  }
}
 
  return false;
}


function agregarNumeros(numeros) { //Utilicé el +-
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código: 
  var sum = 0;
  for (var i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum = 0;
  var promedio = 0; 
  for (var i = 0; i < resultadosTest.length; i++) {
    sum += resultadosTest[i];
    promedio = sum / resultadosTest.length;

  }
  return promedio; 
}


function numeroMasGrande(numeros) { //DUDA (NO ES DUDA ES NUEVO APRENDISAJE)
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = numeros[0];
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;

  //También se puede resolver con: <return Math.max(...numeros)>
  //Con los 3 puntos estamos jalando todos los valores del arreglo.
}


function multiplicarArgumentos() { //DUDA
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  // 'arguments' es una palabra reservada que básicamente es un arreglo.

  if (arguments.length === 0) {
    return 0;
  }
  var producto = 1;
  for (var i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];

  }
  return producto;
 
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí:

  var cantidad = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      cantidad = cantidad + 1;
      //Tambiés se puede con: 
      // cantidad++;
      // cantidad += 1;

    }
  }
  return cantidad; 

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  if (numeroDeDia === 1 || numeroDeDia === 7) return 'Es fin de semana';
  if (numeroDeDia > 1 && numeroDeDia < 7) return 'Es dia Laboral';


  
} 


function empiezaConNueve(n) { //DUDA (Aprendí a utilizar .toString())
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí:
  var string = n.toString();
  if (string[0] == 9) return true;
  return false;

  //También se podría resolver con: <return n.toString()[0] === '9';>
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:

  // var aux = arreglo[0];
  // for (var i = 0; i < arreglo; i++) {
  //   if (arreglo[i] !== aux) return false;
  // }
  // return true;

  for (var i = 0; i < arreglo.length; i++) {
    if ( arreglo[0] !== arreglo[i] ) {
      return false;

    }
  }
  return true; 
  
} 


function mesesDelAño(array) { //DUDA (VE COMO SE ACOMODAN LOS IF'S Y CUANDO SE RETORNA miArray)
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var miArray = [];
  for (var i = 0; i < array.length; i++) {
    var mesDado = array[i];
    if (mesDado === 'Enero' || mesDado === 'Marzo' || mesDado === 'Noviembre')
    miArray.push(mesDado);
    
  }

  if (miArray.length !== 3) return 'No se encontraron los meses pedidos';
  return miArray;
  

}


function mayorACien(array) { //DUDA
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      newArray.push(array[i])
    }
  }
  return newArray;
}


function breakStatement(numero) { //DUDA VE COMO SE USARON LOS IF'S Y EL FOR Y LAS 3 VARIABLES DECLARADAS.
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var myArray = [];
  var acc = numero;
  var aux = 1;

  for (var i = 1; i <= 10; i++) {
    acc = acc + 2;
    if (acc === aux) { break; } // break corta el ciclo for y salta a las siguientes lineas fuera del for.
    aux = aux + 1;
    myArray.push(acc);
  }

  if (acc === aux ) return 'Se interrumpió la ejecución';
  return myArray;
}


function continueStatement(numero) { //DUDA
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  //NOS PIDE QUE A LA ITERACIÓN 5 NO SE LE HAGA NADA, NO SE SUME.
  // Tu código:
  var myArray = [];
  var acc = numero;

  for (var i = 1; i <= 10; i++) {
    if (i === 5) { continue; } //CUANDO i VALE 5 NO EJECUTA LAS SIGUIENTES 2 LINEAS Y CONTINUA EL CICLO. VER LA CLASE DEL 08/JUL 2:05:34
    acc = acc + 2;
    myArray.push(acc);
  }
  return myArray;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
