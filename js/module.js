/* ultilizando el patron de diseño module y volviendo la variables mas privadas con funcones ifi 
y publicando las mediante el return se se ultiliza en un paradigma  programacion funccional */

const comprarBoleto = (function(){
    //privado
    let evento = 'Conferencia js 2019';
    let precio = 200;
     
    const abquirirBoleto = () =>{
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando boleto para ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    // publico
    return{
        mostrarBoleto : function(){
             abquirirBoleto();
        }
        
         
    }

})();

comprarBoleto.mostrarBoleto();

/*
comprarBoleto.mostrarBoleto();

const comprarBoleto = (function(){
    //privado
    let evento = 'Conferencia js 2019';
    let precio = 200;


    // publico
    return{
        mostrarBoleto : function(){
            console.log(evento);
            console.log(precio);
        }
        
         
    }
})();

comprarBoleto.mostrarBoleto();

*/
