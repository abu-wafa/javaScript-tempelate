//selctors 
    //landing page
    let landingpage = document.querySelector(".landin-page")
    let pagelinks = document.querySelectorAll(".landin-page .header .links a")
    let ULlinks = document.querySelector(".landin-page .header .links")
    let tglMenu = document.querySelector(".landin-page .header .toggle-lins")
    //setting box 
    let colorLi = document.querySelectorAll(".setting-bar .option-box ul li")
    let randombgSP = document.querySelectorAll(".setting-bar .random-color span")
    let BulletsOP = document.querySelectorAll(".setting-bar .bullets-option span")
    //our skills
    let skills = document.querySelector(".our-skills")
    let skillsSpn =  document.querySelectorAll(".skill-prograss span")
    // popup images
    let imgs = document.querySelectorAll(".our-images .images-box img")
    //nav bullets
    let bullets = document.querySelectorAll(".nav-bullets .bullets")
    let nav_bullets = document.querySelector(".nav-bullets")

// < selctors
// glopal decleration
let arr = [1,2,3,4,5,6,7,8]
let option = true;
let backgroundInterval;
//local storage
let mainColor = localStorage.getItem("color-options")
let backgroundStatus = localStorage.getItem("bg-imgOp")
let bulletsStatus = localStorage.getItem("bulletsOption")
    
    // change the Page color  
    if(mainColor!==null){
        document.documentElement.style.setProperty('--links-color',mainColor)
        colorLi.forEach(e=>{
            e.classList.remove("active")
            if(e.dataset.color == mainColor){
                e.classList.add("active")
            }
        })
    } 
    //  background options
    if(backgroundStatus!== null){  //check the local storage
        if(backgroundStatus==='Yes'){   
            option=true     
        }
        else{
            option=false
        }
        //move active class to the clicked span and remove it from the other 
        randombgSP.forEach(elm=>{
            elm.classList.remove("active")
            if(elm.dataset.background==backgroundStatus){
                elm.classList.add("active")
            }
        })   
    }
    // bullets status
    if (bulletsStatus!==null) {
        if (bulletsStatus=='Yes') {
            nav_bullets.style.display= "block"
        }else{
            nav_bullets.style.display= "none"
        }
        BulletsOP.forEach(elm=>{
            elm.classList.remove("active")
            if(elm.dataset.bullets==bulletsStatus){
                elm.classList.add("active")
            }
        })   
    }

// < local storage
/* > setting box*/
let toogle=()=>{
    document.getElementById("setting").classList.toggle("show")
    document.querySelector(".fa-cog").classList.toggle("fa-spin")
}     
// > colors box 
colorLi.forEach(li=>{
    li.addEventListener("click",function(e){
    //move active class to the clicked li and remove from the other 
       MVactive(colorLi,e)
    // switch the page color 
        document.documentElement.style.setProperty('--links-color',e.target.dataset.color)
    // add to the local storage    
        localStorage.setItem("color-options",e.target.dataset.color)
    })
})

// > bg images options 
randombackground()  
randombgSP.forEach(Element=>{
    Element.addEventListener("click",function(e){
    //move active class to the clicked span and remove from the other 
       MVactive(randombgSP,e)
    // change the option btn for the clicked span
        if(e.target.dataset.background==='Yes'){
            option=true
            randombackground()
            localStorage.setItem("bg-imgOp",e.target.dataset.background) // add the 'Yes' dataset to local storage
        }
        else{
            option=false
            randombackground()
            localStorage.setItem("bg-imgOp",e.target.dataset.background) // add the 'No' dataset to local storage
        }
    })
})
// bullets options
BulletsOP.forEach(elm=>{
    elm.addEventListener("click",(e)=>{
        MVactive(BulletsOP,e)
        if(e.target.dataset.bullets=="Yes"){
            nav_bullets.style.display= "block"
            localStorage.setItem("bulletsOption",e.target.dataset.bullets)

        }else{
            nav_bullets.style.display= "none"
            localStorage.setItem("bulletsOption",e.target.dataset.bullets)        
        }
    })
})
//reset option
document.querySelector(".setting-bar .reset").onclick=()=>{
    localStorage.removeItem("color-options")
    localStorage.removeItem("bg-imgOp")
    localStorage.removeItem("bulletsOption")
    window.location.reload();
}

