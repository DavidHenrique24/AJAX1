console.log("Hello, Ajax 1!");

function uno() {
 return "uno";
}

function dos() {
    setTimeout(() => {
        console.log("Ahora si dos");
        return "dos";
    },2000);
 
}

function tres() {  
 return "tres";
}

console.log(uno());
console.log(dos());
console.log(tres());

//Promesas ejemplo

const miPromesa = new Promise(() => {});

console.log('miPromesa', miPromesa);


const miPromesa2 = fetch('https://pokeapi.co/api/v2/pokemon/gengar')
console.log('miPromesa2', miPromesa2);

miPromesa2.then((respuesta) => {
    //funcion que se ejectura cuando la promesa se cumple
    console.log('respuesta', respuesta);
    console.log('respuesta.json()', respuesta.status);
    console.log("ok", respuesta.ok);

    const datos = respuesta.json();
    console.log('datos', datos);
    datos.then((datoJson) => {
        console.log('datoJson', datoJson.name);
    });


}); 
  

//Manera mas eficaz de hacerlo
const nombre = fetch('https://pokeapi.co/api/v2/pokemon/25')
.then((respuesta) => {
    return respuesta.json();
}).then((datos) => {
    console.log('nombre Pokemon', datos.name);
});
