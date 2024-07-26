const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quotes");
const author = document.getElementById("author");
document.getElementById("btnTweet").onclick = tweet;

getQuotes(api_url);

async function getQuotes(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ---- by " +
      author.innerHTML
  );
}
