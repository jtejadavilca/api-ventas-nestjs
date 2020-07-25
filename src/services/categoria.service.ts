import { Injectable } from '@nestjs/common';
import { ICategoria } from 'src/interfaces/categoria.interface';
import { CategoriaDto } from 'src/controllers/dto/request/categoria-dto';

@Injectable()
export class CategoriaService {

    private categorias: ICategoria[] = [
        {
            id: 'c1',
            nombre: 'categoria 1',
            descripcion: 'descripcion 1',
            productos: []
        },{
            id: 'c2',
            nombre: 'categoria 2',
            descripcion: 'descripcion 2',
            productos: []
        },{
            id: 'c3',
            nombre: 'categoria 3',
            descripcion: 'descripcion 3',
            productos: []
        }
    ];

    getCategorias(): ICategoria[] {
        return this.categorias;
    }

    getCategoria( id: string ): ICategoria {
        return this.categorias.find( p => p.id === id );
    }

    createCategoria( categoria: CategoriaDto ): ICategoria {
        const nuevoCategoria: ICategoria = {
            id: `c${this.categorias.length}`,
            ...categoria
        };
        this.categorias.push( nuevoCategoria );

        return nuevoCategoria;
    }

    updateCategoria( id: string, categoria: CategoriaDto ): ICategoria {
        const editCategoria: ICategoria = this.categorias.find( c => c.id === id );

        editCategoria.nombre = categoria.nombre;
        editCategoria.descripcion = categoria.descripcion;

        return editCategoria;
    }

    deleteCategoria( id: string ): ICategoria {
        let elimCategoria: ICategoria = null;
        this.categorias.filter( c => {
            if( c.id === id ) {
                elimCategoria = c;
                return false;
            }
            return true;
        });

        return elimCategoria;
    }
}
