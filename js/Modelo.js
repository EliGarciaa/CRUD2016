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



//*********************************************************************************************
// para llamar datos de la base de datos
// nueva clase sin parametros
function getDATA(){
	this.Contacto = [];
}

getDATA.prototype.MostrarDATOS = function(){
	var _this = this;
	$.ajax ({
		url : 'Controlador.php',
		type : 'GET',
		data : {'MostrarDATOS' : true},
		success : function(data){
			var Convertir = $.parseJSON(data);
			for (var i in Convertir) {
				_this.Contacto.push(Convertir[i]);
			}
			showCALL(Convertir);
			//alert(data);		
		}
	})
}



//********************************************************************************************
//para buscar datos
getDATA.prototype.BuscarData = function(Conciencia) {
	var _this = this;
	$.ajax ({
		url : 'Controlador.php',
		type : 'GET',
		data : {'BuscarData' : Conciencia},
		success : function(data){
		_this.Contacto = [];
			var Convercion = $.parseJSON(data);
			for (var i in Convercion) {
				_this.Contacto.push(Convercion[i]);
			}
			showSearch(Convercion);
			//alert(Convercion);
		}
	})
}

//*************************************************************************************************
// para eliminar datos
getDATA.prototype.dropContacto = function(noContacto){
	var _this = this;
	$.ajax ({
		url : 'Controlador.php',
		type : 'GET',
		data : {'dropContacto' : _this.Contacto[noContacto]["Id_Contacto"]},
		success : function(data){
			if (data == "1") {
				_this.Contacto.splice(noContacto,1);
				showCALL(_this.Contacto);
			}
			else
				result(false);
			//alert(data);
		}
	})
}
