let btnFootToTop = document.getElementById("btnFootToTop")
let imojs = ["🍕","🍔","🍟","🌭","🍿","🥞","🧀","🥗","🥪","🥙","🌮","🍠","🌯","🥡","🍱","🍹","🧁","🍩","🍰","🍨"]
let random = parseInt(Math.random() * 20)
btnFootToTop.innerHTML=imojs[random]

let desert = document.getElementById("desert")
let moxito =document.getElementById("moxito")


setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    // convert 24hr clock to 12hr clock
    if (h > 12) {
       h = h - 12;
    }

    // add zero before single digit number
    h = (h < 10) ? "" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    hours.innerHTML = h + ":";
    minutes.innerHTML = m + ":";
    seconds.innerHTML = s;
    ampm.innerHTML = am
 })

let img = document.getElementById("img") 
let img_second = document.getElementById("img-second") 
img_second.addEventListener("click",()=>{
    img_second.classList.toggle("addForImg-second")
})

let btnMenu = document.getElementById("btnMenu")
let nav = document.getElementById("nav")
btnMenu.addEventListener("click",()=>{
    nav.classList.toggle("navNull")
})