import { getBrasileirao } from "./services/getBrasileirao.js";

async function main() {
    console.log(await getBrasileirao())
}

main()