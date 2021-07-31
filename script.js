//Criar função de colocar os numeros no visor.
function insert (num) {
   var numero = document.getElementById('output-value').innerHTML;
   document.getElementById('output-value').innerHTML = numero + num;

}
//Criar a função Clean "limpar visor"
function clean () {
    document.getElementById('output-value').innerHTML =""
}

//Cria a função do botão de apagar um por um
 function backspace () {
     var resultado = document.getElementById('output-value').innerHTML
     document.getElementById('output-value').innerHTML = resultado.substring(0, resultado.length -1)
 }
 //Criar função para calcular
 function calcular () {
    var resultado = document.getElementById('output-value').innerHTML;
    if (resultado) {
        document.getElementById('output-value').innerHTML = eval(resultado)
    }
    else {
        document.getElementById('output-value').innerHTML = "Digite Algo"
    }

 }