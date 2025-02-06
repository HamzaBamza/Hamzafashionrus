let PLcontainer = document.querySelector(".PLcontainer"); // Selects the element with the class "PLcontainer" and stores it in PLcontainer

fetch(`https://kea-alt-del.dk/t7/api/products`)
  .then((response) => response.json()) // Fetches product data from the API and converts it to JSON
  .then((data) => showList(data)); // Calls the showList function with the fetched data

function showList(data) {
  // This function takes the fetched data (an array of products) and generates HTML for each productproductlist.js product.js

  const markup = data
    .map(
      (
        product // Loops through each product in the data array and creates an HTML structure for it
      ) =>
        `
<div class="card">

                        <div class="img_case">
                            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="placeholder">
                        </div>
                        <h4>${product.productdisplayname}</h4> <!-- Displays the product name -->
                        <h3>${product.category}</h3><!-- Displays the product category -->
                        <p>${product.price}</p> <!-- Displays the product price -->
                        <a href="product.html">Læse mere</a>  <!-- Link to more details -->

                    </div>
`
    )
    .join(""); // Joins all product cards into a single HTML string
  PLcontainer.innerHTML = markup; // Inserts the generated product cards into the PLcontainer element
}
