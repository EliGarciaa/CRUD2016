<?php 

class guardarData
{
	public $correo;
	public $usuario;
	function __construct($correo, $usuario)
	{
		$this->correo = $correo;
		$this->usuario = $usuario;
	}
	public function getSave(){
		$conexion = new mysqli("localhost", "root", "JehovaLeon", "RegistroDeUsuarios");
		$query = "INSERT into UsuariosRegistro(Correo, Usuario) values('$this->correo', '$this->usuario')";
		$conexion->query($query);
		$conexion->close();
	}
}

//===============================================================================================================================================================
//***************************************************************************************************************************************************************

 ?>