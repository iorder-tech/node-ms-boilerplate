import winston from 'winston'

const logConfiguration = {
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
      ),
    }),
    new winston.transports.Console({
      level: 'error',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          (error) => `${error.timestamp} ${error.level}: ${error.message}`
        )
      ),
    }),
    new winston.transports.File({
      filename: 'errors.log',
      level: 'error',
    }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
}

const logger = winston.createLogger(logConfiguration)

export default logger
