import { config } from 'dotenv'

config({ path: '.env' })

const DB_CONNECTION = ['mysql', 'mariadb', 'postgres', 'mongodb'] as const

export type DB_CONNECTION_TYPE = (typeof DB_CONNECTION)[number]

const parseDBConnection = (dbConnection: string): DB_CONNECTION_TYPE => {
  if (DB_CONNECTION.some((value) => value === dbConnection)) {
    return dbConnection as DB_CONNECTION_TYPE
  }
  return 'mysql'
}

export const DATABASE_CONFIG: {
  DB_CONNECTION: DB_CONNECTION_TYPE
  DB_HOST: string
  DB_PORT: number
  DB_DATABASE: string
  DB_USERNAME: string
  DB_PASSWORD: string
} = {
  DB_CONNECTION: parseDBConnection(process.env.DB_CONNECTIOIN),
  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT),
  DB_DATABASE: process.env.DB_DATABASE,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
}
