
let elements = document.getElementsByClassName("buttons");

document
    .getElementById("themechange")
    .addEventListener("click", function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle("fundobotao");
        }
    });

const aboutDropdown = document.getElementById("aboutDropdown");
const escondido = document.getElementById("escondido")
const sobre = document.getElementById("sobre")
sobre.addEventListener("click", () => {
    aboutDropdown.classList.toggle("show");
});




function toggleHtmlClass() {
    document.documentElement.classList.toggle("light");
};


