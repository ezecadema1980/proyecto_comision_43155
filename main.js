//Este script contiene una estructura para un simulador
//Solicita el ingreso de pacientes y calcula la edad promedio

class Paciente{
    constructor(mail, nombre, apellido, telefono, edad){
        this.nombre=nombre;
        this.mail=mail;
        this.apellido=apellido;
        this.telefono=telefono;
        this.edad=parseInt(edad);
    }
}

cantidad = prompt("Ingrese la cantidad de Pacientes a Calcular: ");
total=0;

for (let index = 1; index <=cantidad; index++) {
    
    edad=prompt("Ingrese la Edad del Paciente: ");
    const paciente1= new Paciente("juan.gomez@gmail.com","Juan","Gomez","514646777",parseInt(edad));
    
    total=total+paciente1.edad;
    alert("El Paciente Atendido tiene: "+paciente1.edad);
    
}


alert("El Promedio de edad de los Pacientes Atendidos es de: "+calcularPromedio(total,parseInt(cantidad)));