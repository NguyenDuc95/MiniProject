var Todos = require('../models/todoModel');
module.exports = function(app){
    app.get('/api/setupTodos', (req, res) => {
        //  set up data
        var seedTodos =[
            {
                text:'hoc Node js',
                isDone:true
            },
            {
                text:'hoc angular js',
                isDone:false
            },
            {
                text:'hoc1 ung dung hoan chinh',
                isDone:false
            },
            
        ];

        Todos.create(seedTodos,(err,results)=>{
            if (err) throw err;
            res.send(results);
        });
    });
}