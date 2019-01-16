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



const objs = [
    {
        name: 'Andre',
        jobTitle: 'student'
    },
    {
        name: 'Michael Bramble',
        jobTitle: 'student'
    },
    {
        name: 'Barack Obama',
        jobTitle: 'retired (unfortunately)'
    },
    {
        name: 'Donald Trump',
        jobTitle: 'president (unfortunately)'
    }
];

for(let i = 0; i < objs.length; i++) {
    console.log(`${objs[i].name}: ${objs[i].jobTitle}`);
}



function decode(word) {
    if(word.length === 5) {
        let char = word.slice(0, 1);
        let result = ' ';

        let cipher = {
            a: word.charAt(1),
            b: word.charAt(2),
            c: word.charAt(3),
            d: word.charAt(4),
        };

        if(char in cipher) {
          result = cipher[char];
        }

        return result;
    }
}

function decodeWords(sentence) {
    let decoded = '';
    let wordArray = sentence.split(' ');

    for(let i = 0; i < wordArray.length; i++) {
        decoded += decode(wordArray[i]);
    }

    return decoded;
}

let sentence = 'craft block argon meter bells brown croon droop';

console.log(decodeWords(sentence));
