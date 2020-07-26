import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ControllersModule } from './controllers/controllers.module';
import { DatabaseModule } from './database/database.module';

const mongodbStrCn = 'mongodb://localhost:27017/ventas';

@Module({
  imports: [
    MongooseModule.forRoot(mongodbStrCn, {useNewUrlParser: true}),
    ControllersModule,
    DatabaseModule,
  ],
  providers: [],
})
export class AppModule {}
