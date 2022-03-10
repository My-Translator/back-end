'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const SQL_DATABASE_URL ="postgres://lhfqvryk:X5eWH_t6BSoBbhsJXEsjQ0JMU1xTQ2Pm@ziggy.db.elephantsql.com/lhfqvryk";

const sequelize = new Sequelize(SQL_DATABASE_URL, {});

const WordModel = require('./word-model');

const Word = WordModel(sequelize, DataTypes);


module.exports = {
    db : sequelize,
    Word : Word
}
