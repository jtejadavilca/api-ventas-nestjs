import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';

import { ProductoService } from '../../services/producto.service';
import { ProductoDto } from '../dto/request/producto-dto';
import { IProducto } from '../../interfaces/producto.interface';


@Controller('producto')
export class ProductoController {
    constructor( private readonly productoservice: ProductoService ) { }

    @Get()
    getProductos(): IProducto[] {
        return this.productoservice.getProductos();
    }

    
    @Get(':id')
    getProducto(@Param('id') id: string): IProducto {
        return this.productoservice.getProducto( id );
    }

    @Post()
    createProducto( @Body() producto: ProductoDto ): IProducto {
        return this.productoservice.createProducto( producto );
    }

    @Put(':id')
    updateProducto( @Param('id') id: string, @Body() producto: ProductoDto ): IProducto {
        return this.productoservice.updateProducto( id, producto );
    }

    @Delete(':id')
    deleteProducto( @Param('id') id: string ): IProducto {
        return this.productoservice.deleteProducto( id );
    }

}
