import express from 'express';
import diaryRouter from './routes/diaries';
import * as swaggerUI from 'swagger-ui-express';
import * as YAML from 'yamljs';
const swaggerJsDocs = YAML.load('./src/api.yaml');
const app = express();
const PORT = 3000;

//Middleware para leer el body en JSON de la peticion
app.use(express.json());

//Rutas
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
app.use('/diaries', diaryRouter);
app.get('/ping', (_, res) => {
  console.log('Someone ping me please... ' + new Date().toLocaleDateString());
  res.send('pong');
});

//Servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
