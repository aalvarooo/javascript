const input = document.querySelector(".input-prueba")
const contenedor = document.querySelector(".seleccionado");
img.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.innerHTML= textoCompleto.subString(start,end);
})


