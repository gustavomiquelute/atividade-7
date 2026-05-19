function folhadePagamento() {
    let nome = prompt("Digite o nome do funcionário:");
    let salario = parseFloat(prompt("Digite o seu salário bruto:"));
    let desconto = 0.08;

    let salario_desconto = salario * desconto;
    let salario_final = salario - salario_desconto; 

    console.log(`O nome do funcionário: '${nome}'`);
    console.log(`O valor do salário bruto é: '${salario.toFixed(2)}'`); 
    console.log(`O valor do desconto é: '${salario_desconto.toFixed(2)}'`); 
    console.log(`O salário final é: '${salario_final.toFixed(2)}'`); 
}