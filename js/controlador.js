//Para Colocar datos desde el sistema
var sistema = new GuardarDatos();
var MostrarDATOS = new GETMostrar();

function getGuardar(){
	var dato1 = document.getElementById("correo").value;
	var dato2 = document.getElementById("usuario").value;

	var NewGuardar = new GuardarDatos(dato1, dato2);
	NewGuardar.getEnviar();

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
function showConvertir(getConvertir){
	$("#table1").append("<tr><td>"+getConvertir["Id_Usuario"]+"</td><td>"+getConvertir["Correo"]+"</td><td>"+getConvertir["Usuario"]+"</td><td>"+'<button class="btn btn-warning"><span class="glyphicon glyphicon-wrench"></span></button>'+"</td><td>"+'<button class="btn btn-danger" id='+i+' onclick="Delete(this.id);"><span class="glyphicon glyphicon-trash"></span></button>'+"</td></tr>");
}

//===============================================================================================
//***********************************************************************************************

// para mostrar datos de la base de datos
function getDatos(){
	MostrarDATOS.MostrarTodo();
}

function showMostrar(getdatos){
	document.getElementById("MostrarTabla").innerHTML = "";
	$("#MostrarTabla").append("<table class='table table-striped table-bordered table-hover table-condensed' id='table1'><tr class='success'><th>Correo Electronico</th><th>Nombre del Usuario</th><th>Editar</th><th>Eliminar</th></tr></table>");
	for(var i in getdatos) {
		$("#table1").append("<tr><td>"+getdatos[i]["Correo"]+"</td><td>"+getdatos[i]["Usuario"]+"</td><td>"+'<button class="btn btn-warning" onclick="Editar();"><span class="glyphicon glyphicon-wrench"></span></button>'+"</td><td>"+'<button class="btn btn-danger" id='+i+' onclick="Delete(this.id);"><span class="glyphicon glyphicon-trash"></span></button>'+"</td></tr>");
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
		$("#table1").append("<tr><td>"+getConvert[i]["Correo"]+"</td><td>"+getConvert[i]["Usuario"]+"</td><td>"+'<button class="btn btn-warning" onclick="Editar();"><span class="glyphicon glyphicon-wrench"></span></button>'+"</td><td>"+'<button class="btn btn-danger" id='+i+' onclick="Delete(this.id);"><span class="glyphicon glyphicon-trash"></span></button>'+"</td></tr>");
	};
}

//=============================================================================================================================================================================================================================
//*****************************************************************************************************************************************************************************************************************************

// para eliminar datos de la base de datos
function Delete(noRegistro){
	var confirmDrop = confirm("¿ " +"Esta deguro de eliminar a " +MostrarDATOS.users[noRegistro]["Usuario"] +" ?");
	if (confirmDrop)
		MostrarDATOS.dropUser(noRegistro);
}
