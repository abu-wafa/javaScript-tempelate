//selctors 
    //landing page
    let landingpage = document.querySelector(".landin-page")
    //setting box 
    let colorLi = document.querySelectorAll(".setting-bar .option-box ul li")
    let randombgSP = document.querySelectorAll(".setting-bar .random-color span")
    //our skills
    let skills = document.querySelector(".our-skills")
    let skillsSpn =  document.querySelectorAll(".skill-prograss span")
    // popup images
    let imgs = document.querySelectorAll(".our-images .images-box img")

// < selctors

// glopal decleration
let option = true;
let backgroundInterval;
//local storage
let mainColor = localStorage.getItem("color-options")
let backgroundStatus = localStorage.getItem("bg-imgOp")

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


// < local storage

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
/* > background looping */
let arr = [1,2,3,4,5,6,7,8] // index of the img 
let looping=()=>{ 
    let random = Math.floor(Math.random()* arr.length); // random index selected
    landingpage.style.backgroundImage =`url(./img/background/${arr[random]}.jpg)` // change the background-image to random img
}
/* > random background options */
let randombackground = function(){
    if (option==true){
        backgroundInterval = setInterval(looping, 5000); // change img every 5s
    } 
    else{
        clearInterval(backgroundInterval)
    }
}
randombackground()  

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

