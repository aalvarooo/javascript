const nombre = document.getElementById("nombre");
const email = document.getElementById("mail");
const materia = document.getElementById("nombre");
const boton = document.getElementById("btn-enviar");
const resultado =document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault()
     let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red")

    } else {
        resultado.innerHTML = "solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.add("red");

    }
})
const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length >40) 
    {
       error[0] = true;
       error[1]= "el nombre no puede contener menos de 5 caracteres"
       
        return error;
    } 

else if (email.value.length <5 ||
    email.value.length >40||

    email.indexOf("@") == -1 ||
    email.indexOf(".") == -1 ) {
        error[0] = true;
        error[1] = "el email es invalido"
        return error;
    } else if{ materia.value < 4 || materia.value >40){
        error[0] =true;
        error[1] ="la materia no existe";
        return error;
    }

    }


    


    error[0] = false;
    return error;

}
