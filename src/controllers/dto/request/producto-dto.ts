export class ProductoDto {

    id: string;
    nombre: string;
    descripcion: string;

    constructor(
        pId: string = null,
        pNombre: string = 'nombre-nuevo',
        pDescripcion: string = 'descripcion-nuevo',
    ){
        this.id = pId;
        this.nombre = pNombre;
        this.descripcion = pDescripcion;
    }
}
