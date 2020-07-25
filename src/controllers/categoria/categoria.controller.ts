import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CategoriaService } from 'src/services/categoria.service';
import { ICategoria } from 'src/interfaces/categoria.interface';
import { CategoriaDto } from '../dto/request/categoria-dto';

@Controller('categoria')
export class CategoriaController {
    constructor( private readonly categoriaService: CategoriaService ) {}

    @Get()
    getCategorias(): ICategoria[] {
        return this.categoriaService.getCategorias();
    }

    
    @Get(':id')
    getCategoria(@Param('id') id: string): ICategoria {
        return this.categoriaService.getCategoria( id );
    }

    @Post()
    createCategoria( @Body() producto: CategoriaDto ): ICategoria {
        return this.categoriaService.createCategoria( producto );
    }

    @Put(':id')
    updateCategoria( @Param('id') id: string, @Body() producto: CategoriaDto ): ICategoria {
        return this.categoriaService.updateCategoria( id, producto );
    }

    @Delete(':id')
    deleteCategoria( @Param('id') id: string ): ICategoria {
        return this.categoriaService.deleteCategoria( id );
    } 
}
