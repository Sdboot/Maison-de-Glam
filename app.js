// Hamburger
document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.getElementById('hamburger');
	const navLinks = document.getElementById('navLinks');
	hamburger.addEventListener('click', function() {
		navLinks.classList.toggle('active');
	});
	// Close menu
	navLinks.querySelectorAll('a').forEach(function(link) {
		link.addEventListener('click', function() {
			navLinks.classList.remove('active');
		});
	});
});


 document.addEventListener('DOMContentLoaded', function() {
    const cardDetails = document.getElementById('card-details');
    const transferDetails = document.getElementById('transfer-details');
    if (cardDetails) cardDetails.style.display = 'none';
    if (transferDetails) transferDetails.style.display = 'none';

    const paymentRadios = document.querySelectorAll('input[name="payment"]');
       paymentRadios.forEach(function(radio) {
       radio.addEventListener('change', function() {
       if (radio.value === 'card' && radio.checked) {
         cardDetails.style.display = 'block';
       transferDetails.style.display = 'none';
       } else if (radio.value === 'transfer' && radio.checked) {
   cardDetails.style.display = 'none';
     transferDetails.style.display = 'block';
     } else if (radio.value === 'cash' && radio.checked) {
  cardDetails.style.display = 'none';
   transferDetails.style.display = 'none';
                                                }
                                            });
                                        });

 const transferBtn = document.getElementById('transfer-confirm-btn');
   if (transferBtn) {
 transferBtn.addEventListener('click', function() {
 transferBtn.textContent = 'Confirming...Pls Wait';
 transferBtn.disabled = true;
transferBtn.style.background = '#aaa';
                                            });
                                        }
                                    });


    // Like button
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.like-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const icon = btn.querySelector('i');
          icon.classList.toggle('bx-heart');
          icon.classList.toggle('bxs-heart');
          btn.classList.toggle('liked');
        });
      });
    });


    // gallery intro
window.addEventListener('DOMContentLoaded', function() {
  const intro = document.querySelector('.gallery-intro h2');
  if (!intro) return;
  const text = intro.textContent;
  intro.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      intro.textContent += text.charAt(i);
      i++;
      setTimeout(type, 55);
    }
  }
  type();
});

// product
window.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.product-title');
  if (!title) return;
  const text = title.textContent;
  title.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(type, 55);
    }
  }
  type();
});

