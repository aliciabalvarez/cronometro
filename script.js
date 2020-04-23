


var time_empezar_centisegundos;
var time_empezar_segundos;
var time_empezar_minutos;
var time_empezar_horas;

var nodoBtnEmpezar = document.querySelector("#btnEmpezar");
nodoBtnEmpezar.addEventListener("click",function(){

nodoBtnEmpezar.disabled = true;
nodoBtnReiniciar.disabled = true;
nodoBtnParar.disabled = false;
nodoBtnGuardar.disabled = false;
nodoBtnBorrar.disabled = true;

nodoBtnParar.classList.remove("desactivado")
nodoBtnGuardar.classList.remove("desactivado")
nodoBtnBorrar.classList.add("desactivado")
nodoBtnEmpezar.classList.add("desactivado")

    //CENTISEGUNDOS
   
    sumaContador = 0;
    finContador = 99;
    time_empezar_centisegundos = setInterval(function(){
    
        sumaContador = sumaContador + 1;
        // console.log(sumaContador)
        // centisegundo.innerHTML = sumaContador;
        if(sumaContador<10){
            centisegundo.innerHTML = "0"+sumaContador;
        }else{
            centisegundo.innerHTML = sumaContador;
        }
        
         
        if(sumaContador == 99){
            sumaContador = 0;
        };
    

        }, 10);

        
        //SEGUNDOS
        
        sumaContadorSegundos = 0;
        segundo.innerHTML = "0"+sumaContadorSegundos;

        finContadorSegundos = 60;
        time_empezar_segundos = setInterval(function(){
            
            // sumaContadorSegundos = "sumaContadorSegundos"
            sumaContadorSegundos = sumaContadorSegundos + 1;
            // console.log(sumaContadorSegundos)
            // segundo.innerHTML = sumaContadorSegundos;

        
        
            if(sumaContadorSegundos<10){
                segundo.innerHTML = "0"+sumaContadorSegundos;
            }else{
                segundo.innerHTML = sumaContadorSegundos;
            }
            if(sumaContadorSegundos == 60){
                sumaContadorSegundos = 0;
            };

        }, 1000);

        //MINUTOS
        sumaContadorMinutos = 0;
        finContadorMinutos = 60;
        time_empezar_minutos = setInterval(function(){
        
            sumaContadorMinutos = sumaContadorMinutos + 1;
            // console.log(sumaContadorMinutos)
            // minuto.innerHTML = sumaContadorMinutos;
            if(sumaContadorMinutos<10){
                minuto.innerHTML = "0"+sumaContadorMinutos;
            }else{
                minuto.innerHTML = sumaContadorMinutos;
            }
            if(sumaContadorMinutos == 60){
                sumaContadorMinutos = 0;
            };
        


        }, 60000);


    //HORAS
        sumaContadorHoras = 0;

        time_empezar_horas = setInterval(function(){
        
            sumaContadorHoras = sumaContadorHoras + 1;
            // console.log(sumaContadorHoras)
            // hora.innerHTML = sumaContadorHoras;
            if(sumaContadorHoras<10){
                hora.innerHTML = "0"+sumaContadorHoras;
            }else{
                hora.innerHTML = sumaContadorHoras;
            }

        }, 3.6e+6); //horas en milisegundos
})





//BOTÓN PARAR 
var nodoBtnParar = document.querySelector("#btnParar");
nodoBtnParar.addEventListener("click", function(){


nodoBtnParar.disabled = true;
nodoBtnGuardar.disabled = true;
nodoBtnReiniciar.disabled = false;
nodoBtnBorrar.disabled = false;

nodoBtnParar.classList.add("desactivado")
nodoBtnGuardar.classList.add("desactivado")
nodoBtnReiniciar.classList.remove("desactivado")
nodoBtnBorrar.classList.remove("desactivado")


    clearInterval(time_empezar_horas)
    clearInterval(time_empezar_minutos)
    clearInterval(time_empezar_segundos)
    clearInterval(time_empezar_centisegundos)

    clearInterval(reiniciar_centisegundos)
    clearInterval(reiniciar_segundos)
    clearInterval(reiniciar_minutos)
    clearInterval(reiniciar_horas)

    

    

});

//BOTÓN BORRAR
var nodoBtnBorrar = document.querySelector("#btnBorrar");
nodoBtnBorrar.addEventListener("click", function(){
    
    nodoBtnEmpezar.disabled = false;
    nodoBtnReiniciar.disabled = true;
    nodoBtnBorrar.disabled = true;

    nodoBtnBorrar.classList.add("desactivado")
    nodoBtnGuardar.classList.add("desactivado")
    nodoBtnParar.classList.add("desactivado")
    nodoBtnEmpezar.classList.remove("desactivado")
    nodoBtnReiniciar.classList.add("desactivado")


    sumaContador = 0;
    sumaContadorSegundos = 0;
    sumaContadorMinutos = 0;
    sumaContadorHoras = 0;

    centisegundo.innerHTML = "00";
    segundo.innerHTML = "00";
    minuto.innerHTML = "00";
    hora.innerHTML = "00";

    

});



