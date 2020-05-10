import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();
/**
 * Repositories (só quando tem funções especificas)
 * Services
 */

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

// usamos o patch em vez do update pois é para alterar uma única informação
export default profileRouter;
