function calcularPromedio() {
    let total=0;
    let promedio=0;
    let textlPromedio=document.getElementById("promedio");
    pacientes.forEach((p,index)=> {
        total+=p.edad;
    });
    promedio=(total/pacientes.length).toFixed(2);
    console.log(promedio);
}

function obtenerMayores(pacientes,maximo){
    const mayores = pacientes.filter((el) => el.edad > maximo);
    return mayores;
}


function agregarPaciente() {

    //Agrego el nuevo paciente a una lista de Pacientes
    paciente=new Paciente(nombre.value,apellido.value,edad.value,mail.value,terapia.value)
    pacientes.push(paciente);
    nombre.value = "";
    apellido.value="";
    edad.value="";
    mail.value="";
    terapia.value="";

    mostrarPacientes();
}
  
function eliminarPaciente(index) {
    pacientes.splice(index, 1);
    mostrarPacientes();
}
  
function mostrarPacientes() {
    lista.innerHTML = "";
    cantidad=0;

    !pacientes.length
    ? (lista.innerHTML = "<li>No hay Pacientes Inscriptos</li>")
    : (lista.innerHTML = "");


    pacientes.forEach((p, index) => {
      lista.innerHTML += `
        <li>
          <span>${p.apellido + " " + p.terapia}</span>
          <button class="delete" onclick="eliminarPaciente(${index})">Eliminar</button>
        </li>
      `;
    });

    calcularPromedio();
}

