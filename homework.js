'use scrict';

// Задание №1

let money, time;

money = +prompt('Каков ваш бюджет на месяц?',"");
time = prompt('Введите дату в формате YYYY-MM-DD', 'Например - 2019-01-01');

let appData = {
    budget: money,
    timeData: time,
    expenses: {}, // статья обязательных расходов
    optionalExpenses: {}, // статья необязательных расходов
    income: [],
    savings: false,
};

// Задание №2

// Основной способ

for (let i = 0; i < 2; i++) {
    
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        
    if ( typeof (a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        
        console.log('Well done!');
        appData.expenses[a] = b;
    }
    // Если пользователь оставит поля пустыми
    else{
        alert('Пожалуйста, заполните все поля формы!')
        a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    }
}
console.log(appData);

// 2-й способ (while)

/* let i = 0;
while (i < 2) {
    
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    i ++;
    
    if ( typeof (a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        
    console.log('Well done!');
    appData.expenses[a] = b;
}
else{
    alert('Пожалуйста, заполните все поля формы!')
    a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
}
}
console.log(appData); */

// 3-й способ (do)

/* let i = 0;
do{
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
i ++;
if ( typeof (a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        
console.log('Well done!');
appData.expenses[a] = b;
}
}
while (i<2); 
console.log(appData); */

appData.moneyPerDay = ( appData.budget / 30 );

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
}
else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка')
}
else {
    console.log('Произошла ошибка');
}
