import amqp, { Connection } from 'amqplib'
import config from '@/config/env'
import logger from '@/config/logger'

const host =
  config.environment === 'production' ? 'rabbitmq:5672' : '4.228.121.48'

const connectionOptions = {
  protocol: 'amqp',
  hostname: host,
  port: 5672,
  username: config.rabbitmq.username,
  password: config.rabbitmq.password,
  locale: 'en_US',
  frameMax: 0,
  heartbeat: 0,
  vhost: '/',
}

let connection: Connection | null = null

export const getConnection = async (): Promise<Connection> => {
  if (connection) {
    return connection
  }

  try {
    connection = await amqp.connect(connectionOptions)
    return connection
  } catch (error: any) {
    logger.error(`Erro ao conectar-se ao RabbitMQ: ${error?.message}`, {
      stack: error.stack,
    })
    throw error
  }
}
