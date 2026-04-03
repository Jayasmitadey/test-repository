let task=[];
let input = document.getElementById("inputbox");
let btn = document.getElementById("add_btn");
let list = document.getElementById("tasks_list");
let i=0;
let check;
let index;
let currentIndex;
btn.addEventListener("click", function() {
  let value = input.value.trim();
  if (value === "") return;  
  task[i]=value;
  i++;
  let listItem = document.createElement("div");
  let div = document.createElement("div");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let text = document.createElement("span");
  text.innerText = value;

  let button = document.createElement("button");
  button.innerText = "X";

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      text.style.textDecoration = "line-through";
      text.style.color="green";
    } else {
        text.style.textDecoration = "none";
    }
  });
  
  button.addEventListener("click", function() {
    check =listItem.innerText;
    index = task.indexOf(check);
    task.splice(index,1);
    listItem.remove();  
    i--;    
  });

  div.appendChild(checkbox);
  div.appendChild(text);
  listItem.appendChild(div);
  listItem.appendChild(button);
  listItem.classList = "listItem";
  list.appendChild(listItem);
  
  input.value = "";

  text.addEventListener("click",function() {
     let input = document.getElementById("inputbox");
    input.value = text.textContent;
    currentIndex = task.indexOf(text.textContent);
   });
   
   btn.addEventListener("click", function () {
    let input = document.getElementById("inputbox");

    if (currentIndex !== -1) {
        task[currentIndex] = input.value;
    }
});
});

