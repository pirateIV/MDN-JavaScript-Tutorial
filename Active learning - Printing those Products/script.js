let total = 0;
// 1
const products = [
  "Socks: 5.99",
  "T-shirt: 14.99",
  "Trousers: 31.99",
  "Underpants: 31.99",
  "Shoes: 23.99",
];

products.map((product, index)=> {
  const subArr = product.split(":")

  // const price = subArr[1].replace(subArr[0], Number((subArr)))
  const price = Number(subArr[1])

  console.log(price)
  console.log(subArr)

  const listContent = `${subArr[0]} - ${price}`

  total += price
  totalPrice.innerHTML = `Total Price: ${total.toFixed(2)}`

  const listItem = document.createElement("li")
  listItem.textContent = listContent
  list.appendChild(listItem)
})