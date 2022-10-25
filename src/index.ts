import express from 'express';
import routes from './routes/api/index';
import logger from './routes/log/logger';

const app = express();
const port = 3000;

app.get('/', logger, (req: express.Request, res: express.Response): void => {
  res.send('Hello User.. You hava 2 imgs => cat dog ');
});

app.use('/api', routes);

app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default { app };
