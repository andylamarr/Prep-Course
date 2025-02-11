// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var newObject = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return 'Meow!';
    }
  }
  return newObject;
}

function agregarPropiedad (objeto, property) { //DUDA con el braket notation.
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

function invocarMetodo (objeto, metodo) {//DUDA ¿Por que no fucniono solo <metodo ();>
  //R: Por que hay que especificar que es de objeto y cómo no sabemos el nombre del método se utiliza [metodo].
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  objeto[metodo] ();

}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  return objetoMisterioso.numeroMisterioso * 5; 

  //OTRAS FORMAS DE SOLUCIONARLO;

  // var producto = 0;
  // objetoMisterioso.numeroMisterioso = objetoMisterioso.numeroMisterioso * 5;
  // producto = objetoMisterioso.numeroMisterioso;
  // return producto;

  //objetoMisterioso.numeroMisterioso = objetoMisterioso.numeroMisterioso * 5;
  //return objetoMisterioso.numeroMisterioso;


}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad]; //No sabemos cómo se llama la propiedad por lo que se utilizan los [];
  return objeto;

}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var newObject = {
    nombre: nombre,
    email: email,
    password: password,

  }
  return newObject;

}

function tieneEmail (usuario) {//DUDA ¿Cómo se verifica si hay un valor guardado en email del usuario?
  //R: Solo poniendo usuario.email

  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

    if (usuario.email) { //Sabemos cómo se llama la propiedad (email) por lo que se usa dot notation.
      return true;
    }
  return false; 

}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]) return true;
  return false;

}

function verificarPassword (usuario, password) {//DUDA No sé como diferenciar la password que recibo con la que tengo guardada.
  //R: Con '' o con el . accedes a la propiedad del usuario y con los [] accedes a la propiedad que te estan dando en la función. 
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:

  return (password === usuario.password  ); 

  
  //También se puede resolver así:
  //return (usuario['password'] === password);
  
  
  //También se puede resolver así:
  // var passwordEnviada = password;
  // if (passwordEnviada === usuario.password) {
  //   return true;
  // }
  // return false;

}

function actualizarPassword (usuario, nuevaPassword) {//FALTA ESPECIFICAR CÓMO ESTA GUARDADA LA PASSWORD ANTIGUA!!
  //R: ESTA GUARDADA COMO: password

  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:

  usuario.password = nuevaPassword;
  return usuario;

  //Tambien se puede resolver con:
  // usuario['password'] = nuevaPassword;
  // return usuario;


}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium (usuarios) {//DUDA No se como acceder a la propiedad esPremium de cada usuario dentro del arreglo de usuarios.
  //R: Primero hay que recorrer el arreglo de usuarios con un ciclo for para entrar a cada usuario.
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true
  }
  return usuarios;
 

}

function sumarLikesDeUsuario (usuario) { // SOY UN CRACK!!
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  var sumaLikes = 0;

  for (var i = 0; i < usuario.posts.length; i++) {
    sumaLikes = sumaLikes + usuario.posts[i].likes;
  }
  return sumaLikes;
}

function agregarMetodoCalculoDescuento (producto) { //DUDA No sé cómo agregar un método (funcion) nuevo a un objeto. 
  // R: Directo solo con el punto: producto.calcularPrecioDeDescuento = function () {}. OJO: El porcentaje de descuento ya lo tenemos NO lo vamos a recibir. 
  
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function () {
     return this.precio - (this.precio * this.porcentajeDeDescuento);

  }
  return producto;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
