function balancoFinanceiro(){

    let ganhoAnual = 0;
    let gastoAnual = 0;
    let saldoAnual = 0;

    for(let i = 1; i<= 12; i++  ){

        let ganho = Number(prompt("Ganho do mes:" + i));
        let gasto = Number(prompt("Gasto do mes:" + i));

        ganhoAnual += ganho;
        gastoAnual += gasto;

    }  

    saldoAnual = ganhoAnual - gastoAnual

    console.log("O gasto anual é de:" + gastoAnual);
    console.log("O ganho anual é de:" + ganhoAnual);
    console.log("O saldo anual é de:" + saldoAnual);

    if(saldoAnual > -1){
        console.log("Não houve prejuizo na empresa.");
    }
    else{
        console.log("Houve prejuizo na empresa.")
    }



}

2