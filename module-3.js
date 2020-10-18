// // == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) Ця ф-я має повернути ціну замовлення
// function toGetPrice (){}
// const toGetPrice = function () {}

// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 }; 
// const orderA = { apple: 5, cheese: 1, bread: 3 };
// const orderB = { orange: 10, pork: 2, bread: 1 };

// const toGetPrice = (a, b) => {
//    const keysA = Object.keys(a);
//    const keysB = Object.keys(b);
//    let total = 0;

//    for (let key of keysB){
//     if (keysA.includes(key)) {
//         total += a[key] * b[key];
//         }
//    }
//    return total;
// };

// console.log(toGetPrice(productsPrice, orderA));
// console.log(toGetPrice(productsPrice, orderB));

// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
// const isObjectEmpty = function (obj) {
//     const keys = Object.keys(obj);
//     if (keys.length === 0) return true;
//     return false;

// // console.log(obj);
// }

// console.log(isObjectEmpty({}));  // true
// console.log(isObjectEmpty({name: 'user', age: 21}));  // false


// // == task-3 == //
// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
const SIZES = {
    BIG: { price: 25, cal: 100, time: 15 },
    SMALL : { price : 15, cal: 50, time: 7 },
    MEDIUM: { price : 15, cal: 50, time: 7 },
    EXTRA: { price : 25, cal: 100, time: 20 },
    }
const STUFFING = {
    CHEESE: { name: "CHEESE", price : 6.5, cal: 45, time: 2 },
    BEACON : { name: "BEACON", price : 10, cal: 70, time: 6 },
    TOMATO : { name: "TOMATO", price : 12.1, cal: 4, time: 5 },
    CHICKEN : { name: "CHICKEN", price : 9.3, cal: 30, time: 5.1 },
    }
const SAUCES = {
    MUSTARD: { name: "MUSTARD", price : 3, cal: 5, time: 1 },
    KETCHUP: { name: "KETCHUP", price : 4.2, cal: 20, time: 1.5 },
    BOLOGNESE: { name: "BOLOGNESE", price : 7.5, cal: 50, time: 3 },
    }
// Створити всі методи і перевірити чи вони працюють

const pizza = {
    size: [],
    stuff: [],
    sauces: [],
    isValid: false,

    toShowSize() {
        console.log(this.size)
    },
    
    toSetSize(value) {
        if (this.size.includes(value)) return console.log("Такая добавка уже есть!");
        this.size.push(value)
        console.log(this.size)
    },
    setStuff(value) {
        if (this.stuff.includes(value)) return console.log("Такая добавка уже есть!");
        this.stuff.push(value)
        console.log(this.stuff)
    },
    setSauces(value) {
        if (this.sauces.includes(value)) return console.log(`Такой ${value.name} уже добавлен!`);
        this.sauces.push(value)
        console.log(this.sauces)
    },

    delStuff(value) {
        if (!this.stuff.includes(value)) return console.log("Такой добавки нет!");
        for (let i = 0; i < this.stuff.length; i += 1) {
            if (this.stuff[i] === value) {
                this.stuff.splice(i, 1)
                return console.log(this.stuff); 
            }
        }
    },
    delSauces(value) {
        if (!this.sauces.includes(value)) return console.log("Такого соуса нет!");
        for (let i = 0; i < this.sauces.length; i += 1) {
            if (this.sauces[i] === value) {
                this.sauces.splice(i, 1)
                return console.log(this.sauces); 
            }
        }
    },

    getCost(num) {
        let totalPrice = 0;
        for (let i = 0; i <= num; i += 1) {
            if (this.size[i] === undefined || this.stuff[i] === undefined ||this.sauces[i] === undefined) continue
            // console.log(this.size[i].price)
            // console.log(this.stuff[i].price)
            // console.log(this.sauces[i].price)
            totalPrice += this.size[i].price + this.stuff[i].price + this.sauces[i].price
        }
        return console.log(totalPrice)
    },
    getCallories(num) {
        let totalCal = 0;
        for (let i = 0; i <= num; i += 1) {
            if (this.size[i] === undefined || this.stuff[i] === undefined ||this.sauces[i] === undefined) continue
            // console.log(this.size[i].price)
            // console.log(this.stuff[i].price)
            // console.log(this.sauces[i].price)
            totalCal += this.size[i].cal + this.stuff[i].cal + this.sauces[i].cal
        }
        return console.log(totalCal)
    },

    toShowOrder() {
        console.log(this.size, this.stuff, this.sauces);
    },

    toGetTotalTime(num) {
        let totalTime = 0;
        for (let i = 0; i <= num; i += 1) {
            if (this.size[i] === undefined || this.stuff[i] === undefined ||this.sauces[i] === undefined) continue
            // console.log(this.size[i].price)
            // console.log(this.stuff[i].price)
            // console.log(this.sauces[i].price)
            totalTime += this.size[i].time + this.stuff[i].time + this.sauces[i].time
        }
        return console.log(totalTime)
    },
    toValidateOrder() {},

}

console.log(pizza)
pizza.toSetSize(SIZES.BIG)
pizza.setStuff(STUFFING.CHEESE)
pizza.setStuff(STUFFING.CHEESE)
pizza.setStuff(STUFFING.BEACON)
pizza.setStuff(STUFFING.CHICKEN)
pizza.setSauces(SAUCES.KETCHUP)
pizza.setSauces(SAUCES.MUSTARD)

pizza.delStuff(STUFFING.CHEESE)
pizza.delStuff(STUFFING.TOMATO)
pizza.delSauces(SAUCES.MUSTARD)
pizza.getCost(4)
pizza.getCallories(4)
pizza.toGetTotalTime(4)


const burger = {
    size: [],
    stuff: [],
    sauces: [],
    isValid: false,
}

// pizza.toSetSize.call(burger, SIZES.SMALL)
// pizza.setStuff.apply(burger, [STUFFING.BEACON])

function myFunc(callback) {
    callback()
}
myFunc(pizza.toSetSize.bind(burger, SIZES.EXTRA))

// git add .
// git commit -m "commit_name"
// git push
