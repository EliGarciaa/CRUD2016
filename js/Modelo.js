// nombre de la clase con sus parametros
function guardarData(nombre, edad, ciudad, numero, correo) {
	this.nombre = nombre;
	this.edad = edad;
	this.ciudad = ciudad;
	this.numero = numero;
	this.correo = correo;
}

// un nuevo metodo de la clase
guardarData.prototype.GuardarDatos = function(){
	var _this = this;

// creamos un objeto que contendra los datos
	var DatosTodos = {};
		DatosTodos.nombre = this.nombre;
		DatosTodos.edad = this.edad;
		DatosTodos.ciudad = this.ciudad;
		DatosTodos.numero = this.numero;
		DatosTodos.correo = this.correo;
	var DatosTodosJson = JSON.stringify(DatosTodos);

// peticion ajax al controlador.php
	$.ajax ({
		url : 'Controlador.php',
		type : 'GET',
		data : {'DatosTodos' : DatosTodosJson},
		success : function(data){
			var Convertir = $.parseJSON(data);
			showGuardar(Convertir);
		}
	})
}

