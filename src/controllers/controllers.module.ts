import { Module } from '@nestjs/common';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from '../services/producto.service';
import { CategoriaController } from './categoria/categoria.controller';
import { CategoriaService } from 'src/services/categoria.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoSchema } from '../database/schemas/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Producto', schema: ProductoSchema }
    ])
  ],
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
