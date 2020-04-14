/*el builder es como una abstraccion de el codigo se trata de programa en una capa sobre el codigo 
para no esta modificando en el codigo original es necesario añadir el tipo  y el contenido del objeto que queremos crear */
//y se creando diferentes tipos de objetos ya identificados 
/* ejemplo con formulario es un buen ejemplo para un builder*/

class Formulario{
     constructor(){
          this.campos = [];
     }

     agregarCampo(tipo,texto){
           let campos = this.campos;

           let  campo;

           switch(tipo){
                case 'text':
                     campo = new InputText(texto);
                    break;
                case 'email':
                     campo = new InputEmail(texto);
                    break;
                case 'button':
                     campo = new Boton(texto);
                    break;
                default:
                    throw new Error('tipo no valido' + tipo);
           }

           campos.push(campo);

     }

     obtenerFormulario(){
          let form =document.createElement('form'),
              campos = this.campos.length,
              campo;

              for(let i = 0; i < campos; i++){
                  campo = this.campos[i];
                  form.appendChild(campo.crearElemento());
                  let br = document.createElement('br');
                  form.appendChild(br);
              }

              return form;
     }
}

class Inputs{
     constructor(texto){
         this.texto = texto;
     } 
}

class InputText  extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const inputText = document.createElement('input');
        inputText.setAttribute('type','text');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}


class InputEmail extends Inputs{
    constructor(texto){ 
        super(texto);
    }

    crearElemento(){
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type','text');
        inputEmail.setAttribute('placeholder', this.texto);
        return inputEmail;
    }
}

class Boton extends Inputs{
    constructor(texto){ 
        super(texto);
    }

    crearElemento(){
        const button = document.createElement('button');
        button.setAttribute('type','submit');
        button.textContent = this.texto;
        return button;
    }
}
//instanciar formulario

const formulario = new Formulario();

formulario.agregarCampo('text', 'Añade tu Nombre');
formulario.agregarCampo('text', 'Añade tu Apellido');
formulario.agregarCampo('email', 'Añade tu Correo');
formulario.agregarCampo('button', 'Enviar');

// renderizar   en el html

document.addEventListener('DOMContentLoaded', ()=>{
     document.querySelector('#app').appendChild(formulario.obtenerFormulario());
});
console.log(formulario);

