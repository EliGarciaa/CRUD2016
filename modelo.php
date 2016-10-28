<?php 
// para guardar datos y mostralos a la ves
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
		$newConexion = $conexion->query($query);
		$query = "SELECT * from UsuariosRegistro where Id_Usuario = last_insert_id()";
		$getConexion = $conexion->query($query);
		$conexion->close();
		$Save = $getConexion->fetch_assoc();
		return $Save;
	}
}

//===============================================================================================================================================================
//***************************************************************************************************************************************************************

// para mostrar datos de la base de datos
class getMostrar
{
	function __construct()
	{
		# code...
	}

	public function getMostrarTodo(){
		$query = "SELECT * from UsuariosRegistro";
		$conexion = new mysqli("localhost", "root", "JehovaLeon", "RegistroDeUsuarios");
		$newcall = $conexion->query($query);
		$conexion->close();
		$Usuarios = array();
		while ($user = $newcall->fetch_assoc()){
			$userA = array();
			foreach ($user as $key => $value){
				$userA[$key] = $value;
			}
			array_push($Usuarios, $userA);
		}
		return $Usuarios;
	}

//===================================================================================================================================================
//***********************************************************************************************************************************************

// para buscar datos de la base de datos
	public function getBuscarData($concidencia){
		$query = "SELECT * from UsuariosRegistro where Usuario like '%$concidencia%'";
		$conexion = new mysqli("localhost", "root", "JehovaLeon", "RegistroDeUsuarios");
		$newCalls = $conexion->query($query);
		$conexion->close();
		$Calls = array();
		while ($llamada = $newCalls->fetch_assoc()) {
			$Users = array();
			foreach ($llamada as $key => $value) {
				$Users[$key] = $value;
			}
			array_push($Calls, $Users);
		}
		return $Calls;
	}

//============================================================================================================================
//**************************************************************************************************************************
	public function dropUser($idUser){
		$query = "DELETE from UsuariosRegistro where Id_Usuario = $idUser";
		$conexion = new mysqli("localhost", "root", "JehovaLeon", "RegistroDeUsuarios");
		if($conexion->query($query)){
			return true;
		}
		else
			return false;
	}
}


//*******************************************************************************************************************************************
class updateData
{
	public $mail;
	public $user;
	function __construct($mail, $user, $idUser)
	{
		$this->mail = $mail;
		$this->user = $user;
		$this->idUser = $idUser;
	}
	public function Updatee(){
		$conexion = new mysqli("localhost", "root", "JehovaLeon", "RegistroDeUsuarios");
		$query = "UPDATE UsuariosRegistro set Correo'$this->mail' , Usuario ='$this->user' where Id_Usuario = $this->idUser";
		$conexion->query($query);
		$query = "SELECT * from UsuariosRegistro where Id_Usuario = $this->idUser";
		$goConexion = $conexion->query($query);
		$conexion->close();
		$Save = $goConexion->fetch_assoc();
		return json_encode($Save);
	}
}

 ?>