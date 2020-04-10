<?php
include 'dbconnector.php';
$usname=$_POST['Uname'];
$passw=$_POST['Password'];
$em=$_POST['Email'];

$sql="insert into login (Name, Password, email)
values ('$usname', '$passw', '$em')";
$result=$conn->query ($sql) ;

header("Location:index.php");

?>