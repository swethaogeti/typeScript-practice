"use strict";
//typescript index signatures , keyof assertions & the record utility type
const transactionObj = {
    pizza: 22,
    books: 23,
    job: 3,
};
console.log(transactionObj.books);
console.log(transactionObj["pizza"]);
let prop = "pizza";
// console.log(transactionObj[prop]) - this does not work
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; //this can be done in index signature not in the regular type
    }
    return total;
};
transactionObj.pizza = 300;
console.log(transactionObj.pizza);
