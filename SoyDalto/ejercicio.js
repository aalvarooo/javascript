class celular {
	constructor(color,peso,tamaño,rdc,ram){


		this.color = color;
		this.peso= peso;
		this.tamaño = rdp;
		this.resolucionDecamara = tamaño;
		this.memoriaRam = ram;

		this.encendido = false;


	}
	presionarBotonEncendido(){
		if (this.encendido==false){
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert("el celular apagado")


		}
	}


	reiniciar(){
		if (this.encendido ==true){
			alert("reiniciando celular")
		} else{
			alert("el celular está apagado")
		}
	}

	tomarFotos(){
		alert("foto tomada en una resolucion de:"+ (this.resolucionDecamara)
	}

	grabarVideo(){
		alert("grabando video en" + this.resolucionDecamara);

	}

	mostrarInfo(){
		return `color :<b> ${this.color}  <br>
				peso :<b> ${this.peso} <br>
				tamaño:<b> ${this.tamaño} <br>
				Resolucion de resolucion:<b> ${this.} <br>
				resolucionDe video:<b> ${this.}  <br>
				Memoria Ram:<b> ${this.}  <br>
				`;

	}
}

celular1 = new celular("rojo", "150", "5", "  hd","1GB" );
celular2 = new celular("negro", "155", "6", "full hd","2GB" );
celular3 = new celular("blanco", "170", "5", "full hd","2GB" );




document.write(`
	${celular1.mobileInfo()} <br>
	${celular2.mobileInfo()} <br>
	${celular3.mobileInfo()} <br>
.);
	
 