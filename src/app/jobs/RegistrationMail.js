import Mail from '../lib/Mail';

export default {
	key: 'RegistrationMail',
	options: {
		//
	},
	async handle({ data }) {
		const { user } = data;

		await Mail.sendMail({
			from: 'DIO <contato@dio.com.br>',
			to: `${user.name} <${user.email}>`,
			subject: 'Cadastro de usuario',
			html: `Olá, ${user.name}, bem vindo a DIO.`
		});
	}
}
