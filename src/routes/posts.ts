import express, { Request, Response, Router } from 'express'
import axios, { AxiosRequestConfig } from 'axios';
import https from 'https';
import { Post } from '../models/post';

const router: Router = express.Router();

const apiPath = 'https://jsonplaceholder.typicode.com/posts';
const config: AxiosRequestConfig = {
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
};

// get all posts
router.get('/', async (req: Request, res: Response) => {
    const response = await axios.get<Post[]>(apiPath, config);
    res.json(response.data);
});

// get posts by id
router.get('/:id', async (req: Request, res: Response) => {
    const response = await axios.get<Post>(`${apiPath}/${req.params.id}`, config);
    res.json(response.data);
});

// create posts
router.post('/', async (req: Request, res: Response) => {
    const response = await axios.post(apiPath, <Post>req.body, config);
    res.json(response.data);
});

// update post by id
router.put('/:id', async (req: Request, res: Response) => {
    const response = await axios.put(`${apiPath}/${req.params.id}`, (<Post>{
        id: +req.params.id,
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body
    }), config);
    res.json(response.data);
});

// delete posts by id
router.delete('/:id', async (req: Request, res: Response) => {
    const response = await axios.delete(`${apiPath}/${req.params.id}`, config);
    res.json(response.data);
});

module.exports = router;
