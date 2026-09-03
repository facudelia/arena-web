const preloader = document.querySelector(".preloader");

window.addEventListener("load", function() {
  setTimeout(function() {
    preloader.style.opacity = "0";
    setTimeout(function() {
      preloader.style.display = "none";
    }, 600);
  }, 3000);
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});

const dropdownParent = document.querySelector(".has-dropdown");
const dropdownLink = dropdownParent.querySelector(":scope > a");

dropdownLink.addEventListener("click", function(e) {
  if (window.matchMedia("(hover: hover)").matches) return;

  e.preventDefault();
  e.stopImmediatePropagation();
  dropdownParent.classList.toggle("dropdown-active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("active");
  });
});

const track = document.querySelector(".services-track");

if (track) {
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener("mousedown", function(e) {
    isDown = true;
    startX = e.pageX;
    scrollLeft = getTranslateX(track);
  });

  track.addEventListener("mouseup", function() {
    isDown = false;
  });

  track.addEventListener("mouseleave", function() {
    isDown = false;
  });

  track.addEventListener("mousemove", function(e) {
    if (!isDown) return;
    const dx = e.pageX - startX;
    let newX = scrollLeft + dx;

    const maxScroll = track.scrollWidth - track.parentElement.clientWidth;

    if (newX > 0) newX = 0;
    if (newX < -maxScroll) newX = -maxScroll;

    track.style.transform = `translateX(${newX}px)`;
  });

  track.addEventListener("touchstart", function(e) {
    isDown = true;
    startX = e.touches[0].clientX;
    scrollLeft = getTranslateX(track);
  });

  track.addEventListener("touchend", function() {
    isDown = false;
  });

  track.addEventListener("touchcancel", function() {
    isDown = false;
  });

  track.addEventListener("touchmove", function(e) {
    if (!isDown) return;
    e.preventDefault();

    const dx = e.touches[0].clientX - startX;
    let newX = scrollLeft + dx;

    const maxScroll = track.scrollWidth - track.parentElement.clientWidth;

    if (newX > 0) newX = 0;
    if (newX < -maxScroll) newX = -maxScroll;

    track.style.transform = `translateX(${newX}px)`;
  }, { passive: false });
}

function getTranslateX(el) {
  const style = window.getComputedStyle(el);
  const matrix = new DOMMatrixReadOnly(style.transform);
  return matrix.m41;
}

function getOffsetTop(el) {
  let top = 0;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent;
  }
  return top;
}

function centrarEnPantalla(elemento) {
  const totalTop = getOffsetTop(elemento);
  const scrollAmount = totalTop - (window.innerHeight - elemento.offsetHeight) / 2;
  window.scrollTo({
    top: scrollAmount,
    behavior: "smooth"
  });
}

const destinos = {
  "#inicio": document.querySelector("#inicio"),
  "#sobre": document.querySelector(".sobre-card"),
  "#servicios": document.querySelector("#servicios")
};

Object.keys(destinos).forEach(function(href) {
  document.querySelectorAll('a[href="' + href + '"]').forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const el = destinos[href];
      el.classList.add("visible");
      centrarEnPantalla(el);
    });
  });
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      if (entry.target.classList.contains("contacto-card")) {
        escribirTitulo();
      }
    }
  });
}, {
  threshold: 0.2,
  rootMargin: "0px 0px -150px 0px"
});
revealElements.forEach(function(el) {
  observer.observe(el);
});

const contactoTitulo = document.querySelector("#contacto-titulo");
const textoContacto = "Contacto";
let yaEscribio = false;

function escribirTitulo() {
  if (yaEscribio) return;
  yaEscribio = true;

  let i = 0;
  const intervalo = setInterval(function() {
    contactoTitulo.textContent += textoContacto[i];
    i++;
    if (i >= textoContacto.length) {
      clearInterval(intervalo);
    }
  }, 100);
}