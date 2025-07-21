const materias = [
  {
    id: "estado",
    nombre: "Estado, Sociedad y Política",
    aprobada: false,
    correlativas: []
  },
  {
    id: "historia",
    nombre: "Historia Institucional Argentina",
    aprobada: false,
    correlativas: []
  },
  {
    id: "instituciones",
    nombre: "Instituciones del Derecho",
    aprobada: false,
    correlativas: []
  },
  {
    id: "relaciones",
    nombre: "Relaciones Internacionales",
    aprobada: false,
    correlativas: []
  },
  {
    id: "sociologia",
    nombre: "Sociología General",
    aprobada: false,
    correlativas: []
  },
  {
    id: "administracion",
    nombre: "Administración General",
    aprobada: false,
    correlativas: []
  },
  {
    id: "doctrinas1",
    nombre: "Doctrinas e Ideas Políticas I",
    aprobada: false,
    correlativas: ["estado", "historia"]
  },
  {
    id: "cuantitativo",
    nombre: "Análisis Cuantitativo",
    aprobada: false,
    correlativas: ["estado", "sociologia"]
  },
  {
    id: "constitucional",
    nombre: "Derecho Constitucional",
    aprobada: false,
    correlativas: ["instituciones"]
  }
];
const contenedor = document.getElementById("materias");

function renderMaterias() {
  contenedor.innerHTML = "";

  materias.forEach(materia => {
    const div = document.createElement("div");
    div.className = "materia";
    
    if (!materia.correlativas.every(id => {
      const previa = materias.find(m => m.id === id);
      return previa && previa.aprobada;
    })) {
      div.classList.add("locked");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = materia.aprobada;
    checkbox.disabled = div.classList.contains("locked");

    checkbox.addEventListener("change", () => {
      materia.aprobada = checkbox.checked;
      renderMaterias(); // Volvemos a dibujar todo
    });

    const label = document.createElement("label");
    label.textContent = materia.nombre;

    div.appendChild(checkbox);
    div.appendChild(label);
    contenedor.appendChild(div);
  });
}

renderMaterias();
