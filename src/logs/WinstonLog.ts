import winston from 'winston'

class WinstonLog {
    private logger: winston.Logger

    constructor(level: string, serviceName: string) {
        this.logger = winston.createLogger({
            level: level,
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            defaultMeta: { service: serviceName },
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'error.log', level: 'error' }),
                new winston.transports.File({ filename: 'combined.log' }),
            ]
        })
    }

    public log(level: string, message: string, meta?: any): void {
        this.logger.log(level, message, meta)
    }

    public info(message: string, meta?: any): void {
        this.logger.info(message, meta);
    }

    public error(message: string, meta?: any): void {
        this.logger.error(message, meta);
    }
}

export { WinstonLog }