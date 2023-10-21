function Simular() {

    const inicial = parseFloat(document.getElementById("valorApp").value);
    const prazo = parseInt(document.getElementById('prazo').value);
    const mensal = parseFloat(document.getElementById("aporteMensal").value);
    const rendimento = document.getElementById('trendimento').value;
    const escolha = document.querySelector('select').value;

    if (escolha == 'anos') {
        const valorAporteMensais = prazo * 12
        const valorFinalAporte = valorAporteMensais * mensal
        const valorFinal = valorFinalAporte + inicial
        const rInvestimento = valorFinal * rendimento
    
        
    document.getElementById("inicial").style.display = 'block'
    document.getElementById("mensal").style.display = 'block'
    document.getElementById("duracao").style.display = 'block'
    document.getElementById("juros_recebidos").style.display = 'block'
    document.getElementById("a_receber").style.display = 'block'
    document.getElementById("inicial").innerHTML = 'Investimento Inicial: R$' + inicial;
    document.getElementById("mensal").innerHTML = 'Investimento Mensal: R$' + mensal;
    document.getElementById("duracao").innerHTML = 'Tempo do Investimento:' + prazo*12 + ' ano(s)';
    document.getElementById("juros_recebidos").innerHTML = 'Juros Recebidos: R$' + Number(rendimento).toFixed(2);
    document.getElementById("a_receber").innerHTML = 'Valor a Receber c/ Juros: R$' + Number(rInvestimento).toFixed(2);
    }
    if (escolha == 'meses') {
       const aporte = mensal * prazo 
       const totalInvestido = aporte * inicial
       const valorFinal = totalInvestido * rendimento

       document.getElementById("inicial").style.display = 'block'
    document.getElementById("mensal").style.display = 'block'
    document.getElementById("duracao").style.display = 'block'
    document.getElementById("juros_recebidos").style.display = 'block'
    document.getElementById("a_receber").style.display = 'block'
    document.getElementById("inicial").innerHTML = 'Investimento Inicial: R$' + inicial;
    document.getElementById("mensal").innerHTML = 'Investimento Mensal: R$' + mensal;
    document.getElementById("duracao").innerHTML = 'Tempo do Investimento:' + prazo + ' mes(es)';
    document.getElementById("juros_recebidos").innerHTML = 'Juros Recebidos: R$' + Number(rendimento).toFixed(2);
    document.getElementById("a_receber").innerHTML = 'Valor a Receber c/ Juros: R$' + Number(valorFinal).toFixed(2);
    }




    
}