<?php
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// Receive user data from Angular POST request
$user = json_decode(file_get_contents('php://input'), true);

// Connect to Prophub database and query user data
$conn = new mysqli('localhost', 'root', '', 'Prophub');
$query = "SELECT * FROM client WHERE name = '{$user["username"]}'";
$result = $conn->query($query);
$row = $result->fetch_assoc();

// Return user data as JSON response
header('Content-Type: application/json');
echo json_encode($row);
?>
