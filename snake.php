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

    
    <div id="buttbox">
        <form method="post" action="sendscore.php" id="form">
         <p style="color:white"> score :  <input id="tosendscore" name="score" readonly > </p>
         <div style="margin: auto; width:50%" id="subbutt">
            <input type="submit" value="send score" id="sendscorebutton" style="opacity:0">
         </div>
        </form>
    </div>
    <canvas 
    id = snakeground
    width = 580
    height = 400
    ></canvas>
</body>

<script src = "snake.js"></script>

</html>