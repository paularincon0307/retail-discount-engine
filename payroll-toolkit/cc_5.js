
// Coding Challenge 05: Payroll Processing Toolkit: Automating Repetitive Calculations

// Step 1: Create an array of employee objects
const employees = [
  {
    name: "Alice Johnson",
    hourlyRate: 22,
    hoursWorked: 38
  },
  {
    name: "Carlos Martinez",
    hourlyRate: 25,
    hoursWorked: 45
  },
  {
    name: "Mia Thompson",
    hourlyRate: 18,
    hoursWorked: 42
  },
  {
    name: "David Smith",
    hourlyRate: 30,
    hoursWorked: 40
  }
];

// Step 2: Calculate base pay for up to 40 hours
function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return regularHours * rate;
}

// Step 3: Calculate overtime pay for hours over 40
function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}

// Step 4: Calculate taxes by deducting 15% from gross pay
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

// Step 5: Process payroll for one employee
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}

// Testing functions individually
console.log("Base Pay Test:", calculateBasePay(20, 45));
console.log("Overtime Pay Test:", calculateOvertimePay(20, 45));
console.log("Tax Test:", calculateTaxes(1000));

// Step 6: Loop through employees and log payroll report
console.log("Payroll Report:");

employees.forEach(function(employee) {
  const payrollReport = processPayroll(employee);
  console.log(payrollReport);
});