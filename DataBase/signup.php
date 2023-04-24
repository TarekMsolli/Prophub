<?php
header('Content-Type: application/json');
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'Prophub';


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  $name = $data['name'];
  $password = $data['password'];


  $sql = "INSERT INTO client (name, password) VALUES ('$name', '$password')";
  if ($conn->query($sql) === TRUE) {
    echo json_encode(array('status' => 'success'));
  } else {
    echo json_encode(array('status' => 'error', 'message' => $conn->error));
  }

  $conn->close();
  exit();
}


http_response_code(400);
exit();
?>