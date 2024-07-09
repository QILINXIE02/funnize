document.addEventListener('DOMContentLoaded', () => {
  initializePieChart();
  initializeBarCharts();
  updateBarCharts();
});

const DEFAULT_INCOME = 3000;
const INITIAL_EXPENSES = {
  rent: 1295,
  electricity: 40,
  gas: 20,
  studentLoans: 195,
  groceries: 150,
  internet: 20
};

function calculate() {
  // Retrieve income value
  const totalIncome = DEFAULT_INCOME;

  // Calculate total expenses
  let totalExpenses = 0;
  const expenseInputs = document.querySelectorAll('.expenseInput');

  expenseInputs.forEach((input) => {
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

function addExpense() {
  const table = document.getElementById('expensesTable');
  const newRow = table.insertRow(table.rows.length - 1); // Insert above the last row (before the total row)

  // Add cells for expense name and amount
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Create input elements
  const expenseInput = document.createElement('input');
  expenseInput.type = 'text';
  expenseInput.placeholder = 'Expense Name';
  cell1.appendChild(expenseInput);

  const amountInput = document.createElement('input');
  amountInput.type = 'number';
  amountInput.classList.add('expenseInput');
  amountInput.value = '0';
  cell2.appendChild(amountInput);
}

function deleteExpenseRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function initializePieChart() {
  const expenseChartCanvas = document.getElementById('expenseChart');
  const expenseChartContext = expenseChartCanvas.getContext('2d');

  if (window.myPieChart) {
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

function updatePieChart(totalExpenses, leftoverMoney) {
  const expenseChartCanvas = document.getElementById('expenseChart');
  const expenseChartContext = expenseChartCanvas.getContext('2d');

  if (window.myPieChart) {
    window.myPieChart.destroy();
  }

  expenseChartContext.clearRect(0, 0, expenseChartCanvas.width, expenseChartCanvas.height);

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

function clearResults() {
  document.getElementById('totalExpenses').textContent = '$0.00';
  document.getElementById('leftoverMoney').textContent = '$0.00';
}

function initializeBarCharts() {
  const houseExpenseChartCanvas = document.getElementById('houseExpenseChart');
  const individualExpenseChartCanvas = document.getElementById('individualExpenseChart');

  const initialExpensesData = Object.values(INITIAL_EXPENSES);

  window.houseExpenseChart = new Chart(houseExpenseChartCanvas, {
    type: 'bar',
    data: {
      labels: ['Rent', 'Gas', 'Student Loans', 'Groceries', 'Internet'],
      datasets: [{
        label: 'Expenses',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: initialExpensesData,
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
      labels: ['Expenses'],
      datasets: [{
        label: 'Expenses',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: initialExpensesData,
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

function updateBarCharts() {
  const initialExpensesData = Object.values(INITIAL_EXPENSES);

  window.houseExpenseChart.data.datasets[0].data = initialExpensesData;
  window.houseExpenseChart.update();

  window.individualExpenseChart.data.datasets[0].data = initialExpensesData;
  window.individualExpenseChart.update();
}

function sortRows() {
  const table = document.getElementById('expensesTable');
  const rows = Array.from(document.querySelectorAll('.expense-row'));

  rows.sort((a, b) => {
    const aValue = parseFloat(a.querySelector('input').value);
    const bValue = parseFloat(b.querySelector('input').value);

    return bValue - aValue;
  });

  rows.forEach(row => table.appendChild(row));
}

document.getElementById('calculateButton').addEventListener('click', calculate);
document.getElementById('addExpenseButton').addEventListener('click', addExpense);
document.addEventListener('input', (event) => {
  if (event.target.classList.contains('expenseInput')) {
    sortRows();
  }
});