import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import data from './api/data.json'

const divQuestion = document.getElementById('div-question')

const createQuestion = (questions) => {
  return questions.map(e => (
    `<p>${e}</p>`
  ))
}



window.addEventListener('DOMContentLoaded', () => {
  data.results.map((e, i) => (
    divQuestion.innerHTML += `
      <div>
        <h3>${i + 1} - Pergunta:</h3>
        <h4>${e.question}</h4>
        <div>
          ${createQuestion(e.alternatives)}
        </div>
      </div>
    `
  ))
})
