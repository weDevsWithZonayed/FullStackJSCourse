document.addEventListener("DOMContentLoaded", () => {
  const myDiv = document.getElementById("myDiv");
  const changeStyleButton = document.getElementById("changeStyleButton");

  changeStyleButton.addEventListener("click", () => {
    myDiv.style.backgroundColor = "red";
    myDiv.style.width = "200px";
    myDiv.style.height = "200px";
  });
});
