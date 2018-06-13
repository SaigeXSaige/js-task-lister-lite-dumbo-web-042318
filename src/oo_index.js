
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  


  const submit = document.querySelector("input[type=submit]");
  const inputForm = document.getElementById('new-task-description');
  let value;

  submit.addEventListener("click", (e)=> {
    e.preventDefault();
    let task = new Task(value);
    taskList.tasks.push(task)
    document.querySelector('#tasks').innerHTML = "";
    taskList.appendTask()
    inputForm.value = "";
    // appendTask(task)
    console.log(taskList);
  })

  inputForm.addEventListener('keyup', (e)=>{
    value = e.target.value
  })


});
