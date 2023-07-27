function calcularPromedio(total, cant) {
    
    let promedio=0;
    promedio=total/cant;
    return promedio.toFixed(2);
}

function obtenerMayores(pacientes,maximo){
    const mayores = pacientes.filter((el) => el.edad > maximo);
    return mayores;
}

