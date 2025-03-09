import './style.css'
import data from './api/data.json'

const divQuestion = document.getElementById('div-questions')
const divBar = document.getElementById('div-bar')
const btnSend = document.getElementById('btn-send')

const { results } = data
let count = 0

const createQuestions = () => {
  divQuestion.innerHTML = ""
  divQuestion.innerHTML += `
    <div class="div-question">
      <h3>${count + 1} - Pergunta:</h3>
      <h4>${results[count].question}</h4>
      <div>
        ${createAlternatives(results[count].alternatives)}
      </div>
    </div>
  `
}

const createAlternatives = (questions) => questions
  .map((e, i) => (`<p>${i + 1} - ${e}</p>`)).join(" ")


window.addEventListener('DOMContentLoaded', () => {
  createQuestions();
})

btnSend.addEventListener('click', () => {
  count += 1
  if (count + 1 > 5) {
    return btnSend.disabled = true
  }
  createQuestions()
})