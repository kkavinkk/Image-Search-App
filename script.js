const accessKey = ""

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

function searchImages(){
    inputData = inputEl.value;
    const url = "https://api.unsplash.com/search.photos?page=${page}&query=${inputData}&client_id=${accessKey}"
}