'use strict';

// 1.
const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return loaf.water / loaf.flour * 100;
  }
};

console.log(loaf);

console.log(loaf.hydration());


// 2.
const obj = {
  foo: 20,
  bar: 'yes',
  fum: false,
  quux: 'hello',
  spam: 4
};

for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}


// 3.
const meals = [ 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'];

console.log(meals[3]);


// 4.
const cat = {
  name: 'Harold',
  jobTitle: 'Gatekeeper',
  boss: 'Leo'
};

const dog = {
  name: 'Franco',
  jobTitle: 'Security Officer',
  boss: 'Leo'
};

const lion = {
  name: 'Leo',
  jobTitle: 'Owner'
};

const lamb = {
  name: 'Penelope',
  jobTitle: 'Secretary',
  boss: 'Leo'
};

let workAnimals = new Array(cat, dog, lion, lamb);

for (let i = 0; i < workAnimals.length; i++) {
  console.log(`${workAnimals[i].name}, ${workAnimals[i].jobTitle}`);
}


// 5.
for (let i = 0; i < workAnimals.length; i++) {
  if (workAnimals[i].boss) {
    console.log(`${workAnimals[i].jobTitle} ${workAnimals[i].name} reports to ${workAnimals[i].boss}.`);
  } if (!workAnimals[i].boss) {
    console.log(`${workAnimals[i].jobTitle} ${workAnimals[i].name} doesn't report to anybody.`);
  }
}

// 6.
const decoder = {
  'a': 2,
  'b': 3,
  'c': 4,
  'd': 5
};

function decode(word) {
  let decoded = '';
  // convert words to array
  // loop through array
  // first letter of word determines the nth char of word to return 
  // each word equals one letter
  // each letter forms a word
  word = word.split(' ');
  for (let i = 0; i < word.length; i++) {
    if (word[i][0] in decoder) {
      decoded += word[i][decoder[word[i][0]] - 1];
    } else
      decoded += ' ';
  }
  return decoded;
}
console.log(decode('craft block argon meter bells brown croon droop'));


// 7.
// const character = {
//   [name: 'Gandalf the White', nickname: 'gandalf', race: 'Wizard', origin: 'Middle Earth', attack: 10, defense: 6],
//   [name: 'Bilbo Baggins', nickname: 'bilbo', race: 'Hobbit', origin: 'The Shire', attack: 2, defense: 1],
//   [name: 'Frodo Baggins', nickname: 'frodo', race: 'Hobbit', origin: 'The Shire', attack: 3, defense: 2],
//   [name: 'Aragorn son of Arathorn', nickname: 'aragorn', race: 'Man', origin: 'Dunnedain', attack: 6, defense: 8]
//   [name: 'Legolas', nickname: 'legolas', race: 'Elf', origin: 'Woodland Realm', attack: 8, defense: 5]
// };

function createCharacter(name, nickname, race, origin, attack, defense) {
  const character = ['Gandalf the White', 'Bilbo Baggins', 
  'Frodo Baggins', 'Aragorn', 'Legolas'];

  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight(character) {
      let x = this.attack - character.defense;
      let y = this.defense - character.attack;
      if(y > 0) {
        y = 0
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage.`;
    }
  };  
}

const Gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const Bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
const Frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const Aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8)
const Legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);

const characters = new Array(Gandalf, Bilbo, Frodo, Aragorn, Legolas);

const Arwen = createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 11, 12);
characters.push(Arwen);
console.log(characters.length);

function retrieveCharacter(characters) {
  let findAragorn = characters.find(characters => characters.nickname === 'aragorn');
  return findAragorn.describe();
}
console.log(retrieveCharacter(characters));

function onlyHobbits(characters) {
  return characters.filter(characters => characters.race === 'Hobbit');
}
console.log(onlyHobbits(characters));

function highAttack(characters) {
  return characters.filter(characters => characters.attack > 5);
}
console.log(highAttack(characters));

// last bulletpoint?

// 8.
// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];

// function findOne(arr, query) {
  
// }