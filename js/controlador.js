//Para Colocar datos desde el sistema
var NewGuardar;
var positionSelected;
var sistema = new GuardarDatos();
var MostrarDATOS = new GuardarDatos();

function getGuardar(){
	var dato1 = document.getElementById("correo").value;
	var dato2 = document.getElementById("usuario").value;

	MostrarDATOS.setDatos(dato1, dato2);
	MostrarDATOS.getEnviar();

	document.getElementById("correo").value = "";
	document.getElementById("usuario").value = "";
}

function Cancelar(){
	alert("¿Desea cancelar el ingreso?");
	document.getElementById("correo").value = "";
	document.getElementById("usuario").value = "";
}

//==============================================================================================
//**********************************************************************************************

// para mostrar datos cada ves que se guarde uno
function showConvertir(){
	document.getElementById("MostrarTabla").innerHTML = "";
	$("#MostrarTabla").append("<table class='table table-striped table-bordered table-hover table-condensed' id='table1'><tr class='success'><th>Correo Electronico</th><th>Nombre del Usuario</th><th>Editar</th><th>Eliminar</th></tr></table>");
	var cantData = NewGuardar.users.length;
	alert(cantData);
}

//===============================================================================================
//***********************************************************************************************

// para mostrar datos de la base de datos
function getDatos(){
	MostrarDATOS.MostrarTodo();
}
/*
 **********************************
*/
function showMostrar(){
	document.getElementById("MostrarTabla").innerHTML = "";
	$("#MostrarTabla").append("<table class='table table-striped table-bordered table-hover table-condensed' id='table1'><tr class='success'><th>Correo Electronico</th><th>Nombre del Usuario</th><th>Editar</th><th>Eliminar</th></tr></table>");
	for(var i in MostrarDATOS.users) {
		$("#table1").append("<tr><td>"+MostrarDATOS.users[i]["Correo"]+"</td><td>"+MostrarDATOS.users[i]["Usuario"]+"</td><td>"+'<a class="btn btn-warning" id='+i+' onclick="ModalUpdate(this.id);"><span class="glyphicon glyphicon-wrench"></span></a>'+"</td><td>"+'<button class="btn btn-danger" id='+i+' onclick="Delete(this.id);"><span class="glyphicon glyphicon-trash"></span></button>'+"</td></tr>");
	};
}

//=======================================================================================================================================================================
//***********************************************************************************************************************************************************************

// para buscar datos atraves de un input
function getSearch(concidencia){
	MostrarDATOS.SearchData(concidencia);
}

function showBuscar(getConvert){
	document.getElementById("MostrarTabla").innerHTML = "";
	$("#MostrarTabla").append("<table class='table table-striped table-bordered table-hover table-condensed' id='table1'><tr class='success'><th>Correo Electronico</th><th>Nombre del Usuario</th><th>Editar</th><th>Eliminar</th></tr></table>");
	for(var i in getConvert) {
		$("#table1").append("<tr><td>"+getConvert[i]["Correo"]+"</td><td>"+getConvert[i]["Usuario"]+"</td><td>"+'<a class="btn btn-warning" id='+i+' onclick="ModalUpdate(this.id);"><span class="glyphicon glyphicon-wrench"></span></a>'+"</td><td>"+'<button class="btn btn-danger" id='+i+' onclick="Delete(this.id);"><span class="glyphicon glyphicon-trash"></span></button>'+"</td></tr>");
	};
}

//=============================================================================================================================================================================================================================
//*****************************************************************************************************************************************************************************************************************************

// para eliminar datos de la base de datos
function Delete(noRegistro){
	var confirmDrop = confirm("¿" +"Esta deguro de eliminar a " +MostrarDATOS.users[noRegistro]["Usuario"] +"?");
	if (confirmDrop)
		MostrarDATOS.dropUser(noRegistro);
}

function ModalUpdate(noUpdate){
	$("#modal-id").modal();
	positionSelected = noUpdate;
	document.getElementById("mail").value = MostrarDATOS.users[noUpdate]["Correo"];
	document.getElementById("user").value = MostrarDATOS.users[noUpdate]["Usuario"];
}

function updateUser(){
	var newMail = document.getElementById("mail").value;
	var newNameUser = document.getElementById("user").value;
	MostrarDATOS.UpdateData(newMail, newNameUser, MostrarDATOS.users[positionSelected]["Id_Usuario"]);
}