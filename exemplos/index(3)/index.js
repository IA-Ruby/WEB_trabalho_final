const express = require('express');
const app = express();

app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

// Rota para obter um usuário pelo ID
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === id);

    if (!user) {
        res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
        res.json(user);
    }
});

// Rota para criar um novo usuário
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

// Rota para atualizar um usuário existente
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
        users[index] = updatedUser;
        res.json(updatedUser);
    }
});

// Rota para excluir um usuário
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users = users.filter(user => user.id !== id);
    res.sendStatus(204);
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
