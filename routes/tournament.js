const express = require('express');
const router = express.Router();

const TournamentController = require('../controllers/TournamentController');
const TeamController = require("../controllers/TeamController");

router.get('/', TournamentController.showTournament);
router.get('/add', TournamentController.addTournament);
router.get('/edit', TournamentController.editTournament);
router.get('/delete', TournamentController.deleteTournament);
router.get('/deleteAll', TournamentController.deleteAllSelectedTournament);



module.exports = router;
