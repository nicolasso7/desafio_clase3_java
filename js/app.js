let color = prompt("Ingresa color de Parlante");

    switch ((parlante = color)) {
        case "negro":
        alert("hay en stock");
        break;
        case "blanco":
        alert("no hay stock");
        break;
        case "color madera":
        alert("ultimo en stock");
        break;
        default:
           alert("ESE COLOR NO ESTA EN STOCK")

    }