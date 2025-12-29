const url = "https://fakestoreapi.com/products";
const cards = document.querySelector(".cards");
const home_products = document.querySelector(".products");
const all_products = document.querySelector("#products");
axios.get(url).then((res) => {
  const data = res.data;
  if (home_products) {
    showProductHome(data.slice(0, 4));
  }

  if (all_products) {
    showProduct(data);
  }
});

function showProductHome(data){
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
    </div>`
    })
}

function showProduct(data){
    data.forEach((item) =>{
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
    </div>` 
    })
}