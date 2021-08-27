window.addEventListener("load", myFunction);

function myFunction() {
setTimeout(function () {

//************************ after timeout **************************
//************************ page2 **************************
const btn = document.querySelector("button");
btn.addEventListener("click", () => {

    location.replace("main.html");
    var event2 = new Event('click');
    btn3.dispatchEvent(event2);
});
//************************ hamburger **************************

    const hamburger = document.querySelector(".hamburger-container");
    const navbar = document.querySelector(".navigate");
    const h6 = document.querySelectorAll("h6");
    const up_arrow = document.querySelectorAll(".up_arrow");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navbar.classList.toggle("navigate-animate");
        h6.forEach((h6) => { h6.classList.toggle("h6-animate") });
        up_arrow.forEach((up) => { up.classList.toggle("up_arrow-index") });
    });

//************************ Quick-nav **************************

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const section = document.querySelectorAll("section");
var i=0;
console.log(i);   

const navEle = document.querySelectorAll(".nav-ele");
navEle.forEach((ele, index) => {
    ele.addEventListener("click", () => {
        console.log('dd',index)

        var event1 = new Event('click');
        hamburger.dispatchEvent(event1);
        if(i!=index){
        animatePage(i,false);
        if (index < 1) {
            prev.classList.add("hide_arrow")
            next.classList.remove("hide_arrow")
        }
        if(index < 2 && index > 0){
            prev.classList.remove("hide_arrow");
            next.classList.remove("hide_arrow");
        }
        
        if (index > 1) {
            next.classList.add("hide_arrow");
            prev.classList.remove("hide_arrow")
        }
        
        animatePage(index,true);
        
            section[index].scrollIntoView({behavior: "smooth"});
        
        i=index;
        }
    });
});

//************************ BTNS **************************


const animatePage=(index, show)=>{
    if(show){
        section[index].querySelector(".block1").classList.add("block1-animate");
        section[index].querySelector(".block2").classList.add("block2-animate");
        section[index].querySelector(".block3").classList.add("block3-animate");
        if(index < 1){
        section[index].querySelector(".portfolio").classList.add("block4-animate");
        section[index].querySelector(".portfolio-bg").classList.add("block5-animate");
        }
        if(index > 0){
        section[index].querySelector("picture").classList.add("picture-animation");
        section[index].querySelector(".images-load-2").classList.add("images-load-2-animate");
        section[index].querySelector(".images-load").classList.add("images-load-animate");
        }
       
    }
    else{
        setTimeout(function () {
            section[index].querySelector(".block1").classList.remove("block1-animate");
            section[index].querySelector(".block2").classList.remove("block2-animate");
            section[index].querySelector(".block3").classList.remove("block3-animate");
            if(index < 1){
            section[index].querySelector(".portfolio").classList.remove("block4-animate");
            section[index].querySelector(".portfolio-bg").classList.remove("block5-animate");
            }
            if(index > 0){
            section[index].querySelector("picture").classList.remove("picture-animation");
            section[index].querySelector(".images-load-2").classList.remove("images-load-2-animate");
            section[index].querySelector(".images-load").classList.remove("images-load-animate");
            }
        }, 300);
    }
}
animatePage(0,true);
next.addEventListener("click", () => {
    animatePage(i,false);
    if (i > 0) {
        next.classList.add("hide_arrow")
    }
    
    prev.classList.remove("hide_arrow")
    i++;
    animatePage(i,true);
    console.log(i);
    section[i].scrollIntoView({behavior: "smooth"});

});
prev.addEventListener("click", () => {
    animatePage(i,false);
    if (i < 2) {
        prev.classList.add("hide_arrow")
    }
    
    next.classList.remove("hide_arrow")
    i--;
    animatePage(i,true);
    console.log(i); 
    section[i].scrollIntoView({behavior: "smooth"});
    
});

}, 650);
}