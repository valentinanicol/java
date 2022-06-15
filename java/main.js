const input = document.querySelector ('input');

const btnadd = document.querySelector ('.btn-add');

const ul = document.querySelector ('ul');

const empty = document.querySelector (".empty");

btnadd.addEventListener("click", (e) => {

    e.preventDefault ();
const text = input.value;

if (text != "") {
 const li = document.createElement ('li');

 const p = document.createElement ('p');

  p.textContent = text;

   li.appendChild(p);

   li.appendChild(addDeleteBtn ()); 

   ul.appendChild(li);


   input.value= "";

  // empty.style.display = "none";

}
});

function addDeleteBtn () {

    const deleteBtn= document.createElement('button');


    deleteBtn.textContent = "X";

    deleteBtn.classname = "btn-delete";

    deleteBtn.addEventListener ("click", (e) =>{

        const item = e.target.parentElement; 

        ul.removeChild (item);


        const items = document.querySelectorAll ("li");


    })

    return deleteBtn;

}
    
