import { Router } from 'express'
import { WinstonLog } from '../logs/WinstonLog'

const postRoute = Router()
const logger = new WinstonLog('info', 'post-service')


/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Rotas relacionadas as postagens
 * /post:
 *   get:
 *     tags: [Post]
 *     summary: Retorna "olá post"
 *     description: Obtém uma mensagem da rota posts
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
postRoute.get('/', (req, res) => {
    try {
        logger.info('Rota [/post] requisitada')
        return res.status(200).json({ Hello: "Olá Post" })
    } catch (error) {
        logger.error('Erro ao listar o post!')
    }
})

export { postRoute }