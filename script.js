// Цей код відкриває меню при натисканні на кнопку

document.querySelector(".btn").addEventListener("click", function() {
  document.querySelector("nav").classList.toggle("active");
});
