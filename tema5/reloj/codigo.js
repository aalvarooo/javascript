// Obtener las cajas de texto del reloj
const horasInput = document.getElementById('horas');
const minutosInput = document.getElementById('minutos');
const segundosInput = document.getElementById('segundos');
const horaslineasInput = document.getElementById('horas-lineas');
const minutosLineasInput = document.getElementById('minutos-lineas');
const segundosLineasInput = document.getElementById('segundos-lineas');

// Cadena de rayas
const lineas = 'ooooooooooooooooooooooooooooooooooooooooooooooooooo';

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

function updateClock() {
  // Obtener la fecha y hora actual
  const now = new Date();
  // Obtener las horas, minutos y segundos
  const horas = now.getHours();
  const minutos = now.getMinutes();
  const segundos = now.getSeconds();
  // Calcular el número de rayas para cada unidad de tiempo
  const horasLineas = lineas.substring(0, horas);
  const minutosLineas = lineas.substring(0, minutos);
  const segundosLineas = lineas.substring(0, segundos);
  // Actualizar las cajas de texto con los valores obtenidos
  horasInput.value = horas;
  minutosInput.value = minutos;
  segundosInput.value = segundos;
  horaslineasInput.value = horasLineas;
  minutosLineasInput.value = minutosLineas;
  segundosLineasInput.value = segundosLineas;
}