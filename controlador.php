<?php 

	include 'modelo.php';

	if (isset($_GET["datosBox"])) {
		$guardar = json_decode($_GET["datosBox"],true);
		$save = new guardarData($guardar["correo"], $guardar["usuario"]);
		$save->getSave();
			echo "Guardado Exitosamente";
	}

//=========================================================================================================================
//*************************************************************************************************************************	

 ?>