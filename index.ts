import { initDb, PgPoolConfig } from '@iorder/iorder-query-builder'
import { fastify } from './src/config/server'
import config from './src/config/env'

// Import your queues here

const start = async () => {
  try {
    fastify.listen(
      {
        port: config.port,
        host: ['staging', 'production'].includes(config.environment)
          ? '0.0.0.0'
          : 'localhost',
      },
      (err, address) => {
        if (err) {
          fastify.log.error(err, 'ERROR')
          fastify.log.info(address, 'ADDRESS')
          process.exit(1)
        }
      }
    )

    console.info(`🚀 Boilerplate Microservice running on port ${config.port}`)

    if (!config.database.url) {
      console.warn(
        '🚧 Database URL dont configurated in .env! DB not initialized!'
      )

      return
    }

    // Initialize Database
    initDb<PgPoolConfig>({
      type: 'pg',
      options: {
        connectionString: config.database.url,
      },
    })

    // Process your Queues here
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
