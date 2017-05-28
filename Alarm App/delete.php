<?php

include 'index.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$query = "DELETE FROM `info` WHERE `id`=".$id ;

if($query_run= mysql_query($query))

	{
		echo "done";
	} 

	else
		echo "ERror";


?>
