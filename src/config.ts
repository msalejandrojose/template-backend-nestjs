import * as fs from 'fs';
import * as dotenv from 'dotenv';

export class Config {
  public static setConfig() {
    if (fs.existsSync('.env')) {
      dotenv.config();
      process.env.DATABASE_URL = "mysql://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_SCHEMA + "";
    }
  }
}