import config from "../../knexfile";
import knex from "knex";

const client = knex(config[process.env.ENVIRONMENT || "development"]);

export default client;
