let catalogo_biblio = new Map();

let validacion = false;

do {
    const opcion = window.prompt("Bienvenido al Gestor de Notas,¿Que desea Realizar?: \n" +
        "A. Añadir un libro \n" +
        "B. Eliminar un libro \n" +
        "C. Consultar un libro \n" +
        "D. Mostrar catálogo \n" +
        "E. Modificar ejemplares \n" +
        "F. Buscar libros de un autor \n" +
        "G. Prestar un libro \n" +
        "H. Devolver un libro \n" +
        "I. Mostrar estadísticas \n" +
        "J. Vaciar catálogo: Eliminar todos los libros del mapa. \n" +
        "K. Salir \n"
    ).toUpperCase();

    switch (opcion) {
        case "A":
            const isbn = solicitarISBN();
            if (catalogo_biblio.has(isbn)) {
                window.alert("El libro con el ISBN introducido ya existe");
            } else {
                const titulo = window.prompt("Introduzca el Título del Libro: ");
                const autor = window.prompt("Introduzca el Autor del Libro: ");
                const numEjemplares = window.prompt("Introduzca el Número de Ejemplares del Libro");
                let libro = {
                    titulo: `${titulo}`,
                    autor: `${autor}`,
                    numEjemplares: `${parseInt(numEjemplares)}`
                };
                catalogo_biblio.set(isbn,libro);
            }
            break;
        case "B":
            const codigo = solicitarISBN();
            if (catalogo_biblio.has(codigo)){
                catalogo_biblio.delete(codigo);
                window.alert(`Libro con ISBN ${codigo} eliminado correctamente`);
            }else{
                window.alert(`Libro con ISBN ${codigo} no encontrado`);
            }
            break;
        case "C":
            break;
        case "D":
            break;
        case "E":
            break;
        case "F":
            break;
        case "G":
            break;
        case "H":
            break;
        case "I":
            break;
        case "J":
            catalogo_biblio.clear();
            window.alert("El catálogo de libros ha sido vaciado");
            break;
        case "K":
            window.alert("Has seleccionado salir del programa de Gestión de Biblioteca, Hasta la Próxima!");
            validacion = true;
            break;
        default:
            window.alert("Introduzca una opción válida");
            break;
    }


} while (!validacion);

function solicitarISBN() {
    const isbn = window.prompt("Introduzca el ISBN del Libro: ");
    return isbn;
}