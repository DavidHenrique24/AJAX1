fetch("https://uf4-aravel-davidhenrique-production.up.railway.app/api/tarjetas/10")
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log("Tarjeta:", data);

    const personaje = data.tarjeta;

    // Modifica la primera tarjeta
    document.querySelector(".name").textContent = personaje.nombre;
    document.querySelector(".card-img-top").src = personaje.imagen;

  })


  fetch("https://uf4-aravel-davidhenrique-production.up.railway.app/api/tarjetas/1")
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log("Tarjeta:", data);

    const personaje = data.tarjeta;

    // Modifica la primera tarjeta
    document.querySelector(".name1").textContent = personaje.nombre;
    document.querySelector(".imagen1").src = personaje.imagen;

  })

  fetch("https://uf4-aravel-davidhenrique-production.up.railway.app/api/tarjetas/5")
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log("Tarjeta:", data);

    const personaje = data.tarjeta;

    // Modifica la primera tarjeta
    document.querySelector(".name2").textContent = personaje.nombre;
    document.querySelector(".imagen2").src = personaje.imagen;

  })







