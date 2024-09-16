// main.js

// Menu Activo
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});

// Repliegue Automático del Menú
document.addEventListener("DOMContentLoaded", () => {
  // Obtiene todos los enlaces de navegación
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Obtiene el contenedor de la navegación colapsable
      const collapseElement = document.querySelector(".navbar-collapse");

      // Verifica si el contenedor está desplegado
      if (collapseElement && collapseElement.classList.contains("show")) {
        // Si está desplegado, colapsa el menú
        const bsCollapse = new bootstrap.Collapse(collapseElement, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });
});

// Modal de Proyectos
// Modal de Proyectos
function showProjectDetails(project) {
  const projectData = {
    ecommerce: {
      name: "E-Commerce",
      documents: [
        {
          name: "Épica",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/ProyECommerce.jpg",
        },
        {
          name: "Historias de Usuario",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/ECommerce-HU-1.jpg",
        },
        {
          name: "Casos de Prueba",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/ProyECommerce1.jpeg",
        },
        {
          name: "Informe de Defectos",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/no_bugs.jpeg",
        },
        {
          name: "Informe de Ejecución",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/ProyECommerce2.jpeg",
        },
      ],
    },
    bank: {
      name: "Banca",
      documents: [
        {
          name: "Épica",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/ProyectoBanca.jpg",
        },
        {
          name: "Historias de Usuario",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/Banca-HU-1.jpg",
        },
        {
          name: "Casos de Prueba",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/Banca1.jpeg",
        },
        {
          name: "Informe de Defectos",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/no_bugs.jpeg",
        },
        {
          name: "Informe de Ejecución",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/Banca2.jpeg",
        },
      ],
    },
    insurance: {
      name: "Seguros",
      documents: [
        {
          name: "Épica",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/ProyectoSeguros.jpg",
        },
        {
          name: "Historias de Usuario",
          url: "https://github.com/JoseLuisGalvis/portafolio-qa/blob/master/images/Seguros-HU-1.jpg?raw=true",
        },
        {
          name: "Casos de Prueba",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/insurance1.jpeg",
        },
        {
          name: "Informe de Defectos",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/no_bugs.jpeg",
        },
        {
          name: "Informe de Ejecución",
          url: "https://raw.githubusercontent.com/JoseLuisGalvis/portafolio-qa/master/images/insurance2.jpeg",
        },
      ],
    },
  };

  const data = projectData[project];
  if (data) {
    document.getElementById("projectName").textContent = data.name;

    const documentList = document.getElementById("documentList");
    documentList.innerHTML = "";
    data.documents.forEach((doc) => {
      const button = document.createElement("button");
      button.className = "list-group-item list-group-item-action";
      button.textContent = doc.name;
      button.onclick = () => openDocument(doc.url, doc.name);
      documentList.appendChild(button);
    });

    // Mostrar mensaje inicial
    document.getElementById("documentContent").innerHTML =
      "Seleccione un documento para ver su contenido.";

    const modal = new bootstrap.Modal(document.getElementById("projectModal"));
    modal.show();
  } else {
    console.error("Proyecto no encontrado:", project);
  }
}

function openDocument(url, name) {
  const contentDiv = document.getElementById("documentContent");
  contentDiv.innerHTML = `
    <h5>${name}</h5>
    <p>Haga clic en el botón para abrir el documento en una nueva pestaña.</p>
    <a href="${url}" target="_blank" class="btn btn-primary">Abrir Documento</a>
  `;
}

// -------------------------------------------------------------------------- //

function validarNombreApellido(event) {
  const regex = /^[A-Za-záéíóúñÑ ]+$/;
  if (!regex.test(event.target.value)) {
    event.target.setCustomValidity("Solo se permiten letras en este campo");
    alert("Por favor, ingrese solo letras en el campo de Nombre.");
  } else {
    event.target.setCustomValidity("");
  }
}

document.getElementById("inputPhone").addEventListener("input", function (e) {
  if (!/^[0-9]*$/.test(e.target.value)) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    alert("Por favor, ingrese solo números en el campo de Teléfono.");
  }
});

