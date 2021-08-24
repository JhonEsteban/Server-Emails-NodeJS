const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    author: 'Jhon Esteban Herrera',
    message: 'API for receive emails',
    private: true,
  });
});

module.exports = router;
