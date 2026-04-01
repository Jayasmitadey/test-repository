let tasks=[];
let input= document.getElementById("inputbox");
let btn= document.getElementById("add_btn");
let list= document.getElementById("tasks_list");

btn.addEventListener("click", function() {
  let value = input.value;
  tasks.push(value);
    
  let div = document.createElement("div");
  // let div = document.createElement("div");
  div.innerHTML = value;
  list.appendChild(div);
  input.value = "";  
});

console.log("Welcome to todo list");
