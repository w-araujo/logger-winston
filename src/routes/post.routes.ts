import { Router } from 'express'
import { WinstonLog } from '../logs/WinstonLog'

const postRoute = Router()
const logger = new WinstonLog('info', 'post-service')

postRoute.get('/', (req, res) => {
    try {
        logger.info('Rota [/post] requisitada')
        return res.status(200).json({ Hello: "Olá Post" })
    } catch (error) {
        logger.error('Erro ao listar o post!')
    }
})

export { postRoute }