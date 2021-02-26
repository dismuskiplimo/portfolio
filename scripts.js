var banner = document.getElementById('banner');
var bannerHeight = banner.offsetHeight;

var myIntro = document.getElementById('my-intro');
var myName = document.getElementById('my-name');
var myCareer = document.getElementById('my-career');
var scrollWheel = document.getElementById('scroll-wheel');
var nav = document.getElementById('nav');
var links = nav.children[0].children[0].children;
var socialMediaIcons = document.getElementsByClassName('fab');

window.addEventListener("scroll", function(e){
    var yOffset = window.pageYOffset;

    if(yOffset > bannerHeight / 6){
        myIntro.style.opacity = 0;
    }else{
        myIntro.style.opacity = 1;
    }

    if(yOffset > bannerHeight / 3){
        myName.style.opacity = 0;
    }else{
        myName.style.opacity = 1;
    }

    if(yOffset > bannerHeight / 1.8){
        myCareer.style.opacity = 0;
    }else{
        myCareer.style.opacity = 1;
    }

    if(yOffset > bannerHeight / 2){
        scrollWheel.style.opacity = 0;
    }else{
        scrollWheel.style.opacity = 1;
    }

    if(window.innerWidth > 680){
        if(yOffset > bannerHeight / 1.8){
            for(var i = 0; i < socialMediaIcons.length; i++){
                socialMediaIcons[i].style.color = "#fafafa";
            }
        }else{
            for(var i = 0; i < socialMediaIcons.length; i++){
                socialMediaIcons[i].style.color = "#5d4037";
            }
        }
    }else{
        for(var i = 0; i < socialMediaIcons.length; i++){
            socialMediaIcons[i].style.color = "#fafafa";
        }
    }

    if(yOffset > bannerHeight / 1.2){
        nav.style.backgroundColor = "#5d4037";
        
        for(var i = 0; i < links.length; i++){
            links[i].firstChild.style.color = "#fafafa";
        }

    }else{
        nav.style.backgroundColor = "initial";

        for(var i = 0; i < links.length; i++){
            links[i].firstChild.style.color = "#5d4037";
        }
    }
});