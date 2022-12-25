const button = document.querySelector(".button");
const contenedor1= document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");

button.addEventListener("click",(e)=>{
    alert("di click en el button")
},true);

contenedor1.addEventListener("click", (e)=>{
    alert("di click en el contenedor 1 ")
});
contenedor2.addEventListener("click", (e)=>{
    alert("di click en el contenedor 2 ")
});


