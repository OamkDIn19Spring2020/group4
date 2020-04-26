<?php
session_start();
include 'dbconnector.php';
?>
<meta http-equiv="refresh" content="5">
<?php
                $sql = "SELECT name, score FROM scoreboard order by score desc limit 10";
                 $result = $conn->query($sql);
        
                 if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo $row["name"] . " - " . $row["score"] . "<br>";
                            echo "<br>";
                        }
                    } else {
                        echo "no scores";
                    }
        
                    $conn->close(); //select names and scores from the leaderboard table, order them by score and loop print it out, if score is not saved as int in database it wont print properly in order
?>