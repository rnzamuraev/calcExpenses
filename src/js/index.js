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
  choiceExpenses: () => {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

      if (
        typeof a === "string" &&
        isNaN(a) &&
        !isNaN(b) &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 30
      ) {
        appData.expenses[a] = b;
        console.log(appData.expenses);
      } else {
        alert("Поле не верно заполнено");
        i--;
      }
    }
  },
  chooseOptExpenses: () => {
    for (let i = 1; i <= 3; i++) {
      let questionOptExpenses = +prompt(
        "Введите статью необязательных расходов?",
        ""
      );
      console.log(questionOptExpenses);

      if (
        typeof questionOptExpenses != null &&
        !isNaN(questionOptExpenses) &&
        questionOptExpenses != ""
      ) {
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
      } else {
        alert("Не верно заполнено поле");
        i--;
      }
    }
  },
  detectDayBudget: () => {
    appData.moneyPerDay = appData.budget / 30;
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: () => {
    if (appData.moneyPerDay <= 500) {
      console.log("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay <= 2000) {
      console.log("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("высокий уровень достатка");
    } else {
      console.log("Что-то пошло не так");
    }
  },
  checkSavings: () => {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накопления?", ""),
        percent = +prompt("Под какой процент?", "");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Ваш доход в месяц с депозита составит: " + appData.monthIncome);
    }
  },
  chooseIncome: () => {
    let a = prompt(
      "Что принесет дополнительные доход (Перечислите через запятую)",
      ""
    );

    while (a == "" || a == null || typeof a != "string") {
      alert("Не верно заполнены поля");
      appData.chooseIncome();
    }

    appData.income = a.split(", ");
    appData.income.push(prompt("Может что-нибудь еще?", ""));
    appData.income.sort();

    console.log(appData.income);

    appData.income.forEach(function (item, i) {
      alert("Способы доп. заработка: " + (i + 1) + ": " + item);
    });
  },
};
console.log(appData);

// appData.choiceExpenses();
// appData.chooseOptExpenses();
// appData.detectDayBudget();
// appData.checkSavings();
// appData.chooseIncome();

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + ": " + appData);
}

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
