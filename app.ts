import { createDB } from './src/db';

const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('app listening in port 3000', createDB());
});
