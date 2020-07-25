import { IProducto } from "src/interfaces/producto.interface";

export class CategoriaDto {

    id: string;
    nombre: string;
    descripcion: string;
    productos: IProducto[];

    constructor(
        pId: string = null,
        pNombre: string = 'nombre-nuevo',
        pDescripcion: string = 'descripcion-nuevo',
        pProductos: IProducto[] = []
    ){
        this.id = pId;
        this.nombre = pNombre;
        this.descripcion = pDescripcion;
        this.productos = pProductos;
    }
}
