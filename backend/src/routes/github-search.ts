import axios from 'axios';
import express, { Request, Response } from 'express';
import { BadRequestError } from '../errors/bad-request-error';
import { validateRequest } from '../middleware/validate-request';

const router = express.Router();

const GITHUB_API_URL = process.env.GITHUB_API_URL || 'https://api.github.com/search/repositories';

router.get('/repository', validateRequest,
    async (req: Request, res: Response) => {

        const repoName = req.query.q;

        if (!repoName?.length) {
            throw new BadRequestError("You must provide a repo name to search");
        }

        const date = req.query.date ?? "2019-01-01";
        const sortType = req.query.sortType ?? "stars";
        const order = req.query.order ?? "desc";
        const page = req.query.page ?? 1;
        const limit = req.query.limit ?? 10;

        const request = GITHUB_API_URL + `?q=${repoName}&created:%3E${date}&sort=${sortType}&order=${order}&page=${page}&per_page=${limit}`
        const response = await axios.get(request);
        res.status(200).send(response.data);
    }
);

export { router as githubSearchRouter };