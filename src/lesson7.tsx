//typescript index signatures , keyof assertions & the record utility type

//Index signatures
interface TransactionObj {
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
