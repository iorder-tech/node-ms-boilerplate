import { createError } from '@/utils/error'
import { findFirst, getDbClient } from '@iorder/iorder-query-builder'

export async function example(id: string) {
  const conn = getDbClient()

  try {
    const exist = await findFirst({
      tableName: 'table_name',
      dbClient: conn,
      select: ['id'],
      where: {
        id: { operator: '=', value: id },
      },
    })

    if (!exist) throw createError(400, 'Item not exists')

    return exist
  } catch (error) {
    throw error
  }
}
