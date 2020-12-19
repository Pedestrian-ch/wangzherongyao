function login(){
    var loginWindow = document.querySelector(".logo-sign");
    loginWindow.onclick = function (){
        var loginScreen = document.querySelector(".loginScreen");
        loginScreen.style.display = "block";
    }

    var close = document.querySelector(".close");
    close.onclick = function (e) {
        e.preventDefault();
        var loginScreen = document.querySelector(".loginScreen");
        loginScreen.style.display = "none";
    }
}

login();

function showFocus() {
    function scrolling(n) {
        var value = -n * 100 + "%";
        var focusImg = document.querySelector(".showFocus-img");
        focusImg.style.marginLeft = value;

        var active = document.querySelector(".showFocus-title .active");
        active.className = "";
        var newTitle = document.querySelector(".showFocus-title");
        newTitle.children[n].className = "active";
    }

    var focusTitle = document.querySelector(".showFocus-title");
    focusTitle.onmouseover = function (e) {
        var arrTitle = Array.from(focusTitle.children);
        var index = arrTitle.indexOf(e.target);
        time = index;
        scrolling(index);
    }

    var timer = "";
    var time = 0;
    function start() {
        timer = setInterval(function () {
            time++;
            if(time > 4){
                time = 0;
            }
            scrolling(time);
        },3000)
    }

    function stop() {
        clearInterval(timer);
    }

    start();    

    var show = document.querySelector(".showFocus");
    show.onmouseover = function () {
        stop()
    }
    show.onmouseout = function () {
        start();
    }
}

showFocus();

function news() {
    function scrolling(n) {
        var  value = -n * 100 +"%";
        var newsBlock = document.querySelector(".news-banner .news-blocks");
        newsBlock.style.marginLeft = value;

        var active = document.querySelector(".showNews .title-container .active");
        active.className = "";
        var ulList = document.querySelector(".showNews .title-container");
        ulList.children[n].className = "active";
    }

    var ulList = document.querySelector(".showNews .title-container");
    ulList.onmouseover = function (e) {
        if(e.target.tagName != "LI"){
            return;
        }
        var arrList = Array.from(ulList.children);
        var index = arrList.indexOf(e.target);
        if(index >= 5){
            return;
        }
        scrolling(index);
    }
}

news();