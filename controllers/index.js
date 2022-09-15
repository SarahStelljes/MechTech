const router = require('express').Router();

const apiRoutes = require('./api');
const homeRutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;