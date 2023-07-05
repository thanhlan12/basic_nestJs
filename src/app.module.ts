import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './User/User.Service';
import { UserController } from './User/User.Controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './User/schemas/user.schema';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './User/User.Module';


@Module({
  imports: [
    UserModule,
    RouterModule.register([{
      path:'/user',
      module: UserModule
    }
      
    ]),
    UserModule,
    // Cấu hình kết nối tới cơ sở dữ liệu
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/first"),//('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
