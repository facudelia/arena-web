const preloader = document.querySelector(".preloader");
const heroAnimElements = document.querySelectorAll(".hero-anim");

window.addEventListener("load", function() {
  setTimeout(function() {
    preloader.style.opacity = "0";
    heroAnimElements.forEach(function(el) {
      el.classList.add("play");
    });
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

const slider = document.querySelector(".services-slider");

if (slider) {
  let isDown = false;
  let dragged = false;
  let startX;
  let startScrollLeft;

  slider.addEventListener("mousedown", function(e) {
    isDown = true;
    dragged = false;
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
  });

  window.addEventListener("mouseup", function() {
    if (!isDown) return;
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", function(e) {
    if (!isDown) return;
    const dx = e.pageX - startX;

    if (Math.abs(dx) > 3) {
      dragged = true;
      slider.classList.add("dragging");
    }

    slider.scrollLeft = startScrollLeft - dx;
  });

  // Native touch scrolling already handles swipe/drag and keyboard focus
  // brings off-screen cards into view for free — no custom touch handlers needed.

  slider.addEventListener("click", function(e) {
    if (dragged) {
      e.preventDefault();
      dragged = false;
    }
  }, true);
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

const contactoForm = document.querySelector(".contacto-form");

if (contactoForm) {
  contactoForm.addEventListener("submit", function() {
    const submitBtn = contactoForm.querySelector('button[type="submit"]');
    if (!submitBtn || submitBtn.disabled) return;
    submitBtn.disabled = true;
    submitBtn.dataset.originalText = submitBtn.textContent;
    submitBtn.textContent = "Enviando…";
  });
}

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