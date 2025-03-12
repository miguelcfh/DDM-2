function calc(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var alt = altura*altura
    var imc = peso/alt;
    alert(imc);

    if(imc<18.5){
        alert('Abaixo do peso ideal.');
    }else if(imc>=18.5 && imc<=24.99){
        alert('Peso ideal.')
    }else if(imc>=25 && imc<=29.99){
        alert('Acima do peso ideal.')
    }else{
        alert('Obesidade.')
    }
}
