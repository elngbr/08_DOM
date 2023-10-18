var container = document.getElementById("myContainer");

///puneam asa element

var todoList = document.createElement('ul');
todoList.id='todo-list';
var todoItem=document.createElement('li');
todoItem.innerHTML='Learning';
todoList.appendChild(todoItem);

todoList.appendChild(todoItem);
container.appendChild(todoList);

//sau ASA. asa e recomandat

container.innerHTML = `<ul>
<li>Learning<li>
<li>Sleeping</li>
</ul>`;
