//local storage
let mainColor = localStorage.getItem("color-options")
let colorLi = document.querySelectorAll(".setting-bar .color-box ul li")

if(mainColor!==null){
    document.documentElement.style.setProperty('--links-color',mainColor)
    colorLi.forEach(e=>{
        e.classList.remove("active")
        if(e.dataset.color == mainColor){
            e.classList.add("active")
        }
    })
} 
/* > setting box*/
let toogle=()=>{
    document.getElementById("setting").classList.toggle("show")
    document.querySelector(".fa-cog").classList.toggle("fa-spin")
}     


/* > color box */

colorLi.forEach(li=>{
    li.addEventListener("click",function(e){
    //move active class to the clicked li and remove from the other 
        colorLi.forEach(li=>li.classList.remove("active"))
        this.classList.add("active")
    // switch the page color 
        document.documentElement.style.setProperty('--links-color',e.target.dataset.color)
    // add to the local storage    
        localStorage.setItem("color-options",e.target.dataset.color)
    
    })
})


/* > background looping */
let landingpage = document.querySelector(".landin-page")
let arr = [1,2,3,4,5,6,7,8] // index of the img 
let looping=()=>{ 
    let random = Math.floor(Math.random()* arr.length); // random index selected
    landingpage.style.backgroundImage =`url(./img/background/${arr[random]}.jpg)` // change the background-image to random img
}
setInterval(looping, 5000); // change img every 5s
