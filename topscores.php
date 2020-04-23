<?php
session_start();
include 'dbconnector.php';

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="scorestyles.css">
    <title>TopScores</title>

</head>
<body bgcolor="purple">
    <div class=scoreholder>
        <div class=leaderboards id=leaderheader>Leaderboards</div>
        <div class=leaderboards>
        <?php

                
                $sql = "SELECT name, score FROM scoreboard order by score desc limit 100";
                 $result = $conn->query($sql);
        
                 if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo $row["name"] . " - " . $row["score"] . "<br>";
                            echo "<br>";
                        }
                    } else {
                        echo "no scores";
                    }
        
                    $conn->close(); //select names and scores from the leaderboard table, order them by score and loop print it out//
        ?>
        </div>
    </div>
</body>