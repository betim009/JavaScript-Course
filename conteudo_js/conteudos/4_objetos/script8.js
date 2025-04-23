// Objetos: Keys, Values e Entries

// 0. objeto:
const product = {
    name: 'Ruffles Original - 76g',
    price: 8.59,
    company: 'Elma Chips',
    nutritionInfo: {
        carbohydrates: 12,
        sugar: 0,
        sodium: 129,
    }
};

// 1. Object.keys()
console.log(Object.keys(product)); // [ 'name', 'price', 'company', 'nutritionInfo' ]

// 2. Object.values()
console.log(Object.values(product));
/*
[
  'Ruffles Original - 76g',
  8.59,
  'Elma Chips',
  { 
    carbohydrates: 12, 
    sugar: 0, 
    sodium: 129 
  }
]
*/

// Object.entries()
console.log(Object.entries(product));
/*
[
  [ 'name', 'Ruffles Original - 76g' ],
  [ 'price', 8.59 ],
  [ 'company', 'Elma Chips' ],
  [ 'nutritionInfo', { carbohydrates: 12, sugar: 0, sodium: 129 } ]
]
*/