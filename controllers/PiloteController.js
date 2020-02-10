let model = require('../models/pilote.js');
let async = require('async');

// //////////////////////// R E P E R T O I R E    D E S    P I L O T E S

module.exports.Repertoire = function(request, response){
    response.title = 'Répertoire des pilotes';
    model.getListePilote( function (err, result) {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.listePilote = result;
        //console.log(result);
        response.render('repertoirePilotes', response);
    });
};

/*
module.exports.NomPilote = function(request, response) {
    let data = request.params.lettre;
    // console.log(data);
    response.title = 'Répertoire des pilotes';

    model.getNomPilote( data,function (err, result)  {
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.nomPilote = result;
        //console.log(result);
        response.render('nomPilotes', response);
    });

};


 */


module.exports.NomPilote = function(request, response) {
    let data = request.params.lettre;
    // console.log(data);
    response.title = 'Pilote dont le nom commence par '+data;

    async.parallel([
        function (callback) {
            model.getListePilote(function (err, result) {callback(null, result)});
            // affiche à nouveau des premieres lettres des pilotes
        },

    function(callback){

    model.getNomPilote( data,(function (errPil, resultPil) {callback(null, resultPil) }));
    },
    ],
      function(err,result){
        if (err) {
            // gestion de l'erreur
            console.log(err);
            return;
        }
        response.listePilote = result[0];
        response.nomPilote = result[1];

        // for (let i =1; i< donnees.length; i++)
        // {
        //    if (i%3 == 0){
        //        donnees[i].ligne = "1";
        //    }
        // }
        //console.log(result);
        response.render('nomPilotes', response);
    });

};

module.exports.AfficherPilote = function(request, response) {
    let data = request.params.num;
    // console.log(data);
    response.title = 'Pilote dont le nom commence par '+data;

    async.parallel([
            function (callback) {
                model.getListePilote(function (err, result) {callback(null, result)});
                // affiche à nouveau des premieres lettres des pilotes
            },

            function(callback){

                model.getNomPilote( data,(function (errPil, resultPil) {callback(null, resultPil) }));
            },

            function(callback){

                model.getSponsorPilote( data,(function (errSpo, resultSpo) {callback(null, resultSpo) }));
            },
        ],
        function(err,result){
            if (err) {
                // gestion de l'erreur
                console.log(err);
                return;
            }
            response.listePilote = result[0];
            response.nomPilote = result[1];
            response.sponsorPilote = result[2];
            console.log(result[1]);
            console.log(result[2]);

            // for (let i =1; i< donnees.length; i++)
            // {
            //    if (i%3 == 0){
            //        donnees[i].ligne = "1";
            //    }
            // }
            //console.log(result);
            response.render('afficherPilote', response);
        });

};
