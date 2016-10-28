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
	$("#tableOriginal").append("<div class='table-responsive'><table class='table table-striped table-condensed table-hover table-bordered' id='table1'><tr><th>Nombre</th><th>Edad</th><th>Ciudad</th><th>Numero</th><th>Correo</th><th>Editar</th><th>Eliminar</th></tr></table></div>");
	for (var i in Convertir) {
		$("#table1").append("<tr><td>"+Convertir[i]['Nombre']+"</td><td>"+Convertir[i]['Edad']+"</td><td>"+Convertir[i]['Ciudad']+"</td><td>"+Convertir[i]['Numero']+"</td><td>"+Convertir[i]['Correo']+"</td><td>"+'<button class="btn btn-warning" id='+i+' onclick="Update(this.id);"><span class="icon icon-bin"></span></button>'+"</td><td>"+'<button class="btn btn-danger" id='+i+' onclick="Delete(this.id);"><span class="icon icon-bin"></span></button>'+"</td></tr>");
	}	
}

//********************************************************************************************************************************************
function getSearch(Conciencia){
	MostrarData.BuscarData(Conciencia);
}

function showSearch(Convercion){
	document.getElementById("tableOriginal").innerHTML = "";
	$("#tableOriginal").append("<div class='table-responsive'><table class='table table-striped table-condensed table-hover table-bordered' id='table1'><tr><th>Nombre</th><th>Edad</th><th>Ciudad</th><th>Numero</th><th>Correo</th><th>Editar</th><th>Eliminar</th></tr></table></div>");
	for (var i in Convercion) {
		$("#table1").append("<tr><td>"+Convercion[i]['Nombre']+"</td><td>"+Convercion[i]['Edad']+"</td><td>"+Convercion[i]['Ciudad']+"</td><td>"+Convercion[i]['Numero']+"</td><td>"+Convercion[i]['Correo']+"</td><td>"+'<button class="btn btn-warning" id='+i+' onclick="Update(this.id);"><span class="icon icon-bin"></span></button>'+"</td><td>"+'<button class="btn btn-danger" id='+i+' onclick="Delete(this.id);"><span class="icon icon-bin"></span></button>'+"</td></tr>");
	}	
}



//**********************************************************************************************************
function Delete(noContact){
	//alert("Hola desde Delete");
	var Confirmacion = confirm("Deseas eliminar a " + MostrarData.Contacto[noContact]["Nombre"]);
	if (Confirmacion)
		MostrarData.dropContacto(noContact);
	
}