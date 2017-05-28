<?php

mysql_connect('localhost','root','');
mysql_select_db('alarm');

$output= array();


$query = "SELECT `id`,`Date`, `Hours`, `Minutes` FROM `info` ";

if($query_run=mysql_query($query))
{

	while ($row = mysql_fetch_assoc($query_run)) {
	
			$output[] =$row; 
	}

	echo json_encode($output);
}


?>
