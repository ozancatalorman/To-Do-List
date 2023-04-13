
const buttonAdd = document.querySelector("#liveToastBtn");
const ulDOM = document.querySelector("#list");

buttonAdd.addEventListener("click", () => addTask())



function addTask(){
    const liDOM = document.createElement("li")
    const inputTask = document.querySelector("#task")
    liDOM.innerHTML = inputTask.value
    if(liDOM.innerHTML){
        let btn = document.createElement("button")
        btn.textContent = "X"
        btn.className = "deletingBtn"
        btn.addEventListener("click", deleteTask)
        
        
        liDOM.addEventListener("click", completeTask)

        liDOM.appendChild(btn)
        liDOM.dataset.done = false;

        ulDOM.appendChild(liDOM)
        inputTask.value = ""
        $(document).ready($(".success").toast("show"))
    }else{$(document).ready($(".error").toast("show"))}
}

function deleteTask(e){
    const btnEl = e.target
    const liEl = btnEl.parentElement
    if(liEl.dataset.done == "true"){
      localStorage.setItem(liEl.textContent, "Done and Deleted")
    }else{localStorage.setItem(liEl.textContent,"Not done and Deleted")}
    liEl.remove()
    $(document).ready($(".deleted").toast("show"))
}

function completeTask(e){
  const listEl = e.target;
  if (listEl.classList.contains("checked")) {
    listEl.classList.remove("checked")
    listEl.dataset.done = false;
  } else{
    listEl.classList.add("checked")
    listEl.dataset.done = true;
  }
}

