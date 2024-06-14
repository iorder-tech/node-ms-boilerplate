import { FastifyInstance } from 'fastify'
import * as exampleControllerV1 from '@/controllers/v1/example.controller'
import * as exampleSchema from '@/schemas/v1/example.schema'

export async function exampleRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/v1/example',
    { schema: exampleSchema.getExampleSchema },
    exampleControllerV1.example
  )
}
