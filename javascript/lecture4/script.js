let todo = [];

let req = prompt("Please enter your request");

while(true) {
    if(req == "quit") {
        console.log("quitting app...");
        break;
    }

    if(req == "list") {
        console.log("-----------------");
        for(let i = 0; i<todo.length; i++) {
            console.log(i+1, todo[i]);
        }
        console.log("-----------------");
    } else if(req == "add") {
        let task = prompt("Please enter the task you want to add.");
        todo.push(task);
        console.log("Task added!");
    } else if(req == "clear") {
        todo = [];
        console.log("Tasks cleared");
    } else if(req == "delete") {
        let num = prompt("Enter the task number you would like to delete");
        todo.splice(num - 1, 1);
        console.log("Task deleted");
    } else {
        console.log("wrong request");
    }

    req = prompt("Please enter your request");
}
