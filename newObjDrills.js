/* eslint-disable indent */
'use strict';

let loaf = {flour: 300, water: 210, hydration: function() {
    return ((this.water / this.flour) * 100);
    }
}

console.log(`${loaf.flour}, ${loaf.water}`);
console.log(loaf.hydration());



const myObj = {
    foo: 'hey',
    bar: 25,
    fum: 100,
    quux: 'whats up',
    spam: 0,
};

let key;
for(key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}

const obj = {
    meals: ['breakfast', 'second breakfast',
    'elevenses', 'lunch', 'afternoon tea',
    'dinner', 'supper']
}

console.log(obj.meals[3]);