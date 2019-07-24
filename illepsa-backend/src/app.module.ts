import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuarios/usuario.module';
import { ProductoModule } from './productos/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuarios/usuario.entity';
import {ProductoEntity} from './productos/producto.entity';

@Module({
  imports: [
    UsuarioModule,
    ProductoModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type:'mysql',
      host:'localhost',
      port:3306,
      username: 'fernando',
      password:'hc45924682',
      database: 'proyecto',
      entities:[UsuarioEntity, ProductoEntity],
      synchronize:true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
