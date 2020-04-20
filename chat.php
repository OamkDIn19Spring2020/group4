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
<h1> 		&emsp;   Logged in as  <?php echo $_SESSION['name']  ?></h1>
    <div id='mainblock'>
        <div class="output">

            <?php
            $sql = "SELECT * FROM posts";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo  "" . $row['name'] . " " . ": " . $row['msg'] . " &emsp; " . $row['date'] . "<br>";
                    echo "<br>";
                }
            } else {
                echo "0 results";
            }

            $conn->close();
            ?>
            <script>
                    window.scrollTo(0, document.body.scrollHeight);
            </script>




        </div>
        <div id="sending">
            <form method="post" action="send.php">
                <input type="text" name='msg' id="message" placeholder='enter your message' class="form-control"> <br>
                <script>
                    var input = document.getElementById("message");
                    input.addEventListener("keyup", function(event) {
                        if (event.keyCode === 13) {
                            $.get("send.php");
                        }
                    });
                </script>
                <input type="submit" value="send">
            </form>
            <br>
        </div>
    </div>
</body>