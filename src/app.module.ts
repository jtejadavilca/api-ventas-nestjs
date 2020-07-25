import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { CategoriaService } from './services/categoria.service';

@Module({
  imports: [ControllersModule],
  providers: [],
})
export class AppModule {}
