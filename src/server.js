import 'dotenv/config'; 
import express from 'express';

import UserController from './app/controller/UserController';

const app = express();

app.use(express.json());
app.post('/users', UserController.store);
app.get('/', (req, res) => res.send(`Server running on the ${process.env.PORT}`));

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});