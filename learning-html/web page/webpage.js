const img=["images.png,image1.png,image2.png"];
let i=0;
function showimg(){
    document.getElementById("slide").src=img[i];
}
function next(){
    i=(i+1)%img.length;
    showimg();
}
function previous(){
    i=(i-1+img.length)%img.length;
    showimg();
}
