for (i = 0; i < slideIndex.length; i++){
    showSlides(1, i);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

function om(nm){
    document.getElementById("mga" + nm).style.display = "block";
}

function cm(nm) {
  document.getElementById("mga"+nm).style.display = "none";
}


for (i = 0; i < smi.length; i++){
    sm(1,i);
}

// Next/previous controls
function ps(n, no) {
  sm(smi[no] += n, no);
}

function sm(n, no) {
  var i;
  var sl = document.getElementsByClassName(smid[no]);
  if (n > sl.length) {smi[no] = 1}
  if (n < 1) {smi[no] = sl.length}
  for (i = 0; i < sl.length; i++) {
    sl[i].style.display = "none";
  }
  sl[smi[no]-1].style.display = "block";
}



