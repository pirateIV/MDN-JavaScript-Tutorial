const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("btn");

const list = document.getElementById("list");

let max_items = 6;
let searchHistoryArr = [];
searchBtn.addEventListener("click", (e) => {
  let searchVal = searchInput.value;

  list.innerHTML = "";

  searchHistoryArr.unshift(searchVal);
  for(let i = 0; i < searchHistoryArr.length; i++) {
    list.innerHTML += `<li>${searchHistoryArr[i]}</li>`
  }

  if(searchHistoryArr.length >= max_items) {
    searchHistoryArr.pop(searchHistoryArr[max_items])
  }
  console.log(searchHistoryArr)
});
