import { artilharia } from "./dados_jogadores.js";
import { tabelaCampeonato } from "./dados_times.js";

const tBodyTimes = document.getElementById("tbody-times");
const tBodyJogadores = document.getElementById("tbody-jogadores");


for (const time of tabelaCampeonato) {
  tBodyTimes.innerHTML += `
        <tr>
            <td>${time.pos}</td>
            <td>${time.time}</td>
            <td>${time.J}</td>
            <td>${time.V}</td>
            <td>${time.E}</td>
            <td>${time.D}</td>
        </tr>
    `;
}

for (const jogador of artilharia) {
    tBodyJogadores.innerHTML += `
        <tr>
            <td>${jogador.jogador}</td>
            <td>${jogador.gols}</td>
            <td>${jogador.assistencias}</td>
        </tr>
    `
}
