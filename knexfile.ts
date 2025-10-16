import type { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.DB_DRIVER || "mysql2", // Default DB Client to MySQL, valid options are 'mysql', 'pg', 'sqlite3'
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_NAME || "webhook_bin",
    },
    migrations: {
      tableName: "knex_migrations",
      extension: "ts",
      directory: "./db/migrations",
    },
    useNullAsDefault: true,
    debug: true,
  },

  production: {
    client: process.env.DB_DRIVER || "mysql2", // Default DB Client to MySQL
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_NAME || "webhook_bin",
    },
    migrations: {
      tableName: "knex_migrations",
      extension: "ts",
      directory: "./db/migrations",
    },
  },
};

export default config;
