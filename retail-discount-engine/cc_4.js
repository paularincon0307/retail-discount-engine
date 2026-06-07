// Coding Challenge #04: Retail Discount Engine: Dynamic Pricing Rules and Inventory Cycling

// Step 1: Create an array of objects representing 5 products
const products = [
  {
    name: "Laptop",
    category: "electronics",
    price: 950,
    inventory: 10
  },
  {
    name: "T-Shirt",
    category: "apparel",
    price: 25,
    inventory: 30
  },
  {
    name: "Apples",
    category: "groceries",
    price: 5,
    inventory: 50
  },
  {
    name: "Laundry Detergent",
    category: "household",
    price: 18,
    inventory: 20
  },
  {
    name: "Notebook",
    category: "school supplies",
    price: 7,
    inventory: 40
  }
];

console.log("Original Product List:");
console.log(products);

// Step 2: Use a for...of loop and switch statement to apply category discounts
for (const product of products) {
  let discountRate;

  switch (product.category) {
    case "electronics":
      discountRate = 0.20;
      break;

    case "apparel":
      discountRate = 0.15;
      break;

    case "groceries":
    case "household":
      discountRate = 0.10;
      break;

    default:
      discountRate = 0;
      break;
  }

  product.discountRate = discountRate;
  product.discountedPrice = product.price - product.price * discountRate;
}

console.log("Products After Category Discounts:");
console.log(products);

// Step 3: Create customer type and apply an extra discount
let customerType = "student";
let extraDiscountRate;

if (customerType === "student") {
  extraDiscountRate = 0.05;
} else if (customerType === "senior") {
  extraDiscountRate = 0.07;
} else {
  extraDiscountRate = 0;
}

console.log(`Customer Type: ${customerType}`);
console.log(`Extra Discount Rate: ${extraDiscountRate * 100}%`);

// Step 4: Use a loop to simulate checkout for 3 customers
const customerCarts = [
  [
    { productName: "Laptop", quantity: 1 },
    { productName: "Notebook", quantity: 2 }
  ],
  [
    { productName: "T-Shirt", quantity: 3 },
    { productName: "Apples", quantity: 5 }
  ],
  [
    { productName: "Laundry Detergent", quantity: 2 },
    { productName: "Apples", quantity: 4 }
  ]
];

for (let i = 0; i < customerCarts.length; i++) {
  let cartTotal = 0;
  const cart = customerCarts[i];

  console.log(`Checkout for Customer ${i + 1}:`);

  for (const cartItem of cart) {
    const product = products.find(item => item.name === cartItem.productName);

    if (product && product.inventory >= cartItem.quantity) {
      const itemTotal = product.discountedPrice * cartItem.quantity;
      cartTotal += itemTotal;

      // Reduce inventory after purchase
      product.inventory -= cartItem.quantity;

      console.log(
        `${cartItem.quantity} ${product.name}(s) added. Item total: $${itemTotal.toFixed(2)}`
      );
    } else {
      console.log(`${cartItem.productName} is not available in the requested quantity.`);
    }
  }

  const finalTotal = cartTotal - cartTotal * extraDiscountRate;

  console.log(`Customer ${i + 1} Total Cost: $${finalTotal.toFixed(2)}`);
  console.log("----------------------------");
}

// Step 5: Use for...in to log each key/value pair for a single product
console.log("Key/Value Pairs for One Product:");

const singleProduct = products[0];

for (const key in singleProduct) {
  console.log(`${key}: ${singleProduct[key]}`);
}

// Step 6: Use Object.entries() and destructuring to log all product info
console.log("Final Product Information After Inventory Updates:");

for (const product of products) {
  console.log("Product Details:");

  for (const [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
  }

  console.log("----------------------------");
}