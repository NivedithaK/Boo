// content.js

var s;
var boo;

var delayMin = 500;
var delayMax = 1000;

var pictures = ['https://i.pinimg.com/originals/2d/0a/6b/2d0a6b931ba21705c8cd83df8e545f21.gif',
                'http://www.scaryforkids.com/pics/scary-pictures.jpg',
                'https://i.ytimg.com/vi/Z8l7yU_eZd8/maxresdefault.jpg',
                'http://assets1.ignimgs.com/2017/08/16/it-11951r-1502893105886_1280w.jpg',
                'https://i.redd.it/2roptu7kwxhy.gif'];

var picture = pictures[Math.floor(pictures.length * Math.random())];

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

function sprinkle() {
    document.getElementsByTagName('body')[0].innerHTML += '<div style="position: fixed; z-index: 2147483647; left: ' + Math.floor(screen.width * Math.random()) + 'px; top: ' + Math.floor(screen.height * Math.random()) + 'px; width: 1px; height: 1px; background_color: rgb(' + Math.floor(256 * Math.random()) + ', ' + Math.floor(256 * Math.random()) + ', ' + Math.floor(256 * Math.random()) + ')"></div>';
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
