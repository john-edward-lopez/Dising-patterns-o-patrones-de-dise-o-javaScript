// ptron de diseño mediator

const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function(nombre){
     this.nombre =  nombre;
}


Vendedor.prototype ={
     oferta : function(articulo, precio){
            console.log( `Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
     },
     
     vendido : function(comprador){
         console.log(`Vendedo a ${comprador} (sonido de mazo)`)
     }

}

Comprador.prototype = {
     
     oferta : function(mensaje,comprador){
         console.log(`${comprador.nombre} : ${mensaje}`);
     } 

}

const Subasta = function(){
    let compradores = {};

    return {
        registrar: function(usuario) {
             compradores[usuario.nombre] = usuario;
             usuario.sala = this;
             console.log(compradores);
        }

        

    }
}

// instanciar las clases

const john = new Comprador('john');
const pablo = new Comprador('pablo');
const karen = new Comprador('karen');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();

subasta.registrar(john);
subasta.registrar(pablo);
subasta.registrar(karen);


vendedor.oferta("guitarra fender ", 3000 );

john.oferta(3000, john);
pablo.oferta(3500,pablo);
karen.oferta(5000, karen);
vendedor.vendido(karen.nombre);

