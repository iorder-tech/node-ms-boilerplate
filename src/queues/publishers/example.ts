import * as rabbitmq from '@/config/rabbitmq'

export async function pubExample(param: string) {
  const queueName = 'QUEUE_NAME'
  const connection = await rabbitmq.getConnection()
  const channel = await connection.createChannel()
  await channel.assertQueue(queueName, { durable: true })

  channel.sendToQueue(
    queueName,
    Buffer.from(
      JSON.stringify({
        param,
      })
    )
  )
}
