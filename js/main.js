//AQUI INICIA EL METODO DEL FORMULARIO
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

//AQUI INICIA APLICACION DEL CLIMA
//DATOS DE LA CIUDAD CULTURAL
let latitud = -24.183310220963904;
let longitud = -65.33129600437834;
let llave = "65a7805889ca0230a262d2c066fc9911";
const direccion =
  "https://api.openweathermap.org/data/2.5/weather?lat=-24.183310220963904&lon=-65.33129600437834&appid=65a7805889ca0230a262d2c066fc9911&units=metric&lang=es";
document.addEventListener("DOMContentLoaded", obtenerClima(direccion));