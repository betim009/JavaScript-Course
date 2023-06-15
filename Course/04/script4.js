const residents = [
    {
      name: 'Luíza',
      lastName: 'Guimarães',
      floor: 10,
      apartment: 1005,
    },
    {
      name: 'William',
      lastName: 'Albuquerque',
      floor: 5,
      apartment: 502,
    },
    {
      name: 'Murilo',
      lastName: 'Ferraz',
      floor: 8,
      apartment: 804,
    },
    {
      name: 'Zoey',
      lastName: 'Brooks',
      floor: 1,
      apartment: 101,
    },
];

// primeiro elemento:
firstElement = residents[0]
console.log(residents[0])

// ultimo
lastElement = residents[residents.length -1]
console.log(residents[residents.length -1])

for (let index = 0; index < residents.length; index++) {
    const element = residents[index];
    console.log(element)
}
