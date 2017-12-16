// content.js
// var body = document.getElementsByTagName('body');

divHTML = '<div id="unslack" style="';
divHTML += 'position:fixed;'
divHTML += 'z-index:2147483647;'
divHTML += 'left:0px;'
divHTML += 'top:0px;'
divHTML += 'width:100%;'
divHTML += 'height:100%;'
divHTML += 'opacity:0.5;'
divHTML += 'background:#FF8000;'
divHTML += '"></div>';

document.body.innerHTML += divHTML;
document.getElementById('unslack').innerHTML="Whatever you want it to be!";
