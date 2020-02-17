var Todos = require('../models/todoModel');
function getTodos(res) {
    Todos.find((err, todo) => {
        if (err) throw err;
        res.json(todo);
    });
}

module.exports = function (app) {
    // get all todo list
    app.get('/api/todos', (req, res) => {
        getTodos(res);
    });
    app.get('/api/todo/:id', (req, res) => {
        Todos.findById({ _id: req.params.id }, (err, info) => {
            if (err) throw err;
            res.json(info);
        })
    })

    app.post('/api/todo', (req, res) => {
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        }
        Todos.create(todo, (err, todo) => {
            if (err) throw err;
            getTodos(res);
        });
    });

    app.put('/api/todo', (req, res) => {
        if (!req.body.id) {
            return res.status(500).send('ID is required');
        } else {
            Todos.update(
                { _id: req.body.id },
                {
                    text: req.body.text,
                    isDone: req.body.isDone
                }, (err, todo) => {
                    if (err) {
                        return res.status(500).send(err);
                    } else {
                        getTodos(res);
                    }
                });
        }
    });
    app.delete('/api/todo/:id', (req, res) => {
        Todos.remove({ _id: req.params.id },
            (err, todo) => {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    getTodos(res);
                }
            });
    });
}