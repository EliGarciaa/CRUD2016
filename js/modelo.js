function GuardarDatos(correo, usuario){
	this.correo = correo;
	this.usuario = usuario;
}

GuardarDatos.prototype.getEnviar = function(){
	var _this = this;

	var datosBox = {};
		datosBox.correo = this.correo;
		datosBox.usuario = this.usuario;
	var datosBoxJson = JSON.stringify(datosBox);

	$.ajax ({
		url : 'controlador.php',
		type : 'GET',
		data : {'datosBox' : datosBoxJson},
		success : function(data){
			alert(data);
		}
	})
}

//==========================================================================================
//******************************************************************************************
