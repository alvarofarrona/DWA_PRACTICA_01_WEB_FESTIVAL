//  MENU HAMBURGESA  //

let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu-mobile");
let closeMenuBtn = document.querySelector(".close-menu");

////
burger.addEventListener("click", function () {
  let isOpen = menu_opt.classList.contains("menu-show");

  if (!isOpen) {
    menu_opt.classList.add("menu-show");
    burger.classList.remove("fa-bars");
    burger.classList.add("fa-times");
  } else {
    menu_opt.classList.remove("menu-show");
    burger.classList.remove("fa-times");
    burger.classList.add("fa-bars");
  }
});

////
closeMenuBtn.addEventListener("click", function () {
  menu_opt.classList.remove("menu-show");
  burger.classList.remove("fa-times");
  burger.classList.add("fa-bars");
});

////VENTANAS MODALES LEER MAS INICIO////
document.querySelectorAll(".info-button[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("show-modal");
    }
  });
});

////
document
  .querySelectorAll(".modal-window .close, .modal-window .close-button")
  .forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-window");
      if (modal) {
        modal.classList.remove("show-modal");
      }
    });
  });

// fuera del contenido//
window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal-window").forEach((modal) => {
    if (e.target === modal) {
      modal.classList.remove("show-modal");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('input[type="number"]');
  const totalPriceElement = document.getElementById("totalPrice");

  //CALCULAR PRECIO TICKETS
  inputs.forEach((input) => {
    input.addEventListener("change", calculateTotalPrice);
  });

  // precio total
  function calculateTotalPrice() {
    let totalPrice = 0;
    inputs.forEach((input) => {
      const price = parseFloat(input.dataset.price) || 0;
      const quantity = parseInt(input.value) || 0;
      totalPrice += price * quantity;

      if (totalPrice > 0) {
        document.getElementById("buyFood").classList.remove("disabled");
      } else {
        document.getElementById("buyFood").classList.add("disabled");
      }
    });
    totalPriceElement.textContent = totalPrice.toFixed(2) + " €";
  }

  calculateTotalPrice();

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  });
});

const countdownElement = document.getElementById("countdown");

// COUNT DOWN 121 DIAS
const now = new Date();
const targetDate = new Date(now.getTime() + 121 * 24 * 60 * 60 * 1000);

function updateCountdown() {
  const currentTime = new Date().getTime();
  const distance = targetDate.getTime() - currentTime;

  if (distance < 0) {
    countdownElement.textContent = "¡Comenzó!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m`;
}

setInterval(updateCountdown, 1000);

setInterval(updateCountdown, 1000);

// HACER MENU EPQUEÑO AL SCROLLEAR //

function shrinkHeader() {
  const scroll = window.scrollY;
  const threshold = window.innerHeight / 2;
  const header = document.querySelector(".navbar");
  const logo = header.querySelector(".logo.gradient-text");

  if (scroll > threshold) {
    header.classList.add("shrink");
    logo.classList.add("logo-small");
  } else {
    header.classList.remove("shrink");
    logo.classList.remove("logo-small");
  }
}
const container = document.querySelector(".circle-background");
const numCircles = 1070;

for (let i = 0; i < numCircles; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  // PEQUEÑO
  circle.style.width = "1px";
  circle.style.height = "1px";

  // AL EMPEZAR
  circle.style.top = `${Math.random() * 100}vh`;
  circle.style.left = `${Math.random() * 100}vw`;
  circle.style.transition = "none";

  container.appendChild(circle);

  // EsPERAR
  requestAnimationFrame(() => {
    animateCircle(circle);
  });
}

function animateCircle(circle) {
  const move = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 3000 + Math.random() * 2000;

    circle.style.transition = `top ${duration}ms ease-in-out, left ${duration}ms ease-in-out`;
    circle.style.top = `${y}vh`;
    circle.style.left = `${x}vw`;

    setTimeout(move, duration);
  };

  move(); // INICIAR MOV
}
window.addEventListener("scroll", shrinkHeader);

function shrinkHeader() {
  const header = document.querySelector("header");

  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
}
// VENTANA MODAL NEWSLETTER
window.addEventListener("load", function () {
  setTimeout(openModalWindow, 2000);
});

//  abrir/cerrar
let btnOpenModal = document.querySelector("#openModal");

if (btnOpenModal) {
  btnOpenModal.addEventListener("click", openModalWindow);
}

function openModalWindow() {
  let modalWindow = document.querySelector("#modalWindow");
  modalWindow.classList.add("show-modal");
}

let btnCloseModal = document.querySelector(
  "#modalWindow > .modal-content > .close"
);
let btnCloseModalAccept = document.querySelector(
  "#modalWindow > .modal-content > #closeModalAccept"
);

btnCloseModal.addEventListener("click", closeModalWindow);
btnCloseModalAccept.addEventListener("click", closeModalWindow);

function closeModalWindow() {
  let modalWindow = document.querySelector("#modalWindow");
  modalWindow.classList.remove("show-modal");
}

//  al hacer clic fuera del contenido
window.addEventListener("click", function (evento) {
  let modal = document.querySelector("#modalWindow");
  if (evento.target == modal) {
    closeModalWindow();
  }
});
