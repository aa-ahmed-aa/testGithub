import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { errorHandler } from './middleware/error-handler';
import { NotFoundError } from './errors/not-found-error';
import { githubSearchRouter } from './routes/github-search';

const app = express();
app.set('trust proxy', true);
app.use(json());

app.use(githubSearchRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };