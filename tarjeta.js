console.log("Hello, mundo!");

//Pikachu

fetch('https://pokeapi.co/api/v2/pokemon/25')
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log('Nombre Pokémon:', datos.name);
    console.log('Imagen:', datos.sprites.front_default);
    document.querySelector('.name').textContent = datos.name;
    document.querySelector('.card-img-top').src = datos.sprites.front_default;
  })

  //Gengar
  fetch('https://pokeapi.co/api/v2/pokemon/gengar')
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log('Nombre Pokémon:', datos.name);
    console.log('Imagen:', datos.sprites.front_default);
    document.querySelector('.name2').textContent = datos.name;
    document.querySelector('.imagen2').src = datos.sprites.front_default;
  })


    //Gengar
    fetch('https://pokeapi.co/api/v2/pokemon/piplup')
    .then(respuesta => respuesta.json())
    .then(datos => {
      console.log('Nombre Pokémon:', datos.name);
      console.log('Imagen:', datos.sprites.front_default);
      document.querySelector('.name1').textContent = datos.name;
      document.querySelector('.imagen1').src = datos.sprites.front_default;
    })
  


    

    

    
    
  
  

