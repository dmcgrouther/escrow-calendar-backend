const express = require('express');
const router = express.Router();
const ctrl =  require('../controllers');

router.post('/', ctrl.house.createHouse);
router.get('/', ctrl.house.showAllHouses);
router.get('/:houseId', ctrl.house.showOneHouse);
router.put('/:houseId', ctrl.house.editOneHouse);
router.delete('/:houseId', ctrl.house.deleteOnehouse);

module.exports = router;