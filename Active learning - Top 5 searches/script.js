const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("btn");

const list = document.getElementById("list");

let max_items = 6;
let searchHistoryArr = [];
searchBtn.addEventListener("click", (e) => {
  let searchVal = searchInput.value;

  list.innerHTML = "";

  searchHistoryArr.unshift(searchVal);
  searchHistoryArr.forEach((historySearchVal) => {
    const listItem = document.createElement("li");

    listItem.textContent = historySearchVal;
    list.appendChild(listItem);
  });

  if(searchHistoryArr.length >= max_items) {
    searchHistoryArr.pop(searchHistoryArr[max_items])
  }
  console.log(searchHistoryArr)
});
