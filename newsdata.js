const api_key = "pub_69485981d44aab754852e8f074c2963a82de1";
const url = "https://newsdata.io/api/1/latest"

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
    const req_url = `${url}?apikey=${api_key}&q=${key})`
    const jsonData = await fetch(req_url);
    console.log(jsonData)
}