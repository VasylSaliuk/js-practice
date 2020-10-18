// task-1
// let admin;
// let name = "Джон";
// admin = name;
// alert(admin);

// task-2
// const leapYear = "Високосний рік";
// const notLeapYear = "Не високосний рік";
// let userYear = prompt();
// console.log(userYear);

// if (userYear === null) {
//     alert ('Відміненно користувачем');
// } else {
//     if (userYear == 0 || isNaN(userYear)) {
//         alert (invalid);
//     } else if (userYear % 4 === 0 && userYear != 0) {
//         alert (leapYear);
//     }  else {
//         alert (notLeapYear);
//     }
// }

// task-3
// let userInput = prompt('Введіть число від 1 до 10!');
// let computerInput = Math.floor(Math.random() * (11 - 1) + 1);
// // console.log(computerInput);

// if (userInput === null) {
//     alert ('Відмінено користувачем');
// } else {
//     if (isNaN(userInput) || userInput < 1 || userInput > 10) {
//         alert ('Ви ввели не валідне значення!!!');
//     } else if (+userInput === computerInput) {
//         alert (`Вітаю! Співпало: ${userInput} - ${computerInput}`);
//     } else {
//         alert (`Не співпало: ${userInput} - ${computerInput}`);
//   }
// }

// module-2 task-1
// Написати ф-ю capitalize яка буде приймати строку і буде вертати 
// нову строку де кожне слово буде починатися з великої літери.

const capitalize = function (string) {

    console.log(string);
    const arrayCap = string.split(" ");
    console.log(arrayCap);
    const newArray = [];
    for (let elem of arrayCap) {
        console.log(elem);
        const word = elem[0].toUpperCase() + `${elem.slice(1)}`;
        console.log(word);
        newArray.push(word);
    }
    console.log(newArray);
    return string = newArray.join(' ');
}

console.log(capitalize('the quick brown fox')); // 'The Quick Brown Fox '

