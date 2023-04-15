"use strict";
let stringArr = ["one", "hey", "Dave"];
let guitars = ["strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
// stringArr[0]=33
stringArr.push("hey");
//guitars[0]=32
guitars.unshift("jim");
// guitars[1]=true
let bands = [];
bands.push("sweety");
//tuple
let mytuple = ["dave", 34, true];
let mixed = ["sweety", 1, false];
//mixed=mytuple
//mytuple=mixed
// mytuple[1]=23
// mytuple[0]=34234
//objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = guitars;
myObject = {};
//object inference
const exampleObj = {
    prop1: "iewor",
    prop2: 23,
};
let evh = {
    name: "sweety",
    albums: ["eiu", "wueq", 423],
    active: true,
};
let evh2 = {
    name: "sweety",
    albums: ["eiu", "wueq", 423],
    active: true,
};
// evh=evh2
// evh.years=3742
const greetGutarrist = (guitarist) => {
    //  return `hello ${guitarist.name.toLocaleLowerCase()}`;
    var _a;
    if (guitarist.name) {
        return `hello ${guitarist.name.toLocaleLowerCase()}`;
    }
    return `hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()}`;
    return "Hello";
};
console.log(greetGutarrist(evh2));
//Emuns
//unlike moat typescript features,Enums are not a type-level addition t javascript but something added to the languague and runtime
var Grade;
(function (Grade) {
    Grade[Grade["S"] = 1] = "S";
    Grade[Grade["W"] = 2] = "W";
    Grade[Grade["E"] = 3] = "E";
    Grade[Grade["T"] = 4] = "T";
    Grade[Grade["Y"] = 5] = "Y";
})(Grade || (Grade = {}));
console.log(Grade.S);
