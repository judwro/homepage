console.log("Hallo!");

let przycisk = document.querySelector(".przycisk")
let Naglowek = document.querySelector(".Naglowek");

przycisk.addEventListener("click", () => {
    Naglowek.remove();
});


console.log(przycisk);