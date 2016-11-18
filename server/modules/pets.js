var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';


router.get('/', function(req, res) {
  console.log('get pets');
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error - getpets: ', err);
      res.sendStatus(500);
    }

    client.query('SELECT * FROM owners LEFT OUTER JOIN pets on owners.id=pets.owner_id;', function(err, result) {
      done(); // close the connection.

      // console.log('the client!:', client);

      if(err) {
        console.log('select query error - getpets ', err);
        res.sendStatus(500);
      }
      console.log('get results,', result.rows);
      res.send(result.rows);

    });

  });
});

router.post('/', function(req, res) {
    var newPet = req.body;
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            console.log('connection error: ', err);
            res.sendStatus(500);
        }

        client.query(
            'INSERT INTO pets (firstName, lastName, petName, color, bread)' +
            'VALUES ($1, $2, $3, $4, $5)', [newPet.firstName, newPet.lastName, newPet.petName, newPet.color, newPet.breed],
            function(err, result) {
                done();

                if (err) {
                    console.log('insert query error: ', err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
          });
    });
});

module.exports = router;
