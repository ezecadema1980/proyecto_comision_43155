//Este script contiene una estructura para un simulador
//Solicita el ingreso de pacientes y calcula la costo promedio de las terapias que toma

let cantidad = prompt("Ingrese la cantidad de Pacientes a Ingresar: ");
let total= 0;
let nombre="";
let apellido="";
let mail="";
let telefono="";
let edad = "";
const pacientes=[];

if(cantidad>0){

    for (let index = 0; index <cantidad; index++) {

       
        // Pide la informacion de cada paciente
        
        nombre=prompt("Ingrese el Nombre del Paciente: ");
        apellido=prompt("Ingrese el Apellido del Paciente: ");
        mail=prompt("Ingrese el Mail del Paciente: ");
        terapia=prompt("Ingrese la Terapia del Paciente: ");
        telefono=prompt("Ingrese el telefono del Paciente: ");
        edad=prompt("Ingrese la Edad del Paciente: ");
    
           
        //Agrego el nuevo paciente a una lista de Pacientes
        pacientes.push(new Paciente(nombre,apellido,mail,terapia,telefono,edad));
        
        
        //Sumo el total de edades de los pacientes para luego calcular el promedio
        total=total+parseInt(edad);
    }
    
        
    alert("El Promedio de edad de los Pacientes Atendidos es de: "+calcularPromedio(total,cantidad));

    //Busca los pacientes mayores a 5 años
    console.log(obtenerMayores(pacientes,5));

} else{
    alert("Debe ingrear un valor mayor que 0");
}



