function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(".rotate").click(function () {
    $(this).toggleClass("down");
})

// function darkMode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }

//   document.getElementById("mode-btn").addEventListener("click", darkMode);


// let darkToggle = document.querySelector('#toggle');

// darkToggle.addEventListener('change', ()=> {
//   document.body.classList.toggle('dark');
// })

// document.getElementById("darkToggle").addEventListener("click", function(){
//     document.getElementsByTagName('nav')[0].classList.toggle("dark");
// });