import { getAge } from "./utils";

interface Person {
  name: string;
  birthday: Date;
}

// 此範例中，不展示如何filter，因為filter的部分不是重點
const people: Person[] = [
  {
    name: "Alice",
    birthday: new Date("1990-05-10")
  },
  {
    name: "Bob",
    birthday: new Date("1985-03-22")
  },
  {
    name: "Charlie",
    birthday: new Date("1995-12-07")
  },
  {
    name: "David",
    birthday: new Date("1982-09-18")
  },
  {
    name: "Eve",
    birthday: new Date("2002-07-31")
  }
];

type Gift = {
  id: number;
  name: string;
  minAge: number;
};

const gifts: Gift[] = [
  { id: 1, name: "Toy Car", minAge: 5 },
  { id: 2, name: "Laptop", minAge: 15 },
  { id: 3, name: "T-shirt", minAge: 0 },
  { id: 4, name: "Book", minAge: 5 },
  { id: 5, name: "Smartphone", minAge: 12 }
];

const giftPreferences: Record<number, Record<number, number>> = {
  1: { 1: 7, 2: 8, 3: 4, 4: 9, 5: 6 },
  2: { 1: 10, 2: 8, 3: 2, 4: 9, 5: 5 },
  3: { 1: 5, 2: 6, 3: 9, 4: 2, 5: 7 },
  4: { 1: 8, 2: 7, 3: 9, 4: 3, 5: 6 },
  5: { 1: 6, 2: 9, 3: 8, 4: 2, 5: 10 }
};

const canReceive: { [person: string]: { [gift: string]: boolean } } = {
  Alice: {
    "Toy Car": true,
    Laptop: false,
    "T-shirt": true,
    Book: true,
    Smartphone: false
  },
  Bob: {
    "Toy Car": true,
    Laptop: true,
    "T-shirt": true,
    Book: true,
    Smartphone: true
  },
  Charlie: {
    "Toy Car": true,
    Laptop: false,
    "T-shirt": true,
    Book: false,
    Smartphone: true
  },
  Dave: {
    "Toy Car": false,
    Laptop: true,
    "T-shirt": true,
    Book: true,
    Smartphone: true
  },
  Eve: {
    "Toy Car": true,
    Laptop: true,
    "T-shirt": true,
    Book: false,
    Smartphone: true
  }
};
// 送禮也要看age
const pairs: Array<{ person: string; gift: string }> = [];

for (const person of people) {
  for (const gift of gifts) {
    // TODO:assign gifts to people based on their preferences

    const now = new Date();
    const age = getAge(person.birthday, now);
    if (age >= 18 && canReceive[person.name][gift.name]) {
      pairs.push({ person: person.name, gift: gift.name });
    }
  }
}

console.log(pairs);
