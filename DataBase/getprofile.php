<?php
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization");
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  
  // Set up database connection
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "Prophub";
  $conn = new mysqli($servername, $username, $password, $dbname, 3306);
  
  // Check database connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  // Get ID from client request
  $id = json_decode(file_get_contents('php://input'), true);
  
  // Query database for client with specified ID
  $sql = "SELECT * FROM client WHERE id = '{$id}'";
  $result = mysqli_query($conn, $sql);
  
  // Check if query was successful
  if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
  }
  
  // Convert query results to array and encode as JSON
  $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
  echo json_encode($data);
  
  // Close database connection
  mysqli_close($conn);
?>
