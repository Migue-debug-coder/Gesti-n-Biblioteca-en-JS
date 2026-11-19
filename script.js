let catalogo_biblio = new Map();
const isbn = 0;
let validacion = false;

class Libro {
    constructor(titulo, autor, ejemplares) {
        this.titulo = titulo;
        this.autor = autor;
        this.ejemplares = ejemplares;
    }

    get titulo() {
        return this.titulo;
    }

    set titulo(titulo) {
        this.titulo = titulo;
    }

    get autor() {
        return this.autor;
    }

    set autor(autor) {
        this.autor = autor;
    }

    get ejemplares() {
        return this.ejemplares;
    }

    set ejemplares(ejemplares) {
        this.ejemplares = ejemplares;
    }

    toString() {
        return "Titulo: " + this.titulo + "\n" + "Autor: " + this.autor + "\n" + "Ejemplares: " + this.ejemplares;
    }
}

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
            isbn = solicitarISBN();
            if (catalogo_biblio.has(isbn)) {
                window.alert("El libro con el ISBN introducido ya existe");
            } else {
                const titulo = window.prompt("Introduzca el Título del Libro: ");
                const autor = window.prompt("Introduzca el Autor del Libro: ");
                const numEjemplares = window.prompt("Introduzca el Número de Ejemplares del Libro");
                let libro = new Libro(titulo, autor, numEjemplares);
                catalogo_biblio.set(isbn, libro);
            }
            break;
        case "B":
            isbn = solicitarISBN();
            if (catalogo_biblio.has(codigo)) {
                catalogo_biblio.delete(codigo);
                window.alert(`Libro con ISBN ${codigo} eliminado correctamente`);
            } else {
                window.alert(`Libro con ISBN ${codigo} no encontrado`);
            }
            break;
        case "C":
            isbn = solicitarISBN();
            if (!catalogo_biblio.has(isbn)) {
                window.alert("El Libro con el ISBN introducido no existe");
            } else {
                window.alert(`Información del Libro: \n` +
                    `${catalogo_biblio.get(isbn).toString()}`
                );
            }
            break;
        case "D":
            if (catalogo_biblio.size == 0) {
                window.alert("No existen libros registrados");
            } else {
                let libros_registrados = 0;
                for (let libro of catalogo_biblio.keys()) {
                    console.log(`Libro: ${libro} \n` +
                        `${catalogo_biblio.get(libro).toString()}`
                    );
                    libros_registrados++;
                }
                console.log(`El Número Total de Libros Registrados es de: ${libros_registrados}`);
            }
            break;
        case "E":
            isbn = solicitarISBN();
            let cantidad = window.prompt("Introduzca una cantidad: ");
            catalogo_biblio.get(isbn).numEjemplares = cantidad;
            break;
        case "F":
            let nombre = window.prompt("Introduzca el nombre del autor: ");
            for (let codigo of catalogo_biblio.keys()) {
                if (catalogo_biblio.get(codigo) == nombre) {
                    catalogo_biblio.get(codigo).toString();
                }
            }
            break;
        case "G":
            isbn = solicitarISBN();
            if (catalogo_biblio.get(isbn).numEjemplares != 0) {
                catalogo_biblio.get(isbn).numEjemplares--;
            } else {
                window.alert("No quedan ejemplares disponibles");
            }
            break;
        case "H":
            isbn = solicitarISBN();
            if (!catalogo_biblio.has(isbn)) {
                window.alert("El Libro con el ISBN introducido no existe");
            } else {
                catalogo_biblio.get(isbn).numEjemplares++;
            }
            break;
        case "I":
            if (catalogo_biblio.size == 0) {
                window.alert("No hay libros registrados como para mostrar estadísticas");
            } else {
                let total_libros = 0;
                let total_ejemplares = 0;
                for (let codigo of catalogo_biblio.keys()) {
                    total_ejemplares += catalogo_biblio.get(codigo).numEjemplares;
                    total_libros++;
                }
                let ejemplares_max = 0;
                for (codigo of catalogo_biblio.keys()) {
                    if (ejemplares_max < catalogo_biblio.get(codigo).numEjemplares) {
                        ejemplares_max = catalogo_biblio.get(codigo).numEjemplares;
                    }
                }
                window.alert(`Total de libros registrados: ${total_libros} \n` +
                    `Total de ejemplares disponibles: ${ejemplares_max} \n`
                );
                for (codigo of catalogo_biblio.keys()) {
                    if (catalogo_biblio.get(codigo).numEjemplares == ejemplares_max) {
                        window.alert(`Libro con más ejemplares: ${codigo} \n` +
                            `${catalogo_biblio.get(codigo).toString()}`
                        );
                    }
                }
            }

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