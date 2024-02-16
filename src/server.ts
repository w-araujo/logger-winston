import express from 'express'
import { routes } from './routes/index'
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

const app = express()

const port: number = 3333

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(routes)

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });