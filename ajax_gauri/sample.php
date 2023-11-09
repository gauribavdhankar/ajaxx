
<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $data = json_decode(file_get_contents('php://input'), true);

   $param1 = $data['param1'];
    $param2 = $data['param2'];
    $param3 = $data['param3'];

} else {

  header('HTTP/1.1 405 Method Not Allowed');
  exit();

}