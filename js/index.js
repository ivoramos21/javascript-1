function calcular(montoInicial){
    let tasaInteresanual = 5;
    let añosainvertir=7
    function calcularIntereses(){
    return montoInicial + tasaInteresanual + añosainvertir
    }
    let intereses = calcularIntereses();
    let total = montoInicial + tasaInteresanual + añosainvertir
    return total
} 
    console.log(calcular(1000))