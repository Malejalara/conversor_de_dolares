function pesoColombiano() {
    let dolarActual=3.865  /*pesos colombianos*/

    let montoenpesos=document.getElementById("pesos").value
    resultado= montoenpesos / dolarActual 
    tasadecambio=resultado * 0.07
    valorfinal=resultado-tasadecambio

    

    if(resultado<=0){
        alert('operacion no valida')
    }
    else{
        alert('El monto en dolares es '+ resultado.toFixed(2) + '\nRestando la tasa de cambio el valor final es de' + valorfinal.toFixed(2));
    }   
} 