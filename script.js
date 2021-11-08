



//console.log(option);
//console.log(parseInt(numero));
let resultado = 0;
const option = document.getElementById('option');
option.addEventListener('change',seleccionar);
const select = document.getElementById('select')
select.addEventListener('change',seleccionar);
   function seleccionar(){
       let option = document.getElementById('option').value;
       let numero = document.getElementById('numero').value;
       let convertir = document.getElementById('select').value;
       console.log("aja")
        

        switch(option){
            case "cm":{
                switch(convertir){
                    case "Cm":{resultado= numero; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Mm":{resultado= numero * 10; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Mts":{resultado= numero / 100; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Km":{resultado= numero / 100000; document.getElementById("cambiar").innerHTML = resultado;break}
                    default:{console.log("seleccion medida valida");break;}
                };
            break;}

            case "mm":{
                switch(convertir){
                    case "Cm":{resultado= numero /10; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Mm":{resultado= numero; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Mts":{resultado= numero / 1000; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Km":{resultado= numero / 1000000; document.getElementById("cambiar").innerHTML = resultado;break}
                    default:{console.log("seleccion medida valida");break;}
                };
            break;}
            
            case "mts":{
                switch(convertir){
                    case "Cm":{resultado= numero*100; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Mm":{resultado= numero *1000; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Mts":{resultado= numero; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Km":{resultado= numero / 1000; document.getElementById("cambiar").innerHTML = resultado;break}
                    default:{console.log("seleccion medida valida");break;}
                };
            break;}

            case "km":{
                switch(convertir){
                    case "Cm":{resultado= numero*100000; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Mm":{resultado= numero * 1000000; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Mts":{resultado= numero * 1000; document.getElementById("cambiar").innerHTML = resultado;break}
                    case "Km":{resultado= numero; document.getElementById("cambiar").innerHTML = resultado;break}
                    default:{console.log("seleccion medida valida");break;}
                };
            break;}
            default:{console.log("seleccion medida valida");break;}
        }
    }


    
    
