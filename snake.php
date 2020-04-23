<?php 
    session_start();
    include 'dbconnector.php';
    $username=$_SESSION['name'];
?>

<!DOCTYPE html>

<html>
<head>
<link rel="stylesheet" href="snakestyle.css">

<div type="hidden" id="username" name="username" value="<?php echo $username?>">
<div type="hidden" id="finalscore" name="finalscore" value="0">
    
</head>

<body bgcolor="yellow">

    
    <div id="scorebox"><div id="scoretext">Score:&nbsp&nbsp</div><div id=score>&nbsp0</div></div>
    <canvas 
    id = snakeground
    width = 580
    height = 400
    ></canvas>
</body>

<script src = "snake.js"></script>

</html>