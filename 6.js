function verificandoVogalConsoante(){

    let letra = prompt("Digite uma letra:")

    const vogais = "aeiouAEIOU";

    if (vogais.includes(letra)) {
        console.log(`'${letra}' é uma vogal.`);
    } else {
        console.log(`'${letra}' é uma consoante.`);
    }


}