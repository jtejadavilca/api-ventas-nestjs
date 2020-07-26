import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ProductoDto } from '../controllers/dto/request/producto-dto';
import { IProducto } from '../interfaces/producto.interface';


@Injectable()
export class ProductoService {

    private productos: IProducto[] = [
        // {
        //     id: 'p1',
        //     nombre: 'producto 1',
        //     descripcion: 'descripcion 1',
        //     imageURL: '',
        //     precio: 10
        // }, {
        //     id: 'p2',
        //     nombre: 'producto 2',
        //     descripcion: 'descripcion 2',
        //     imageURL: '',
        //     precio: 10
        // }, {
        //     id: 'p3',
        //     nombre: 'producto 3',
        //     descripcion: 'descripcion 3',
        //     imageURL: '',
        //     precio: 10
        // }
    ];

    constructor( @InjectModel('Producto') private productoModel: Model<IProducto> ) {}

    async getProductos(): Promise<IProducto[]> {
        const productos = await this.productoModel.find();
        return productos;
        // return this.productos;
    }

    async getProducto( id: string ): Promise<IProducto> {
        const producto = await this.productoModel.findById( id );
        return producto;
    }

    createProducto( producto: ProductoDto ): IProducto {
        // const nuevoProducto: IProducto = {
        //     id: `p${this.productos.length}`,
        //     ...producto
        // };
        // this.productos.push( nuevoProducto );

        // return nuevoProducto;
        return;
    }

    updateProducto( id: string, producto: ProductoDto ): IProducto {
        const editProducto: IProducto = this.productos.find( p => p.id === id );

        editProducto.nombre = producto.nombre;
        editProducto.descripcion = producto.descripcion;
        editProducto.imageURL = producto.imageURL;
        editProducto.precio = producto.precio;

        return editProducto;
    }

    deleteProducto( id: string ): IProducto {
        let productoEliminado: IProducto = null;
        this.productos.filter( p => {
            if( p.id === id ) {
                productoEliminado = p;
                return false;
            }
            return true;
        });

        return productoEliminado;
    }
}
