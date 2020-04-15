<?php

session_start();
include 'dbconnector.php';

$msg=$_POST['msg'];
$name=$_SESSION['name'];


$sql ="INSERT INTO posts(msg,name,date) values ('$msg','$name',now())";
$result=$conn->query($sql);
header("Location:chat.php");

?>