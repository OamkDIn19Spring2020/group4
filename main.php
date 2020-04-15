

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>SnekChat</title>
    <style>
        body{
        background-image: url(images/background.jpg);
        background-size: cover 100%;
        background-repeat: no-repeat;}
        </style>
</head>

<body>

<div class="contentbox">
    <div class="login">Log In</div>
    <div class="maingrid">
        <div class="snakeframe">
            <iframe src="snake.html" name="snake" class ="snake"></iframe>
        </div>
        <div class="scoreframe">
            <iframe src="topscores.html" name="topscores" class="topscores"></iframe>
        </div>
        <div class="chatframe">
            <iframe src="chat.php" name="chat" class="chat"></iframe>
        </div>
    </div>
</div>

</body>
</html>