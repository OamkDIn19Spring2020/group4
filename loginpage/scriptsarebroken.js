function selector(){
    var login_pressed = document.getElementById("check").checked
    if (login_pressed == true){
        document.getElementById("loginbox").style.display = "none"
        document.getElementById("registerbox").style.display = "flex"
        document.getElementById("bigbox").style.backgroundColor = "#6F83D6"
    }
    else if(login_pressed == false){
        document.getElementById("loginbox").style.display = "flex"
        document.getElementById("registerbox").style.display = "none"
        document.getElementById("bigbox").style.backgroundColor = "#62DA97"
    }
}




