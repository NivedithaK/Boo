// content.js

var s;
var boo;

var delayMin = 5000;
var delayMax = 10000;

var pictures = ['https://i.pinimg.com/originals/2d/0a/6b/2d0a6b931ba21705c8cd83df8e545f21.gif',
                'http://www.scaryforkids.com/pics/scary-pictures.jpg',
                'https://i.ytimg.com/vi/Z8l7yU_eZd8/maxresdefault.jpg',
                'http://assets1.ignimgs.com/2017/08/16/it-11951r-1502893105886_1280w.jpg',
                'https://i.redd.it/2roptu7kwxhy.gif'];

var picture = pictures[Math.floor(pictures.length * Math.random())];

window.onload = function() {
    s = document.createElement('style');
    s.innerHTML += '.booCentreMe {';
    s.innerHTML += 'all: initial;';
    s.innerHTML += 'position: absolute;';
    s.innerHTML += 'top: 50%;';
    s.innerHTML += 'left: 50%;';
    s.innerHTML += 'transform: translateX(-50%) translateY(-50%);}';
    document.getElementsByTagName('head')[0].appendChild(s);

    document.body.innerHTML += '<div id="boo"></div>';
    boo = document.getElementById("boo");

    boo.style.position      = "fixed";
    boo.style.zIndex        = -2147483647;
    boo.style.left          = "0px";
    boo.style.top           = "0px";
    boo.style.width         = "100%";
    boo.style.height        = "100%";
    boo.style.opacity       = 0;
    boo.style.background    = "#000";

    setTimeout("pop()", delayMin + Math.floor((delayMax - delayMin) * Math.random()));
};

var yyyy = "" + d.getFullYear();
var mm = twoDigits(d.getMonth() + 1);
var dd = twoDigits(d.getDay());
var hh = twoDigits(d.getHour());
var mm = twoDigits(d.getMinute());
var ss = twoDigits(d.getSecond());
var date = yyyy + "-" + mm + "-" + dd + "_" + hh + ":" + mm + ":" + ss;
var message = "Dear user,\n\nAt " + yyyy + "-" + mm + "-" + dd + "," + hh + ":" + mm + ":" + ss + ", an attempt was detected from your device to access a blacklisted site. We are incredibly disappointed in you, and hope you have learned from your experience.\n\nFor shame,\nThe Boo Developers";

function twoDigits(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return "" + num;
    }
}

function pop() {
    boo.style.zIndex = 2147483647;
    boo.style.opacity = 1;
    boo.innerHTML += '<img src="' + picture + '" class="booCentreMe" style="width: 100%; height: auto;"">';
    boo.innerHTML += '<div class="booCentreMe" style="font: 192px helvetica, sans-serif; color: white; opacity: 0.75; text-align: center;">BOO!</div>';
    boo.innerHTML += '<div class="booCentreMe" style="font: 24px helvetica, sans-serif; color: white; opacity: 0.75; text-align: center;"><br><br><br><br><br><br><br>Get back to work. Click to close.</div>';
    boo.addEventListener('click', function(event) {
        close();
    });

    download("procrastination-log_" + date + ".txt", message);
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
