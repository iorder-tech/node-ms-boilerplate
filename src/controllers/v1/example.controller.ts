import { FastifyReply, FastifyRequest } from 'fastify'
import * as services from '@/services/example.services'

export async function example(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: string }

  const response = await services.example(id)
  reply.status(200).send(response)
}
