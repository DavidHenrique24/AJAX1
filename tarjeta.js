console.log("Hello, mundo!");

//5 Pokemones en cascasda usando then y array push
const pokemones = [];

fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log("Nombre Pokémon:", datos.id, datos.name);
    pokemones.push(datos.name);
    fetch("https://pokeapi.co/api/v2/pokemon/2")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log("Nombre Pokémon:", datos.id, datos.name);
        pokemones.push(datos.name);
        fetch("https://pokeapi.co/api/v2/pokemon/3")
          .then((respuesta) => respuesta.json())
          .then((datos) => {
            console.log("Nombre Pokémon:", datos.id, datos.name);
            pokemones.push(datos.name);
            fetch("https://pokeapi.co/api/v2/pokemon/4")
              .then((respuesta) => respuesta.json())
              .then((datos) => {
                console.log("Nombre Pokémon:", datos.id, datos.name);
                pokemones.push(datos.name);
                fetch("https://pokeapi.co/api/v2/pokemon/5")
                  .then((respuesta) => respuesta.json())
                  .then((datos) => {
                    console.log("Nombre Pokémon:", datos.id, datos.name);
                  });
              });
          });
      });
  });


//5 pokemones en casacada usando async await 

async function obtenerPokemones() {
  try{
    const pokemon1=await fetch("https://pokeapi.co/api/v2/pokemon/6").then(respuesta => respuesta.json()); console.log( pokemon1.name); 
    const pokemon2=await fetch("https://pokeapi.co/api/v2/pokemon/7").then(respuesta => respuesta.json()); console.log(pokemon2.name);
    const pokemon3=await fetch("https://pokeapi.co/api/v2/pokemon/8").then(respuesta => respuesta.json());  console.log(pokemon3.name);
    const pokemon4=await fetch("https://pokeapi.co/api/v2/pokemon/9").then(respuesta => respuesta.json()); console.log(pokemon4.name);
    const pokemon5=await fetch("https://pokeapi.co/api/v2/pokemon/10").then(respuesta => respuesta.json());  console.log(pokemon5.name);
  }catch(error){
    console.error("Error al obtener los pokemones:", error);
  }
}
obtenerPokemones();








// fetch('https://pokeapi.co/api/v2/pokemon/25')
//   .then(respuesta => respuesta.json())
//   .then(datos => {
//     console.log('Nombre Pokémon:', datos.name);
//     console.log('Imagen:', datos.sprites.front_default);
//     document.querySelector('.name').textContent = datos.name;
//     document.querySelector('.card-img-top').src = datos.sprites.front_default;

//       //Gengar
//   fetch('https://pokeapi.co/api/v2/pokemon/gengar')
//   .then(respuesta => respuesta.json())
//   .then(datos => {
//     console.log('Nombre Pokémon:', datos.name);
//     console.log('Imagen:', datos.sprites.front_default);
//     document.querySelector('.name2').textContent = datos.name;
//     document.querySelector('.imagen2').src = datos.sprites.front_default;

//     //Gengar
//     fetch('https://pokeapi.co/api/v2/pokemon/piplup')
//     .then(respuesta => respuesta.json())
//     .then(datos => {
//       console.log('Nombre Pokémon:', datos.name);
//       console.log('Imagen:', datos.sprites.front_default);
//       document.querySelector('.name1').textContent = datos.name;
//       document.querySelector('.imagen1').src = datos.sprites.front_default;

//     //Gengar
//     fetch('https://pokeapi.co/api/v2/pokemon/20')
//     .then(respuesta => respuesta.json())
//     .then(datos => {
//       console.log('Nombre Pokémon:', datos.name);
//       console.log('Imagen:', datos.sprites.front_default);
//       document.querySelector('.name1').textContent = datos.name;
//       document.querySelector('.imagen1').src = datos.sprites.front_default;

//     //Gengar
//     fetch('https://pokeapi.co/api/v2/pokemon/50')
//     .then(respuesta => respuesta.json())
//     .then(datos => {
//       console.log('Nombre Pokémon:', datos.name);
//       console.log('Imagen:', datos.sprites.front_default);
//       document.querySelector('.name1').textContent = datos.name;
//       document.querySelector('.imagen1').src = datos.sprites.front_default;
//     })
//     })
//     })
//   })
//   })
