import { Router } from 'express'
import { WinstonLog } from '../logs/WinstonLog'

const userRoute = Router()
const logger = new WinstonLog('info', 'user-service')

userRoute.get('/', (req, res) => {
    try {
        logger.info('Rota [/user] requisitada')
        return res.status(200).json({ Hello: "Olá User!" })
    } catch (error) {
        logger.error('Erro ao listar o usuário')
    }
})

export { userRoute }