// -------------------------------------------------------------------------- //

document.addEventListener("DOMContentLoaded", () => {
  // Registrar ScrollToPlugin
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  // Animar el desplazamiento suave al hacer clic en los elementos del menú
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

      const targetSection = document.querySelector(
        e.currentTarget.getAttribute("href")
      );
      if (targetSection) {
        gsap.to(window, {
          scrollTo: { y: targetSection, offsetY: 50 }, // Offset para ajustar la posición del scroll
          duration: 0.5, // Duración de la animación de desplazamiento
          ease: "power2.inOut",
        });
      }
    });
  });

  // Animación para la imagen del header (desplazarse desde la derecha)
  gsap.from(".img-fluid", {
    duration: 2.5,
    x: "100vw", // Desplazarse desde la derecha
    opacity: 0,
    ease: "power2.out",
  });

  // Animación para el texto del header (desplazarse desde la izquierda con retraso)
  gsap.from(".display-4", {
    duration: 2.5,
    x: "-100vw", // Desplazarse desde la izquierda
    opacity: 0,
    ease: "power2.out",
    delay: 0.5, // Retraso para que entre después de la imagen
  });

  // Animación individualizada para cada botón del header
  gsap.from("#video", {
    duration: 3,
    scale: 0.7,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.6, // Retraso específico para este botón
    onStart: () => {
      // Asegurarse de que los botones estén visibles antes de la animación
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.style.visibility = "visible";
      });
    },
    onComplete: () => {
      // Asegurarse de que los botones permanezcan visibles después de la animación
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.style.opacity = "1";
      });
    },
  });

  gsap.from("#cv", {
    duration: 4,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.6, // Retraso específico para este botón
    onStart: () => {
      // Asegurarse de que los botones estén visibles antes de la animación
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.style.visibility = "visible";
      });
    },
    onComplete: () => {
      // Asegurarse de que los botones permanezcan visibles después de la animación
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.style.opacity = "1";
      });
    },
  });
});

// Segunda Sección Habilidades
// Registrar el plugin ScrollTrigger en GSAP
gsap.registerPlugin(ScrollTrigger);

// Animación para la sección de habilidades cuando se activa el scroll
ScrollTrigger.create({
  trigger: "#habilidades",
  start: "top 80%",
  onEnter: () => {
    // Animar el contenido de habilidades
    gsap.from("#habilidades .display-4", {
      duration: 3,
      opacity: 1,
      y: 50,
      ease: "power3.out",
    });

    // Animar la imagen usando el id #habilidades-img
    gsap.from("#habilidades-img", {
      duration: 4,
      opacity: 0,
      x: -100, // La imagen aparece desde la izquierda
      ease: "power3.out",
    });
  },
});

// Modales
const tecnicasBtn = document.getElementById("tecnicas-btn");
const blandasBtn = document.getElementById("blandas-btn");
const tecnicasModal = tecnicasBtn
  ? new bootstrap.Modal(document.getElementById("tecnicas-modal"))
  : null;
const blandasModal = blandasBtn
  ? new bootstrap.Modal(document.getElementById("blandas-modal"))
  : null;

if (tecnicasBtn) {
  tecnicasBtn.addEventListener("click", () => {
    tecnicasModal.show();
  });
}

if (blandasBtn) {
  blandasBtn.addEventListener("click", () => {
    blandasModal.show();
  });
}

// Animación de Cards Sección Educación
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#educacion",
  start: "top 80%",
  onEnter: () => {
    // Animar el contenido de educación
    gsap.from("#educacion .display-4", {
      duration: 3,
      opacity: 1,
      y: 50,
      ease: "power3.out",
    });
  },
});

gsap.utils.toArray(".about_card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.8, // Animación progresiva
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%", // Se activa cuando el 85% de la tarjeta está en vista
      toggleActions: "play none none reverse", // Para revertir la animación si el usuario hace scroll hacia arriba
    },
  });
});
