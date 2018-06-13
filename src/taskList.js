class TaskList {
    constructor(){
        this.tasks = []
    }

    appendTask(){
        this.tasks.forEach((task) => task.append())
    }
}
