export class ProductoDto {

    nombre: string;
    descripcion: string;
    imageURL: string;
    precio: number;

    constructor(
        pNombre: string = 'nombre-nuevo',
        pDescripcion: string = 'descripcion-nuevo',
        pImageURL: string = '',
        pPrecio: number = 0.0,
    ){
        this.nombre = pNombre;
        this.descripcion = pDescripcion;
        this.imageURL = pImageURL;
        this.precio = pPrecio;
    }
}
