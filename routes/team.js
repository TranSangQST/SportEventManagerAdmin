const express = require('express');
const router = express.Router();

const TeamController = require('../controllers/TeamController');

router.get('/', TeamController.showTeam);
router.get('/delete', TeamController.deleteTeam);
router.get('/deleteAll', TeamController.deleteAllSelectedTeam);

router.get('/:teamid', TeamController.showTeamMembers);



module.exports = router;
