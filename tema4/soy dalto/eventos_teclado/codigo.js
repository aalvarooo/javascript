const button = document.querySelector(".button");
const contenedor1= document.querySelector(".contenedor1");
const input-prueba = document.querySelector(".input-prueba");



input.addEventListener("keydown",(e)=>{
    console.log("una tecla fue presionada");
});

input.addEventListener("keypress", (e)=>{
    console.log("un usuario presiono una tecla");

});
input.addEventListener("keyup", (e)=>{
    console.log("una tecla fue soltada");
})