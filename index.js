var add = document.querySelector(".btn-outline-light");
var inputText = document.querySelector(".form-control")
var listelement = document.createElement("div")
var test = ""

listelement.className = "todo-list"
document.querySelector('body').appendChild(listelement)
inputText.addEventListener('change', (e) => {
    test = e.target.value
})


    add.addEventListener("click", function(){
        let completebtn = document.createElement("button")
        let deletebtn =document.createElement("button")
        let listholder =document.createElement("div") 
        let todo=document.createElement("span")
        
        

        completebtn.className="btnus"
        deletebtn.className="btnus"
        listholder.className="container"

        completebtn.innerHTML = "Completed"
        listholder.appendChild(completebtn)

        deletebtn.innerHTML = "Delete"
        listholder.appendChild(deletebtn)

        todo.className="items"
        todo.innerHTML = test
        inputText.value= ""

        listholder.appendChild(todo)
        listelement.appendChild(listholder)
        
        completebtn.addEventListener('click',() =>{
            completebtn.innerHTML = "Undo"
        todo.classList.add("barre")
        })
        deletebtn.addEventListener('click',()=>{
            deletebtn.parentElement.remove()
        })

    

 
})



