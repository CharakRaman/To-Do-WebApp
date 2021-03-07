var container = document.querySelector('.container');
var addbtn = document.querySelector('.addbtn');
var input=document.querySelector('.inputfield');

addbtn.addEventListener('click', addItem);
 function addItem(){
     if(input.value!=''){
       new CreateItem(input.value);  
     }
     input.value='';
 }
    window.addEventListener('keydown', (e) => {
        if(e.which ==13){
            addItem();

        }
    })

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

        editBtn.addEventListener('click', () => this.editItem(item));
        deleteBtn.addEventListener('click', () =>this.deleteItem(main) ); 

    }
    editItem(item){
        item.disabled =! item.disabled;
    }
    deleteItem(main){
        container.removeChild(main);

    }
}
   

var audio = document.createElement('audio');
audio.setAttribute('src','as.mp3');
audio.loop=true;
audio.play();