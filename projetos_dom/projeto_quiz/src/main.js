import './style.css'
import data from './api/data.json'

const divQuestion = document.getElementById('div-questions')
const divTimer = document.getElementById('div-timer')
const barProgress = document.getElementById('bar-progress')
const btnSend = document.getElementById('btn-send')

const { results } = data
let count = 0
let initColorBar = 20
let timer;
let seconds = 0;

// Função para formatar o tempo (MM:SS)
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const secs = time % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

// Função para atualizar o temporizador
const updateTimer = () => {
  seconds++;
  divTimer.textContent = formatTime(seconds);
};


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
  .map((e, i) => (`<button class="btn-alternative">${e}</button>`)).join(" ")


window.addEventListener('DOMContentLoaded', () => {
  timer = setInterval(updateTimer, 1000);
  createQuestions();
})

btnSend.addEventListener('click', () => {
  count += 1
  if (count + 1 > 5) {
    return btnSend.disabled = true
  }
  console.log(barProgress)
  barProgress.style.width = `${initColorBar += 20}%`
  createQuestions()
})