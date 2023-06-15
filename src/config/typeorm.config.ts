/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  name: 'default',
  type: 'mongodb',
  url: process.env.DB_URL_MONGO,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
};
