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
let obj_btn = document.getElementById("btn");

//Declaro Variable que recibe Boton de Submit
let obj_btn_hist = document.getElementById("btn_hist");

//Declaro Variable que recibe componente de Lista de Pacientes
let obj_lista = document.getElementById("list");

//Declaro Variable que recibe componente de Lista de Pacientes Historicos del Json
let obj_lista_hist = document.getElementById("list_hist");

//Declaro Variable que recibe componente DOM Parrafo
let obj_promedio=document.getElementById("promedio");
    


document.addEventListener("DOMContentLoaded", mostrarPacientes);
obj_btn.addEventListener("click", agregarPaciente);
obj_btn_hist.addEventListener("click", mostrarPacientesHistoricos);



