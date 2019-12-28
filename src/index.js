import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import loadImage from './loadImage';
import uploadImage from './uploadImage';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('node-server-img is running!');
});

app.get('/img/*', loadImage);
app.post('/api/upload', uploadImage);

app.listen(config.port, () => console.log(`app listening on port ${config.port}`));
