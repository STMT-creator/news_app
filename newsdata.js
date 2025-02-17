const myNews_api = "pub_69485d21d2aa89f2e84086c486cf73a8f8b6d";
const query = "pizza";
const url = "https://newsdata.io/api/1/latest"
const request = `${url}?apikey=${myNews_api}&q=${query}`;

window.addEventListener("DOMContentLoaded", function (e) {
    fetchNews();
})
async function fetchNews() {
    const response = await fetch(request)
        // .then(response => response.json)
        // .then(json => console.log(json));
        console.log(response);
}