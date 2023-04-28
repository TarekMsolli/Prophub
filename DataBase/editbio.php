<?php
  // Set headers to allow cross-origin requests
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

  // Get data from client request
  $demand = json_decode(file_get_contents('php://input'), true);

  // Update row in database
  $sql = "UPDATE client SET description = '{$demand['bio']}' WHERE id = '{$demand['id']}'";
  $result = mysqli_query($conn, $sql);

  // Check if query was successful
  if ($result === false) {
    // Query failed, return error message
    $error = array('error' => mysqli_error($conn));
    echo json_encode($error);
  } else {
    // Query succeeded, return success message
    $success = array('success' => 'Profile updated successfully');
    echo json_encode($success);
  }

  // Close database connection
  mysqli_close($conn);
?>
