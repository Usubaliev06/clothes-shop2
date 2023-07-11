const productList = document.querySelector(".product-wrapper");

const state = {
  product: []
}


getProduct();

function getProduct() {
  fetch("https://64ac051b9edb4181202efc94.mockapi.io/shop")
    .then(res => res.json())
    .then(data => {
      state.product = data;
      render(state.product);
    })
}

function render(product) {
  productList.innerHTML = "",
  product.forEach(el => {
    productList.insertAdjacentElement("beforeend", `
      <div class="product-item" data-id="${el.id}>
        <h3>${el.name}</h3>
        <div class="product-image>
          <img src="${el.image}" alt="product image">
        </div>
        <p class="product-price>${el.price}></p>
      </div>
    `)
  })
}