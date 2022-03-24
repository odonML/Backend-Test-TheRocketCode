import User from '../models/User.model';

const createUser = async (req, res) => {
	const {
		firstName,
		secondName,
		firstLastName,
		secondLastName,
		dateOfBirth,
		phone,
		email,
	} = req.body;
	try {
		const data = await User.create(
			{
				firstName,
				secondName,
				firstLastName,
				secondLastName,
				dateOfBirth,
				phone,
				email,
			},
			{
				fields: [
					'firstName',
					'secondName',
					'firstLastName',
					'secondLastName',
					'dateOfBirth',
					'phone',
					'email',
				],
			}
		);
		res.json({
			ok: true,
			data,
		});
	} catch (error) {
		res.json({
			ok: false,
			data: {},
			msj: error,
		});
	}
};

const getUsers = async (req, res) => {
	try {
		const data = await User.findAll();
		res.json({
			ok: true,
			data,
		});
	} catch (error) {
		res.json({
			ok: false,
			data: {},
			msj: error,
		});
	}
};

export { createUser, getUsers };
