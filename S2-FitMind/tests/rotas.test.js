/*const request = require('supertest');
const app = require('../app.js');
const sequelize = require('../util/database.js');



describe('Testes das Rotas', () => {
    //a função it é para realizar teste
    it('Lista de todas os agendamentos', async() => {
        //definir o codigo para executar o teste
        const resultado = await request(app).get('../api/AgendamentoRoutes');
        expect(resultado.statusCode).toEqual(200)
        expect(resultado.body).toHaveProperty('users')
    })

})*/

const request = require('supertest');
const app = require('../app'); // Assumindo que 'app' é exportado corretamente
const sequelize = require('../util/database.js');

describe('Testes das Rotas', () => {
  it('Lista de todas os agendamentos', async () => {
    const resultado = await request(app).get('/appointments/get-agendamento');
    expect(resultado.status).toBe(200);
  })

  it('Lista de todas os pacientes', async () => {
    const resultado = await request(app).get('/patients/get-patient');
    expect(resultado.status).toBe(200);
  })

  it('Lista de todas os audios', async () => {
    const resultado = await request(app).get('/audios/get-audio');
    expect(resultado.status).toBe(200);
  })

  it('Lista de todas os videos', async () => {
    const resultado = await request(app).get('/videos-fisica/get-videos-fisica');
    expect(resultado.status).toBe(200);
  })

 

});

