// "use strict";

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате", "YYYY-MM-DD");

  while (
    isNaN(money) ||
    money == null ||
    time == null ||
    money == "" ||
    time == "" ||
    time.length != 10
  ) {
    alert("Не верно заполнены поля");
    start();
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};
console.log(appData);

function choiceExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = +prompt("Во сколько обойдется?", "");

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 30
    ) {
      console.log("Готово");
      appData.expenses[a] = b;
      console.log(appData.expenses);
    } else {
      console.log("Не верно заполнены поля");
      i--;
    }
  }
}
choiceExpenses();

// Цикл while

// let i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 30
//   ) {
//     console.log("Готово");
//     appData.expenses[a] = b;
//     console.log(appData.expenses);
//   } else {
//     console.log("Не верно заполнены поля");
//     i--;
//   }
//   i++;
// }

// Цикл do while

// let i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 30
//   ) {
//     console.log("Готово");
//     appData.expenses[a] = b;
//     i--;
//   }
//   i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

// console.log(expensesSum);
alert("Ежедневный бюджуе: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 500) {
  console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay <= 2000) {
  console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("высокий уровень достатка");
} else {
  console.log("Что-то пошло не так");
}
