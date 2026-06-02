const images = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

images.forEach((img,index)=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex";
lightboxImg.src=img.src;
currentIndex=index;
});
});

closeBtn.addEventListener("click",()=>{
lightbox.style.display="none";
});

nextBtn.addEventListener("click",()=>{
currentIndex=(currentIndex+1)%images.length;
lightboxImg.src=images[currentIndex].src;
});

prevBtn.addEventListener("click",()=>{
currentIndex=(currentIndex-1+images.length)%images.length;
lightboxImg.src=images[currentIndex].src;
});

function filterSelection(category){

const items=document.querySelectorAll(".gallery-item");

items.forEach(item=>{

if(category==="all"){
item.style.display="block";
}
else{
item.style.display=
item.classList.contains(category)
? "block"
: "none";
}
});
}