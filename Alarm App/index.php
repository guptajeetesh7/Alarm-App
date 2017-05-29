<?php
 $data = json_decode(file_get_contents("php://input"));

$date = mysql_real_escape_string($data->Date);
$hours = mysql_real_escape_string($data->Hours);
$minutes = mysql_real_escape_string($data->Minutes);
$am = mysql_real_escape_string($data->am);


mysql_connect('localhost','root','');

$sql = "CREATE DATABASE `alarm`";

mysql_query($sql);



$table ="CREATE TABLE `alarm`.`jeetesh` ( `id` INT NOT NULL AUTO_INCREMENT , `Date` INT NOT NULL , `Hours` INT NOT NULL , `Minutes` INT NOT NULL , `AM/PM` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB";

mysql_query($table);


mysql_select_db("alarm");

$query =  " INSERT INTO `jeetesh`( `Date`, `Hours`, `Minutes`, `AM/PM`) VALUES ( $date , $hours ,$minutes ,$am )" ;

if($query_run = mysql_query($query))
{
echo "done";
}

else {
	mysql_error();
}

echo mysql_error();

?>