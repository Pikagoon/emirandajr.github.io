const accessKey = "tD69UFiD0BaCZgb1rsN92UmLnlK1S6AdHsd_I6zf0IA";
const searchImg = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const showResult = document.getElementById("search-result");
const btnShow = document.getElementById("button-show-more");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  if (page === 1) {
    showResult.innerHTML = "";
  }
  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    showResult.appendChild(imageLink);
  });
  btnShow.style.display = "block";
}

searchImg.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

btnShow.addEventListener("click", () => {
  page++;
  searchImages();
});

// tD69UFiD0BaCZgb1rsN92UmLnlK1S6AdHsd_I6zf0IA
