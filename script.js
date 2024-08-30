// Função para calcular insalubridade
function calcularInsalubridade() {
    const nivelRuido = parseFloat(document.getElementById('nivelRuido').value);
    const tempoExposicao = parseFloat(document.getElementById('tempoExposicao').value);
    const salario = parseFloat(document.getElementById('salarioUsuario').value);

    let grauInsalubridade, percentualInsalubridade;

    // Lógica de cálculo do grau de insalubridade
    if (nivelRuido >= 85 && nivelRuido <= 90 && tempoExposicao <= 8) {
        grauInsalubridade = "Mínimo";
        percentualInsalubridade = 0.10;
    } else if (nivelRuido > 90 && nivelRuido <= 100 && tempoExposicao <= 8) {
        grauInsalubridade = "Médio";
        percentualInsalubridade = 0.20;
    } else if (nivelRuido > 100 && tempoExposicao <= 8) {
        grauInsalubridade = "Máximo";
        percentualInsalubridade = 0.40;
    } else {
        grauInsalubridade = "Trabalho não insalubre";
        percentualInsalubridade = 0;
    }

    const adicionalInsalubridade = salario * percentualInsalubridade;
    document.getElementById('resultadoInsalubridade').innerHTML = `Adicional de insalubridade: R$ ${adicionalInsalubridade.toFixed(2)}`;
    document.getElementById('grauInsalubridade').innerHTML = `Grau de insalubridade: ${grauInsalubridade}`;
    document.getElementById('percentualInsalubridade').innerHTML = `Percentual de insalubridade: ${percentualInsalubridade * 100}%`;
}

// Função para calcular a Lei de Ohm
function calcularOhm() {
    const tensao = parseFloat(document.getElementById('tensao').value);
    const resistencia = parseFloat(document.getElementById('resistencia').value);
    const corrente = parseFloat(document.getElementById('corrente').value);

    let resultado;

    if (isNaN(corrente) && !isNaN(tensao) && !isNaN(resistencia)) {
        // Calcular corrente
        resultado = tensao / resistencia;
        document.getElementById('resultadoOhm').innerHTML = `Corrente (I): ${resultado.toFixed(2)} A (Amperes)`;
    } else if (isNaN(tensao) && !isNaN(corrente) && !isNaN(resistencia)) {
        // Calcular tensão
        resultado = corrente * resistencia;
        document.getElementById('resultadoOhm').innerHTML = `Tensão (V): ${resultado.toFixed(2)} V (Volts)`;
    } else if (isNaN(resistencia) && !isNaN(tensao) && !isNaN(corrente)) {
        // Calcular resistência
        resultado = tensao / corrente;
        document.getElementById('resultadoOhm').innerHTML = `Resistência (R): ${resultado.toFixed(2)} Ω (Ohms)`;
    } else {
        document.getElementById('resultadoOhm').innerHTML = `Preencha dois dos três campos para calcular o terceiro.`;
    }
}
