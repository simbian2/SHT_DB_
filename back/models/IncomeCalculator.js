const Sequelize = require('sequelize')

module.exports = class IncomeCalculator extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            Income:{
                type: Sequelize.STRING(50),
                allowNull:true,
            },
            Person:{
                type: Sequelize.STRING(200),
                allowNull:true,
            },
            Cost_Front:{
                type: Sequelize.INTEGER(100),
                allowNull:true,
            },
            Cost_Back:{
                type: Sequelize.INTEGER(100),
                allowNull:true,
            },
            Income_Score:{
                type: Sequelize.INTEGER(100),
                allowNull:true,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'IncomeCalculator',
            tableName:'IncomeCalculator',
            charset: 'utf8',
            collate:'utf8_general_ci'
        })
    }
}