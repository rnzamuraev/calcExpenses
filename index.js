let money = +prompt("Ваш бюджет на месяц?", ""),
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

// if (
//   typeof money != null &&
//   typeof time != null &&
//   money != "" &&
//   time != "" &&
//   time.length == 10
// )

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");

  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 30
  ) {
    console.log("done");
    appData.expenses[a] = b;
    console.log(appData.expenses);
  } else {
    console.log("Не верно заполнены поля");
  }
}

appData.moneyPerDay = appData.budget / 30;

// console.log(expensesSum);
alert("Ежедневный бюджуе: " + appData.moneyPerDay);
