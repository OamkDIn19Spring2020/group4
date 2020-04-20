<?php
session_start();
?>
<!DOCTYPE html>
<html>
<meta charset="utf-8">

<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="style.css">


</html>

<head>

<body>

    <header>

        <nav class="nav-header-main">
            
           
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blobfish</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div class="head-login">
                <?php
                 if (isset($_SESSION['userId'])) {
                    echo '
                    <form action="includes/logout.inc.php" method="post">
                <button type="submit" name="logout-submit">Logout</button>
                </form>';
                } else {
                    echo ' <form action="includes/login.inc.php" method="post">
                    <input type="text" name="mailuid" placeholder="Usename/Email...">
                    <input type="password" name="pwd" placeholder="Password">
                    <button type="submit" name="login-submit">Login</button>
                </form>
                <a href="signup.php">Signup</a>';
                }
                ?>
               
            </div>
        </nav>
    </header>