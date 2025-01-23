var elementosDuvidas = document.querySelectorAll(' .duvidas ')

//função que vai ser execultada para cada elemento
elementosDuvidas.forEach(function(duvidas){
   duvidas.addEventListener('click', function(){
     duvidas.classList.toggle('ativa') //TOGGLE: trocar
   })
})

//function nome(argumento){
    //conteúdo da função
//}

 