/* < setting box*/ 
/* > Toggle menu*/
    //open and close ul menu
    tglMenu.onclick = function(e){
        e.stopPropagation();
        this.classList.toggle("toggle")
        ULlinks.classList.toggle("open")
    }
    ULlinks.onclick = (e)=>{
        e.stopPropagation()
    }
    // close if clicked in the body
        document.addEventListener("click",(e)=>{
        if (e.target !==tglMenu && e.target !==ULlinks){
            if(ULlinks.classList.contains("open")){
                tglMenu.classList.remove("toggle")
                ULlinks.classList.remove("open")            
            }
        }
        
    });

/* < Toggle menu*/

// > skills section  
window.onscroll=function(){
    // skills ofset top
    let skillsTop = skills.offsetTop;
    //skillss hieght 
    let skillsHt = skills.offsetHeight;
    //window height 
    let windowHt = window.innerHeight;
    //your window offset  
    let windowOfst = window.scrollY
    if(windowOfst> (skillsTop + skillsHt - windowHt)){
        skillsSpn.forEach(elm=>{
            elm.style.width = elm.dataset.progress
        })        
    }
    else if(windowOfst<= (skillsTop - windowHt) ){
        skillsSpn.forEach(elm=>{
            elm.style.width = "0"
        })
    }
}
// popup images
imgs.forEach(elm=>{
    elm.addEventListener("click",function(){
        // make overlay
        let ovrly = document.createElement("div")
        ovrly.className="popup-overlay"
        document.body.appendChild(ovrly)  
        // create popup div 
        let popupBox = document.createElement("div")
        popupBox.className="popup-box"
        // add alt as heading
        if(elm.alt!==null){
            //create h3 
            let imgAlt = document.createElement("h3")
            //add the img alt to the h3
            let imgAlttxt = document.createTextNode(elm.alt)
            imgAlt.appendChild(imgAlttxt)
            //append to the popup
            popupBox.appendChild(imgAlt)   
        }
        // create the image 
        let popupImg = document.createElement("img")
        popupImg.src = elm.src

        popupBox.appendChild(popupImg)
        document.body.appendChild(popupBox)
        
        //close span
        let closeup = document.createElement("span")
        let closeupTxt = document.createTextNode("X")
        closeup.className = "close-up"
        closeup.appendChild(closeupTxt)
        popupBox.appendChild(closeup) 

        //remove the popup
        document.addEventListener("click",(e)=>{
            if(e.target.className=="close-up"){
                e.target.parentNode.remove();
                document.querySelector(".popup-overlay").remove();
            }
        })

    })
})

// > nav bullets && links 
scrollSec(pagelinks)
scrollSec(bullets)

/// functions section 

    // scroll to element  
    function scrollSec(sec) {
        sec.forEach((elm)=>{
            elm.addEventListener("click",function(e){
                e.preventDefault();
                document.getElementById(`${e.target.dataset.section}`).scrollIntoView({
                    behavior:"smooth"
                })
            })
        })
    }
    // active class handler
    function MVactive(elm ,e) {
        elm.forEach(li=>li.classList.remove("active"))
        e.target.classList.add("active")
    }
    // random background imgs
    function looping(){ 
        let random = Math.floor(Math.random()* arr.length); // random index selected
        landingpage.style.backgroundImage =`url(./img/background/${arr[random]}.jpg)` // change the background-image to random img
    }
    function randombackground(){
    if (option==true){
        backgroundInterval = setInterval(looping, 5000); // change img every 5s
    } 
    else{
        clearInterval(backgroundInterval)
    }
}