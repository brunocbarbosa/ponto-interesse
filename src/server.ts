import 'dotenv/config'
import express from 'express';
import 'express-async-errors';

import { router } from './router';
import { errors } from './middlewares/errors'

const app = express()
app.use(express.json());
app.use(router);
app.use(errors);

const port = process.env.PORT_NUMBER

app.listen(port, () => console.log(`Server running at port ${port}!!`))