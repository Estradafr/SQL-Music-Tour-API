// DEPENDENCIES
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(PG_URI);

// MODEL
class Band extends Model {}

Band.init(
  {
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    available_start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ModelName',
    tableName: 'table_name',
  }
);

// EXPORT
module.exports = Band;
