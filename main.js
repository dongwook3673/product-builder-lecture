
const generateBtn = document.getElementById("generate");
const numbersContainer = document.querySelector(".numbers");

generateBtn.addEventListener("click", () => {
    numbersContainer.innerHTML = "";
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
        const circle = document.createElement("div");
        circle.classList.add("number");
        circle.textContent = number;
        if (number <= 10) {
            circle.classList.add("color-1");
        } else if (number <= 20) {
            circle.classList.add("color-2");
        } else if (number <= 30) {
            circle.classList.add("color-3");
        } else if (number <= 40) {
            circle.classList.add("color-4");
        } else {
            circle.classList.add("color-5");
        }
        numbersContainer.appendChild(circle);
    }
});
