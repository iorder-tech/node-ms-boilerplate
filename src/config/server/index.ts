import Fastify, { FastifyInstance } from 'fastify'
import cors from '@fastify/cors'
import { errorHandler } from '@/middlewares/error'

const fastify: FastifyInstance = Fastify({
  logger: false,
})

fastify.register(cors)
fastify.register(errorHandler)

// Route Instance
fastify.get('/healthz', async (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  }

  res.send(healthCheck)
})

export { fastify }
