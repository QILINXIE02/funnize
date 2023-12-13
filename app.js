function calculate() {
  // Retrieve values from input fields
  const person1Income = parseFloat(document.getElementById('person1Income').value) || 0;
  const person2Income = parseFloat(document.getElementById('person2Income').value) || 0;

  // Calculate total income
  const totalIncome = person1Income + person2Income;

  // Calculate total expenses
  let totalExpenses = 0;
  const expenseInputs = document.querySelectorAll('.expenseInput');

  expenseInputs.forEach((input, index) => {
      const inputValue = parseFloat(input.value) || 0;
      totalExpenses += inputValue;
  });

   // Validate expenses against income
   if (totalExpenses > totalIncome) {
    // Expenses exceed income, show alert and clear results
    alert("Expenses cannot exceed total income!");
    clearResults();
    return;
  }

  // Calculate leftover money
  const leftoverMoney = totalIncome - totalExpenses;

  // Update the UI with the calculated values
  document.getElementById('totalExpenses').textContent = `$${totalExpenses.toFixed(2)}`;
  document.getElementById('leftoverMoney').textContent = `$${leftoverMoney.toFixed(2)}`;
}

function addExpense() {
  const table = document.getElementById('expensesTable');
  const newRow = table.insertRow(table.rows.length - 1); // Insert above the last row (before the total row)

  // Add cells for expense name, Person 1 amount, and Person 2 amount
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  // Create input elements
  const expenseInput = document.createElement('input');
  expenseInput.type = 'text';
  expenseInput.placeholder = 'Expense Name';
  cell1.appendChild(expenseInput);

  const person1Input = document.createElement('input');
  person1Input.type = 'number';
  person1Input.classList.add('expenseInput');
  person1Input.value = '0';
  cell2.appendChild(person1Input);

  const person2Input = document.createElement('input');
  person2Input.type = 'number';
  person2Input.classList.add('expenseInput');
  person2Input.value = '0';
  cell3.appendChild(person2Input);
}

// Function to delete an expense row
function deleteExpenseRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


// Add this at the end of your existing JS code
function initializePieChart() {
  const expenseChartCanvas = document.getElementById('expenseChart');
  const expenseChartContext = expenseChartCanvas.getContext('2d');

  // Check if the chart already exists
  if (window.myPieChart) {
    // Chart exists, destroy it
    window.myPieChart.destroy();
  }

  window.myPieChart = new Chart(expenseChartContext, {
    type: 'pie',
    data: {
      labels: ['Total Expenses', 'Leftover Money'],
      datasets: [{
        data: [0, 0], // Initial values
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      }],
    },
  });
}

// Call the initializePieChart function when the page loads
document.addEventListener('DOMContentLoaded', initializePieChart);


// Call the initializePieChart function when the page loads
document.addEventListener('DOMContentLoaded', initializePieChart);


// Function to update the pie chart
function updatePieChart(totalExpenses, leftoverMoney) {
  const expenseChartCanvas = document.getElementById('expenseChart');
  const expenseChartContext = expenseChartCanvas.getContext('2d');

  // Clear previous chart
  if (window.myPieChart) {
    window.myPieChart.destroy();
  }

  // Clear the canvas
  expenseChartContext.clearRect(0, 0, expenseChartCanvas.width, expenseChartCanvas.height);

  // Create a new pie chart
  window.myPieChart = new Chart(expenseChartContext, {
    type: 'pie',
    data: {
      labels: ['Total Expenses', 'Leftover Money'],
      datasets: [{
        data: [totalExpenses, leftoverMoney],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      }],
    },
  });
}


function calculate() {
  // Retrieve values from input fields
  const person1Income = parseFloat(document.getElementById('person1Income').value) || 0;
  const person2Income = parseFloat(document.getElementById('person2Income').value) || 0;

  // Calculate total income
  const totalIncome = person1Income + person2Income;

  // Calculate total expenses
  let totalExpenses = 0;
  const expenseInputs = document.querySelectorAll('.expenseInput');

  expenseInputs.forEach((input, index) => {
    const inputValue = parseFloat(input.value) || 0;
    totalExpenses += inputValue;
  });

  // Validate expenses against income
  if (totalExpenses > totalIncome) {
    alert("Expenses cannot exceed total income!");
    clearResults();
    return;
  }

  const leftoverMoney = totalIncome - totalExpenses;

  document.getElementById('totalExpenses').textContent = `$${totalExpenses.toFixed(2)}`;
  document.getElementById('leftoverMoney').textContent = `$${leftoverMoney.toFixed(2)}`;

  updatePieChart(totalExpenses, leftoverMoney);
}

function clearResults() {
  document.getElementById('totalExpenses').textContent = '$0.00';
  document.getElementById('leftoverMoney').textContent = '$0.00';
}

updatePieChart(0, 0);

document.getElementById('calculateButton').addEventListener('click', calculate);



//
function initializeBarCharts() {
  const houseExpenseChartCanvas = document.getElementById('houseExpenseChart');
  const individualExpenseChartCanvas = document.getElementById('individualExpenseChart');

  window.houseExpenseChart = new Chart(houseExpenseChartCanvas, {
    type: 'bar',
    data: {
      labels: ['Rent', 'Garbage', 'Water', 'Electricity', 'Groceries', 'Internet', 'Natural Gas'],
      datasets: [{
        label: 'Qilin',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [1595, 0, 101.98, 75, 400, 0, 116.92],
      },
      {
        label: 'Alejandro',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [0, 35, 0, 0, 0, 20, 0],
      }]
    },
    options: {
      scales: {
        x: { stacked: true },
        y: { stacked: true }
      }
    }
  });

  window.individualExpenseChart = new Chart(individualExpenseChartCanvas, {
    type: 'bar',
    data: {
      labels: ['Student Loans #1', 'Student Loans #2', 'Gas', 'Other Short Term', 'Other Long Term', 'Miscellaneous'],
      datasets: [{
        label: 'Qilin',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [138, 0, 75, 0, 0, 500],
      },
      {
        label: 'Alejandro',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [550, 150, 250, 300, 300, 100],
      }]
    },
    options: {
      scales: {
        x: { stacked: true },
        y: { stacked: true }
      }
    }
  });
}

// Call the initializeBarCharts function when the page loads
document.addEventListener('DOMContentLoaded', initializeBarCharts);

// Function to update the bar charts
function updateBarCharts() {
  // Update the data of the house expense chart
  window.houseExpenseChart.data.datasets[0].data = [1595, 0, 101.98, 75, 400, 0, 116.92];
  window.houseExpenseChart.data.datasets[1].data = [0, 35, 0, 0, 0, 20, 0];

  // Update the data of the individual expense chart
  window.individualExpenseChart.data.datasets[0].data = [138, 0, 75, 0, 0, 500];
  window.individualExpenseChart.data.datasets[1].data = [550, 150, 250, 300, 300, 100];

  // Update the charts
  window.houseExpenseChart.update();
  window.individualExpenseChart.update();
}


// Call the updateBarCharts function when the page loads
document.addEventListener('DOMContentLoaded', updateBarCharts);
