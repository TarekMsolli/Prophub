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
	$sql = "SELECT * FROM client";

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