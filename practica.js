var nombre = prompt("Hola, por favor Escribe tu nombre:");
var c = 0;
var o =0;
alert(`Biemvenido/a ${nombre} Empezamos      `);    

var p1 = prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas?\nA. Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre");

    if(p1 == "B"){
    c = c + 1;
}else if(p1 == "A"){
    i = i + 1;
}else if(p1 == "C"){
    i = i + 1;
}else{
    alert("Opción no válida")
}

var p2 = prompt("2-¿De qué color es la prompoción de 2do de secundaria?\nA. Celeste o Turquesa\nB. Rojo\nC. Morado");

    if(p2 == "A"){
    c = c + 1;
}else if(p2 == "B"){
    i = i + 1;
}else if(p2 == "C"){
    i = i + 1;
}else{
    alert("Opción no válida")
}

var p3 = prompt("3. Nuevo deporte incluido este año\nA. Futsal femenino\nB. Balonmano\nC. Marcha atlética");

    if(p3 == "C"){
    c = c + 1;
}else if(p3 == "B"){
    i = i + 1;
}else if(p3 == "A"){
    i = i + 1;
}else{
    alert("Opción no válida")
}

if(c > i){
    document.write(nombre + ", lo has hecho perfecto<br>");
    document.write("Correctas: " + c + "<br>");
    document.write("incorrectas: " + i + "<br>");i
}else if(c < i ){;
    document.write(nombre + ", Estubiste bajo, lo quieres volver a intentar?<br>");
    document.write("correctas: " + c + "<br>");
    document.write("Incorrectas: " + i + "<br>");i
}else{
    document.write(nombre + ", Estubiste masomenos, recomiendo volver a intentarlo<br>");
    document.write("correctas: " + c + "<br>");
    document.write("Incorrectas: " + i + "<br>");i 
}
