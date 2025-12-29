const url = "https://fakestoreapi.com/products";
const cards = document.querySelector(".cards");
const home_products = document.querySelector(".products");
const all_products = document.querySelector("#products");
const all_cards = document.querySelector("#all_cards");
console.log(all_cards);

axios.get(url).then((res) => {
  const data = res.data;
  if (cards) {
    showProductHome(data.slice(0, 4));
  }

  if (all_cards) {
    showProduct(data);
  }
});

window.onload = function () {
  document.getElementById("loader").style.display = "none";

  document.querySelector(".products").style.display = "block";
};

function showProductHome(data) {
  data.forEach((item) => {
    cards.innerHTML += `<div class="card">
          <img width="180px" height="220px"
            src="${item.image}"
            alt="${item.category}"
          />
          <div class="card_text">
          <h4 style="color: white; padding-top: 10px">${item.title}</h4>
          <p class="category">${item.category}</p>
          <p class="price">$${item.price}</p>
          </div>
    </div>`;
  });
}

function showProduct(data) {
  data.forEach((item) => {
    all_cards.innerHTML += `<div class="card">
          <img width="180px" height="220px"
            src="${item.image}"
            alt="${item.category}"
          />
          <div class="card_text">
          <h4 style="color: white; padding-top: 10px">${item.title}</h4>
          <p class="category">${item.category}</p>
          <p class="price">$${item.price}</p>
          </div>
    </div>`;
  });
}
