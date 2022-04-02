let money = prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате", "YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};
console.log(appData);

let question1 = prompt(
    "Введите обязательную статью расходов в этом месяце",
    ""
  ),
  question2 = prompt("Во сколько обойдется?", ""),
  question3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  question4 = prompt("Во сколько обойдется?", "");

appData.expenses.question1 = question2;
console.log(appData.expenses.question1);
appData.expenses.question3 = question4;
console.log(appData.expenses.question3);

let a = appData.expenses.question1;
let b = appData.expenses.question3;

let expensesSum = a + b;
console.log(expensesSum);
// alert((appData.budget - expensesSum) / 30);
