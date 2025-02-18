const api_key = "pub_69485981d44aab754852e8f074c2963a82de1";
const query = "pizza";
const url = "https://newsdata.io/api/1/latest"
const request = `${url}?apikey=${api_key}&q=${query}`;

window.addEventListener("DOMContentLoaded", function () {
    fetchNews();
})
async function fetchNews() {
    const response = await fetch(request)
        // .then(response => response.json)
        // .then(json => console.log(json));
        console.log(response);
}