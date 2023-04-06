let stringArr = ["one", "hey", "Dave"];
let guitars = ["strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];

// stringArr[0]=33
stringArr.push("hey");

//guitars[0]=32
guitars.unshift("jim");
// guitars[1]=true

let bands: string[] = [];
bands.push("sweety");

//tuple

let mytuple: [string, number, boolean] = ["dave", 34, true];

let mixed = ["sweety", 1, false];

//mixed=mytuple
//mytuple=mixed

// mytuple[1]=23
// mytuple[0]=34234

//objects
let myObject: object;
myObject = [];
console.log(typeof myObject);
myObject = guitars;
myObject = {};

//object inference
const exampleObj = {
  prop1: "iewor",
  prop2: 23,
};

// exampleObj.prop1='weiuqw'
// exampleObj.prop2=true

type Guitartist = {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitartist = {
  name: "sweety",
  albums: ["eiu", "wueq", 423],
  active: true,
};
let evh2: Guitartist = {
  name: "sweety",
  albums: ["eiu", "wueq", 423],
  active: true,
};

// evh=evh2
// evh.years=3742

const greetGutarrist = (guitarist: Guitartist) => {
  //  return `hello ${guitarist.name.toLocaleLowerCase()}`;

  if (guitarist.name) {
    return `hello ${guitarist.name.toLocaleLowerCase()}`;
  }

  return `hello ${guitarist.name?.toLocaleLowerCase()}`;

  return "Hello";
};

console.log(greetGutarrist(evh2));

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

//Emuns
//unlike moat typescript features,Enums are not a type-level addition t javascript but something added to the languague and runtime

enum Grade {
  S = 1,
  W,
  E,
  T,
  Y,
}

console.log(Grade.S);
