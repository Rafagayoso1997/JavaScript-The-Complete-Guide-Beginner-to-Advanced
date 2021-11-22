class Product {
  title = ''; //field
  imageUrl; //field
  description; //field
  price; //field

  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
            <div>
              <image src="${this.product.imageUrl}" alt="${this.product.title}">
              <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
              </div>
            </div>
            `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbG93c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'A soft pillow',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'A carpet which you might like - or not',
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      prodList.append(productItem.render());
    }
    renderHook.append(prodList);
  }
}
const productList = new ProductList();
productList.render();
