import { Express } from 'express';
import { main } from './src';

const express = require('express');
const path = require('path');

const app: Express = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(3000, () => {
  console.log('app listening in port 3000');
  main();
});
