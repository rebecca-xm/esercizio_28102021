const darkModeBtn = document.querySelector(".enableDarkMode");
darkModeBtn.addEventListener(
  "click", () => {
    document.body.classList.toggle("darkMode");
  }
);

const lightModeBtn = document.querySelector(".enableLightMode");
lightModeBtn.addEventListener(
    "click", () => {
   document.body.classList.toggle("lightMode");
    }
);

// ADDIZIONE

const somma = document.querySelector(".sum");

somma.addEventListener("click", (event) => {
let input = prompt('Inserisci qui due numeri separati da una virgola:');
const numbs = input.split(","); // due stringhe

const putNumb = [];

for (x of numbs) {
    putNumb.push(parseInt(x))
}

const sum = (numOne, numTwo) => numOne + numTwo;

function calculator(operation) {
    let totSum = 0;
    totSum = operation(...putNumb)
    return totSum;
}

calculator(sum)

setTimeout(() => { console.log(calculator(sum)) }, 5000);

});


// CERCHIO

let intColor;

const changeColor = () => {
if (!intColor) {
    intColor = setInterval(flashColor, 1000);
}
};

const flashColor = () => {
const circle = document.querySelector("#circle");
if (circle.className === "colorOne") {
    circle.className = "colorTwo";
} else {
    circle.className = "colorOne";
}
};

changeColor();

document.addEventListener("keypress", (event) => {
if (event.key === "Enter") {
    clearInterval(intColor);
}
})