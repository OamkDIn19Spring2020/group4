<?php

session_start();
include 'dbconnector.php';

$score=$_POST['score'];
$name=$_SESSION['name'];


$sql ="INSERT INTO scoreboard(name,score) values ('$name','$score')";
$result=$conn->query($sql);
header("Location:snake.php");

?>