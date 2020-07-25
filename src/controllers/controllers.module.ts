import { Module } from '@nestjs/common';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from '../services/producto.service';
import { CategoriaController } from './categoria/categoria.controller';
import { CategoriaService } from 'src/services/categoria.service';

@Module({
  controllers: [
    ProductoController,
    CategoriaController
  ],
  providers: [
    ProductoService,
    CategoriaService
  ]
})
export class ControllersModule {}
