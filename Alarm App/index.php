<?php
 $data = json_decode(file_get_contents("php://input"));

$date = mysql_real_escape_string($data->Date);
$hours = mysql_real_escape_string($data->Hours);
$minutes = mysql_real_escape_string($data->Minutes);


mysql_connect('localhost','root','');
mysql_select_db("alarm");

$query =  "INSERT INTO `info`( `Date`, `Hours`, `Minutes`) VALUES ( $date ,$hours ,$minutes)" ;

if($query_run = mysql_query($query))
{
echo "done";
}

else {
	mysql_error();
}

?>