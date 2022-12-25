const button = document.querySelector(".button");
const contenedor1= document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");

//doble click
// button.addEventListener("dblclick",(e)=>{
//     alert("di click en el button")
// },true);

// contenedor1.addEventListener("dblclick", (e)=>{
//     alert("di click en el contenedor 1 ")
// });
// contenedor2.addEventListener("dblclick", (e)=>{
//     alert("di click en el contenedor 2 ")
// });


//mouseover


// contenedor1.addEventListener("mouseover", (e)=>{
//     alert("di click en el contenedor 1 ")
// });

//mouseout

contenedor1.addEventListener("mouseleave",(e)=>{
    alert("di click en el contenedor 1 ")
});