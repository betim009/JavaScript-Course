export class Produtos {
    constructor() { 
        this.result = [];
    }

    async getProdutos() {
        const req = await fetch("https://67b5223ba9acbdb38ed16600.mockapi.io/api/v1/foods");
        const res = await req.json();
        return this.result = res;
    }
}
