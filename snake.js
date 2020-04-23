/*Snake 
OAMK Project
Kim Satokanags 2020
*/




//variables for keeping track of game colors for easier editing
let ground_color = "antiquewhite";
let border_color = "black";
let snakebody_color = "cyan";
let snakeborder_color= "green";
let menu_bg = "grey";
let menu_border = "red";
let button_bg = "brown" ;
let button_border = "Orange" ;

let baitborder_color = "blue";

let bait_color_int = Math.floor( Math.random() * 0xFFFFFF ) ;
let bait_color = "000000" + bait_color_int.toString( 16 ) ;
bait_color = bait_color.slice(bait_color.length - 6 ) ;

//get canvas context
const snakecanvas = document.getElementById("snakeground");
const ctx = snakecanvas.getContext("2d");


//this array is the snake, starting snake lenght is 3 segments
let snake = [ {x:200, y:200}, {x:190, y:200}, {x:180, y:200}]

//game variables
let sessionname = document.getElementById("username"), name;
username = username.getAttribute("value");
let score = 0;
let dx = 10; //direction x axis
let dy = 0; //direction y axis
let baitx;
let baity;
let snake_speed = 150;
let gameinprogress = false;

//menu variables

let middlex = snakecanvas.width/2;
let middley = snakecanvas.height/2;

let buttonx = snakecanvas.width/2-snakecanvas.width/12;
let buttony = snakecanvas.height/1.6;
let buttonwidth= snakecanvas.width/6;
let buttonheight = snakecanvas.height/12;



mainemenu();//loads the start menu


document.addEventListener("keydown", controls);
document.addEventListener('click', function(evt) {
    var mouseloc = getmouseloc(snakecanvas, evt);
    if (buttonclick(mouseloc)) {
        if(gameinprogress == false){
        cleancanvas();
        resetgame();
        startgame();
        }
    } 
}, false);

function getmouseloc(snakecanvas, event) {
    var rect = snakecanvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
} //gets mouse xy for clicking new game

function buttonclick(pos){
    return pos.x > buttonx && pos.x < buttonx+buttonwidth && pos.y < buttony+buttonheight && pos.y > buttony
}//check if the click is on top of the button


function resetgame(){
    snake.length = 0;
    snake = [ {x:200, y:200}, {x:190, y:200}, {x:180, y:200}]
    score = 0;
    dx = 10;
    dy = 0;
    snake_speed = 150;
    document.getElementById("score").innerHTML = score;
}   //resets game parameters

function menubox(){
    ctx.fillStyle = menu_bg ;
    ctx.strokeStyle = menu_border ;
    ctx.fillRect(snakecanvas.width/4, snakecanvas.height/4, snakecanvas.width/2, snakecanvas.height/2);
    ctx.strokeRect(snakecanvas.width/4, snakecanvas.height/4, snakecanvas.width/2, snakecanvas.height/2) ;
}   //draws menu box

function newgamebutton(){

    ctx.fillStyle = button_bg ;
    ctx.strokeStyle = button_border ;
    ctx.fillRect(buttonx, buttony, buttonwidth, buttonheight);
    ctx.strokeRect(buttonx, buttony, buttonwidth, buttonheight) ;

    ctx.fillStyle = "black" ;
    ctx.font = "16px Georgia";
    ctx.textAlign="center"; 
    ctx.textBaseline = "middle";
    ctx.fillText("New Game", (snakecanvas.width / 2 ), snakecanvas.height/1.5);  

}   //draws new game button


function mainemenu(){
    cleancanvas()
    menubox()
    newgamebutton()
    ctx.textAlign="center"; 
    ctx.textBaseline = "middle";

    ctx.fillStyle = "black" ;
    ctx.font = "20px Georgia";
    ctx.fillText("Snake", middlex, middley-50);
    
    ctx.fillText("Hello, " + username , middlex, middley-10);

    let guide = "W, A, S, D to move." ;
    ctx.fillStyle = "black" ;
    ctx.font = "16px Georgia";
    ctx.fillText(guide, middlex, middley+20);

}   //Start menu

function uploadscore(){
    console.log("Uploading scores")

    let scoredata = new FormData();
    scoredata.append("name", document.getElementById("username").value);
    scoredata.append("score", document.getElementById("finalscore").value);
    
    let xhtp = new XMLHttpRequest() ;
    xhtp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Score uploaded")
       } else {
           console.log("upload failed")
       }
    };
    xhtp.open("POST", "upscore.php", true);
    xhtp.send(scoredata);
    return false;

}   //doesnt work yet, uploads the user score in to database, disabled in the gameend code for now

