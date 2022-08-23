export class ProductoEmp {
    id?: number;
    nombre: string;
    detalles: string;
    servicio: string;

    constructor(nombre: string, detalles: string, servicio: string) {
        this.nombre = nombre;
        this.detalles = detalles;
        this.servicio =servicio;
    }
}


