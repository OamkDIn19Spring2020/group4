<?php

session_start();
include "pdodbconnection.php";



$name=$_POST['name'];
$score=$_POST['score'];

$sql ="INSERT INTO scoreboard(name,score) VALUES ('$name','$score')";
$db->query($sql);
header("Location:snake.php");

?>