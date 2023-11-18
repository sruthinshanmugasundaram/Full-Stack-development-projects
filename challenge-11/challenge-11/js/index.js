

    function changeLogo() {
      var logoSelector = document.getElementById("logoSelector");
      var logo = document.getElementById("logo");
      var contact = document.getElementById("contact");
      
      if (logoSelector.value === "logo1") {
        logo.src = "image/india.png";
        logo.alt = "Logo 1";
        contact.innerHTML = "+918888888888";
      } else if (logoSelector.value === "logo2") {
        logo.src = "image/france.avif";
        logo.alt = "Logo 2";
        contact.innerHTML = "+91888888567";
      } else if (logoSelector.value === "logo3") {
        logo.src = "image/england.jpg";
        logo.alt = "Logo 3";
        contact.innerHTML = "+918888888456";

      }
    }
  
  
    window.addEventListener('DOMContentLoaded', function() {
      let scrollButton = document.getElementById('scrollUp');
    
      if (scrollButton) {
        scrollButton.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    });
 
  

  

 

    window.addEventListener('DOMContentLoaded', function() {
      var cardCountElement = document.getElementById('cardCount');
      if (cardCountElement) {
        var cardCount = document.getElementsByClassName('card').length;
        cardCountElement.textContent = cardCount;
      }
    });
    



    fetch('products.json')
  .then(response => response.json())
  .then(data => {
    // Access the JSON data and perform desired operations
    const items = data.items;
    console.log(items); // Example: Log the items array to the console

    // Continue with your code logic here...
  })
  .catch(error => {
    console.error('Error:', error);
  });



    /*shopping cart*/
    function addToCart(product, price) {
      // Get cart items from localStorage
      let cartItems = localStorage.getItem('cartItems');
  
      // If cartItems is null or undefined, set it as an empty array
      if (!cartItems) {
          cartItems = [];
      } else {
          // Otherwise, parse the stored JSON string into an array
          cartItems = JSON.parse(cartItems);
      }
  
      // Check if the product already exists in the cart
      const existingProduct = cartItems.find(item => item.image === product);
  
      if (existingProduct) {
          // If the product exists, increment the quantity
          existingProduct.quantity++;
      } else {
          // Otherwise, add the product to the cart with an initial quantity of 1 and the provided price
          cartItems.push({ image: product, quantity: 1, price: parseFloat(price) });
      }
  
      // Save the updated cart items back to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  


/*wishlist*/
// Retrieve wishlist items from local storage
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

// Display wishlist items
const wishlistItemsElement = document.getElementById('wishlistItems');

// Remove any existing items from the wishlistItemsElement
wishlistItemsElement.innerHTML = '';

wishlistItems.forEach((item, index) => {
    const wishlistItemElement = createWishlistItemElement(item, index);
    wishlistItemsElement.appendChild(wishlistItemElement);
});

// Add item to wishlist
function addToWishlist(image, name, price) {
    const newItem = {
        image: image,
        name: name,
        price: price
    };

    // Check if the item already exists in the wishlist
    const existingItemIndex = wishlistItems.findIndex(
        item => item.image === newItem.image && item.name === newItem.name && item.price === newItem.price
    );
    if (existingItemIndex !== -1) {
        // Item already exists, do not add it again
        return;
    }

    wishlistItems.push(newItem);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

    const wishlistItemElement = createWishlistItemElement(newItem, wishlistItems.length - 1);
    wishlistItemsElement.appendChild(wishlistItemElement);
}

// Remove item from wishlist
function removeFromWishlist(index) {
    wishlistItems.splice(index, 1);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

    // Remove the item from the wishlistItemsElement
    wishlistItemsElement.removeChild(wishlistItemsElement.childNodes[index]);
}

// Move item from wishlist to cart
function moveToCart(index) {
    const selectedItem = wishlistItems[index];

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingProduct = cartItems.find(item => item.image === selectedItem.image);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cartItems.push({ image: selectedItem.image, name: selectedItem.name, price: selectedItem.price, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    wishlistItems.splice(index, 1);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

    // Remove the item from the wishlistItemsElement
    wishlistItemsElement.removeChild(wishlistItemsElement.childNodes[index]);
}



// Create HTML element for wishlist item
function createWishlistItemElement(item, index) {
    const wishlistItemElement = document.createElement('div');
    wishlistItemElement.innerHTML = `
        <div>
        <div class="flex items-center justify-center min-h-screen">
        <div class="max-w-md md:max-w-2xl px-2">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
                <div class="bg-cover bg-bottom h-56 md:h-auto md:w-56"> 
                  <img src="${item.image}" alt="Product Image">
                </div>
                <div style="flex-direction: row">
                    <div class="p-4 md:p-5 bg-gray-100">
                        <div class="sm:flex sm:justify-between sm:items-center">
                            <div>
                                
                                  <p class="font-bold text-xl md:text-2xl"> <div> Indus Valley Disposable Face Mask Pack of 50 p</div> </p>
                                                               
                                <div > Rs: 1099.0 <del>      Rs2748.0</del> (60% off)</div>
                                <div class="flex items-center" style="color: orange;">
                                    <div class="flex inline-flex -mx-px">
                                        <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style="width: 15px; height: 15px">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style="width: 15px; height: 15px">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style="width: 15px; height: 15px">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style="width: 15px; height: 15px">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                        <svg class="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style="width: 15px; height: 15px">
                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" /></svg>
                                    </div>
                                    <div class="text-gray-600 ml-2 text-sm md:text-base mt-1">28 reviews</div>
                                </div>
                            </div>
                            <button class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-black md:text-lg rounded-lg shadow-md btn btn-outline-warning w-40" onclick="removeFromWishlist(${index})">Remove from Wishlist</button>
                            <button class="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-black md:text-lg rounded-lg shadow-md btn btn-outline-warning w-40" onclick="moveToCart(${index})">Move to Cart</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        <hr>
    `;
    return wishlistItemElement;
}

// Add event listener to "Add to Wishlist" button
const addToWishlistButton = document.getElementById('addToWishlistButton');
addToWishlistButton.addEventListener('click', () => {
    const image = document.getElementById('productImage').src;
    const name = document.getElementById('productName').innerText;
    const price = document.getElementById('productPrice').innerText;

    addToWishlist(image, name, price);
});






// Update cart and wishlist count inside the header iframe
function updateCartCountInIframe() {
    const headerFrame = document.getElementById('headerFrame');
    if (headerFrame && headerFrame.contentWindow) {
      headerFrame.contentWindow.updateCartCount();
      headerFrame.contentWindow.updateWishlistCount();
    }
  }
  
  // Update cart and wishlist count every 0.5 seconds
  setInterval(updateCartCountInIframe, 500);
  










    
