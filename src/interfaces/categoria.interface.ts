import { IProducto } from "./producto.interface";

export interface ICategoria {
    id?: string;
    nombre: string;
    descripcion: string;
    productos: IProducto[];
}
