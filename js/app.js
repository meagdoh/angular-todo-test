let todoData = [
  { name: 'Build an app with Rails', completed: true },
  { name: 'Project 2', completed: true },
  { name: 'Build an app with Angular', completed: false },
  { name: 'Project 3', completed: false },
  { name: 'Build an app with Express', completed: false },
  { name: 'Build an app with Mongo', completed: false },
  { name: 'Build an app with React', completed: false },
  { name: 'Project 4', completed: false },
  { name: 'Become a Rockstar', completed: true }
]

angular
    .module("todoApp", [])
    .controller("ToDosController", [
        ToDosControllerFunction
    ])

function ToDosControllerFunction() {
    this.todos = todoData
    this.addTodo = function() {
        let todo = {
            name: this.newTodo,
            completed: false
        }
        this.todos.push(todo)
        console.log(todo)
    };

}
