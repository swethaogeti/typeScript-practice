//Basi Types
let id: number = 5;
let company: string = "sweety";
let isCheck: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4];
ids.push(555);
console.log(ids);
let arr: any[] = [1, "sweety", true];
//=======================================================
//Tuple
let person: [number, string, boolean] = [1, "sweety", true];
//tuple Array

let employee: [number, string][];
employee = [
  [1, "sweety"],
  [2, "rossy"],
  [3, "mary"],
];

// let employee:[number,string][]=[[1,'sweety'],[2,'dolly'],[3,'rossy']]

//======================================================
//union

let productId: string | number;
productId = 22;

//==================================================
//enum - enums or enumerated types are data structure of constant length that holds a set of constant values
enum direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum direction2 {
  Up = "Up",
  Down = "down",
  Left = "left",
  Right = "rigth",
}
console.log(direction1.Up);
console.log(direction2.Right);
//===================================================
//Objects

// const user:{id:number,name:string}={
//     id:22,
//     name:'sweety'
// }

type User = { id: number; name: string };
type Point = boolean | number;
const p1: Point = true;

const user: User = {
  id: 22,
  name: "sweety",
};

//Type Assertion

let cid: any = 1;
// let custmerId=<string>cid
let customerId = cid as number;
let exampleId: any = false;

let exampleId2 = <string>exampleId;

//=================================================
//Functions

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 31312));

function log(msg: string | number) {
  console.log(msg);
}

log("gigigig");
log(23152);

//=============================================

//Interfaces-interfaces are capable of describing the wide rangeof shapes that that the javascript objects can take

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

let user1: UserInterface = {
  id: 222,
  name: "sweety",
};

let user2: UserInterface = {
  id: 3333,
  name: "simon",
  age: 28,
};

//Interface Functions

interface MathFunc {
  (x: number, y: number): number;
}

const addFun: MathFunc = (x: number, y: number): number => x + y;
function addFun2(x: number, y: number) {
  return x + y;
}

const subFun: MathFunc = (x: number, y: number): number => x - y;

type GenericFn = (x: number) => number;

const test: GenericFn = (x) => x + 1;

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
const num: number = 0;
const str: string = "";
const bool: boolean = false;

// non primitive types
type Obj = {
  name: string;
  company?: string;
};

interface Iobj {
  name: string;
}

interface Iobj {
  company: "";
}

const obj: Obj = {
  name: "",
};

const iObj: Iobj = {
  name: "",
  company: "",
};

type Arr = (string | number)[];
type Arr2 = Array<string | number>;

const list: Arr = [1, 2, "test"];

type Fn<T> = (a: string, b: T) => string;

const fn: Fn<Arr> = (a, b) => {
  return a;
};

type Person = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  mobile: string;
};

type ObjAnd = { name: string } & { mobile: number };
type Str = string & "address";

type Person1 = Omit<Person, "address" | "email">;

const objAnd: ObjAnd = { name: "", mobile: 913123 };

//classes

class PersonClass {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

function sum<T>(num: T): T {
  return num;
}

console.log(sum<number>(3));
let strArray = getArray<string>(["euqwute", "wuetwq", "weuywqyte"]);

let numArray = getArray<number>([1, 2, 3, 4, 5]);

console.log(numArray);

console.log(strArray);

let objAny: any = { x: 0 };

const names: string[] = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach((name) => {
  console.log(name.toLowerCase());
});

names.forEach((s) => {
  console.log(s.toUpperCase());
});

//1

function example1(name: string) {
  console.log("Hello" + name.toUpperCase());
}

example1("euywe");

//2
function example2(): number {
  return 25;
}

//object types

function printCoord(pt: { x: number; y: number }) {
  console.log(pt.x);
}

function printName1(obj: { frist: string; last?: string }) {
  console.log("eiruwie");
}

printName1({ frist: "dhsagd" });

//union Types
function printId(id: string | number) {
  console.log("your id is:" + id);
}
printId(101);
printId("202");

//type Aliases

type Point1 = {
  x: number;
  y: number;
};

type ID = number | string;
function example3(pt: ID) {
  console.log(pt);
}

//type assertion

const example4 = "hello" as unknown as number;

//literal types

let changingString: string = "Hello wworld";

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");

function dosomething(x: string | null) {}

//functions

function printToConsole(str: string) {
  console.log(str);
}

function greeter(fn: (a: string) => void) {
  fn("sweety");
}
