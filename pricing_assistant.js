// Coding Challenge 02a: Product Pricing Assistant: Discounts, Tax, and Break-Even

// Step 1: Create and Initialize Variables
let productName = "Wireless Mouse";

let costPerUnit = 12.50;
let basePrice = 19.99;
let discountRate = 0.15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 500;

// Step 2: Calculate Pricing & Profit Metrics
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

// Step 3: Print to Console
console.log("Product Pricing Assistant");
console.log("-------------------------");
console.log("Product Name: " + productName);
console.log("Discounted Price Before Tax: $" + discountedPrice.toFixed(2));
console.log("Final Price With Tax: $" + finalPriceWithTax.toFixed(2));
console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-Even Units: " + breakEvenUnits);
console.log("Profitable Per Unit: " + isProfitablePerUnit);