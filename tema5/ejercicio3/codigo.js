/*
Para modificar los links del código anterior para que
 tengan el mismo comportamiento pero eliminando 
 su propiedad href, podemos utilizar el evento click 
 y asignarle las funciones irIBMassign y irIBMreplace, 
 respectivamente.

Para hacerlo, podemos utilizar la siguiente lógica:

*/

let linkAssign = document.getElementById("link-assign");
let linkReplace = document.getElementById("link-replace");

linkAssign.addEventListener("click", function(event) {
  event.preventDefault();
  irIBMassign();
});

linkReplace.addEventListener("click", function(event) {
  event.preventDefault();
  irIBMreplace();
});
/* En este ejemplo, suponemos que existen dos elementos 
a con los IDs link-assign 
y link-replace, respectivamente. Al hacer clic en 
cualquiera de ellos, se ejecutará la función 
correspondiente y se evitará que se siga el enlace 
(debido a la llamada a event.preventDefault()).

Para que esto funcione, es importante asegurarse 
de que el código JavaScript se ejecute después 
de que se hayan cargado los elementos en la página. 
Una forma de hacerlo es utilizar el evento 
DOMContentLoaded para ejecutar el código cuando 
el DOM esté listo:*/
document.addEventListener("DOMContentLoaded", function() {
    // Código para asignar eventos click a los links
  });

 