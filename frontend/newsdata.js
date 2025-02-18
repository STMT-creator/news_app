/* const api_key = "pub_69485981d44aab754852e8f074c2963a82de1";
const url = "http://localhost:3000/news"

const newsForm = document.querySelector("#news_form");
newsForm.addEventListener("submit", function(e){
    e.preventDefault();
    let query = document.querySelector("#keyword")
    if (query.value == ""){
        alert("검색어를 입력해야 합니다!")
        query.focus();
        return;
    }
    
    fetchNews(query.value);
});

async function fetchNews(key) {
    // console.log(key + "를 입력했습니다.")
    // const req_url = `${url}?apikey=${api_key}&q=${key}` 
    const req_url = `${url}` // ?apikey=${api_key}&q=${key}
    console.log(req_url)
    const response = await fetch(req_url);
    const jsonData = await response.json();
    console.log(jsonData)
} */


const newsForm = document.querySelector("#news_form");
const key = document.querySelector("#keyword");
newsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (key.value == ""){
        alert("검색어를 입력해주세요")
        key.focus();
        return;
    } else {
        fetchNews();
    }
})

async function fetchNews() {
    // const response = await fetch("https://newsdata.io/api/1/latest?apikey=pub_69485981d44aab754852e8f074c2963a82de1&q=pizza");
    // const news = await response.json();
    // let results = news.results
    const response = await fetch("http://localhost:3000/news");
    const news = await response.json();
    let results = news
    // console.log(results)
    if(key.value == "all") {
        renderUI(results)
    } else {
        findNews(results, key.value);
    }
}

function findNews(results, kv) {
    const newsDiv = document.querySelector("#news");
    // console.log(results, kv)
    let filts = results.filter((t) => t.title.toLowerCase().includes(`${kv}`));
    // console.log(filts)
    let templates = [];
    for (let filt of filts) {
        templates.push(`
            <div class="col">
            <div class="card h-100" style="width: 18rem;">
                <img src="${filt.image_url}" class="card-img-top" alt="${filt.title}">
                <div class="card-body">
                <h5 class="card-title">Title : ${filt.title}</h5>
                <p class="card-text">Category : ${filt.category}</p>
                <p class="card-text">Country : ${filt.country}</p>
                <p class="card-text">Description : ${filt.description}</p>
                    <div class="card-footer">
                    <p class="card-text">Date : ${filt.pubDate}</p>
                    </div>
                    <a href="${filt.link}" class="btn btn-primary">기사 보러가기</a>
                </div>
            </div>
            </div>
            `);
    }
    let HTML = templates.join("");
    newsDiv.innerHTML = HTML;
}


function renderUI(news) {
    const newsDiv = document.querySelector("#news");
    let templates = [];
    // console.dir(newsDiv)
    for (let item of news) {
        // console.log(item)
        templates.push(`
            <div class="col">
            <div class="card h-100" style="width: 18rem;">
                <img src="${item.image_url}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                <h5 class="card-title">Title : ${item.title}</h5>
                <p class="card-text">Category : ${item.category}</p>
                <p class="card-text">Country : ${item.country}</p>
                <p class="card-text">Description : ${item.description}</p>
                    <div class="card-footer">
                    <p class="card-text">Date : ${item.pubDate}</p>
                    </div>
                    <a href="${item.link}" class="btn btn-primary">기사 보러가기</a>
                </div>
            </div>
            </div>
            `);
    }
    let HTML = templates.join("");
    newsDiv.innerHTML = HTML;
}