import express from 'express';
import meta from './meta';
import routes from './routes';
import { exceptionally } from 'roxa-jskit';

export default () => {
  const app = express();

  // app.user(...), app.METHOD(...) => Application-level middleware
  // app.use(express.json());
  app.get(`${meta.context_root}/meta`, (req, res) => res.json(meta));

  app.use(`${meta.context_root}/${meta.version}`, routes);

  //app.use(`${meta.context_root}/${meta.version}/static`, express.static('static'));

  app.use(exceptionally);

  return app;
};
