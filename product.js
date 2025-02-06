let productContainer = document.querySelector(".product-grid"); // Selects the element to display the product details

const productId = window.location.search.split("=")[1]; // Retrieves the product ID from the URL

fetch(`https://kea-alt-del.dk/t7/api/products/${1163}`)
  .then((response) => response.json()) // Fetches the product data based on the ID
  .then((data) => showProduct(data)); // Calls the showProduct function with the fetched product data

function showProduct(data) {
  // This function displays the details of a single product

  const markup = `
    <div class="product-image">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}">
    </div>
    <div class="product-info">
        <h2>Product Information</h2>
        <h4>Model name:</h4>
        <p>${data.productdisplayname}</p>
        <h4>Color:</h4>
        <p>${data.color || "Not specified"}</p>
        <h4>Inventory number:</h4>
        <p>${data.id}</p>
        <h2>${data.brand}</h2>
        <p>${data.brand || "Brand not specified"}</p>
    </div>
    <div class="product-summary">
        <h2>${data.productdisplayname}</h2>
        <p>${data.category}</p>

        <label for="size">Choose a size:</label>
        <select id="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
        </select>
        <button>Add to basket</button>
    </div>
  `;

  productContainer.innerHTML = markup; // Inserts the product details into the product-container element
}
