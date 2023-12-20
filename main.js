
const counter = document.querySelector(".counter");
const numberElement = document.querySelector(".number");
const btnInc = document.querySelector(".btn-inc");
const btnDec = document.querySelector(".btn-dec");
const btnClr = document.querySelector(".btn-clr");

let count = 0;

const updateCount = () => {
  numberElement.textContent = count;
};

btnInc.addEventListener("click", () => {
  count++;
  updateCount();
});

btnDec.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

btnClr.addEventListener("click", () => {
  count = 0;
  updateCount();
});
updateCount();
