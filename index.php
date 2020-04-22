<!DOCTYPE html>
<head>
<link rel="stylesheet" type="text/css" href="stylesarebad.css">
<script src="scriptsarebroken.js"></script>
</head>
<body onload="selector()">
    <div id="bigbox">
        <div id="buttbox">
        <p>log in | sign up</p>
        <label >
             <input type="checkbox"class="switch" id="check" onchange="selector()"> 
             <div class="switch-button"></div>
         </label>
        </div>
    <br><br>
    <div id="loginbox" >
        <form name="login" action="login.php" method="post">
            <input type="text" placeholder="Username" name="Username1" class="textinp"    ><br><br >
            <input type="password" placeholder="Password" name="Password1" type="password" class="textinp"><br><br><br>
            <button type="submit" id="sub">log in</button><br>
        </form>
    </div>
    <div id="registerbox" >
        <form name="register" action="register.php" method="post">
            <input type="text" placeholder="Username" name="Uname" class="textinp"><br><br>
            <input type="text" placeholder="email"  name="Email" class="textinp"><br><br>
            <input type="password" placeholder="Password"  name="Password" type="password"class="textinp"><br><br><br>
            <button type="submit" id="sub">sign up</button><br>
        </form>
    </div>
    </div>
    
</body>