class Task {
    constructor(value){
            this.description = value
    }

    append(){
        const ul = document.getElementById('tasks')
        let li = document.createElement('li')
        li.innerText = this.description
        ul.appendChild(li)
    }

    // delete(){

    // }
}
