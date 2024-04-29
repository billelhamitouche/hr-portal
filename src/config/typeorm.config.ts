import { DataSourceOptions } from "typeorm";

export const dataSourceOption : DataSourceOptions = {
    
        type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          database: process.env.DB_NAME ,
          password: process.env.DB_PASSWORD ,
          entities: ["dist/**/*.entity.js"],
          migrations: ['dist/src/migrations/*.js'],
          synchronize: true,      

}