let slideindex=0;
const slides=document.getElementsByClassName("slide");
showSlide(slideindex);
function changeSlide(n){
    slideindex+=n;
    if(slideindex>=slides.length)slideindex=0;
    if(slideindex<0)slideindex=slides.length-1;
    showSlide(slideindex);
}
function showSlide(n){
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
        clearTimeout(slides[i].timeoutId);
        slides[i].timeoutId = setTimeout(() => {
            changeSlide(1);
        }, 2000);
    }
    slides[n].style.display="block";
}