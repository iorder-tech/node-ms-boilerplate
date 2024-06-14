type CustomError = Error & { statusCode?: number }

export function createError(statusCode = 500, message: string) {
  const error: CustomError = new Error(message)
  error.statusCode = statusCode

  throw error
}
