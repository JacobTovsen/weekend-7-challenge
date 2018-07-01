const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', function(req,res){
    console.log('this is req.body:', req.body);
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4)`;
    pool.query(queryText, [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
        ]).then((result) => {
            console.log('back from db with:', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in POST', error);
            res.sendStatus(500);
        })
}) // end router POST

router.get('/', function(req, res){
    console.log('in router GET');
    const queryText = `SELECT * FROM feedback ORDER by id DESC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('error in GET:', error);
        })
}) // end router GET

// bizarre weird broken code in the queryText
// router.delete('/:id', (req,res) => {
//     console.log('this is req.params:', req.params.id);
//     const id = req.params.id;
//     const queryText = 'DELETE FROM feedback WHERE id=$1';
//     pool.query(queryText, [id])
//         .then((result) => {
//             res.sendStatus(200);
//         }).catch((error) => {
//             console.log('error in DELETE:', error);
//             res.sendStatus(500);
//         })
// }) //end router DELETE

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('in router entry DELETE to delete');
    const queryText = 'DELETE FROM feedback WHERE id=$1';
    console.log('this is the queryText:', queryText);
    pool.query(queryText, [id])
        .then((results) => {
            console.log('successful DELETE', results);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in DELETE:', error);
            res.sendStatus(500);
        })
}) // end feedback DELETE

router.put('/:id/:flagged', (req, res) => {
    console.log('this is req.params:',req.params)
    const id = req.params.id;
    
    if (req.params.flagged === 'true'){
        queryText = `UPDATE feedback SET flagged = false WHERE id=$1`;
    } else {
        queryText = `UPDATE feedback SET flagged = true WHERE id=$1`;
    } 
    
    pool.query(queryText, [id])
        .then((results) => {
            console.log('successful update', results);
            res.sendStatus(200);
        }).catch((error => {
            console.log('error in PUT:', error);
        }))
}) // end flag PUT


module.exports = router;