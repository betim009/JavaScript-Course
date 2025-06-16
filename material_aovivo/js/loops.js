const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        poster: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        genre: "Drama",
        poster: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
    }
]

/*
// Para cada elemento do meu array movies
for (const element of movies) {
    console.log(element)
}

// Para cada posicao e elemento do meu array movies
for (const index in movies) {
    const element = movies[index]
    console.log(index)
    console.log(element)
}
*/


// Para cara posicao e elemento do meu array.
// Inicio, Fim e De quanto em quanto.
/*
for (let i = 0; i < movies.length; i++) {
    const e = movies[i];
    
    console.log(i)
    console.log(e)
}*/

// ECMA SCRIPT

// E semelhante ao for in
/*
movies.forEach((element, index) => {
    console.log(element)
})
*/

// movies.forEach(e => console.log(e))

//o find ecnontrar algo dentro da base de dados
/*
const encontrar = movies.find(e => e.title === "The Dark Knight")
console.log(encontrar)
*/

const filtrar = movies.filter(e => e.genre === "Drama")
console.log(filtrar)