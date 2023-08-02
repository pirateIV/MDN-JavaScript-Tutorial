const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("btn");

const list = document.getElementById("list")

let max_items = 5;
let searchHistoryArr = []
searchBtn.addEventListener("click", (e) => {
  let searchVal = searchInput.value

  list.innerHTML =  ''

  searchHistoryArr.push(searchVal)
  searchHistoryArr.forEach((historySearchVal) => {
    const listItem = document.createElement("li")
    const text = document.createTextNode(historySearchVal)

    listItem.textContent = text
    list.appendChild(listItem)
  } )
});
