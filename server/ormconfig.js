module.exports = {
  name: 'default',
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{ .ts,.js}'],
  synchronize: true,
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_history',
  migrationsRun: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
