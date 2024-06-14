import logger from '@/config/logger'
import { getConnection } from '@/config/rabbitmq'

export async function yourQueueFunction() {
  const queueName = 'QUEUE_NAME'
  const connection = await getConnection()
  const channel = await connection.createChannel()

  await channel.assertQueue(queueName, {
    durable: true,
  })

  channel.prefetch(4)
  channel.consume(
    queueName,
    async (message) => {
      if (message) {
        const messageString = message.content.toString()

        logger.info(
          `[Received Message]: ${messageString} - Date: ${new Date().toISOString()}`
        )

        try {
          const messageObj = JSON.parse(messageString)

          if (messageObj) {
            channel.ack(message)
            return
          }

          channel.nack(message, false, true)
          logger.error(`Error process message: `, messageString)
        } catch (error: any) {
          channel.nack(message, false, true)
          logger.error(`Error parse message to JSON: ${error?.message}`)
        }
      }
    },
    { noAck: false }
  )
}
