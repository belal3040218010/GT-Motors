var img=document.querySelector('#black');

function DetectTheCar() {
   img.src="1.jpg"
}
function OilChange() {
   img.src="2.jpg"
}
function InternalCleaning() {
   img.src="3.jpg"
}
function AdjustingWheels() {
   img.src="4.jpg"
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
