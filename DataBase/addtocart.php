<?php

require 'connect.php';

 $postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  //print_r($request);

  // Sanitize.
  $client_id = mysqli_real_escape_string($con, trim($request->client_id));
  $game_id = mysqli_real_escape_string($con, trim($request->game_id));



  $sql = "INSERT INTO `client_game`(
     `client_id`,
     `game_id`

 ) VALUES
  ('{$client_id}',
  '{$game_id}'
  )";

  // Store.


  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
  }
  else
  {
    http_response_code(422);
  }
}
