function getGuardar(){
	var dato1 = document.getElementById("correo").value;
	var dato2 = document.getElementById("usuario").value;

	var NewGuardar = new GuardarDatos(dato1, dato2);
	NewGuardar.getEnviar();

	document.getElementById("correo").value = "";
	document.getElementById("usuario").value = "";
}

//==============================================================================================
//**********************************************************************************************