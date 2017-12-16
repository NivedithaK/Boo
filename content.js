// content.js

var style = document.createElement('style');
style.innerHTML += '.unslackCentre {';
style.innerHTML += 'position: absolute;';
style.innerHTML += 'top: 50%;';
style.innerHTML += 'left: 50%;';
style.innerHTML += 'transform: translateX(-50%) translateY(-50%);';
style.innerHTML += 'display: inline-block;}';

document.getElementsByTagName('head')[0].appendChild(style);

document.body.innerHTML += '<div id="unslack"></div>';
var unslack = document.getElementById("unslack");

unslack.style.position      = "fixed";
unslack.style.zIndex        = 2147483647;
unslack.style.left          = "0px";
unslack.style.top           = "0px";
unslack.style.width         = "100%";
unslack.style.height        = "100%";
unslack.style.opacity       = 0.9;
unslack.style.background    = "#000";

var delayMin = 5000;
var delayMax = 10000;

var pictures = ['https://i.imgur.com/LzMCJZy.jpg',
                'http://www.scaryforkids.com/pics/scary-pictures.jpg',
                'https://i.ytimg.com/vi/Z8l7yU_eZd8/maxresdefault.jpg',
                'http://assets1.ignimgs.com/2017/08/16/it-11951r-1502893105886_1280w.jpg',
                'https://i.redd.it/2roptu7kwxhy.gif'];

var picture = pictures[Math.floor(pictures.length * Math.random())];

setTimeout("delayed()", delayMin + Math.floor((delayMax - delayMin) * Math.random()));

function delayed() {
    unslack.innerHTML += '<img src="' + picture + '" class="unslackCentre" width="100%" height="auto%">';
    unslack.innerHTML += '<div id="delayedText">';
    unslack.innerHTML += '<font size=100 face="courier" class="unslackCentre"> BOO!</font>';
    unslack.innerHTML += '<font size=50 face="courier" class="unslackCentre"> <br>Get back to work.</br> </font>';
    unslack.innerHTML += '</div>';
}
