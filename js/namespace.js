/* la idea del name space es crear un objeto grande para toda la aplicacion*/

const restaurApp = {};
 
restaurApp.platillos = [
     {
         platillo : 'Pizza',
         precio : 25,
     },
     {
        platillo : 'Hamburguesa',
        precio : 20,
    },
    {
        platillo : 'Hot dog',
        precio : 15,
    }

 ];

 //Funciones

 restaurApp.funciones ={
     ordenar :  id => {
          console.log(`Tu Platillo : ${restaurApp.platillos[id].platillo} se esta preparando    
          `);
     },
    
     agregarPlatillo: (platillo, precio) =>{
         const nuevo = {
             platillo,
             precio
         }
            restaurApp.platillos.push(nuevo);
     },

     mostrarMenu: platillos =>{
          console.log(` Bienvenido a nuestro menu:`);
          platillos.forEach((platillo,index) => {
               console.log(`${index} : ${platillo.platillo} $ ${platillo.precio}`)
          });
     }

 }



//console.log(restaurApp);
const {platillos} = restaurApp;
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.ordenar(2);
restaurApp.funciones.agregarPlatillo('spaguety' , 50);
restaurApp.funciones.mostrarMenu(platillos);