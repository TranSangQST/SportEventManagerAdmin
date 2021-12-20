
const TournamentService = require('../services/TournamentService');

class TournamentController {
    showTournament = async(req, res, next) => {

        const data = req.query;

        const filter = {
            tournamentId: data.tournamentId,
            tournamentName: (data.tournamentName !== "0") ? data.tournamentName : undefined
        }

        const page = parseInt(data.page) || 1;
        const limit = parseInt(data.limit) || 10;

        const tournamentNames = await TournamentService.findAllTournamentNames()

        const allTournaments = await TournamentService.findAllTournamentsAndCount(filter, page, limit);
        const tournaments = allTournaments.rows;
        const count = allTournaments.count;

        const pagination = {
            page: page,
            limit: limit,
            totalRows: count
        }

        res.render('tournament', {
            title: 'tournament',
            tournaments, pagination, tournamentNames, filter
        });
    }

    addTournament = async(req, res, next) => {

        const {tournamentName, tournamentMinAge, tournamentMaxAge, tournamentNumberTeam} = req.query;
        const tournament = await TournamentService.addTournament(tournamentName, tournamentMinAge, tournamentMaxAge, tournamentNumberTeam);

        res.redirect('/tournament');
    }

    editTournament = async(req, res, next) => {

        const {editID, tournamentName, tournamentMinAge, tournamentMaxAge, tournamentNumberTeam} = req.query;
        const tournament = await TournamentService.editTournament(editID, tournamentName, tournamentMinAge, tournamentMaxAge, tournamentNumberTeam);

        res.redirect('/tournament');
    }

    deleteTournament = async(req, res, next) => {
        const id = req.query.deleteID;
        console.log("delete id: ", id);
        // const deleteTournament = await TournamentService.deleteTournamentById(id);
        res.redirect('/tournament');
    }

    deleteAllSelectedTournament = async(req, res, next) => {
        const options = req.query.options;
        console.log("delete all id: ", options);
        // const deleteTournament = await TournamentService.deleteTournamentById(id);
        res.redirect('/tournament');
    }
}

module.exports = new TournamentController;