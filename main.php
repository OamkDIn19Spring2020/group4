<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>SnekChat</title>

</head>

<body>


    <div class="contentbox">
        <div id="logoutsbutton">
            <form action='logout.php' id="form">
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