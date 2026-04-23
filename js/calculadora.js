document.addEventListener("DOMContentLoaded", function(){
 
    document.getElementById("formCalculadora").addEventListener("submit", function(e){
        e.preventDefault();// evita que el formulario me vote de la pagina

        let nume1 = parseFloat(document.getElementById("numero1").value);
        let nume2 = parseFloat(document.getElementById("numero2").value);
        let operacion = document.getElementById("operacion").value;
        let resultado = document.getElementById("resultado");

        if(isNaN(nume1)||isNaN(nume2)){
            resultado.textContent = "Ingrese números válidos";
            return;
        }

        let res; //temporal para almacenar el resultado

        switch (operacion) {
            case "sum":
                res = nume1+nume2;
                break;
            case "rest":
                res = nume1-nume2;
                break;
            case "mul":
                res = nume1*nume2;
                break;
            case "div":
                res = num1/num2;
               if(isNaN(nume1<=0)||isNaN(nume2<=0)){
                resultado.textContent = "ta mal";
                return;
        
                break;
            default:
                break;
        }

    resultado.textContent = "Resultado es "+res;

    });
    //ejercicio 04
   document.getElementById("formEje04").addEventListener("submit", function(e){
        e.preventDefault();// evita que el formulario me vote de la pagina

        let salario = parseFloat(document.getElementById("salario").value);
        let horasT = parseFloat(document.getElementById("horasT").value);
        let horasE=0;
        let salarioE=0;
        let sueldo=0;
        let VariableSalida = document.getElementById("salida");
      
        if(isNaN(salario)||isNaN(horasT)){
            resultado.textContent = "Ingrese números válidos";
            return;
        }
        if(horasT>40){
            alert("Usted trabajó mas de 40 horas, y merece un pago extra");
            horasE = horasT-40;
            salarioE = horasE*(salario*1.5);
            sueldo = salario*40+salarioE;
        }else{
         sueldo = salario*horasT;   
        }

        VariableSalida.textContent = "Su sueldo a pagar es de S/."+sueldo;
        });
        

})