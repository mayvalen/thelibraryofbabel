function myFunction() {
  var x = document.getElementById("unscramble");
  var y = document.getElementById("scramble");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}



/*
let swipeRight = document.querySelector(".walk");
let textAnimation = document.querySelector(".swipe-right");

swipeRight.addEventListener("click" , () => {
  if (textAnimation.classList.contains("slide-right")) {
    textAnimation.classList.add("slide-right");
  } else {
    textAnimation.classList.remove("slide-right");
  }
}
/* https://stackoverflow.com/questions/50422194/how-to-hover-over-text-while-changing-colors-at-the-same-time-using-css */
/*
$(document).ready(function(){
  var words = $('p').text();
  var nHTML = '';
  for(var word of words) {
    nHTML+="<span class='x'>"+word+"</span>";
  }
  $('p').html(nHTML);
})

/*scroll function
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);*/

