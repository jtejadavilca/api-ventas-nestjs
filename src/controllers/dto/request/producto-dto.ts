export class ProductoDto {

    id: string;
    nombre: string;
    descripcion: string;
    imageURL: string;
    precio: number;

    constructor(
        pId: string = null,
        pNombre: string = 'nombre-nuevo',
        pDescripcion: string = 'descripcion-nuevo',
        pImageURL: string = '',
        pPrecio: number = 0.0,
    ){
        this.id = pId;
        this.nombre = pNombre;
        this.descripcion = pDescripcion;
        this.imageURL = pImageURL;
        this.precio = pPrecio;
    }
}
