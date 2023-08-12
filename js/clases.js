class Paciente{
    constructor(nombre, apellido, edad, mail, terapia){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=parseInt(edad);
        this.mail=mail;
        this.terapia=terapia;
        
    }
}


class Usuario {
    constructor(usuario, password) {
      (this.usuario = usuario), (this.password = password);
    }
  }