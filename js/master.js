//selctors 
let landingpage = document.querySelector(".landin-page")
let colorLi = document.querySelectorAll(".setting-bar .option-box ul li")
let randombgSP = document.querySelectorAll(".setting-bar .random-color span")
// glopal decleration
let option = true;
let backgroundInterval;
//local storage
let mainColor = localStorage.getItem("color-options")

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
/* > colors box */
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


/* > dynamic images */
randombgSP.forEach(Element=>{
    Element.addEventListener("click",function(e){
    //move active class to the clicked span and remove from the other 
        randombgSP.forEach(elm=>elm.classList.remove("active"))
        this.classList.add("active")

        if(e.target.dataset.background==='Yes'){
            option=true
            randombackground()
        }
        else{
            option=false
            randombackground()
        }
    })
})
/* > background looping */
let arr = [1,2,3,4,5,6,7,8] // index of the img 
let looping=()=>{ 
    let random = Math.floor(Math.random()* arr.length); // random index selected
    landingpage.style.backgroundImage =`url(./img/background/${arr[random]}.jpg)` // change the background-image to random img
}
/* > random background options */
let randombackground = function(){
    if (option==true){
        backgroundInterval = setInterval(looping, 1000); // change img every 5s
    } 
    else{
        clearInterval(backgroundInterval)
    }
}
randombackground()