
let HomeController = require('./../controllers/HomeController');
let ResultatController = require('./../controllers/ResultatController');
let EcurieController = require('./../controllers/EcurieController');
let PiloteController = require('./../controllers/PiloteController');
let CircuitController = require('./../controllers/CircuitController');

// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);

// pilotes
    app.get('/repertoirePilote', PiloteController.Repertoire);
    app.get('/repertoirePilote/:lettre', PiloteController.NomPilote);
    app.get('/detailsPilote/:num', PiloteController.AfficherPilote);

 // circuits
   app.get('/circuits', CircuitController.ListerCircuit);

// Ecuries
   app.get('/ecuries', EcurieController.ListerEcurie);

 //Résultats
   app.get('/resultats', ResultatController.ListerResultat);


// tout le reste
app.get('*', HomeController.NotFound);
app.post('*', HomeController.NotFound);

};
