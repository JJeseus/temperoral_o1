const btn = document.getElementById("btnMostrar");
const panel = document.getElementById("panelMensaje");
const texto = document.getElementById("textoMensaje");

/* ✅ Cambia aquí el mensaje */
const MENSAJE = "Mi niña linda, te quiero mucho y con este tiempo que hemos pasado juntos, me di cuenta que me gustas mucho, eres la mujer que quiero y adoro, espero pasar el resto de la vida juntos. Te lumaris🌻💛";

let mostrado = false;

function typeWriter(el, str, speed = 18) {
  el.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += str[i] ?? "";
    i++;
    if (i > str.length) clearInterval(timer);
  }, speed);
}

btn.addEventListener("click", () => {
  mostrado = !mostrado;

  if (mostrado) {
    panel.classList.add("show");
    panel.setAttribute("aria-hidden", "false");
    typeWriter(texto, MENSAJE, 18);
    btn.textContent = "Ocultar mensaje";
  } else {
    panel.classList.remove("show");
    panel.setAttribute("aria-hidden", "true");
    texto.textContent = "";
    btn.textContent = "Presiona aquí";
  }
});



