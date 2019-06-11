'use scrict';

// Объявление переменных

var money, time;
var questionExpenses1, questionExpenses2;

money = prompt('Каков ваш бюджет на месяц?',"Например - 30 000");
console.log(money);

time = prompt('Введите дату в формате YYYY-MM-DD', 'Например - 2019-01-01');
console.log(time);

let appData = {
    budget: money,
    timeData: time,
};
console.log(appData);


// Обязательные расходы

questionExpenses1 = prompt('Введите обязательную статью расходов в этом месяце', 'Например - еда');
console.log(questionExpenses1);

questionExpenses2 = prompt('Во сколько обойдется?', 'Например - 1000');
console.log(questionExpenses2);

let expenses = {
    answerExpenses1: questionExpenses1,
    answerExpenses2: questionExpenses2,
};
console.log(expenses);

// Необязательные расходы

let optionalExpenses = {

};

// Дополнительные доходы

let income = [];

let savings = false;


// Проверка типа переменных

console.log('Переменная: money - ', typeof(money) ); //string
console.log('Переменная: time - ', typeof(time) ); //string
console.log('Переменная: question1 - ', typeof(questionExpenses1) ); //string
console.log('Переменная: question2 - ', typeof(questionExpenses2) ); //string
console.log('Переменная: income - ', typeof(income) );
console.log('Переменная: savings - ', typeof(savings) );

// Преобразование в числовой тип

//money = +money;
//questionExpenses2 = +questionExpenses2;

//console.log('Переменная: money - ', typeof(money) ); //number
//console.log('Переменная: question2 - ', typeof(questionExpenses2) ); //number

// Расчет бюджета на 1 день

alert("Бюджет на 1 день составляет - " + (money/30) );
