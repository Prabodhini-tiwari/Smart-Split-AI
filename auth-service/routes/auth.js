import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.get('/me', verifyToken, (req, res) => {
    res.json({ msg: 'Token verified', user: req.user });
  });
  
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
