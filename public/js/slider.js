
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")
let carousal = document.querySelector(".carousal")
let listItem = document.querySelector(".carousal .list")
let thumbnail = document.querySelector(".carousal .thumbnail")

nextBtn.addEventListener ("click" , ()=>{
     showSlider("next")
})
prevBtn.addEventListener ("click" , ()=>{
    showSlider("prev")
})
let timeRunning = 3000;
let timeAutoNext = 5000;
let runTime ;
// let runAutoTime =setTimeout(()=>{
//     nextBtn.click()
//    }, timeAutoNext) ;

function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousal .list .item")
    console.log(itemSlider)
    let itemThumbnail = document.querySelectorAll(".carousal .thumbnail .item")
    if(type === "next"){
         listItem.appendChild(itemSlider[0])
         thumbnail.appendChild(itemThumbnail[0])
         carousal.classList.add("next")
    }else{
        let lastPositionItem = itemSlider.length -1 ;
        listItem.prepend(itemSlider[lastPositionItem])
        thumbnail.prepend(itemThumbnail[lastPositionItem])
        carousal.classList.add("prev")

    }

    clearTimeout(runTime);
    runTime = setTimeout(()=>{
        carousal.classList.remove("next")
        carousal.classList.remove("prev")
    }, timeRunning)


   clearTimeout(runAutoTime)
   runAutoTime = setTimeout(()=>{
    nextBtn.click()
   }, timeAutoNext)




}
// let nextBtn = document.getElementById("next");
// let prevBtn = document.getElementById("prev");
// let list = document.querySelector(".carousel .list");

// nextBtn.addEventListener("click", () => slide("next"));
// prevBtn.addEventListener("click", () => slide("prev"));

// function slide(direction) {
//   if (direction === "next") {
//     list.appendChild(list.firstElementChild);
//   } else {
//     list.prepend(list.lastElementChild);
//   }
// }

