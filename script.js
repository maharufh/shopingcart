function updateQuantity(id, change) {
    const qtyInput = document.getElementById(id);
    let qty = parseInt(qtyInput.value);
    qty = qty + change;
    if (qty < 1) qty = 1;
    qtyInput.value = qty;
  
    updateTotal();
  }
  
  function updateTotal() {
    const qty1 = parseInt(document.getElementById('qty1').value);
    const qty2 = parseInt(document.getElementById('qty2').value);
    const qty3 = parseInt(document.getElementById('qty3').value);
  
    const itemTotal = (qty1 + qty2 + qty3) * 44;
    document.getElementById('item-total').textContent = `€${itemTotal.toFixed(2)}`;
  
    const shipping = parseInt(document.getElementById('shipping').value);
    const total = itemTotal + shipping;
  
    document.getElementById('total-price').textContent = `€${total.toFixed(2)}`;
  }
  
  function applyDiscount() {
    const code = document.getElementById('discount-code').value;
    let discount = 0;
    if (code === "DISCOUNT10") {
      discount = 10;
    }
    updateTotalWithDiscount(discount);
  }
  
  function updateTotalWithDiscount(discount) {
    const itemTotal = parseFloat(document.getElementById('item-total').textContent.replace('€', ''));
    const shipping = parseInt(document.getElementById('shipping').value);
  
    const total = itemTotal + shipping - discount;
  
    document.getElementById('total-price').textContent = `€${total.toFixed(2)}`;
  }
  
  function removeItem(button) {
    button.closest('.cart-item').remove();
    updateTotal();
  }
  