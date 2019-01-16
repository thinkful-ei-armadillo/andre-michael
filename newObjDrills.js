/* eslint-disable indent */
'use strict';

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

function doesHeroMatch(hero, query){
    for(let key in query){
        if(hero[key] !== query[key]){
            return false;
        }
    }
    return true;   
}

function findOne(arr, query) {
    for(let i=0; i < arr.length; i++){
        if(doesHeroMatch(arr[i], query))
            return arr[i];
    }
    return null;
}


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
        jobTitle: 'student',
        boss: 'John'
    },
    {
        name: 'Michael Bramble',
        jobTitle: 'student',
        boss: 'John'
    },
    {
        name: 'Barack Obama',
        jobTitle: 'retired (unfortunately)',
        boss: 'John'
    },
    {
        name: 'Donald Trump',
        jobTitle: 'president (unfortunately)',
        boss: 'John'
    },
    {
        name: 'John',
        jobTitle: 'Founder'
    }
];

for(let i = 0; i < objs.length; i++) {
    if('boss' in objs[i]){
        console.log(`${objs[i].jobTitle} ${objs[i].name} reports to ${objs[i].boss} `);
    }
    else{
        console.log(`${objs[i].jobTitle} ${objs[i].name} doesn't report to anybody.`);
    }
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


function createCharacter(name, nickname, race, origin, weapon, attack, defense){  
    return {name, nickname, race, origin, weapon, attack, defense,
        describe: function(){
            console.log(`${this.name} is a ${this.race} of ${this.origin} who uses ${this.weapon}.`)
        },
        evaluateFight: function(character){
            let oppDmg = this.attack - character.defense;
            let charDmg = character.attack - this.defense;

            if(oppDmg < 0)
                oppDmg = 0;

            if(charDmg < 0)
                charDmg = 0;

            console.log('Your opponent takes ' + oppDmg + ' damage and you receive ' + charDmg + 'damage.')}};
}

let characters = [
    createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', 'a wizard staff', 10, 6),
    createCharacter('Bilbo Baggins', 'Bilbo', 'Hobbit', 'The Shire', 'the Ring', 2, 1),
    createCharacter('Frodo Baggins', 'Frodo', 'Hobbit', 'The Shire', 'String and Barrow Blade', 3, 2),
    createCharacter('Aragorn Son of Arathorn', 'Aragorn', 'Man', 'Dennedain', 'Anduril', 6, 8),
    createCharacter('Legolas', 'Legolas', 'Elf', 'Woodland Realm', 'Bow and Arrow', 8, 5),
    createCharacter('Arwen Undomiel', 'Arwen', 'Half-Elf', 'Rivendell', 'Hadhafang', 5, 5)
];

let aragorn = characters.find((character) => character.nickname === 'Aragorn');
aragorn.describe();

let hobbits = characters.filter((character) => character.race === 'Hobbit');
console.log(hobbits);

let strong = characters.filter((character) => character.attack >= 5);
console.log(strong);