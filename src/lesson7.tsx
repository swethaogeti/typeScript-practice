//typescript index signatures , keyof assertions & the record utility type

//Index signatures
// interface TransactionObj{
//    [index:string]:number
// }

interface TransactionObj {
  readonly [index: string]: number;
  pizza: number;
  books: number;
  job: number;
}

const transactionObj: TransactionObj = {
  pizza: 22,
  books: 23,
  job: 3,
};
console.log(transactionObj.books);
console.log(transactionObj["pizza"]);

let prop: string = "pizza";
// console.log(transactionObj[prop]) - this does not work

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction]; //this can be done in index signature not in the regular type
  }

  return total;
};

transactionObj.pizza = 300;
console.log(transactionObj.pizza);
