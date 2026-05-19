function SomarNumeros(){
    let soma = 0;
    let = continuar = true;

    while(continuar){

        let numero = parseFloat(prompt("Digite um numero:(ou digite zero para finalizar.)"));

        if(!isNaN(numero)){

            soma += numero;

        }else{
            alert("Por favor, digite um numero válido.");
        }

        continuar = confirm("Deseja adcionar mais numeros?");

    }
    alert("As somas do números é: " + soma);
}

