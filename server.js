const express = require('express');
const mysql = require('mysql');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


app.post('/highscores', (request, response) => {
    let username = request.body.name;
    let score = request.body.score;

    console.log(username, score);

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123",
        database: "opisk_t9tkdm00"
    })

    con.connect(function(err) {
        if (err) throw err
        var sql = `INSERT INTO scoreboard(name, score) VALUES ("${username}", "${score}")`;
        con.query(sql, (err) => {
            if (err) {
                response.json({
                    status: "error",
                    message: "score updated failed"
                });
            }

            console.log('score updated');
            response.json({
                status: "success",
                message: "score updated successfully"
            });
        });
    })
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));