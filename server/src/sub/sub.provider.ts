import { DataSource } from 'typeorm';
import Sub from './entities/sub.entity';

export const subProviders = [
  {
    provide: 'SUB_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Sub),
    inject: ['DATA_SOURCE'],
  },
];
