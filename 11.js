function FolhadePagamentoVariavel() {
    let nome = prompt("Digite o nome do funcionário:");
    let salario = parseFloat(prompt("Digite o seu salário bruto:"));

    if(salario <= 1000){
        let salario_desconto = salario * 0.08;
        let salario_final = salario - salario_desconto;

        console.log(`O nome do funcionário: '${nome}'`);
        console.log("Taxa de Desconto é: 8%")
        console.log(`O valor do salário bruto é: '${salario.toFixed(2)}'`); 
        console.log(`O valor do desconto é: '${salario_desconto.toFixed(2)}'`); 
        console.log(`O salário final é: '${salario_final.toFixed(2)}'`); 
    }

    else if(salario > 1000 || salario <= 1500){
        let salario_desconto = salario * 0.085;
        let salario_final = salario - salario_desconto;

        console.log(`O nome do funcionário: '${nome}'`);
        console.log("Taxa de Desconto é: 8,5%")
        console.log(`O valor do salário bruto é: '${salario.toFixed(2)}'`); 
        console.log(`O valor do desconto é: '${salario_desconto.toFixed(2)}'`); 
        console.log(`O salário final é: '${salario_final.toFixed(2)}'`); 
    }

    else if(salario > 1500){
        let salario_desconto = salario * 0.09;
        let salario_final = salario - salario_desconto;

        console.log(`O nome do funcionário: '${nome}'`);
        console.log("Taxa de Desconto é: 9%")
        console.log(`O valor do salário bruto é: '${salario.toFixed(2)}'`); 
        console.log(`O valor do desconto é: '${salario_desconto.toFixed(2)}'`); 
        console.log(`O salário final é: '${salario_final.toFixed(2)}'`); 
    }

    else{
        console.log("Digite um valor válido...")
    }


    
   
}