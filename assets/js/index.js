const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];

  let spanTotal = document.getElementById("spanTotal");
  let boton = document.getElementById("botonBuscar");

  
  function generadorInmueble (objetoParametro) {
    let templateHTML = `<div class="propiedad">
    <div class="img" style="background-image: url(' ${objetoParametro.src} ')"></div>
    <section>
        <h5>${objetoParametro.name} </h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${objetoParametro.rooms} </p>
            <p>Metros: ${objetoParametro.m} </p>
        </div>
        <p class="my-3"> ${objetoParametro.description} </p>
        <button class="btn btn-info ">Ver más</button>
    </section>
  </div>`
  
  return templateHTML
  
  }

  
  let html = ""
  for (let objetosArray of propiedadesJSON) {
     html += generadorInmueble(objetosArray)
  }
  
  let seccionPropiedades = document.querySelector(".propiedades")
  seccionPropiedades.innerHTML = html;
  spanTotal.innerHTML = propiedadesJSON.length;
  
  
  
  function funcionFiltrar() {
  
    //capturando valores de los input
  
    let cantidadCuartos = document.getElementById("cuartosInput").value;
    let metrosDesde = document.getElementById("desdeInput").value;
    let metrosHasta = document.getElementById("hastaInput").value;


    // condiciones para evitar campos vacios

    if (cantidadCuartos == "" || metrosDesde  == "" || metrosHasta == ""){alert(`Debes completar todos los campos`)}

    else{
    
    let htmlFiltrado = ``;
    let contadorTotal = 0;

    //recorriendo el array y creando la plantilla de cada carta de los inmuebles

    for (const objetosArray of propiedadesJSON) {

      //condiciones para filtrar los resultados

      if(objetosArray.rooms == cantidadCuartos && (objetosArray.m >= metrosDesde && objetosArray.m <= metrosHasta)){
      htmlFiltrado += generadorInmueble(objetosArray)
      contadorTotal++;}
      
    }


    // seleccionamos el elemento html y dibujamos las cartas de inmuebles en la pagina

    let seccionPropiedades = document.querySelector(".propiedades")
    seccionPropiedades.innerHTML = htmlFiltrado;
    spanTotal.innerHTML = contadorTotal;
  };
  
}

boton.addEventListener("click", function() {funcionFiltrar()})