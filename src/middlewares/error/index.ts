import {
  FastifyInstance,
  FastifyError,
  FastifyRequest,
  FastifyReply,
} from 'fastify'

export function errorHandler(
  fastify: FastifyInstance,
  _opts: unknown,
  done: () => void
): void {
  fastify.addHook(
    'onError',
    async (
      request: FastifyRequest,
      reply: FastifyReply,
      error: FastifyError
    ) => {
      // Log do erro (aqui você pode adicionar sua lógica de log)
      fastify.log.error(error, `Error on route: ${request.url}`)

      // Modificar a resposta de erro
      reply.status(error.statusCode || 500).send({
        error: {
          message: error.message,
          statusCode: error.statusCode || 500,
        },
      })
    }
  )

  done()
}
