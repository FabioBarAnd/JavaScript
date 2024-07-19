const lista = document.querySelector("ul");
document.querySelector("[data-aparece]").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector("[data-some]").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});
