import { Router } from 'express';
import { LocationController } from './controllers/LocationController';

const router = Router();

const locationController = new LocationController();

router.post('/locations', locationController.create);
router.get('/locations', locationController.getAll);
router.post('/locations/interestpoint', locationController.getInterestPoint);

export { router }