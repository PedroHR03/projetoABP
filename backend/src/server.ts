import express from 'express';
const app = express();

app.get('/api/profissionais', (req, res) => {
    res.json([
        { id: 1, nome: 'Ana Souza', especialidade: 'Manicure' },
        { id: 2, nome: 'Carlos Silva', especialidade: 'Cabeleireiro' }
    ]);
});

app.listen(3000, () => console.log("Backend rodando na porta 3000"));