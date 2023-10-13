function Simular() {


    //Inputs
    const inicial = parseFloat(document.getElementById("valorApp").value);
    const prazo = parseInt(document.getElementById('prazo').value);
    const mensal = parseFloat(document.getElementById("aporteMensal").value);
    const meses = document.getElementById("meses");
    const anos = document.getElementById("anos");
    const imposto = parseFloat(document.getElementById("imposto").value);
    const prefix = document.getElementById("pre");
    const posfix = document.getElementById("pos");
    const ipca = document.getElementById("ipca");

    let acumulado = inicial
    let total_acumulado = inicial + (mensal * prazo)

    //botões

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    let juros_compostos = 0;
    let juros_compostos_total = 0

    for (let i = 0; i < prazo; i++) {
        juros_compostos = (acumulado + imposto) / 100;
        juros_compostos_total += juros_compostos;
        acumulado += juros_compostos + mensal;
    }

    let valor_a_receber = total_acumulado + juros_compostos_total;

    document.getElementById("inicial").innerHTML = inicial;
    document.getElementById("mensal").innerHTML = mensal;
    document.getElementById("duracao").innerHTML = prazo;
    document.getElementById("tt_investimento").innerHTML = Number(total_acumulado).toFixed(2);
    document.getElementById("juros_recebidos").innerHTML = Number(juros_compostos_total).toFixed(2);
    document.getElementById("a_receber").innerHTML = Number(valor_a_receber).toFixed(2);
}