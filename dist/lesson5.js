"use strict";
let a = "hello";
let b = a;
let c = a;
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "add");
let nextVal = addOrConcat(2, 3, "add");
// 10 as string
//this is double type conversion
10;
//The Dom
const img = document.querySelector("img");
//non-null assertion
const myImg = document.querySelector("#img");
