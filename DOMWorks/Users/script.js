

fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>displayUsers(data))


function displayUsers(users){

    let htmlData=``

    for(let u of users){
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