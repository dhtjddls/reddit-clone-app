import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { VoteController } from './vote.controller';
import { voteProviders } from './vote.provider';
import { VoteService } from './vote.service';

@Module({
  imports: [DbModule],
  controllers: [VoteController],
  providers: [VoteService, ...voteProviders],
})
export class VoteModule {}
