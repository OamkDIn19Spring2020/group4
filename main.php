<?php
session_start();
include 'dbconnector.php';

if (isset($_SESSION['name']) == false) {
    header("Location:index.php");
}

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>SnekChat</title>

</head>

<body>


    <div class="contentbox">
        <div id="logoutbox">
        <h2 style="color:white; width:95%; margin:auto; text-align:center">  Logged in as  <?php echo $_SESSION['name']?>  </h2> <br>
            <form action='logout.php' id="logoutform">
                <input type="submit" value="logout" id="logoutbutton">
            </form>
        </div>
        <div class="maingrid">
            <div class="snakeframe">
                <iframe src="snake.php" name="snake" class="snake"></iframe>
            </div>
            <div class="scoreframe">
                <iframe src="topscores.php" name="topscores" class="topscores"></iframe>
            </div>
            <div class="chatframe">
                <iframe src="chat.php" name="chat" class="chat"></iframe>
            </div>
        </div>
    </div>

</body>

</html>