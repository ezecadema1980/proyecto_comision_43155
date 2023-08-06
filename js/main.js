//Este script contiene una estructura para un simulador
//Calcula la costo promedio de las terapias que toma

//Modificar el DOM y mostrar la lista de Pacientes con los botones agregar y eliminar Pacientes


const pacientes=[];
let paciente=null;


//Declaro Variables que reciben Info de los Input
let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellidos");
let edad = document.getElementById("edad");
let mail=document.getElementById("mail");
let terapia=document.getElementById("terapia");

//Declaro Variable que recibe Boton de Submit
let btn = document.getElementById("btn");

//Declaro Variable que recibe componente de Lista
let lista = document.getElementById("list");



    
           
        
        
        
    //Sumo el total de edades de los pacientes para luego calcular el promedio
    //total=total+parseInt(edad);
    
    
        
    //alert("El Promedio de edad de los Pacientes Atendidos es de: "+calcularPromedio(total,cantidad));

    //Busca los pacientes mayores a 5 años
    //console.log(obtenerMayores(pacientes,5));



document.addEventListener("DOMContentLoaded", mostrarPacientes);
btn.addEventListener("click", agregarPaciente);



