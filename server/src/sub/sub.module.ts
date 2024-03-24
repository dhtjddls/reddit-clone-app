import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { SubController } from './sub.controller';
import { subProviders } from './sub.provider';
import { SubService } from './sub.service';

@Module({
  imports: [DbModule],
  controllers: [SubController],
  providers: [SubService, ...subProviders],
})
export class SubModule {}
