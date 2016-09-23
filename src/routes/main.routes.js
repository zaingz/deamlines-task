
import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
  res.send({message: 'Hello Dreamlines'});
});

router.get('*', (req, res) => {
  res.status(404).send({error: "You have landed in area 51"});
});

export default router;
