import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: false,
  synchronize: !!process.env.TYPEORM_SYNCHRONIZE,
  name: process.env.TYPEORM_DATABASE,
  migrations: [process.env.TYPEORM_MIGRATIONS],
});
