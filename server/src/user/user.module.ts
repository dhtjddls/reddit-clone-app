import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { UserController } from './user.controller';
import { userProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
  imports: [DbModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
