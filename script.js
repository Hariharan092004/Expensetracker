let allExpenses = [];

function addExpense() {
  const titleInput = document.getElementById("title").value.trim();
  const amountInput = parseFloat(document.getElementById("amount").value);
  const dateInput = document.getElementById("date").value;

  if (!titleInput || isNaN(amountInput) || !dateInput) {
    alert("Please fill in all fields.");
    return;
  }

  const newExpense = {
    id: Date.now(), 
    title: titleInput,
    amount: amountInput,
    date: dateInput
  };

  allExpenses.push(newExpense); 
  showExpenses();              
  clearForm();                 
}

function showExpenses() {
  const list = document.getElementById("expensesList");
  list.innerHTML = ""; 

  let total = 0;

  allExpenses.forEach((item) => {
    total += item.amount;

    const box = document.createElement("div");
    box.className = "expense-card";
    box.innerHTML = `
      <span>${item.title} - ₹${item.amount.toFixed(2)} (${item.date})</span>
      <button class="delete-btn" onclick="removeExpense(${item.id})">Delete</button>
    `;
    list.appendChild(box);
  });

  document.getElementById("totalAmount").textContent = total.toFixed(2);
}

function removeExpense(expenseId) {
  allExpenses = allExpenses.filter(item => item.id !== expenseId);
  showExpenses();
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("date").value = "";
}
