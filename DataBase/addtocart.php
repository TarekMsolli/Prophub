<?php
	// This better fucking works
	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Authorization");
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "Prophub";
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname, 3306);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$demand = json_decode(file_get_contents('php://input'), true);
	// Add that shit in
	$sql = "INSERT INTO client_game values ({$demand['client_id']}, {$demand['game_id']})";

	$result = mysqli_query($conn,$sql);
?>