function gameend(){

    document.getElementById("finalscore").value = score ;
    gameinprogress = false;
    
    menubox();

    let endtext = "Game Over"
    ctx.fillStyle = "black" ;
    ctx.font = "20px Georgia";
    ctx.fillText(endtext, middlex, middley-50);

    let scoretext = "Final Score" ;
    ctx.fillText(scoretext, middlex, middley-10);

    let finalscore = document.getElementById("finalscore").value ;
    ctx.fillText(finalscore, middlex, middley+20);

    newgamebutton();
    //uploadscore();
 
}   //game end screen

function startgame(){
    gameinprogress = true;
    gameloop();
    setbait();
}   //starts the game

function gameloop(){
    if(snakehit()) {
    gameend()
    }
    else{
    setTimeout(function onTick() { 
        controls = false;
        cleancanvas();
        drawbait();
        movesnake();
        drawsnake();

        gameloop();

    }, snake_speed)}
}   //main gameplay loop

function cleancanvas() {
    ctx.fillStyle = ground_color;
    ctx.strokeStyle = border_color;
    ctx.fillRect(0, 0, snakecanvas.width, snakecanvas.height);
    ctx.strokeRect(0,0, snakecanvas.width, snakecanvas.height);
}   //Used to draw the background and remove the old snake

function drawbait() {
    
    let bait_color_int = Math.floor( Math.random() * 0xFFFFFF ) ;
    let bait_color = "000000" + bait_color_int.toString( 16 ) ;
    bait_color = bait_color.slice(bait_color.length - 6 ) ;

    ctx.fillStyle = "#" + bait_color;
    ctx.strokeStyle = baitborder_color;

    ctx.beginPath() ;
    ctx.arc(baitx + 5, baity + 5, 3,0, 2 * Math.PI, true) ;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    /*ctx.fillRect(baitx, baity, 10, 10);
    ctx.strokeRect(baitx, baity, 10, 10);
    rectangle backup code
    */
}

function rng(min, max) { 
    return Math.round((Math.random() * (max-min)+min) / 10 ) * 10;}

function setbait() {    

    baitx = rng(0, snakecanvas.width - 10); 
    baity = rng(0, snakecanvas.height - 10);
    snake.forEach(function isbaitonsnake(part) {
    let baitonsnake = part.x == baitx && part.y == baity;
    if (baitonsnake) setbait();
    });
} //place food for the snake and check if the food is on top of snake

function movesnake() {
    const head = {x: snake[0].x + dx, y:snake[0].y + dy}
    snake.unshift(head);
    const atethebait = snake[0].x === baitx && snake[0].y === baity;
    if(atethebait) {
        if(snake_speed > 50){
            snake_speed = snake_speed - 5;
        }
        score +=100
        document.getElementById("score").innerHTML = score;
        
        

        setbait();
    } 
    else{
        snake.pop();
    }
}   //determines the direction of movement for the snake and if the snake ate the bait, increase speed and score if so.

function snakehit(){
    for (let index = 4; index < snake.length; index++){
        if(snake[index].x === snake[0].x && snake[index].y === snake[0].y) return true
    }

    const leftborderhit = snake[0].x < 0;
    const rightborderhit = snake[0].x > snakecanvas.width - 10;
    const topborderhit = snake[0].y < 0;
    const bottomborderhit = snake[0].y > snakecanvas.height -10;

    return leftborderhit||rightborderhit||topborderhit||bottomborderhit
}//snake collides with another part of the game, this will end the game

function drawsnake(){
    snake.forEach(drawsegment);
}   //draws the whole snake from snake array

function drawsegment(segment) {
    ctx.fillStyle = snakebody_color; 
    ctx.strokeStyle = snakeborder_color;
    ctx.fillRect(segment.x, segment.y, 10, 10);
    ctx.strokeRect(segment.x, segment.y, 10, 10);
}   //function for drawing individual snake segments

function controls(event){
    const move_left = 65;
    const move_right = 68;
    const move_up = 87;
    const move_down = 83;

    if(controls) return;
    controls = true;
    const button = event.keyCode;

    const goingup = dy === -10;
    const goingdown = dy === 10;
    const goingright = dx === 10;
    const goingleft = dx ===-10;

    if(button === move_left && !goingright) {
        dx = -10;
        dy = 0;
    }
    if(button === move_right && !goingleft) {
        dx = 10;
        dy = 0;
    }
    if(button === move_up && !goingdown) {
        dx = 0;
        dy = -10;
    }
    if(button === move_down && !goingup) {
        dx = 0;
        dy = 10;
    }
} //controls for the snake, there is a check in place to see that the snake doesnt reverse into itself
