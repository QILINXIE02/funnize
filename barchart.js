
// Add this at the end of your existing JS code
function initializeBarCharts() {
  const houseExpenseChartCanvas = document.getElementById('houseExpenseChart');
  const individualExpenseChartCanvas = document.getElementById('individualExpenseChart');

  window.houseExpenseChart = new Chart(houseExpenseChartCanvas, {
    type: 'bar',
    data: {
      labels: ['Rent', 'Garbage', 'Water', 'Electricity', 'Groceries', 'Internet', 'Natural Gas'],
      datasets: [{
        label: 'Person 1',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [1595, 0, 101.98, 75, 400, 0, 116.92],
      },
      {
        label: 'Person 2',
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
        label: 'Person 1',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [138, 0, 75, 0, 0, 500],
      },
      {
        label: 'Person 2',
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
  // Retrieve values from input fields
  const houseExpenseDataPerson1 = [/* Retrieve your data dynamically here */];
  const houseExpenseDataPerson2 = [/* Retrieve your data dynamically here */];
  const individualExpenseDataPerson1 = [/* Retrieve your data dynamically here */];
  const individualExpenseDataPerson2 = [/* Retrieve your data dynamically here */];

  // Update the data of the house expense chart
  window.houseExpenseChart.data.datasets[0].data = houseExpenseDataPerson1;
  window.houseExpenseChart.data.datasets[1].data = houseExpenseDataPerson2;

  // Update the data of the individual expense chart
  window.individualExpenseChart.data.datasets[0].data = individualExpenseDataPerson1;
  window.individualExpenseChart.data.datasets[1].data = individualExpenseDataPerson2;

  // Update the charts
  window.houseExpenseChart.update();
  window.individualExpenseChart.update();
}

// Call the updateBarCharts function when the page loads
document.addEventListener('DOMContentLoaded', updateBarCharts);

// ...
