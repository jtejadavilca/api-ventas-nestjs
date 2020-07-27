import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';

import { ProductoService } from '../../services/producto.service';
import { ProductoDto } from '../dto/request/producto-dto';
import { IProducto } from '../../interfaces/producto.interface';


@Controller('producto')
export class ProductoController {
    constructor( private readonly productoservice: ProductoService ) { }

    @Get()
    async getProductos(): Promise<IProducto[]> {
        const productos = await this.productoservice.getProductos();
        return productos;
    }

    @Get(':id')
    async getProducto(@Param('id') id: string): Promise<IProducto> {
        const producto = await this.productoservice.getProducto( id );
        return producto;
    }

    @Post()
    async createProducto( @Body() productoDTO: ProductoDto ): Promise<IProducto> {
        const producto = await this.productoservice.createProducto( productoDTO );
        return producto;
    }

    @Put(':id')
    updateProducto( @Param('id') id: string, @Body() producto: ProductoDto ): IProducto {
        // return this.productoservice.updateProducto( id, producto );
        return;
    }

    @Delete(':id')
    async deleteProducto( @Param('id') id: string ): Promise<IProducto> {
        const producto = await this.productoservice.deleteProducto( id );
        return producto;
    }

}
