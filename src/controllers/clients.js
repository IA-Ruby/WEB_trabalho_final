function findAll(req, res) {
    res.status(201).send('Requisição recebida com sucesso!');
    //ClientRepository.findAll().then((result) => res.json(result));
}

function findClient(req, res) {
    res.status(201).send('Requisição recebida com sucesso!');
    //ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addClient(req, res) {
    res.status(201).send('Requisição recebida com sucesso!');
    /*
    ClientRepository.create({
        nome: req.body.nome,
        email: req.body.email,
    }).then((result) => res.json(result));
    */
}

async function updateClient(req, res) {
    res.status(201).send('Requisição recebida com sucesso!');
    /*
    await ClientRepository.update(
        {
            nome: req.body.nome,
            email: req.body.email,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );

    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
    */
}

async function deleteClient(req, res) {
    res.status(201).send('Requisição recebida com sucesso!');
    /*
    await ClientRepository.destroy({
        where: {
            id: req.params.id,
        },
    });

    ClientRepository.findAll().then((result) => res.json(result));
    */
}

module.exports = { findAll, addClient, findClient, updateClient, deleteClient };
