function toggleModal() {
      const modal = document.getElementById('modal');
      modal.style.display = (modal.style.display === 'flex' || modal.style.display === 'block') ? 'none' : 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
    }

    function changeQuantity(change) {
      const qtyEl = document.getElementById('qty');
      let qty = parseInt(qtyEl.textContent);
      qty = Math.max(1, qty + change);
      qtyEl.textContent = qty;
    }

    function toggleModal2() {
      const modal = document.getElementById('modal2');
      modal.style.display = (modal.style.display === 'flex' || modal.style.display === 'block') ? 'none' : 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
    }

    function changeQuantity(change) {
      const qtyEl = document.getElementById('qty');
      let qty = parseInt(qtyEl.textContent);
      qty = Math.max(1, qty + change);
      qtyEl.textContent = qty;
    }
  
  // Xử lý chọn chu kỳ
  document.addEventListener('DOMContentLoaded', function () {
    const cycleLabels = document.querySelectorAll('.cycle');

    cycleLabels.forEach(label => {
      label.addEventListener('click', function () {
        cycleLabels.forEach(l => l.classList.remove('selected')); // Bỏ chọn tất cả
        label.classList.add('selected'); // Thêm selected cho cái được click
        label.querySelector('input[type="radio"]').checked = true; // Check radio tương ứng
      });
    });
  });

  //Phần danh sách
  const cart = [];

  function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
  }

  function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
  }

  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, i) => {
      total += item.price;
      cartItems.innerHTML += `
        <div class="cart-item">
          <span>${item.name} - ${item.price.toLocaleString('vi-VN')}đ</span>
          <button onclick="removeItem(${i})">X</button>
        </div>
      `;
    });

    cartTotal.innerText = total.toLocaleString('vi-VN') + "đ";
    cartCount.innerText = cart.length;
  }

  function toggleCart() {
    const cartEl = document.getElementById("cart");
    cartEl.style.display = cartEl.style.display === "block" ? "none" : "block";
  }

  function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.plans-container').forEach(c => c.classList.remove('active'));
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }

  /*Phần mua ngay ở danh sách*/
  