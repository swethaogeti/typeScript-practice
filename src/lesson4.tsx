//Type Aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

//Literal Types,function types

type example40 = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

//Literal types
let myName: "sweety";

let userName: "Dave" | "Jhon" | "Amy";

// userName='Dave'

//functions
const example41 = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hello");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};
type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = (a, b) => a * b;

type printMsg = (msg: string) => string;
let printWelcomeMsg: printMsg = (msg) => msg;

//function interface

// interface mathFunction{
//     (a:number,b:number):number
// }

//optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 33): number => {
  return a + b + c;
};

logMsg(sumAll(2, 3, 4));
logMsg(sumAll(2, 3));

//default values will not work with type and interface functions

//rest parameters;
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
const arrLs = [12, 3, 4];
logMsg(total(1, ...arrLs));

logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinte = () => {
  let i: number = 1;

  while (true) {
    i++;

    if (i > 100) break;
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";

  return createError("This should never happen");
};
