"use strict";
// Type inferrance
let chef = 'Ade';
let pans = 7;
let canCook = true;
let fruits = ["mangoes", "bananas", "apples"]; // type arrays
chef = "Mike";
pans = 10;
canCook = false;
fruits.push("oranges");
let singleFruit = fruits[1];
// Type annotation
let planet = 'Earth';
let moon = 1;
let isRound = true;
let group; // type arrays
let hsla;
planet = 'Mars';
moon = 12;
isRound = false;
group = [23, 32, 54];
group.push(32);
hsla = [10, "100%", "55%", 1];
// null and undefined 
let something;
let anotherSomething; //these two can't be changed
// auy type
let age;
let myState;
// object literal 
let user = {
    firstName: "Yehhmii",
    age: 10,
    id: 1
};
user.firstName = "Doyin";
user.id = 2;
// note that you can also infer type in onject literal
let report = {
    company: 'Eco',
    id: 1
};
report.company = 'Access';
// functions 
function addTwoNumbers(a, b) {
    return a + b;
}
const subtrackTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(2, 2);
subtrackTwoNumbers(8, 3);
function sumTotal(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
sumTotal([2, 34, 5, 4, 7, 6, 8]);
const new_author = { name_author: 'Adeoye', avatar: './image/myguy.png' };
const new_post = {
    title: 'My first post',
    body: 'Support my brand please',
    id: 1,
    created_at: new Date,
    author: new_author
};
function newPost(post) {
    console.log(`This is a new post by ${post.author.name_author} which said ${post.body}`);
}
newPost(new_post);
// with arrays 
let the_array = [];
the_array.push(new_post);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const oneColor = getRandomColor();
const twoColor = getRandomColor();
console.log(oneColor, twoColor);
// union type
let id;
id = "myNumber";
id = 23;
// using type guide
function toConvert(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const oneNum = toConvert('70');
const twoNum = toConvert(20);
console.log(oneNum, twoNum);
