const $btnHamburger = document.querySelector("#btnHamburger");
const $header = document.querySelector(".header");
const $menu = document.querySelector(".menu");

console.log($header);
console.log($btnHamburger);
$btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if ($header.classList.contains("open")) {
    // Close Hamburger Menu
    $header.classList.remove("open");
    $menu.classList.remove("show");
  } else {
    // Open Hamburger Menu
    $header.classList.add("open");
    $menu.classList.add("show");
  }
});
