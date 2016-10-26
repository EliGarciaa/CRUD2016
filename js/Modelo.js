// para guardar datos en la base de datos
// nombre de la clase con sus parametros
function guardarData(nombre, edad, ciudad, numero, correo) {
	this.nombre = nombre;
	this.edad = edad;
	this.ciudad = ciudad;
	this.numero = numero;
	this.correo = correo;
}

guardarData.prototype.GuardarDatos = function(){
	var _this = this;
	var DatosTodos = {};
		DatosTodos.nombre = this.nombre;
		DatosTodos.edad = this.edad;
		DatosTodos.ciudad = this.ciudad;
		DatosTodos.numero = this.numero;
		DatosTodos.correo = this.correo;
	var DatosTodosJson = JSON.stringify(DatosTodos);
	$.ajax ({
		url : 'Controlador.php',
		type : 'GET',
		data : {'DatosTodos' : DatosTodosJson},
		success : function(data){
			alert(data);
		}
	})
}




// para llamar datos de la base de datos
// nueva clase sin parametros
function getDATA(){

}

getDATA.prototype.MostrarDATOS = function(){
	var _this = this;
	$.ajax ({
		url : 'Controlador.php',
		type : 'GET',
		data : {'MostrarDATOS' : true},
		success : function(data){
			var Convertir = $.parseJSON(data);
			showCALL(Convertir);
			//alert(data);
		}
	})
}
