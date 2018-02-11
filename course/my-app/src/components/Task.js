class Task {
    constructor(title) {
        this.id = new Date().getTime()
        //this.id = Task.count++
        this.title = title
        this.done = false
    }

    //static count = 0
}

export default Task