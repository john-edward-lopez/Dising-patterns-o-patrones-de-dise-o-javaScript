// el patron de diseño observer tambien se conoce como suscriptor-publicador

// creando el observador 
let observer = {
     obtenerOfertas : function( callback  ){
          if(typeof callback ===  'function' ){
               this.subscribers[this.subscribers.length] = callback;
          }
     },

     cancelarOferta : function(callback){
         for(let i = 0; i< this.subscribers.length; i++){
              if(this.subscribers[i] === callback){
                  delete this.subscribers[i];
              }
         }
      },

      publicarOferta : function(oferta){
        for(let i = 0; i < this.subscribers.length; i++){
            if(typeof this.subscribers[i] === 'function'){
                this.subscribers[i](oferta);
            }
       } 
      },

      crear : function(objeto){
        for(let i in this){
            if(this.hasOwnProperty(i)){
                 objeto[i] = this[i];
                 objeto.subscribers = [];
            }
        }
      }
}

//Vendedores

const udemy = {
    nuevoCurso : function(){
        const curso = 'un nuevo curso de javaScript!!';
        this.publicarOferta(curso);
    }
}

const facebook = {
     nuevoAnuncio: function(){
          const oferta = 'Comprar un celular';
          this.publicarOferta(oferta);
     }
}

// crear los publicadores 
observer.crear(udemy);
observer.crear(facebook);


// crear personas 

const juan = { 
     compartir : function(oferta) {
          console.log('excelente oferta ' + oferta);
     }
}

const john = {
    interesa : function(oferta)  {
         console.log('Me interesa la oferta'+ oferta);
    }
}


udemy.obtenerOfertas( juan.compartir );
udemy.obtenerOfertas( john.interesa );
udemy.nuevoCurso();
udemy.cancelarOferta(juan.compartir);
udemy.nuevoCurso();
facebook.obtenerOfertas(juan.compartir);
facebook.nuevoAnuncio();
