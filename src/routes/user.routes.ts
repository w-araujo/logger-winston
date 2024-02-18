import { Router } from 'express'
import { WinstonLog } from '../logs/WinstonLog'
import { UserService } from '../services/UserService'

const userRoute = Router()
const logger = new WinstonLog('info', 'user-service')

const userService = new UserService()

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Rotas relacionadas a usuários
 * /user:
 *   post:
 *     tags: [User]
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               birth:
 *                 type: string
 *                 format: date
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Retorna uma mensagem de sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
userRoute.post('/', (req, res) => {
    try {
        logger.info('Rota [/user] create requisitada')
        userService.create(req.body)
        return res.status(200).json({ message: "Usuário criado com sucesso!"})
    } catch (error) {
        logger.error('Erro ao criar o usuário!')
    }
})


/**
 * @swagger
 * tags:
 *   name: User
 *   description: Rotas relacionadas a usuários
 * /user:
 *   get:
 *     tags: [User]
 *     summary: Lista todos os usuários
 *     description: Obtém a lista de todos os Usuários cadastrados
 *     responses:
 *       200: 
 *         description: retorna a listagem
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   birth:
 *                     type: string
 *                     format: date
 *                   email:
 *                     type: string
 */
userRoute.get('/', (req, res) => {
    try {
        logger.info('Rota [/user] listagem geral requisitada')
        const users = userService.list()
        return res.status(200).json(users)
    } catch (error) {
        logger.error('Erro ao listar o usuário')
    }
})

export { userRoute }