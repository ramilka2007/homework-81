import {Router} from 'express';
import Link from '../models/Link';
import {LinkWithoutId} from "../types";

const linksRouter = Router();

linksRouter.post('/', async (req, res, next) => {
    try {
        let newLink: LinkWithoutId;

        let randomShortUrl = crypto.randomUUID().substring(0, 6);

        newLink = {
            originalUrl: req.body.originalUrl,
            shortUrl: randomShortUrl,
        };

        const link = new Link(newLink);
        await link.save();
        return res.send(link);
    } catch (error) {
        return next(error)
    }
});

export default linksRouter;