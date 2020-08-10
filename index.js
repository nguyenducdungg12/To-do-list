window.addEventListener('DOMContentLoaded',function(){
   var input = document.querySelector('.TDlist__input');
   var list_complete = document.querySelector('.TDlist__complete');
   var list_notComplete = document.querySelector('.TDlist__not-complete');
   //When user press Enter
   function onCheck(e){
        var element = e.target.parentElement.parentElement;
        element.classList.remove('not-complete')
        element.classList.add('complete')
        list_complete.appendChild(element);
   }
   function onRemove(e){
    e.target.parentElement.parentElement.remove();
   }
  input.addEventListener('keyup',(event)=>{
      var value = event.target.value;
      if (event.keyCode === 13 && value){
        var newItem = document.createElement("li");
        newItem.classList.add('not-complete','TDlist____item')
        newItem.innerHTML=` <span class="TDlist__item__content">${value}</span><div class="TDlist__item__option"><i class="fas fa-check check"></i><i class="fas fa-trash-alt garbage"></i></div>`;
        list_notComplete.insertBefore(newItem,list_notComplete.childNodes[2]);
        newItem.querySelector('.check').addEventListener('click',(e)=>onCheck(e));
        newItem.querySelector('.garbage').addEventListener('click',(e)=>onRemove(e));
        event.target.value='';

      }
    })

})