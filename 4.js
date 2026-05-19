function arrumandoValores(){

    let numeros = [];

    for(let i =0; i<4; i++){
        numeros.push(Number(prompt("Digite um numeros: ")));

    }
    
    numeros.sort((a,b) => b - a);
    console.log("Ordem decrescente" + numeros);
   
}