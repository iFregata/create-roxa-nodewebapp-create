import express from 'express';
import bookRoutes from './book/routes';
import {logger} from '@app/config';

const router = express.Router();
export default router;

// router.use(...), router.METHOD(...) => Router-level middleware

router.use((req, res, next) => {
  logger.debug(`Prepare to handle request uri: ${req.baseUrl}${req.path}`);
  next();
});
router.use('/', bookRoutes);
router.get('/readiness', (req, res) => res.end());
router.get('/liveness', (req, res) => res.end());
