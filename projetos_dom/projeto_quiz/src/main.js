import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import data from './api/data.json'

const divQuestion = document.getElementById('div-questions')
const divBar = document.getElementById('div-bar')

const createQuestion = (questions) => {
  return questions.map((e, i) => (
    `<p>${i + 1} - ${e}</p>`
  )).join(" ")
}



window.addEventListener('DOMContentLoaded', () => {
  const { results } = data

  

  results.map((e, i) => (
    divQuestion.innerHTML += `
      <div class="div-question">
        <h3>${i + 1} - Pergunta:</h3>
        <h4>${e.question}</h4>
        <div>
          ${createQuestion(e.alternatives)}
        </div>
      </div>
    `
  ))
})
