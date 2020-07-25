import { Injectable } from '@nestjs/common';
import { ProductoDto } from '../controllers/dto/request/producto-dto';
import { IProducto } from '../interfaces/producto.interface';


@Injectable()
export class ProductoService {

    private productos: IProducto[] = [
        {
            id: 'p1',
            nombre: 'producto 1',
            descripcion: 'descripcion 1'
        },{
            id: 'p2',
            nombre: 'producto 2',
            descripcion: 'descripcion 2'
        },{
            id: 'p3',
            nombre: 'producto 3',
            descripcion: 'descripcion 3'
        }
    ];

    getProductos(): IProducto[] {
        return this.productos;
    }

    getProducto( id: string ): IProducto {
        return this.productos.find( p => p.id === id );
    }

    createProducto( producto: ProductoDto ): IProducto {
        const nuevoProducto: IProducto = {
            id: `p${this.productos.length}`,
            ...producto
        };
        this.productos.push( nuevoProducto );

        return nuevoProducto;
    }

    updateProducto( id: string, producto: ProductoDto ): IProducto {
        const editProducto: IProducto = this.productos.find( p => p.id === id );

        editProducto.nombre = producto.nombre;
        editProducto.descripcion = producto.descripcion;

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
