import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

export default {
  environment: process.env.ENVIRONMENT || 'development',
  port: Number(process.env.PORT) || 3005,
  database: {
    url: process.env.DATABASE_URL,
  },
  rabbitmq: {
    host: process.env.RABBITMQ_HOST,
    username: process.env.RABBITMQ_USERNAME,
    password: process.env.RABBITMQ_PASSWORD,
  },
}
