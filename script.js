
let inp = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');
button.addEventListener('click',function(){
   let item= document.createElement('li');
   item.innerText = inp.value;

   let delbtn = document.createElement('button');
   delbtn.innerText = 'delete';
   delbtn.classList.add("delete");
   item.appendChild(delbtn);

   ul.appendChild(item);
   inp.value = "";
})

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//    delbtn.addEventListener("click", function(){
//       let parent = this.parentElement;
//       parent.remove();
//    })
// }
ul.addEventListener("click", function(event){
   if(event.target.nodeName== "BUTTON"){
      let listitem = event.target.parentElement;
      listitem.remove();
      console.log("deleted");
   }
})

   // console.log(inp.value);