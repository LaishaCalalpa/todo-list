class Task {
    constructor(taskName, completeBy) {
        this.id = ++Task.count;
        this.taskName = taskName;
        this.completeBy = completeBy;
        this.dateAdded = new Date();
        this.completed = false;
    }
}

Task.count = 0;

module.exports = Task;
