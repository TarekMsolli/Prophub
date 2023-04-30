<?php

	
	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Authorization");
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "Prophub";

	$conn = new mysqli($servername, $username, $password, $dbname, 3306);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$demand = json_decode(file_get_contents('php://input'), true);

	if(!isset($demand['password']) || $demand['password'] === '') {
    	die("Password cannot be empty");
	}

	$sql = "INSERT INTO client (name, password, email) VALUES ('". mysqli_real_escape_string($conn, $demand['username']) ."', '". mysqli_real_escape_string($conn, $demand['password']) ."', '". mysqli_real_escape_string($conn, $demand['email']) ."')";
	

	$result = mysqli_query($conn,$sql);
?>
