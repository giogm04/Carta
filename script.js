
let abierto = false;

function toggleSobre() {
  const contenedor = document.getElementById('contenedor');
  const frente = document.getElementById('frente');

  abierto = !abierto;

  if (abierto) {
    contenedor.classList.add('girado');
    setTimeout(() => {
      frente.classList.add('abierto');
    }, 600);
  } else {
    frente.classList.remove('abierto');
    setTimeout(() => {
      contenedor.classList.remove('girado');
    }, 600);
  }
}


function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.className = "corazon";
  corazon.innerText = "❤️";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = 2 + Math.random() * 3 + "s";
  corazon.style.fontSize = 12 + Math.random() * 24 + "px";
  corazon.style.opacity = 0.4 + Math.random() * 0.6;

  document.getElementById("corazones-container").appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

setInterval(crearCorazon, 300);


document.addEventListener("click", function (e) {
  for (let i = 0; i < 8; i++) {
    const chispa = document.createElement("div");
    chispa.className = "chispa";

    const x = e.clientX;
    const y = e.clientY;
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 40 + 20;

    chispa.style.left = `${x}px`;
    chispa.style.top = `${y}px`;
    chispa.style.setProperty("--dx", `${Math.cos(angle) * radius}px`);
    chispa.style.setProperty("--dy", `${Math.sin(angle) * radius}px`);

    document.body.appendChild(chispa);

    setTimeout(() => chispa.remove(), 600);
  }
});
