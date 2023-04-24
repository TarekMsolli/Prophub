<?php
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
	// echo "Connected successfully\n";
	$sql = "SELECT cg.client_id, ROW_NUMBER() OVER (ORDER BY cg.client_id) as row_number, g.name as game_name, g.price as game_price, g.id as game_id
	FROM client_game cg
	JOIN game g ON g.id = cg.game_id;";

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