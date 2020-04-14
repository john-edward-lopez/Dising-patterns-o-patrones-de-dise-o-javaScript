// el singleton es la creacion de un objeto de una solo instancia  por ejemplo como en un objeto literal

const alumnos = {
      // todos los alumnos
      listaAlumnos : [],

      //obtener un alumno

      get : function(id){
          console.log(id);
          return this.listaAlumnos[id];
      },
      //crear un alumno

      crear : function(datos){
             console.log(datos);
             this.listaAlumnos.push(datos);
            
      },

      //listar todos los alumnos

      listado(){
          return this.listaAlumnos;
      }
}


const infoAlumno = {
     nombre: 'juan',
     edad: 20
}

const infoAlumno2 ={
    nombre: 'pablo',
    edad: 21
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);


const listado  = alumnos.listaAlumnos;
console.log(listado);

// obteniendo un alumno
const alumno = alumnos.get(1);
console.log(alumno);