// BOTÓN GUARDAR 
var nodoBtnGuardar = document.querySelector("#btnGuardar");
nodoBtnGuardar.addEventListener("click",function(){

    addCardElementDOM_append();
    //lo que hace va en la función de después

});

function addCardElementDOM_append(){

    let nodoDivCard = document.createElement("div");
    nodoDivCard.classList.add("card");
    nodoDivCard.classList.add("flex");
    nodoDivCard.classList.add("around");
    let nodoh3 = document.createElement("h3");
    nodoDivCard.append(nodoh3);
    let nodobutton = document.createElement("button");
    nodobutton.classList.add("boton-cerrar")
    nodoDivCard.append(nodobutton);
    nodobutton.innerHTML = "x"
    let nodoGrid = document.querySelector("#grid");
    nodoGrid.append(nodoDivCard);
  
    if(sumaContador<10){
        resultadoCentisegundos = "0"+sumaContador;
    }else{
        resultadoCentisegundos = sumaContador;
    }
    if(sumaContadorSegundos<10){
        resultadoSegundos = "0"+sumaContadorSegundos;
    }else{
        resultadoSegundos = sumaContadorSegundos;
    }
    if(sumaContadorMinutos<10){
        resultadoMinutos = "0"+sumaContadorMinutos;
    }else{
        resultadoMinutos = sumaContadorMinutos;
    }
    if(sumaContadorHoras<10){
        resultadoHoras = "0"+sumaContadorHoras;
    }else{
        resultadoHoras = sumaContadorHoras;
    }

    nodoh3.innerHTML = resultadoHoras+" : "+resultadoMinutos+" : "+resultadoSegundos+" : "+resultadoCentisegundos;
   
    
    nodobutton.addEventListener("click", function(){
        //QUITAR EL ELEMENTO EN EL QUE PINCHE DE LA PARTE
        nodoDivCard.classList.add("display-none");
    })


};



////////////////////////////////////////////////////




var reiniciar_centisegundos;
var reiniciar_segundos;
var reiniciar_minutos;
var reiniciar_horas;
// BOTÓN REINICIAR!!!!!!!!!!!
var nodoBtnReiniciar = document.querySelector("#btnReiniciar")
nodoBtnReiniciar.addEventListener("click",function(){

    nodoBtnReiniciar.disabled = true;
    nodoBtnParar.disabled = false;
    nodoBtnGuardar.disabled = false;
    nodoBtnBorrar.disabled = true; 

    nodoBtnParar.classList.remove("desactivado")
    nodoBtnReiniciar.classList.add("desactivado")
    nodoBtnGuardar.classList.remove("desactivado")
    nodoBtnBorrar.classList.add("desactivado")



    //quiero que vuelva a funcionar 

    sumaContador = sumaContador;
    finContador = 99;
    reiniciar_centisegundos = setInterval(function(){
    
        sumaContador = sumaContador + 1;
        // console.log(sumaContador)
        // centisegundo.innerHTML = sumaContador;
        if(sumaContador<10){
            centisegundo.innerHTML = "0"+sumaContador;
        }else{
            centisegundo.innerHTML = sumaContador;
        }
        
         
        if(sumaContador == 99){
            sumaContador = 0;
        };
    

        }, 10);
   
        //SEGUNDOS
        
        sumaContadorSegundos = sumaContadorSegundos;
        segundo.innerHTML = "0"+sumaContadorSegundos;

        finContadorSegundos = 60;
        reiniciar_segundos = setInterval(function(){
            
            // sumaContadorSegundos = "sumaContadorSegundos"
            sumaContadorSegundos = sumaContadorSegundos + 1;
            // console.log(sumaContadorSegundos)
            // segundo.innerHTML = sumaContadorSegundos;

        
        
            if(sumaContadorSegundos<10){
                segundo.innerHTML = "0"+sumaContadorSegundos;
            }else{
                segundo.innerHTML = sumaContadorSegundos;
            }
            if(sumaContadorSegundos == 60){
                sumaContadorSegundos = 0;
            };

        }, 1000);

        //MINUTOS
        sumaContadorMinutos = sumaContadorMinutos;
        finContadorMinutos = 60;
        reiniciar_minutos = setInterval(function(){
        
            sumaContadorMinutos = sumaContadorMinutos + 1;
            // console.log(sumaContadorMinutos)
            // minuto.innerHTML = sumaContadorMinutos;
            if(sumaContadorMinutos<10){
                minuto.innerHTML = "0"+sumaContadorMinutos;
            }else{
                minuto.innerHTML = sumaContadorMinutos;
            }
            if(sumaContadorMinutos == 60){
                sumaContadorMinutos = 0;
            };
        


        }, 60000);


    //HORAS
        sumaContadorHoras = sumaContadorHoras;

        reiniciar_horas = setInterval(function(){
        
            sumaContadorHoras = sumaContadorHoras + 1;
            // console.log(sumaContadorHoras)
            // hora.innerHTML = sumaContadorHoras;
            if(sumaContadorHoras<10){
                hora.innerHTML = "0"+sumaContadorHoras;
            }else{
                hora.innerHTML = sumaContadorHoras;
            }

        }, 3.6e+6); //horas en milisegundos
});