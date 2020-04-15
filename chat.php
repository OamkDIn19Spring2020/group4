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
    <div id='mainblock'>
        <h1> welcome <?php echo $_SESSION['name']  ?>!</h1>
        <div class="output">

        <?php
        $sql ="SELECT * FROM posts";
        $result = $conn->query($sql);

        if($result->num_rows > 0 ){
            while ($row = $result->fetch_assoc()){
                echo  "" . $row['name']. " " . "::" . $row['msg']. " -- " .$row['date']. "<br>" ;
                echo "<br>";  
            }
        }
        else {
            echo "0 results";
        }

        $conn->close();
        ?>





        </div>

        <form method="post"  action="send.php">
        <textarea name='msg' placeholder='enter your message' class="form-control"></textarea> <br>
        <input type="submit" value="send">
        </form>
        <br>
        <form action="logout.php">

            <input type="submit" value="logout" style="width: 100%">
        </form>
    </div>
</body>