import { Router } from 'express'
import { WinstonLog } from '../logs/WinstonLog'

const userRoute = Router()
const logger = new WinstonLog('info', 'user-service')

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Rotas relacionadas a usuários
 * /user:
 *   get:
 *     tags: [User]
 *     summary: Retorna "olá user"
 *     description: Obtém uma mensagem da rota usuários
 *     responses:
 *       200: 
 *         description: retorna mensagem de boas vindas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Hello:
 *                   type: string
 */
userRoute.get('/', (req, res) => {
    try {
        logger.info('Rota [/user] requisitada')
        return res.status(200).json({ Hello: "Olá User!" })
    } catch (error) {
        logger.error('Erro ao listar o usuário')
    }
})

export { userRoute }