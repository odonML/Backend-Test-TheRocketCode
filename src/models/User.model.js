import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

// Definicion del modelo de mi tabla Tasks
const User = sequelize.define(
	'users_test_odon_lozada',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		firstName: {
			type: Sequelize.TEXT,
		},
		secondName: {
			type: Sequelize.TEXT,
		},
		firstLastName: {
			type: Sequelize.TEXT,
		},
		secondLastName: {
			type: Sequelize.TEXT,
		},
		dateOfBirth: {
			type: Sequelize.TEXT,
		},
		phone: {
			type: Sequelize.TEXT,
		},
		email: {
			type: Sequelize.TEXT,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

export default User;
