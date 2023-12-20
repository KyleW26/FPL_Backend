import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'], isGlobal: true }),
    UserModule,
  ],
})
export class AppModule {}

// http://localhost:3000/api/user/getAll

// {"message":"Cannot GET /api/user/getAll","error":"Not Found","statusCode":404}
