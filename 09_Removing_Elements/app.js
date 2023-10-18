var list = document.getElementById("myList");
list.style.background='lightblue';
var removeButton = document.getElementById("removeButton");

removeButton.addEventListener("click", removeListItem);

function removeListItem() {
  var item1 = document.querySelector("#myList li:first-child");
  console.log(item1);

  item1.remove();
}

var removeAllButton = document.getElementById('removeAllButton');
removeAllButton.addEventListener('click', removeAllItems);

function removeAllItems()
{
    var items = document.querySelectorAll('#myList li');
    for(var i=0; i<=items.length-1; i++)
    items[i].remove();
}

list.addEventListener("click", handleClick);

function handleClick(e)
{
    //console.log(e.target);
    if(e.target.classList.constains('delete-item'))
{
    //console.log('s-a apasat delete');
    e.target.parentElement.remove();

}else if(e.target.classList.constains('item'))
{
   // console.log(e.target);
   e.target.classList.toggle('viewed');
}


}