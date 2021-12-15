const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class MedicoAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.cita_api_url;
    }

    async createMedico(medico) {
        medico = new Object(JSON.parse(JSON.stringify(medico)));
        return await this.post('/medico', medico);
    }

    async medicoByUsername(username) {
        return await this.get(`/medico/${username}`);
    }

    async createCita(cita) {
        cita = new Object(JSON.parse(JSON.stringify(cita)));
        return await this.post('/citas', cita);
    }

    async citaByPaciente(username) {
        console.log(username);
        return await this.get(`/citas/${username}`);
    }
}

module.exports = MedicoAPI;