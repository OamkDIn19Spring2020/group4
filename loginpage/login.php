<?php

session_start();
include 'dbconnector.php';

$usname=$_POST['Username1'];
$passw=$_POST['Password1'];

$sql="SELECT * FROM login WHERE Name='$usname' AND Password='$passw' ";
$result=$conn->query ($sql) ;

if(!$row=$result->fetch_assoc()) {
    header("Location:error.php");
}
else {
    $_SESSION['name']=$_POST['Username1'];
    header("Location:home.php");
}



?>