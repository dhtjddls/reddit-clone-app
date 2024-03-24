import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { VoteModule } from './vote/vote.module';
import { SubModule } from './sub/sub.module';

@Module({
  imports: [DbModule, UserModule, CommentModule, PostModule, VoteModule, SubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
