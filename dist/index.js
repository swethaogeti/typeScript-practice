"use strict";
//Basi Types
let id = 5;
let company = "sweety";
let isCheck = true;
let x = "Hello";
let ids = [1, 2, 3, 4];
ids.push(555);
console.log(ids);
let arr = [1, "sweety", true];
//=======================================================
//Tuple
let person = [1, "sweety", true];
//tuple Array
let employee;
employee = [
    [1, "sweety"],
    [2, "rossy"],
    [3, "mary"],
];
// let employee:[number,string][]=[[1,'sweety'],[2,'dolly'],[3,'rossy']]
//======================================================
//union
let productId;
productId = 22;
//==================================================
//enum - enums or enumerated types are data structure of constant length that holds a set of constant values
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 1] = "Up";
    direction1[direction1["Down"] = 2] = "Down";
    direction1[direction1["Left"] = 3] = "Left";
    direction1[direction1["Right"] = 4] = "Right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "down";
    direction2["Left"] = "left";
    direction2["Right"] = "rigth";
})(direction2 || (direction2 = {}));
console.log(direction1.Up);
console.log(direction2.Right);
const p1 = true;
const user = {
    id: 22,
    name: "sweety",
};
//Type Assertion
let cid = 1;
// let custmerId=<string>cid
let customerId = cid;
let exampleId = false;
let exampleId2 = exampleId;
//=================================================
//Functions
function add(a, b) {
    return a + b;
}
console.log(add(1, 31312));
function log(msg) {
    console.log(msg);
}
log("gigigig");
log(23152);
let user1 = {
    id: 222,
    name: "sweety",
};
let user2 = {
    id: 3333,
    name: "simon",
    age: 28,
};
const addFun = (x, y) => x + y;
function addFun2(x, y) {
    return x + y;
}
const subFun = (x, y) => x - y;
const test = (x) => x + 1;
test(12);
/**
 *  Basic types
 * 1. string
 * 2. number
 * 3. boolean
 *
 * Non Primitive types
 * 1. Objects
 * 2. Arrays
 * 3. Functions
 *
 */
// basic types
const num = 0;
const str = "";
const bool = false;
const obj = {
    name: "",
};
const iObj = {
    name: "",
    company: "",
};
const list = [1, 2, "test"];
const fn = (a, b) => {
    return a;
};
const objAnd = { name: "", mobile: 913123 };
//classes
class PersonClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const sweety = new PersonClass(1, "sweety");
const doly = new PersonClass(2, "Doly");
console.log(sweety, doly);
//generic and custom utility data types
/** to explore:
 * 1. Enums
 * 2. Generics
 * 3. Custom Utility Types
 *   a. Partial
 *   b. Required
 *   c. Pick
 *   d. Omit
 *   e. Exclude
 *   f. Extract
 *   g. ReturnType
 *   h. Parameters
 * 4. React Type cheatsheet
 *  1. ReactNode
 *  2. JSX
 *  3. ComponentType
 */
//generics
// function getArray(items: any[]): any[] {
//   return new Array().concat(items);
// }
function getArray(items) {
    return new Array().concat(items);
}
function sum(num) {
    return num;
}
console.log(sum(3));
let strArray = getArray(["euqwute", "wuetwq", "weuywqyte"]);
let numArray = getArray([1, 2, 3, 4, 5]);
console.log(numArray);
console.log(strArray);
let objAny = { x: 0 };
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach((name) => {
    console.log(name.toLowerCase());
});
names.forEach((s) => {
    console.log(s.toUpperCase());
});
//1
function example1(name) {
    console.log("Hello" + name.toUpperCase());
}
example1("euywe");
//2
function example2() {
    return 25;
}
//object types
function printCoord(pt) {
    console.log(pt.x);
}
function printName1(obj) {
    console.log("eiruwie");
}
printName1({ frist: "dhsagd" });
//union Types
function printId(id) {
    console.log("your id is:" + id);
}
printId(101);
printId("202");
function example3(pt) {
    console.log(pt);
}
//type assertion
const example4 = "hello";
//literal types
let changingString = "Hello wworld";
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
function dosomething(x) { }
//functions
function printToConsole(str) {
    console.log(str);
}
function greeter(fn) {
    fn("sweety");
}
