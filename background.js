// background.js

chrome.browserAction.onClicked.addListener(function(tab) {window.open("timer.html")});

var func = function(){
    alert("Success!");
};

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "startFunc") func();
    }
);

var s;
var unslack;

var delayMin = 5000;
var delayMax = 10000;

var pictures = ['https://i.pinimg.com/originals/2d/0a/6b/2d0a6b931ba21705c8cd83df8e545f21.gif',
                'http://www.scaryforkids.com/pics/scary-pictures.jpg',
                'https://i.ytimg.com/vi/Z8l7yU_eZd8/maxresdefault.jpg',
                'http://assets1.ignimgs.com/2017/08/16/it-11951r-1502893105886_1280w.jpg',
                'https://i.redd.it/2roptu7kwxhy.gif'];

var picture = pictures[Math.floor(pictures.length * Math.random())];

var url;

chrome.tabs.onUpdated.addListener(function runEverything () {
    console.log("hi")
    chrome.tabs.query({'highlighted': true}, function (tabs) {
        console.log(tabs[0].url);
        if (tabs[0].url.search("youtube") == -1) {
            s = document.createElement('style');
            s.innerHTML += '.unslackCentreMe {';
            s.innerHTML += 'all: initial;';
            s.innerHTML += 'position: absolute;';
            s.innerHTML += 'top: 50%;';
            s.innerHTML += 'left: 50%;';
            s.innerHTML += 'transform: translateX(-50%) translateY(-50%);}';
            document.getElementsByTagName('head')[0].appendChild(s);

            document.body.innerHTML += '<div id="unslack"></div>';
            unslack = document.getElementById("unslack");

            unslack.style.position      = "fixed";
            unslack.style.zIndex        = -2147483647;
            unslack.style.left          = "0px";
            unslack.style.top           = "0px";
            unslack.style.width         = "100%";
            unslack.style.height        = "100%";
            unslack.style.opacity       = 0;
            unslack.style.background    = "#000";

            setTimeout("pop()", delayMin + Math.floor((delayMax - delayMin) * Math.random()));
        }
    });
});

function pop() {
    unslack.style.zIndex = 2147483647;
    unslack.style.opacity = 1;
    unslack.innerHTML += '<img src="' + picture + '" class="unslackCentreMe" style="width: 100%; height: auto;"">';
    unslack.innerHTML += '<div class="unslackCentreMe" style="font: 192px helvetica, sans-serif; color: white; opacity: 0.75; text-align: center;">BOO!</div>';
    unslack.innerHTML += '<div class="unslackCentreMe" style="font: 24px helvetica, sans-serif; color: white; opacity: 0.75; text-align: center;"><br><br><br><br>   <br><br><br>Get back to work. Click to close.</div>';
    unslack.addEventListener('click', function(event) {
        close();
    });
}
