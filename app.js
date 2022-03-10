function letraG() {
  let letra = document.getElementById("texto").value.toUpperCase();
  transform.innerHTML = letra;
}
function letraP() {
  let letra = document.getElementById("texto").value.toLowerCase();
  transform.innerHTML = letra;
}
function letraN() {
  let letra = document.getElementById("texto").value;
  transform.innerHTML = `<b>${letra}</b>`;
}
function letraI() {
  let letra = document.getElementById("texto").value;
  transform.innerHTML = `<i>${letra}</i>`;
}
function letraM() {
  let letra = document.getElementById("texto").value;
  transform.innerHTML = `<span style='text-transform: capitalize'>${letra}</span>`;
}
