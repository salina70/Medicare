import router from 'express'
import { registerUser } from '../controllers/userController'

const router = router();
router.post("/register", registerUser);

export default router;