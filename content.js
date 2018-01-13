// content.js

var s;
var boo;

var delayMin = 5000;
var delayMax = 10000;

var pictures = ['https://i.pinimg.com/originals/2d/0a/6b/2d0a6b931ba21705c8cd83df8e545f21.gif',
                'http://www.scaryforkids.com/pics/scary-pictures.jpg',
                'https://i.ytimg.com/vi/Z8l7yU_eZd8/maxresdefault.jpg'];

var picture = pictures[Math.floor(pictures.length * Math.random())];

var d;
var t;
var yyyy;
var mm;
var dd;
var hh;
var mm;
var ss;
var date;
var message;

function twoDigits(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return "" + num;
    }
}

window.onload = function() {
    d = new Date();
    yyyy = "" + d.getFullYear();
    mm = twoDigits(d.getMonth() + 1);
    dd = twoDigits(d.getDay());
    hh = twoDigits(d.getHours());
    mm = twoDigits(d.getMinutes());
    ss = twoDigits(d.getSeconds());
    date = yyyy + "-" + mm + "-" + dd + "_" + hh + ":" + mm + ":" + ss;
    message = "Dear user, at " + yyyy + "-" + mm + "-" + dd + ", " + hh + ":" + mm + ":" + ss + ", an attempt was detected from your device to access a blacklisted site. We are incredibly disappointed in you, and hope you have learned from your experience. For shame, the Boo Developers.";

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

function pop() {
    boo.style.zIndex = 2147483647;
    boo.style.opacity = 1;
    boo.innerHTML += '<img src="' + picture + '" class="booCentreMe" style="width: 100%; height: auto;"">';
    boo.innerHTML += '<div class="booCentreMe" style="font: 192px helvetica, sans-serif; color: white; opacity: 0.75; text-align: center;">BOO!</div>';
    boo.innerHTML += '<div class="booCentreMe" style="font: 24px helvetica, sans-serif; color: white; opacity: 0.75; text-align: center;"><br><br><br><br><br><br><br>Get back to work.</div>';

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
