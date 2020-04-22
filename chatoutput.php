<?php
session_start();
include 'dbconnector.php';
?>
<head>
<meta http-equiv="refresh" content="15">
<style>
    body{
        background-color: #689CD2;
    box-shadow: 0px 1px 1px #000;
    height:255px;
    margin-bottom: 20px;
    padding: 10px;
    width: 95%;
    }
</style>
</head>
<body>
<div class="output">

            <?php
            
            $sql = "SELECT * from(SELECT * FROM posts order by date desc limit 15) a order by date asc";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo  "" . $row['name'] . " " . "::" . $row['msg'] . " -- " . $row['date'] . "<br>";
                    echo "<br>";
                }
            } else {
                echo "0 results";
            }

            $conn->close();
        
            ?>





        </div>
        <script>
                    window.scrollTo(0, document.body.scrollHeight);
    </script>
</body>