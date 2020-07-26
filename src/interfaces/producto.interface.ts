import { Document } from 'mongoose';

export interface IProducto extends Document {
    nombre: string;
    descripcion: string;
    imageURL: string;
    precio: number;
}
