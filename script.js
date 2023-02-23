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

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  document.getElementById("mode-btn").addEventListener("click", darkMode);