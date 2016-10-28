<?php 

	include 'Modelo.php';

	if (isset($_GET["DatosTodos"])) {
		$Guardar = json_decode($_GET["DatosTodos"], true);
		//$nombre = $Guardar["nombre"];
		//echo $nombre;
		$newGuardar = new guardarData($Guardar['nombre'], $Guardar['edad'], $Guardar['ciudad'], $Guardar['numero'], $Guardar['correo']);
		$newGuardar->GuardarDatos();
			echo "Guardado Exitosamente";
	}


//***************************************************************************************************************
	if (isset($_GET["MostrarDATOS"])) {
		$mostra = new MostrarData();
		$MostrarTodo = $mostra->CallDatas();
		echo json_encode($MostrarTodo);

	}


//************************************************************************************************************************
	if (isset($_GET["BuscarData"])) {
		$search = new SearchData();
		$Buscar = $search->SearchDatos($_GET["BuscarData"]);
		echo json_encode($Buscar);
	}

//**********************************************************************************************
	if (isset($_GET["dropContacto"])) {
		$delete = new SearchData();
		$statusDrop = $delete->DeleteData($_GET["dropContacto"]);
		if ($statusDrop) {
			echo true;
		}
		else 
			echo false;
	}
	
 ?>