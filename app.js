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

