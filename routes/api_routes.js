// Require sequelize models
var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Songs.findAll().then(function (data) {

            let songArr = [];
            for (let i = 0; i < data.length; i++) {
                songArr.push(data[i].dataValues);
            }

            console.log(songArr);

            var hbsObject = {

                songs: songArr
            };

            // (render the handlebars object to html document)
            res.render("index", hbsObject);
        });
    });

    // ------------------------------------------ 

    // Request songs by genre
    app.get("/api/songs/:genre", function (req, res) {

        db.Songs.findAll({

            where: {
                genre: req.params.genre,
            }

        }).then(function (dbSongs) {

            res.json(dbSongs);

        });

    });

    // ------------------------------------------ 

    // Add song record to db
    app.post("/api/song", function (req, res) {

        db.Songs.create({

            song_name: req.body.song_name,
            artist: req.body.artist,
            album: req.body.album,
            year: req.body.year,
            genre: req.body.genre

        }).then(function () {

            res.redirect("/");

        });

    });

    // ------------------------------------------ 

    // user signup for email 

    app.post("/api/signup", function (req, res) {

        console.log("req.body.user_name: ");
        console.log(req.body.user_name);
        console.log("req.body.email: ");
        console.log(req.body.email);

        db.Users.create({
            user_name: req.body.user_name,
            email: req.body.email
        }).then(function () {
            //console.log(res);
            res.redirect("/");
        });

    });

    // ------------------------------------------ 

    // Request all playlists
    app.get("/api/playlist", function (req, res) {

        db.Playlist.findAll({}).then(function (dbPlaylist) {

            res.json(dbPlaylist);

        });
    });

    // ------------------------------------------ 

    // Request user by id
    app.get("/api/users/:id", function (req, res) {
        db.Users.findOne({

            where: {
                id: req.params.id,
            }

        }).then(function (dbUsers) {
            res.json(dbUsers);
        });
    });

}; // module.exports


/*

app.get("/api/email", function (req, res) {
    db.Users.findOne({

        where: {
            id: req.params.id,
        }

    })
    
    .then(function (dbUsers) {
        res.json(dbUsers);
    });


});

*/



const mailgun = require("mailgun-js");

const DOMAIN = 'sandbox41529fa617c14faead62eb4a228b69d0.mailgun.org';

const mg = mailgun({apiKey: "key-127f13986c8e9a5611e8a854501316" , domain: DOMAIN});

const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'alane019@gmail.com',
	subject: 'Hello',
	html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"></html><head><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400&display=swap"rel="stylesheet"><title>Inbox Playlist</title><style type="text/css">body{Margin:0;padding: 0;background-color: #D9A796;font-family:"Big Shoulders Display",cursive;font-size: 40px;}table {border-spacing: 0;}td{padding: 0;}img {border: 0;}.wrapper{width: 100%;table-layout:fixed;background-color:#D9CECC;padding-bottom:40px;}.webkit{max-width:600px;}.outer{Margin: 0 auto;width:100%;max-width: 600px;border-spacing: 0;color: #2a2a2a;}@media screen and (max-width: 600px){}@media screen and (max-width: 400px){}</style></head><body><center class="wrapper"><div class="webkit"><table class="outer" align="center"><tr><td><table width="100%"><tr><td style="background-color:#A62508;padding:10px;text-align: center;"><a href="" style="color:#A62508"><img src="https://www.pinclipart.com/picdir/big/358-3585488_png-file-svg-headphones-icon-png-free-clipart.png" width="80" alt=""></a><p style="border:2px solid #2a2a2a">Inbox Playlists</p></td></tr></table></td></tr><tr><td style="background-image:url(`https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`);background-size:600px;text-align:center;"><p style="color:#D9CECC;margin-top:100px;background: #110000;width:400px;margin-left: auto;">Inside your inbox</p><br><p style="color:#D9CECC;background: #110000;width:400px;margin-right: auto;">Outside your comfort zone</p></td></tr><tr><td style="background:#D9CECC;border:2px solid #2a2a2a;"><p style="text-align:center;">Your playlist:</p><br></td></tr></table></div></center></body>'
	
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});