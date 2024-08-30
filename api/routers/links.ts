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

linksRouter.get('/:shortUrl', async (req, res, next) => {
    try {
        if (!req.params.shortUrl) {
            return res.status(404).send({'error': 'shortUrl params must be present in the request'});
        }

        let link = await Link.findOne({shortUrl: req.params.shortUrl});

        if (link) {
            return res.status(301).redirect(link.originalUrl);
        } else {
            res.status(404).send('Not found');
        }

    } catch (error) {
        return next(error)
    }
});

export default linksRouter;