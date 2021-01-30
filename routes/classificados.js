const express = require('express');
const { use } = require('../app');
const router = express.Router();
const mysql = require('mysql');
const moment = require('moment');

moment.locale('pt-br');

var connection = mysql.createConnection({
   host : 'localhost',
   user: 'root',
   password: '1234',
   database: 'classificados'
});

router.get('/total', (req, res, next) => {

    connection.query(
        'select COUNT(*)as total from classificados', (function(error, result){
            res.send(result);
        })
    )


});

router.get('/', (req, res, next) => {

    connection.query(
        'select * from classificados order by id_classificado desc', (function(error, result){
            res.send(result);
        })
    )


});

router.post('/', (req, res, next) =>{
        connection.query(
            'INSERT INTO classificados (titulo, descricao, data) VALUES (?,?,?)',
            [req.body.titulo, req.body.descricao, moment().format('LL')],
        )

        
        res.status(201).send({
            mensagem: 'Classificado adicionado com sucesso',
            
        });
        });


module.exports = router;