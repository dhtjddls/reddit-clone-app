import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { SubModule } from './sub/sub.module';
import { UserModule } from './user/user.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'reddit-clone',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      autoLoadEntities: true,
      synchronize: true,
      ssl: false,
    }),
    UserModule,
    CommentModule,
    PostModule,
    VoteModule,
    SubModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
