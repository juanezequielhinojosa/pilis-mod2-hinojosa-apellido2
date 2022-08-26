//APLICACION DEL CLIMA
/*function obtenerClima(direccion){
  console.log('clima');
 
  fetch(direccion, {
 
   })
  .then((response) => response.json())
  .then((json) => { 
      console.log(json);
     
  })
  .catch((err) => console.log('no funciona'+err));
}*/

//SEGUNDO PASO DE FORMUALRIO
function onClick(event) {
  event.preventDefault();
  this.style.backgroundColor = "black";
  console.log("click...");
  console.log(event);

  const mensaje = {
    comercio_nombre: document.getElementById("nombre-comercio").value,
    titular_nombre: document.getElementById("nombre-titular").value,
    telefono: document.getElementById("celular").value,
  };
  if (
    mensaje.comercio_nombre === "" ||
    mensaje.titular_nombre === "" ||
    mensaje.telefono === ""
  ) {
    Swal.fire("No Enviado", "Completa todos los campos!!!", "warning");
  } else {
    console.log(mensaje);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        Swal.fire("Enviado", "Gracias por participar!!!", "success");
        cleanForm();
        /* redirectUrl(); */
      })
      .catch((err) => console.log(err));
  }
}

function cleanForm() {
  let formulario = document.getElementById("formulario");
  formulario.reset();
}
function redirectUrl() {
  window.location.href = "https://google.com";
}

//AQUI INICIA EL METODO DEL FORMULARIO
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

//AQUI INICIA APLICACION DEL CLIMA
//DATOS DE LA CIUDAD CULTURAL
// estos son datos geograficos de la ciudad cultural, utilizados para la API
//latitud = -24.183310220963904;
// longitud = -65.33129600437834;
// llave = "65a7805889ca0230a262d2c066fc9911";
const direccion =
  "https://api.openweathermap.org/data/2.5/weather?lat=-24.183310220963904&lon=-65.33129600437834&appid=65a7805889ca0230a262d2c066fc9911&units=metric&lang=es";
document.addEventListener("DOMContentLoaded", obtenerClima(direccion));
