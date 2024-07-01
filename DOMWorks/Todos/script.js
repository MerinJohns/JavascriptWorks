

fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>displayTodos(data))


function displayTodos(todos){

    let htmlData=``

    for(let u of todos){
        htmlData+=`
        <div class="col-4">

        <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${u.name}</h5>
    <p class="card-text">${u.username}</p>
    <p class="card-text">${u.email}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

            </div>

        `


    }

    document.querySelector("#root").innerHTML=htmlData
}