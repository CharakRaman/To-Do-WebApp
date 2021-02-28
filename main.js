var container = document.querySelector('.container');
var addBtn = document.querySelector('.addBtn');
var input=document.querySelector('.inputfield');

class CreateItem{
    constructor(ItemName){
        var item=document.createElement('input');
        item.type="text";
        item.value=ItemName;
        item.classList.add('item');
        item.disabled=true;

        var main=document.createElement('div');
        main.classList.add('main');
        
        
        var editBtn=document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerHTML="Edit"

        var deleteBtn=document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML="Delete"

        container.appendChild(main);
        main.appendChild(item);
        main.appendChild(editBtn);
        main.appendChild(deleteBtn);




    }
}
    new CreateItem('Hello WOrld');