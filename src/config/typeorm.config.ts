/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_PRIMARY_HOSTNAME,
  port: parseInt(process.env.DB_PRIMARY_PORT),
  username: 'postgres',
  password: 'Aj189628@',
  database: 'dating-app',
  entities: [],
  synchronize: true,
  autoLoadEntities: true,
};
