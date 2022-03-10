
const WordModel = (sequelize , DataTypes) =>{
    const Word = sequelize.define('Word', {
        word: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        translation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        // isLearned: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // }
    });

    // Word.associate = models => {
    //     Word.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Word;
}

module.exports = WordModel;