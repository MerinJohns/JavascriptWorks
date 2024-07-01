
const APIKEY="7c0e2c6a615b4c14b514121756c252f3"

let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`



getData()

async function getData(){

  let resp=await fetch(url)

  let data=await resp.json()

  displayNews(data)

}

const categories=["business","entertainment","general","health","science","sports","technology"]

function displayNews(news){

    let htmlData=``

    for ( n of news.articles){

        htmlData+=`

        <div class="col">

    <div class="card">

      <img src="${n.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.description}</p>
      </div>
    </div>
  </div>
        `
    }

    document.querySelector("#root").innerHTML=htmlData

}

displayCategory(categories)

function displayCategory(categories){

    let htmlData=``

    for(let c of categories){

        htmlData+=`
        <button class="btn btn-danger" type="button" value="${c}" onclick="fetchNewsByCategory(event)">${c}</button>
        
        `
    }
    document.querySelector("#category").innerHTML=htmlData
}

function fetchNewsByCategory(event){

  let cetegoryName=event.target.value

  fetch(`${url}&category=${categoryName}`).then(res=>res.json()).then(data=>displayNews(data))
  


}