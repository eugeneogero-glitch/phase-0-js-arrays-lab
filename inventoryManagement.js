// Declare the products array
let products =["laptop", "phones", "headphones", "monitor"];

// 1. Logs the first product to the console
function logFirstProduct() {
  console.log(products[0]);
  
}

// 2. Updates the product name at the given index
function updateProductName(index, newName) {
  products[index] = newName;
}

// 3. Removes the last product from the array
function removeLastProduct() {
  products.pop();
}

// 4. Adds a new product to the end of the array
function addProduct(newProduct) {
  products.push(newProduct);
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
