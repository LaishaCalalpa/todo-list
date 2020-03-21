class ToDoList {
    constructor() {
        this.tasks = {};
        this.count = 0;
    }

    addTask(task) {
        this.tasks[task.id] = task;
        return ++this.count;
    }

    deleteTask(id) {
        const deletedTask = this.tasks[id];
        delete this.tasks[id];
        this.count -= 1;
        return deletedTask;
    }

    deleteAllTasks() {
        this.tasks = {};
        this.count = 0;
    }

    isCompleted(id) {
        return this.tasks[id].completed = true;
    }
}

module.exports = ToDoList;
