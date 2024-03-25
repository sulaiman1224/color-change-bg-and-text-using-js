let colorpicker = document.getElementById("color");
let nm = document.getElementById("nm");

let colorpicker1 = document.getElementById("color1");
let nm1 = document.getElementById("nm1");
let nm2 = document.getElementById("nm2");

colorpicker.addEventListener("change", () => {
  document.body.style.backgroundColor = colorpicker.value;
  nm.innerText = colorpicker.value;
});
colorpicker1.addEventListener("change", () => {
  nm2.style.color = colorpicker1.value;
  nm1.innerText = colorpicker1.value;
});
