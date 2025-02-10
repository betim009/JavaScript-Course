export const escudos = [
    {
        id: 1,
        nome: "Escudo de madeira",
        defesa: 4,
        ataque: 0,
        imagem: "https://www.tibiawiki.com.br/images/5/58/Dwarven_Shield.gif"
    },
    {
        id: 2,
        nome: "Escudo do gavião branco",
        defesa: 7,
        ataque: 0,
        imagem: "https://www.tibiawiki.com.br/images/2/21/Eagle_Shield.gif"
    },
    {
        id: 3,
        nome: "Escudo abençoado",
        defesa: 10,
        ataque: 0,
        imagem: "https://www.tibiawiki.com.br/images/1/1f/Blessed_Shield.gif"
    },
    {
        id: 4,
        nome: "Escudo mágico",
        defesa: 7,
        ataque: 3,
        imagem: "https://www.tibiawiki.com.br/images/0/00/Tempest_Shield.gif"
    },
    {
        id: 5,
        nome: "Escudo madeira de pinha",
        defesa: 7,
        ataque: 1,
        imagem: "https://images2.imgbox.com/2e/6e/Zlv1nGiW_o.png"
    },
    {
        id: 6,
        nome: "Escudo zoi de Cyclops",
        defesa: 7,
        ataque: 1,
        imagem: "https://images2.imgbox.com/c3/7a/50hXXwex_o.png"
    }
];

const liEscudos = document.getElementById('li-escudos');
const contentResult = document.getElementById('content-result');


liEscudos.addEventListener('click', () => {
    contentResult.innerHTML = '';
    contentResult.innerHTML += `
        <table class="table table-warning">
            <thead>
                <tr> 
                    <th>
                        <h6>Imagem</h6>
                    </th>
                    <th>
                        <h6>Nome</h6>
                    </th>
                    <th>
                        <h6>Defesa</h6>
                    </th>
                </tr>
            </thead>
            <tbody id="tbody-escudo">
            </tbody>
        </table>
    `
    const tbodyEscudo = document.getElementById('tbody-escudo');
    escudos.map((e, i) => (
        tbodyEscudo.innerHTML += `
            <tr>
                <td class="dialog-img">
                    <img class="img-60" src="${e.imagem}" />
                </td>
                <td>
                    <p>${e.nome}</p>
                </td>
                <td>
                    <p>${e.defesa}</p>
                </td>
            </tr>
        `
    ))

    contentResult.innerHTML += `
        <dialog id="modal-img">
            <div class="modal-header">
                <button id="close-modal">Fechar</button>
            </div>
            <div id="modal-body">

            </div>
        </dialog>
    `;

    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');
    const modalBody = document.getElementById('modal-body');

    const dialogImg = document.querySelectorAll('.dialog-img')
    dialogImg.forEach((img, index) => {
        img.addEventListener('click', () => {
            modalImg.showModal();
            modalBody.innerHTML = `
                <img class="img-modal" src="${escudos[index].imagem}" />
            `
        })
    });
    closeModal.addEventListener('click', () => modalImg.close())
})





