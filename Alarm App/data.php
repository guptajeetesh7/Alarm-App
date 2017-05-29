<?php

mysql_connect('localhost','root','') or die("coulldnot connect");

$query = " CREATE DATABASE testDB";

if ($query_run = mysql_query($query)) {

	$query = "CREATE TABLE `testdb`.`jeetesh` ( `id` INT NOT NULL , `Date` INT NOT NULL , `Hours` INT NOT NULL , `Minutes` INT NOT NULL , `AM/PM` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB";

	if($query_run=mysql_query($query))
		echo "Done";
   }

else{

	mysql_select_db('testdb');
	echo mysql_error();

}
?>