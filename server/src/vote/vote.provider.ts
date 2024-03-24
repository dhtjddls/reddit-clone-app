import { DataSource } from 'typeorm';
import Vote from './entities/vote.entity';

export const voteProviders = [
  {
    provide: 'VOTE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Vote),
    inject: ['DATA_SOURCE'],
  },
];
