// "use strict";

const btnStart = document.getElementById("start");

const budgetValue = document.querySelector(".budget-value"),
  dayBudgetValue = document.querySelector(".daybudget-value"),
  levelValue = document.querySelector(".level-value"),
  expensesValue = document.querySelector(".expenses-value"),
  optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
  incomeValue = document.querySelector(".income-value"),
  monthSavingsValue = document.querySelector(".monthsavings-value"),
  yearSavingsValue = document.querySelector(".yearsavings-value");

const expensesItem = document.getElementsByClassName("expenses-item"),
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  expensesItemBtn = document.getElementsByTagName("button")[0],
  optionalExpensesBtn = document.getElementsByTagName("button")[1],
  countBudgetBtn = document.getElementsByTagName("button")[2];

const inputYearValue = document.querySelector(".year-value"),
  inputMonthValue = document.querySelector(".month-value"),
  inputDayValue = document.querySelector(".day-value"),
  inputSum = document.querySelector("#sum"),
  inputPercent = document.querySelector("#percent"),
  inputIncome = document.querySelector("#income"),
  inputSavings = document.querySelector("#savings");

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;
inputIncome.disabled = true;
inputSavings.disabled = true;
inputSum.disabled = true;
inputPercent.disabled = true;

let money, time;

btnStart.addEventListener("click", () => {
  time = prompt("Введите дату в формате", "YYYY-MM-DD");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (
    isNaN(money) ||
    money == null ||
    time == null ||
    money == "" ||
    time == "" ||
    time.length != 10
  ) {
    alert("Не верно заполнены поля");
    time = prompt("Введите дату в формате", "YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");
  }

  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  inputYearValue.value = new Date(Date.parse(time)).getFullYear();
  inputMonthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  inputDayValue.value = new Date(Date.parse(time)).getDate();

  expensesItemBtn.disabled = false;
});

expensesItemBtn.addEventListener("click", () => {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

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
      appData.expenses[a] = +b;
      sum += +b;
      console.log(sum);
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;

  optionalExpensesBtn.disabled = false;
});

optionalExpensesBtn.addEventListener("click", () => {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let questionOptExpenses = optionalExpensesItem[i].value;
    let sum = 0;
    if (
      !isNaN(questionOptExpenses) &&
      typeof questionOptExpenses != null &&
      questionOptExpenses != ""
    ) {
      appData.optionalExpenses[i] = questionOptExpenses;
      optionalExpensesValue.textContent += +appData.optionalExpenses[i] + ", ";
      sum += +appData.optionalExpenses[i].textContent;
      console.log(+sum);
    } else {
      questionOptExpenses = optionalExpensesItem[i].value;
    }

    countBudgetBtn.disabled = false;
  }
});

countBudgetBtn.addEventListener("click", () => {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget - expensesValue.textContent) / 30;
    dayBudgetValue.textContent = appData.moneyPerDay.toFixed(2);

    if (appData.moneyPerDay <= 500) {
      levelValue.textContent = "минимальный уровень достатка";
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay <= 2000) {
      levelValue.textContent = "средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "высокий уровень достатка";
    } else {
      levelValue.textContent = "Произишла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произишла ошибка";
  }
  inputIncome.disabled = false;
});

inputIncome.addEventListener("input", () => {
  let items = inputIncome.value;

  if (items != " " || items != "" || !isNaN(items)) {
    appData.income = items.split(",");
    incomeValue.textContent = appData.income;
  }
  inputSavings.disabled = false;
});

inputSavings.addEventListener("click", () => {
  if (appData.savings == true) {
    appData.savings = false;
    inputSum.disabled = true;
    inputPercent.disabled = true;
  } else {
    appData.savings = true;
    inputSum.disabled = false;
    inputPercent.disabled = false;
  }
});

inputSum.addEventListener("input", () => {
  if (appData.savings == true) {
    let sum = +inputSum.value,
      percent = +inputPercent.value;

    if (isNaN(inputSum || isNaN(inputPercent))) {
      appData.incomeMonth = (sum / 100 / 12) * percent;
      appData.incomeYear = (sum / 100) * percent;
    }
    monthSavingsValue.textContent = appData.incomeMonth.toFixed(2);
    yearSavingsValue.textContent = appData.incomeYear.toFixed(2);
  }
});

inputPercent.addEventListener("input", () => {
  if (appData.savings == true) {
    let sum = +inputSum.value,
      percent = +inputPercent.value;

    if (isNaN(inputSum || isNaN(inputPercent))) {
      appData.incomeMonth = (sum / 100 / 12) * percent;
      appData.incomeYear = (sum / 100) * percent;
    }
    monthSavingsValue.textContent = appData.incomeMonth.toFixed(2);
    yearSavingsValue.textContent = appData.incomeYear.toFixed(2);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

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
