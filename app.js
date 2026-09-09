const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
    res.json({
        system: 'PHANTOM-01',
        status: 'ONLINE',
        envioronment: 'SIMULATION',
        version: '1.0.0' 
    });
});

app.get('/objetivos', (req, res) => {
    res.json([
        {
            name: 'Pedro Sánchez',
            codname: 'OBJ-001',
            status: 'MONITORED',
            riskLevel: 'CRITICAL'
        },
        {
            name: 'Isabel Díaz Ayuso',
            codname: 'OBJ-002',
            status: 'MONITORIED',
            reisklevel: 'HIGH'
        }
    ]);
});

app.listen(PORT, () =>{
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});