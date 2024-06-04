const express = require('express');
const app = express();
const router = express.Router();
const sequelize = require('./util/database')
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/PacienteRoutes');
const appointmentRoutes = require('./routes/AgendamentoRoutes');
const healthArticleRoutes = require('./routes/HealthArticleRoutes');
const activityRoutes = require('./routes/AtividadesRoutes');
const audioRoutes = require('./routes/AudioRoutes');
const videoRoutes = require('./routes/VideoFisRoutes');
const sessionRoutes = require('./routes/SessaoRoutes');
const mentalHealthVideoRoutes = require('./routes/VideoMenteRoutes');
const meditationRoutes = require('./routes/MeditacaoRoutes');
//const dbconection = require('./util/usersdbconnection');
const conexaoBD = require('./util/database')

app.use(express.json());
app.use('/activities', activityRoutes);
app.use('/patients', patientRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/health-articles', healthArticleRoutes);
app.use('/audios', audioRoutes);
app.use('/videos-fisica', videoRoutes);
app.use('/sessions', sessionRoutes);
app.use('/videos-mente', mentalHealthVideoRoutes);
app.use('/meditations', meditationRoutes);

//dbconection();
conexaoBD.authenticate()
.then( () => {
    console.log('succesful conection');
    conexaoBD.sync({force: true})
    .then( () => {
        console.log('Modelos sincronizados com sucesso!');
        app.listen(3000);
        
    })
    .catch(erro => {
        console.log(erro.message)
    })
    
})
.catch( (erro) => {
    console.log(erro.message);
    process.exit(1);
});

module.exports = app;















