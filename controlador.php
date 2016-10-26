<?php 

// para guardar datos y mostrarlos a la ves
	include 'modelo.php';

	if (isset($_GET["datosBox"])) {
		$guardar = json_decode($_GET["datosBox"],true);
		$save = new guardarData($guardar["correo"], $guardar["usuario"]);
		$mostrarTodo = $save->getSave();
		echo json_encode($mostrarTodo);
	}

//=========================================================================================================================
//*************************************************************************************************************************	

// mostrar datos de la base de datos
	if (isset($_GET["MostrarTodo"])) {
		$Nuevo = new getMostrar();
		$NuevoMostrar = $Nuevo->getMostrarTodo();
		echo json_encode($NuevoMostrar);
	}

//===========================================================================================================================
//***********************************************************************************************************************

// para buscar datos de la base de datos
	if (isset($_GET["SearchData"])) {
		$llamar = new getMostrar();
		$Concidencias = $llamar->getBuscarData($_GET["SearchData"]);
		echo json_encode($Concidencias);
	}

	if (isset($_GET["dropUser"])) {
		$user = new getMostrar();
		$statusDrop = $user->dropUser($_GET["dropUser"]);
		if ($statusDrop) {
			echo true;
		}
		else
			echo false;
	}
 ?>