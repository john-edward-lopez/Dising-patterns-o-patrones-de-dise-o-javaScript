// aprendiendo a  ultilizar el patron de diseño factory
// vamos a usarlo con prototipos

/* la idea detras del factory es no saber  aun que clases se van a instanciar 
SUELE PASAR  EN UN CONSTRUCTOR DE SITIOS WEB*/
function ConstructorSitios(){
    this.crearElemento =  function(texto, tipo){
          
          let html;

          if(tipo === 'input'){
              html = new InputHTML(texto);
          }else if(tipo === 'img'){
              html = new ImagenHTML(texto);
          }else if(tipo === 'h1'){
              html = new HeadingHTML(texto);
          }else if(tipo === 'p'){
              html = new ParrafoHTML(texto);
          }
          
          html.tipo = tipo;

          html.mostrar = function(){
              const elemento =  document.createElement(this.tipo);

              if(this.tipo === 'input'){
                     elemento.setAttribute('placeholder', this.texto);
              }else if (this.tipo === 'img'){
                     elemento.setAttribute('src', this.texto);

              }else{
                  elemento.appendChild(document.createTextNode(this.texto));
              }

              document.querySelector('#app').appendChild(elemento);
          }
         
          return html;
    }
}

const InputHTML = function(texto ){
     this.texto = texto;
     
}

const ImagenHTML = function(texto){
    this.texto = texto;
}

const HeadingHTML = function(texto){
    this.texto = texto;
}

const ParrafoHTML = function(texto){
    this.texto = texto;
}
// instancia del sitio web
const sitioweb = new ConstructorSitios();
// almacenar elementos
const elementosWeb =  [];

// crear elementos 
elementosWeb.push(sitioweb.crearElemento('Bienvenidos' , 'h1'));
elementosWeb.push(sitioweb.crearElemento('logo.svg' , 'img'));
elementosWeb.push(sitioweb.crearElemento('Bienvenidos a mi nuevo sitio web' , 'h1'));
elementosWeb.push(sitioweb.crearElemento('Conoce mas  sobre nosotros ' , 'input'));
elementosWeb.push(sitioweb.crearElemento('contacto' , 'p'));
elementosWeb.push(sitioweb.crearElemento('contactotenos en el formulario' , 'p'));
console.log(elementosWeb);

elementosWeb.forEach(elemento =>{
    elemento.mostrar();
}); 