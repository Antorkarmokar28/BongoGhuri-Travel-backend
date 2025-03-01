import cors from 'cors';
import express from 'express';
import router from './app/routes';
const app = express();
app.use(express.json());
app.use(cors());
// if server is running on rout then this function exicuted
app.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'BongoGhuri server is running now',
  });
});
//application routes
app.use('/api/v1/', router);
export default app;
