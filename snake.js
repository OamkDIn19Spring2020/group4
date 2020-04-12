/*Snake 
OAMK Project
Kim Satokanags 2020
*/




//variables for keeping track of game colors for easier editing
let ground_color = "antiquewhite";
let border_color = "black";
let snakebody_color = "cyan";
let snakeborder_color= "green";

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
let score = 0;
let dx = 10; //direction x axis
let dy = 0; //direction y axis
let baitx;
let baity;
let snake_speed = 150

startgame();
document.addEventListener("keydown", controls);

function resetgame(){
    snake.length = 0;
    snake = [ {x:200, y:200}, {x:190, y:200}, {x:180, y:200}]
    score = 0;
    dx = 10;
    dy = 0;
    snake_speed = 150;
    document.getElementById("score").innerHTML = score;
}   //resets game parameters

function startgame(){
    gameloop();
    setbait();
}   //starts the game

function gameloop(){
    if(snakehit()) {
    resetgame();
    startgame();
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
    const move_left = 37;
    const move_right = 39;
    const move_up = 38;
    const move_down = 40;

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
