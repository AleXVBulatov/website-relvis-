const mainElement = document.documentElement;
// console.log(mainElement);
const mainElementWidth = mainElement.clientWidth; // вывести текущую ширину экрана (до скрола)
// console.log(mainElementWidth); 


const menuBtnRef = document.querySelector(".gamburger-menu__button");
// console.log(menuBtnRef);
const menuRef = document.querySelector(".menu");
// console.log(menuRef);
const bodyRef = document.querySelector("body");
// console.log(bodyRef);


if (mainElementWidth >= 479) {
  console.log(mainElementWidth >= 479);
  menuBtnRef.classList.add("js_btn-active");
  menuRef.classList.remove("js_nuv-active");
} else if (mainElementWidth < 479) {
  console.log(mainElementWidth < 479);
  menuBtnRef.classList.remove("js_btn-active");
  menuRef.classList.add("js_nuv-active");
}


menuBtnRef.addEventListener("click", (event) => {
  if (event.target === menuBtnRef || event.target.nodeName === "SPAN") {
    menuRef.classList.toggle("js_nuv-active");
    menuBtnRef.classList.toggle("js_btn-close");
  };
});

bodyRef.addEventListener("click", (event) => {
  if ((event.target !== menuBtnRef && event.target.nodeName !== "SPAN") && menuBtnRef.classList.contains("js_btn-close")) {
    menuRef.classList.toggle("js_nuv-active");
    menuBtnRef.classList.toggle("js_btn-close");
  };
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && menuBtnRef.classList.contains("js_btn-close")) {
    menuRef.classList.toggle("js_nuv-active");
    menuBtnRef.classList.toggle("js_btn-close");
  };
});

// function checkSize() {
//     console.log(innerWidth);
      
//     } 
 
//   window.addEventListener("resize", _.debounce(checkSize, 100));
