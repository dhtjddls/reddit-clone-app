import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Sub from './entities/sub.entity';
import { SubController } from './sub.controller';
import { SubService } from './sub.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sub])],
  controllers: [SubController],
  providers: [SubService],
})
export class SubModule {}
