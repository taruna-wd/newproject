
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")
<<<<<<< HEAD
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
=======
let list = document.querySelector(".carousel .list");


let timeRunning = 4000;
let timeAutoNext = 5000;
let runTime ;
let runAutoTime =setTimeout(()=>{
    nextBtn.click()
   }, timeAutoNext) ;

nextBtn.addEventListener("click", () => slide("next"));
prevBtn.addEventListener("click", () => slide("prev"));

function slide(direction) {
  if (direction === "next") {
    list.appendChild(list.firstElementChild);
  } else {
    list.prepend(list.lastElementChild);
  }
  clearTimeout(runAutoTime)
>>>>>>> e689e70 (add slider)
   runAutoTime = setTimeout(()=>{
    nextBtn.click()
   }, timeAutoNext)

<<<<<<< HEAD



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

=======
}



// filter


// Select all category filters and listings container
const categorys = document.querySelectorAll(".category-item");
const types =  document.querySelectorAll(".type-item")
const listingsContainer = document.getElementById("listings-container");

// Add event listeners to each category item
categorys.forEach(category => {
  category.addEventListener("click", () => {
    const selectedCategory = category.innerText;
    filterListings(selectedCategory);
  });
});
types.forEach(type =>{
  type.addEventListener("click" , ()=>{
    const selectedType = type.innerText
    filterListingtype(selectedType)
  })
})
// Function to filter listings based on category
function filterListings(category) {
  const allFoodItem = listingsContainer.querySelectorAll(".link");
     allFoodItem.forEach(foodItem =>{
      const foodItemCategory = foodItem.getAttribute("data-category")
      console.log(foodItemCategory)
      if(foodItemCategory ===  category || category === "All"){
        foodItem.style.display = "block"
      }else{
        foodItem.style.display = "none"
      }
     })
 
}
function filterListingtype(type){
const allFoodItem = listingsContainer.querySelectorAll(".link");
allFoodItem.forEach(foodItem =>{
  const foodItemType = foodItem.getAttribute("data-type")
  console.log(foodItemType)
  if(foodItemType ===  type || type === "ALL"){
    foodItem.style.display = "block"

  } else {
    foodItem.style.display = "none"
  }
})

}
>>>>>>> e689e70 (add slider)
