const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

const Task = require('./models/Task');
const ToDoList = require('./models/ToDoList');

const list = new ToDoList();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { tasks: list.tasks });
});

app.get('/add', (req, res) => {
    res.render('add-task.ejs');
});

app.post('/add', (req, res) => {
    const { taskName, completeBy } = req.body;
    const task = new Task(taskName, completeBy);

    list.addTask(task);
    console.log(list);
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    list.deleteTask(id);
    res.redirect('/');
});

app.get('/completed/:id', (req, res) => {
    const id = req.params.id;
    list.isCompleted(id);
    res.render('task-info', { task: list.tasks[id] });
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    res.render('task-info', { task: list.tasks[id] });
});


app.listen(port, () => console.log(`Now listening on port ${port}.`));
