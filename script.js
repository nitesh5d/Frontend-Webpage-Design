var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

let headerProduct = document.getElementById("headerProductList");
let productDropdown = document.getElementById("productDropDown");
let productDownArrow = document.querySelector(".fa-caret-down");
const deg = 180;

headerProduct.addEventListener("click", showDropDown);

function showDropDown() {
  if (
    productDropdown.style.display == "none" ||
    productDropdown.style.display == ""
  ) {
    productDropdown.style.display = "block";
    productDownArrow.style.transform = `rotate( ${deg}deg)`;
  } else if (productDropdown.style.display == "block") {
    productDropdown.style.display = "none";
    productDownArrow.style.transform = `rotate(0deg)`;
  }
}

let scrollBtn = document.querySelector(".topbtn");

function scrolltoTop() {
  if (window.scrollY > 200) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
}

setInterval(scrolltoTop, 100);
