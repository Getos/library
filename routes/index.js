import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

/* GET home page. */
// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });
// router.get('/register', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../public/register.html'));
// });
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
export default router;
