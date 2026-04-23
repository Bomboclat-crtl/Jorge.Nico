document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("formCalculadora").addEventListener("submit", function(e){
        e.preventDefault();

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
                res = nume1/nume2;
                if(res<=0)
                    resultado.textContent = "ta mal"
                }
                break;
            default:
                break;
        }

    resultado.textContent = "Resultado es "+res;

    });

})