let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

let menuItems = document.querySelectorAll(".navigation ul li a");

menuItems.forEach((item) => {
  item.onclick = function () {
    menuItems.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  };
});
