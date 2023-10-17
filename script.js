// script.js
changeThisPageFunc = function() {
    document.body.style.backgroundColor = "lightblue";
    document.body.innerHTML = "<h1>I am a little blue today</h1>";
}


changeColor = function() {
           red = document.querySelector('#redi').value;
           green = document.querySelector('#greeni').value;
           blue = document.querySelector('#bluei').value;
           colorStr = "rgb("+red+","+green+","+blue+")";
           document.body.style.backgroundColor = colorStr;
       }