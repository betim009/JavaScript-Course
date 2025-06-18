const btnStart = document.getElementById("btn-start");
const divRespostas = document.getElementById("div-respostas");

const perguntas = [
  {
    pergunta: "Comer",
    resposta_1: "Capaz de alimentar-se sozinho sem ajuda.",
    resposta_2: "Necessita de ajuda para comer ou é alimentado por terceiros."
  },
  {
    pergunta: "Vestir",
    resposta_1: "Capaz de escolher as roupas e vestir-se sozinho.",
    resposta_2: "Necessita de ajuda para escolher ou vestir-se."
  },
  {
    pergunta: "Tomar banho",
    resposta_1: "Capaz de tomar banho sozinho.",
    resposta_2: "Necessita de ajuda para tomar banho."
  },
  {
    pergunta: "Transferência",
    resposta_1: "Capaz de levantar-se e deitar-se sem ajuda.",
    resposta_2: "Necessita de ajuda para se levantar ou deitar-se."
  },
  {
    pergunta: "Ir ao banheiro",
    resposta_1: "Capaz de usar o banheiro sozinho.",
    resposta_2: "Necessita de ajuda para usar o banheiro."
  },
  {
    pergunta: "Continência",
    resposta_1: "Contém urina e fezes sem ajuda.",
    resposta_2: "Incontinência urinária e/ou fecal."
  }
];

btnStart.addEventListener("click", () => {
  divRespostas.innerHTML = `
    <div class="card shadow-sm">
      <div class="card-body">
        <form id="form-katz">
          ${perguntas
            .map(
              (item, index) => `
            <div class="mb-4">
              <label class="form-label"><strong>${item.pergunta}</strong></label><br>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="p${index}" value="1" required>
                <label class="form-check-label">${item.resposta_1}</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="p${index}" value="0">
                <label class="form-check-label">${item.resposta_2}</label>
              </div>
            </div>
          `
            )
            .join("")}
          <button type="submit" class="btn btn-success w-100">Ver Resultado</button>
        </form>
        <div id="resultado" class="mt-4"></div>
      </div>
    </div>
  `;
});

document.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  let score = 0;

  for (let value of formData.values()) {
    score += parseInt(value);
  }

  let interpretacao = "";

  if (score === 6) interpretacao = "Totalmente independente";
  else if (score >= 4) interpretacao = "Dependência moderada";
  else if (score >= 2) interpretacao = "Dependência significativa";
  else interpretacao = "Totalmente dependente";

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <div class="alert alert-info">
      <strong>Pontuação: ${score}</strong><br>
      ${interpretacao}
    </div>
  `;
});
