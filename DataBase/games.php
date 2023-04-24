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
	$sql = "SELECT G.id as game_id,G.name as game_title,C.name as game_developer,G.price,G.rating,G.downloads,G.description,GROUP_CONCAT(T.name SEPARATOR ', ') AS tags FROM game G JOIN client C ON G.author_id = C.id JOIN game_tag GT ON G.id = GT.game_id JOIN Tag T ON GT.tag_name = T.name GROUP BY G.id";

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