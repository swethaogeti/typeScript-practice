"use strict";
//Type Aliases
//Literal types
let myName;
let userName;
// userName='Dave'
//functions
const example41 = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = (a, b) => a * b;
let printWelcomeMsg = (msg) => msg;
//function interface
// interface mathFunction{
//     (a:number,b:number):number
// }
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 33) => {
    return a + b + c;
};
logMsg(sumAll(2, 3, 4));
logMsg(sumAll(2, 3));
//default values will not work with type and interface functions
//rest parameters;
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
const arrLs = [12, 3, 4];
logMsg(total(1, ...arrLs));
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinte = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
