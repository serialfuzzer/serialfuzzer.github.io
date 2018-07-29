window.onload = function () {
  var container = document.querySelector(".container");
  var loading = document.querySelector(".overlay");
  var button = document.querySelector(".know");
  var nextPageButton = document.querySelector(".nextPage");
  var education = document.querySelector(".education");
  var skills = document.querySelector(".skills");
  overlay.style.display = "none";
  button.addEventListener("click", function() {
    container.style.display = "none";
    education.style.display = "block";
  });
  nextPageButton.addEventListener("click", function(){
    education.style.display = 'none';
    skills.style.display = "block";
  });
}
