let quantity = 1;
const packagePrice = 89000;
const simFee = 10000;
const activationFee = 25000;

function changeQty(change) {
  quantity += change;
  if (quantity < 1) quantity = 1;

  document.getElementById("qty").innerText = quantity;
  document.getElementById("qtySum").innerText = quantity;

  updatePrice();
}

function updatePrice() {
  const totalPackage = quantity * packagePrice;
  const total = totalPackage + simFee + activationFee;

  document.getElementById("priceGoi").innerText = totalPackage.toLocaleString();
  document.getElementById("simFee").innerText = simFee.toLocaleString();
  document.getElementById("total").innerText = total.toLocaleString();
}

document.querySelectorAll('input[name="sim"]').forEach(el => {
  el.addEventListener("change", updatePrice);
});

updatePrice();

const btnBack = document.getElementById('btnBack');
const modal = document.getElementById('modalThoat');

btnBack.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

function closeModal() {
  modal.style.display = 'none';
}

function confirmExit() {
  history.back();
}





