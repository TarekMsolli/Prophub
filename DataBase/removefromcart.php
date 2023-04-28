<?php
	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Authorization");
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	$servername = "localhost";
	$username = "root";/*etait root change*/
	$password = "";
	$dbname = "Prophub";
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname, 3306);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$demand = json_decode(file_get_contents('php://input'), true);

	$sql = "DELETE FROM client_game WHERE client_id={$demand['client_id']} AND game_id={$demand['game_id']}";

	$result = mysqli_query($conn,$sql);
	$myArray = array();
	if ($result->num_rows > 0) {
	// output data of each row
		while($row = $result->fetch_assoc()) {
		$myArray[] = array_map("utf8_encode", $row);
	}
		print json_encode($myArray);
	}
	else
	{
		echo "0 results";
	}
?>
