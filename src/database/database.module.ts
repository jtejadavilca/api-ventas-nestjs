import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoSchema } from './schemas/producto.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Producto', schema: ProductoSchema }
        ])
    ],
})
export class DatabaseModule {}
