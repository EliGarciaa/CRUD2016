var MostrarData = new getDATA();

function getGuardar(){
	var dato1 = document.getElementById("nombre").value;
	var dato2 = document.getElementById("edad").value;
	var dato3 = document.getElementById("ciudad").value;
	var dato4 = document.getElementById("numero").value;
	var dato5 = document.getElementById("correo").value;

	var datos = new guardarData (dato1, dato2, dato3, dato4, dato5);
	datos.GuardarDatos();

	document.getElementById("nombre").value = "";
	document.getElementById("edad").value = "";
	document.getElementById("ciudad").value = "";
	document.getElementById("numero").value = "";
	document.getElementById("correo").value = "";
}





function CallData(){
	MostrarData.MostrarDATOS();
}

function showCALL(Convertir){
	document.getElementById("tableOriginal").innerHTML = "";
	$("#tableOriginal").append("<div class='table-responsive'><table class='table table-striped table-condensed table-hover table-bordered' id='table1'><tr><th>Nombre</th><th>Edad</th><th>Ciudad</th><th>Numero</th><th>Correo</th><th>Eliminar</th></tr></table></div>");
	for (var i in Convertir) {
		$("#table1").append("<tr><td>"+Convertir[i]['Nombre']+"</td><td>"+Convertir[i]['Edad']+"</td><td>"+Convertir[i]['Ciudad']+"</td><td>"+Convertir[i]['Numero']+"</td><td>"+Convertir[i]['Correo']+"</td><td>"+'<button class="btn btn-danger"><span class="icon icon-bin"></span></button>'+"</td></tr>");
	}	
}





function getSearch(Conciencia){
	alert("Conextado Esitosamente");
}