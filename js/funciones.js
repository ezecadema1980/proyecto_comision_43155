
iniciarSesion();

//Guardo en el localStorage el Usuario Logueado

function iniciarSesion(){

  let form = document.getElementById("register");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let obj_usuario = document.getElementById("usuario").value;
      let obj_password = document.getElementById("password").value;
      let usuario = new Usuario(obj_usuario, obj_password);
      localStorage.setItem("usuario", JSON.stringify(usuario));
      document.getElementById("usuario").value = "";
      document.getElementById("password").value = "";
      form.style.display=`none`;
      mostrar_elementos();
      
    });
  
  }

//Manipula el DOM para mostrar el formualario de ingreso de Pacientes
function mostrar_elementos(){
  let form_pacientes=document.getElementById("f_pacientes");
  obj_btn=document.getElementById("btn");
  obj_promedio=document.getElementById("promedio");
  obj_lista=document.getElementById("list");
  form_pacientes.style.display=`block`;
  obj_btn.style.display=`block`;
  obj_lista.style.display=`block`;
  obj_promedio.style.display=`block`;
}

//Manipula el DOM y muestra el promedio de edad de los pacientes
function calcularPromedio() {
    let total=0;
    let promedio=0;
    let textlPromedio=document.getElementById("promedio");
    
    pacientes.forEach((p,index)=> {
        total+=p.edad;
    });
    promedio=(total/pacientes.length).toFixed(2);
    
    !pacientes.length
    ? (textlPromedio.innerHTML = "<p>  </p>")
    : textlPromedio.innerHTML=`<p>El Promedio de los Pacientes es: <strong>${promedio}</strong></p>`;

    
    
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
    obj_lista.innerHTML = "";
    cantidad=0;


    //Operador ternario

    !pacientes.length
    ? (obj_lista.innerHTML = "<li>No hay Pacientes Inscriptos</li>")
    : (obj_lista.innerHTML = "");


    pacientes.forEach((p, index) => {
      obj_lista.innerHTML += `
        <li>
          <span>${p.nombre + " " + p.apellido + " - Terapia: "+p.terapia}</span>
          <button class="delete" onclick="eliminarPaciente(${index})">Eliminar</button>
        </li>
      `;
    });

    calcularPromedio();
}

