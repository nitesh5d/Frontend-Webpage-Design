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
