<?php 

class GuardarDATA
{
	public $nombre;
	public $edad;
	public $ciudad;
	public $numero;
	public $correo;
	function __construct($nombre, $edad, $ciudad, $numero, $correo)
	{
		$this->nombre = $nombre;
		$this->edad = $edad;
		$this->ciudad = $ciudad;
		$this->numero = $numero;
		$this->correo = $correo;
	}
	public function GuardarDatos(){
		$conexion = new mysqli("localhost", "root", "JehovaLeon", "AVC");
		$query = "INSERT into Contactos(Nombre, Edad, Ciudad, Numero, Correo) values('$this->nombre', '$this->edad', '$this->ciudad', '$this->numero', '$this->correo')";
		$newConexion = $conexion->query($query);
		$conexion->close();
	}
}






class MostrarData
{
	function __construct()
	{

	}
	public function CallDatas(){
		$query = "SELECT * from Contactos";
		$conexion = new mysqli("localhost", "root", "JehovaLeon", "AVC");
		$newCall = $conexion->query($query);
		$conexion->close();
		$BoxData = array();
		while ($contact = $newCall->fetch_assoc()) {
			$MyAVC = array();
			foreach ($contact as $key => $value) {
				$MyAVC[$key] = $value;
			}
			array_push($BoxData, $MyAVC);
		}
		return $BoxData;
	}
}

 ?>