// Only show cart on product page
if (window.location.pathname.endsWith('product.html')) {
  // Cart logic
  const cart = [];
  function updateCartDisplay() {
    let cartBox = document.getElementById('cart-box');
    if (!cartBox) {
      cartBox = document.createElement('div');
      cartBox.id = 'cart-box';
      cartBox.style.position = 'fixed';
      cartBox.style.top = '80px';
      cartBox.style.right = '30px';
      cartBox.style.background = '#fff8fa';
      cartBox.style.border = '1.5px solid #e75480';
      cartBox.style.borderRadius = '12px';
      cartBox.style.boxShadow = '0 4px 16px rgba(231,84,128,0.10)';
      cartBox.style.padding = '1.2em 1.5em 1em 1.5em';
      cartBox.style.zIndex = '1000';
      cartBox.style.minWidth = '220px';
      document.body.appendChild(cartBox);
    }
    if (cart.length === 0) {
      cartBox.innerHTML = '<b>Empty Cart</b>';
      return;
    }
    cartBox.innerHTML = '<b>Cart</b><ul style="margin:0.5em 0 0.5em 0;padding:0;list-style:none;">' +
      cart.map(item => `<li>${item.name} x ${item.qty} <span style='color:#e75480;font-weight:600'>(₦${item.price*item.qty})</span> <button style='margin-left:8px;font-size:0.9em' onclick="decreaseQty('${item.name}')">-</button> <button style='margin-left:2px;font-size:0.9em' onclick="increaseQty('${item.name}')">+</button> <button style='margin-left:8px;font-size:0.9em' onclick="removeFromCart('${item.name}')">&times;</button></li>`).join('') +
      '</ul>';
  }
  function addToCart(name, price) {
    const found = cart.find(item => item.name === name);
    if (found) {
      found.qty += 1;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    updateCartDisplay();
  }
  function removeFromCart(name) {
    const idx = cart.findIndex(item => item.name === name);
    if (idx !== -1) {
      cart.splice(idx, 1);
      updateCartDisplay();
    }
  }
  function increaseQty(name) {
    const found = cart.find(item => item.name === name);
    if (found) {
      found.qty += 1;
      updateCartDisplay();
    }
  }
  function decreaseQty(name) {
    const found = cart.find(item => item.name === name);
    if (found && found.qty > 1) {
      found.qty -= 1;
      updateCartDisplay();
    }
  }
  window.removeFromCart = removeFromCart;
  window.increaseQty = increaseQty;
  window.decreaseQty = decreaseQty;
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const card = btn.closest('.product-card');
        const name = card.querySelector('h3').textContent;
        const priceText = card.querySelector('.price').textContent.replace(/[^\d]/g, '');
        const price = parseInt(priceText, 10);
        addToCart(name, price);
      });
    });
    updateCartDisplay();
  });



  // Gallery Lightbo
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', function() {
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = this.src;
    lightbox.classList.add('active');
  });
});
const lightboxClose = document.getElementById('lightboxClose');
if (lightboxClose) {
  lightboxClose.onclick = function() {
    document.getElementById('galleryLightbox').classList.remove('active');
  };
}
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  }
});

  // Payment logic for product page cart
  function showPayment(total) {
    let payBox = document.getElementById('pay-box');
    if (!payBox) {
      payBox = document.createElement('div');
      payBox.id = 'pay-box';
      payBox.style.position = 'fixed';
      payBox.style.bottom = '30px';
      payBox.style.right = '30px';
      payBox.style.background = '#fff8fa';
      payBox.style.border = '1.5px solid #e75480';
      payBox.style.borderRadius = '12px';
      payBox.style.boxShadow = '0 4px 16px rgba(231,84,128,0.10)';
      payBox.style.padding = '1.2em 1.5em 1em 1.5em';
      payBox.style.zIndex = '1000';
      payBox.style.minWidth = '220px';
      document.body.appendChild(payBox);
    }
    payBox.innerHTML = `<b>Total: ₦${total.toLocaleString()}</b><br><button id='pay-btn' style='margin-top:1em;background:#e75480;color:#fff;border:none;padding:0.7em 1.5em;border-radius:8px;cursor:pointer;'>Pay Now</button>`;
    document.getElementById('pay-btn').onclick = function() {
      // Prepare product list for service details
      var productList = cart.map(item => `${item.name} x${item.qty}`).join(', ');
      // Store in localStorage
      localStorage.setItem('cartProducts', productList);
      // Redirect to contact page
      window.location.href = 'contact.html#booking-payment-group';
    };
  }

  // Hook into cart update
  const origUpdateCartDisplay = updateCartDisplay;
  updateCartDisplay = function() {
    origUpdateCartDisplay();
    // Calculate total
    let total = 0;
    if (cart.length) {
      cart.forEach(item => {
        total += item.price * item.qty;
      });
    }
    if (total > 0) {
      showPayment(total);
    } else {
      let payBox = document.getElementById('pay-box');
      if (payBox) payBox.remove();
    }
  };
}


window.addEventListener('DOMContentLoaded', function() {


  var detailsField = document.getElementById('details');
  var cartProducts = localStorage.getItem('cartProducts');
  if (detailsField && cartProducts) {
    detailsField.value = cartProducts;
    localStorage.removeItem('cartProducts');
  }
});

// Booking Success
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const successMsg = document.getElementById('bookingSuccess');
    if (successMsg) {
      successMsg.classList.add('active');
      setTimeout(() => {
        successMsg.classList.remove('active');
        bookingForm.reset();
      }, 3500);
    }
  });
}