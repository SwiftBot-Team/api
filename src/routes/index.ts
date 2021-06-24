import { Request, Response, Router } from 'express';

import Ksoft from 'src/structures/Ksoft';

import Render from '../structures/Render';

const routes = Router();

routes.get('/render', async (request: Request, response: Response) => {
  const { page } = request.query;

  const screenshot = await new Render(String(page)).render();

  response.setHeader('Content-Type', 'image/jpeg');

  return response.send(screenshot);
});

routes.get('/lyrics', async (request: Request, response: Response) => {

  const { query, artist } = request.query;

  const { lyrics, album_art, singalong } = await new Ksoft(String(process.env.KSOFT_API)).searchLyrics(String(query), String(artist));

  return response.send({
    lyrics,
    album_art,
    singalong
  });
})

export default routes;
