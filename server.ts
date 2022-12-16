import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const middlewares = require("./middlewares");
app.use(express.json())
app.use(middlewares.verifyPostValues)

app.post('/additions', (req: Request, res: Response) => {
    const a = req.body.a
    const b = req.body.b
    res.json(a + b);
});

app.post('/additions', (req: Request, res: Response) => {
    const a = req.body.a
    const b = req.body.b
    res.json(a + b);
});

app.post('/soustractions', (req: Request, res: Response) => {
    const a = req.body.a
    const b = req.body.b
    res.json(a - b);});

app.post('/multiplications', (req: Request, res: Response) => {
    const a = req.body.a
    const b = req.body.b
    res.json(a * b);});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});