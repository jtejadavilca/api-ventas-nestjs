import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ProductoDto } from '../controllers/dto/request/producto-dto';
import { IProducto } from '../interfaces/producto.interface';


@Injectable()
export class ProductoService {

    constructor( @InjectModel('Producto') private productoModel: Model<IProducto> ) {}

    async getProductos(): Promise<IProducto[]> {
        const productos = await this.productoModel.find();
        return productos;
    }

    async getProducto( id: string ): Promise<IProducto> {
        const producto = await this.productoModel.findById( id );
        return producto;
    }

    async createProducto( productoDTO: ProductoDto ): Promise<IProducto> {
        const nuevoProducto = new this.productoModel( productoDTO );
        return await  nuevoProducto.save();
    }

    async updateProducto( id: string, productoDTO: ProductoDto ): Promise<IProducto> {

        const editProducto = await this.productoModel.findByIdAndUpdate( id, productoDTO, { new: true } );
        return editProducto;
    }

    async deleteProducto( id: string ): Promise<IProducto> {

        const productoEliminado = await this.productoModel.findByIdAndDelete( id );
        return productoEliminado;
    }
}
