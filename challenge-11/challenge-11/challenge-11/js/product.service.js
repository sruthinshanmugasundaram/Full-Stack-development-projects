let productsListUrl = '/products.json';

async function loadProducts(productsListUrl) {

    fetch(productsListUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.Products;


            let cards = '';
            products.forEach(product => {
                let isNewDiv = '';
                if (product.isNew === 'TRUE') {
                    isNewDiv = `<div class="new-product">
                                    <span>New</span>
                                </div>`;
                }

                let stars = '';
                const ratings = Math.floor(+product.ratings);
                for (let i = 1; i <= 5; i++) {
                    if (i <= ratings) {
                        stars = stars + '<i class="fa fa-star checked"></i>';
                    } else {
                        stars = stars + '<i class="fa fa-star-o"></i>';
                    }
                }

                cards = cards +
                    `<div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-product" id="${product.id}">
                            <div class="product-img">
                                <img src="images/${product.imageName}.png" alt="">
                                <div class="product-hover">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="product-icon product-cart-icon"></div>
                                            </div>
                                            <div class="col-4">
                                                <div class="product-icon product-view-icon"></div>  
                                            </div>
                                            <div class="col-4">
                                                <div class="product-icon product-wishlist-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ${isNewDiv}
                            </div>
                            <div class="product-caption">
                                <div class="product-rating">
                                    ${stars}
                                </div>
                                <h4><a href="#">${product.name}</a></h4>
                                <div class="price">
                                    <ul>
                                        <li>$${product.priceAfterDiscount}</li>
                                        <li class="discount">$${product.price}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
            });

            document.querySelector('#productsListArea').innerHTML = cards;
        });
}

loadProducts(productsListUrl);