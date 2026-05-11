function addTask(){
let input = document.getElementById("taskInput");
let text = input.value.trim();

if(text==="") return;

let li = document.createElement("li");

li.innerHTML = `
<span onclick="this.style.textDecoration='line-through'">${text}</span>
<div>
<button onclick="editTask(this)">Edit</button>
<button onclick="this.closest('li').remove()">Delete</button>
</div>
`;

document.getElementById("taskList").appendChild(li);
input.value="";
}

function editTask(btn){
let li = btn.closest("li");
let span = li.querySelector("span");
let newText = prompt("Edit Task", span.innerText);

if(newText){
span.innerText = newText;
}
}