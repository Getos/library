import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET cool message. */
router.get('/cool', (req, res, next) => {
  res.send('you are so cool');
});

export default router;
