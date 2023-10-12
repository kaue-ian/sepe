function Simular() {
    

    //Inputs
    const inicial = document.getElementById("valorApp").value;
    const prazo = document.getElementById('prazo').value;
    const mensal = document.getElementById("aporteMensal").value;
    const meses = document.getElementById("meses");
    const anos = document.getElementById("anos");
    const imposto = document.getElementById("imposto").value;
    const prefix = document.getElementById("pre");
    const posfix = document.getElementById("pos");
    const ipca = document.getElementById("ipca");

    let acumulado = inicial
    let total_acumulado = inicial + (mensal * prazo)

    //botões

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    alert(prazo)
}