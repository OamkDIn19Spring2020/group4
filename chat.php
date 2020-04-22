<?php
session_start();
include 'dbconnector.php';
?>

<!DOCTYPE html>

<head>
    <title>HOME</title>
    <link rel="stylesheet" type="text/css" href="chat.css">
</head>

<body>

<!--<h1> 		&emsp;   Logged in as  <?php //echo $_SESSION['name']  ?>  </h1>   this script displays username  -->


    <div id='mainblock'>
        <div class="output">

        <iframe src="chatoutput.php" id="outputframe"></iframe>

        </div>
        <div id="sending">
            <form method="post" action="send.php" id="sendingform">
                <input type="text" name='msg' id="message" placeholder='enter your message' class="form-control"> <br><br>
                <script>
                    var input = document.getElementById("message");
                    input.addEventListener("keyup", function(event) {
                        if (event.keyCode === 13) {
                            $.get("send.php");
                        }
                    });
                </script>
                <div id="sendbutton" align="center">
                <input type="submit" value="send" id="sendbutton2" >
                </div>
            </form>
        </div>
    </div>
    <script>
                    window.scrollTo(0, document.body.scrollHeight);
    </script>
</body>