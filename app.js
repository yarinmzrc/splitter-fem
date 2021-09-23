const bill = document.querySelector(".bill-bar");
const numOfPeople = document.querySelector(".nopbar");
const tip5 = [document.querySelector(".tip-5"), 5];
const tip10 = [document.querySelector(".tip-10"), 10];
const tip15 = [document.querySelector(".tip-15"), 15];
const tip25 = [document.querySelector(".tip-25"), 25];
const tip50 = [document.querySelector(".tip-50"), 50];
const array = [tip5, tip10, tip15, tip25, tip50];
const reset = document.querySelector(".reset");
const custom = document.querySelector(".custom");

let billEvent = bill.value;
let numOfPeopleEvent = numOfPeople.value;
let customEvent = custom.value;

let tipAmount = document.querySelector(".num-tip-amount");
let total = document.querySelector(".num-total");

custom.addEventListener("input", () => {
  customEvent = custom.value;
});

custom.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    console.log(customEvent);
    if (billEvent && numOfPeopleEvent) {
      let num =
        (billEvent * ((100 + parseInt(customEvent)) / 100)) / numOfPeopleEvent;
      console.log(100 + parseInt(customEvent));
      let num2 = (billEvent * `0.${customEvent}`) / numOfPeopleEvent;
      total.innerText = `$${num < 10 ? num.toFixed(2) : num.toFixed(1)}`;
      tipAmount.innerText = `$${num2.toFixed(2)}`;
    }
  }
});

bill.addEventListener("input", () => {
  billEvent = bill.value;
  console.log(billEvent);
});

numOfPeople.addEventListener("input", () => {
  numOfPeopleEvent = numOfPeople.value;
  console.log(numOfPeopleEvent);
});

const focus = function () {
  array.forEach((tip) => {
    tip[0].addEventListener("focus", () => {
      if (billEvent && numOfPeopleEvent) {
        let num = (billEvent * ((100 + tip[1]) / 100)) / numOfPeopleEvent;
        let num2 = (billEvent * `0.${tip[1]}`) / numOfPeopleEvent;
        total.innerText = `$${num < 10 ? num.toFixed(2) : num.toFixed(1)}`;
        tipAmount.innerText = `$${num2.toFixed(2)}`;
      }
    });
  });
};

focus();

reset.addEventListener("click", () => {
  bill.value = "";
  numOfPeople.value = "";
  total.innerText = "$0.00";
  tipAmount.innerText = "$0.00";
  custom.value = "";
});
