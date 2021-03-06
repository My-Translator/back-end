'use strict';

const express = require('express');
const myRouter = express.Router();

const { Word } = require('../models/index');

myRouter.post('/newWord', async (req, res, next) => {
    await Word.create(req.body);
    let record = await Word.findAll();
    let sortedRecord = record.sort((a, b) => {
        let wordA = a.word.toLowerCase();
        let WordB = b.word.toLowerCase();
        if (wordA < WordB) //sort string ascending
            return -1;
        if (wordA > WordB)
            return 1;
        return 0; //default return value (no sorting)
    });

    res.status(201).json(sortedRecord);
});

myRouter.get('/getAllWords', async (req, res, next) => {
    let record = await Word.findAll();
    let sortedRecord = record.sort((a, b) => {
        let wordA = a.word.toLowerCase();
        let WordB = b.word.toLowerCase();
        if (wordA < WordB) //sort string ascending
            return -1;
        if (wordA > WordB)
            return 1;
        return 0; //default return value (no sorting)
    });

    res.status(200).json(sortedRecord);
})

myRouter.put("/updateWord", async (req, res, next) => {
    let word = {
        word: req.body.word,
        translation: req.body.translation,
    }
    await Word.update(word, {
        where: {
            id: req.body.id 
        }
    });

    let record = await Word.findAll();
    let sortedRecord = record.sort((a, b) => {
        let wordA = a.word.toLowerCase();
        let WordB = b.word.toLowerCase();
        if (wordA < WordB) //sort string ascending
            return -1;
        if (wordA > WordB)
            return 1;
        return 0; //default return value (no sorting)
    });

    res.status(200).json(sortedRecord);
})

module.exports = myRouter;