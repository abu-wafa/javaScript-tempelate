/* > setting box*/
let toogle=()=>{
    document.getElementById("setting") .classList.toggle("show")
    document.querySelector(".fa-cog").classList.toggle("fa-spin")
}     


/* > background looping */
let landingpage = document.querySelector(".landin-page")
let arr = [1,2,3,4,5,6,7,8] // index of the img 
let looping=()=>{ 
    let random = Math.floor(Math.random()* arr.length); // random index selected
    landingpage.style.backgroundImage =`url(./img/background/${arr[random]}.jpg)` // change the background-image to random img
}
setInterval(looping, 5000); // change img every 1s
