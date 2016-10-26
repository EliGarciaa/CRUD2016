function getGuardar(){
	var dato1 = document.getElementById("nombre").value;
	var dato2 = document.getElementById("edad").value;
	var dato3 = document.getElementById("ciudad").value;
	var dato4 = document.getElementById("numero").value;
	var dato5 = document.getElementById("correo").value;

	var datos = new guardarData (dato1, dato2, dato3, dato4, dato5);
	datos.GuardarDatos();
}