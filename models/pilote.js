/*
* config.Db contient les parametres de connection à la base de données
* il va créer aussi un pool de connexions utilisables
* sa méthode getConnection permet de se connecter à MySQL
*
*/

let db = require('../configDb');

/*
* Récupérer l'intégralité les écuries avec l'adresse de la photo du pays de l'écurie
* @return Un tableau qui contient le N°, le nom de l'écurie et le nom de la photo du drapeau du pays
*/
module.exports.getListePilote = function (callback) {
    // connection à la base
    db.getConnection(function(err, connexion){
        if(!err){
            // s'il n'y a pas d'erreur de connexion
            // execution de la requête SQL
            let sql ="SELECT distinct substring(pilnom,1,1) as lettre FROM " +
                "pilote ";
            sql= sql + "ORDER BY lettre";
            //console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
        }
    });
};

module.exports.getNomPilote = function (lettre,callback) {
    // connection à la base
    db.getConnection(function(err, connexion){
        if(!err){
            // s'il n'y a pas d'erreur de connexion
            // execution de la requête SQL
            let sql ="SELECT pi.pilnum as idPilote, pilprenom as prenom, pilnom as nom, phoadresse FROM " +
                "pilote pi JOIN photo ph ON pi.pilnum = ph.pilnum ";

            sql= sql + "WHERE pilnom like'" +lettre +"%' AND ph.phonum = 1 ORDER BY pilprenom";
            // console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
        }
    });
};

module.exports.getSponsorPilote = function (num,callback) {
    // connection à la base
    db.getConnection(function(err, connexion){
        if(!err){
            // s'il n'y a pas d'erreur de connexion
            // execution de la requête SQL
            let sql ="SELECT sponom, sposectactivite FROM SPONSOR s JOIN sponsorise sp on s.SPONUM = sp.SPONUM WHERE sp.pilnum =" +num;

            console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
        }
    });
};

module.exports.getSponsorPilote = function (num,callback) {
    // connection à la base
    db.getConnection(function(err, connexion){
        if(!err){
            // s'il n'y a pas d'erreur de connexion
            // execution de la requête SQL
            let sql ="SELECT sponom, sposectactivite FROM SPONSOR s JOIN sponsorise sp on s.SPONUM = sp.SPONUM WHERE sp.pilnum =" +num;

            console.log (sql);
            connexion.query(sql, callback);

            // la connexion retourne dans le pool
            connexion.release();
        }
    });
};


