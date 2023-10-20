function Simular() {

    const inicial = parseFloat(document.getElementById("valorApp").value);
    const prazo = parseInt(document.getElementById('prazo').value);
    const mensal = parseFloat(document.getElementById("aporteMensal").value);
    const sp = document.querySelector('#selectp')
    const imposto = parseFloat(document.getElementById("imposto").value);
    const prefix = document.getElementById("pre");
    const posfix = document.getElementById("pos");
    const ipca = document.getElementById("ipca");
    const escolha = document.querySelector('select').value;


    let acumulado = inicial

    if (escolha == 'meses') {
        let total_acumulado = inicial + (mensal * prazo)
        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        const btn3 = document.getElementById("btn3");

        let juros_compostos = 0;
        let juros_compostos_total = 0

        for (let i = 1; i < prazo; i++) {
            juros_compostos = (acumulado + imposto) / 100;
            juros_compostos_total += juros_compostos;
            acumulado += juros_compostos + mensal;
        }

        let valor_a_receber = total_acumulado + juros_compostos_total;

        
    document.getElementById("inicial").style.display = 'block'
    document.getElementById("mensal").style.display = 'block'
    document.getElementById("duracao").style.display = 'block'
    document.getElementById("tt_investimento").style.display = 'block'
    document.getElementById("juros_recebidos").style.display = 'block'
    document.getElementById("a_receber").style.display = 'block'
    document.getElementById("inicial").innerHTML = 'Investimento Inicial: R$' + inicial;
    document.getElementById("mensal").innerHTML = 'Investimento Mensal: R$' + mensal;
    document.getElementById("duracao").innerHTML = 'Tempo do Investimento:' + prazo + ' mes(es)';
    document.getElementById("tt_investimento").innerHTML = 'Total do Investimento: R$' + Number(total_acumulado).toFixed(2);
    document.getElementById("juros_recebidos").innerHTML = 'Juros Recebidos: R$' + Number(juros_compostos_total).toFixed(2);
    document.getElementById("a_receber").innerHTML = 'Valor a Receber c/ Juros: R$' + Number(valor_a_receber).toFixed(2);
    }
    else {
        let total_acumulado = inicial + (mensal * prazo)
        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        const btn3 = document.getElementById("btn3");

        let juros_compostos = 0;
        let juros_compostos_total = 0

        for (let i = 0; i < prazo; i++) {
            juros_compostos = (acumulado + imposto) / 100;
            juros_compostos_total += juros_compostos + 2;
            acumulado += juros_compostos + mensal;
        }

        let valor_a_receber = total_acumulado + juros_compostos_total;

        
    document.getElementById("inicial").style.display = 'block'
    document.getElementById("mensal").style.display = 'block'
    document.getElementById("duracao").style.display = 'block'
    document.getElementById("tt_investimento").style.display = 'block'
    document.getElementById("juros_recebidos").style.display = 'block'
    document.getElementById("a_receber").style.display = 'block'
    document.getElementById("inicial").innerHTML = 'Investimento Inicial: R$' + inicial;
    document.getElementById("mensal").innerHTML = 'Investimento Mensal: R$' + mensal;
    document.getElementById("duracao").innerHTML = 'Tempo do Investimento:' + prazo + ' ano(s)';
    document.getElementById("tt_investimento").innerHTML = 'Total do Investimento: R$' + Number(total_acumulado).toFixed(2);
    document.getElementById("juros_recebidos").innerHTML = 'Juros Recebidos: R$' + Number(juros_compostos_total).toFixed(2);
    document.getElementById("a_receber").innerHTML = 'Valor a Receber c/ Juros: R$' + Number(valor_a_receber).toFixed(2);
    }




    
}