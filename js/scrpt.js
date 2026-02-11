// 1. DATA CONFIGURATION
const products = [
    { 
        id: "oil_elemis", 
        name: "Pro-Collagen Cleansing Balm", 
        category: "Oil Cleansers", 
        description: "Melts away makeup and impurities.", 
        price: 60.00, 
        image: "https://m.media-amazon.com/images/I/81yOS+C9ixL._UF350,350_QL80_.jpg" 
    },
    { 
        id: "oil_elemis", 
        name: "Pro-Collagen Cleansing Balm", 
        category: "Oil Cleansers", 
        description: "Melts away makeup and impurities.", 
        price: 60.00, 
        image: "https://m.media-amazon.com/images/I/81yOS+C9ixL._UF350,350_QL80_.jpg" 
    },
    { 
        id: "oil_elemis", 
        name: "Pro-Collagen Cleansing Balm", 
        category: "Oil Cleansers", 
        description: "Melts away makeup and impurities.", 
        price: 60.00, 
        image: "https://m.media-amazon.com/images/I/81yOS+C9ixL._UF350,350_QL80_.jpg" 
    },
    { 
        id: "oil_elemis", 
        name: "Pro-Collagen Cleansing Balm", 
        category: "Oil Cleansers", 
        description: "Melts away makeup and impurities.", 
        price: 60.00, 
        image: "https://m.media-amazon.com/images/I/81yOS+C9ixL._UF350,350_QL80_.jpg" 
    },
    { 
        id: "oil_elemis", 
        name: "Pro-Collagen Cleansing Balm", 
        category: "Oil Cleansers", 
        description: "Melts away makeup and impurities.", 
        price: 60.00, 
        image: "https://m.media-amazon.com/images/I/81yOS+C9ixL._UF350,350_QL80_.jpg" 
    },
    { 
        id: "cleanse_vit_c", 
        name: "Vitamin C Cleanser", 
        category: "Cleansers", 
        description: "Brighten and refresh your skin.", 
        price: 28.00, 
        image: "https://id-test-11.slatic.net/p/ff70fe3768512bbbb2a07a81f72b4421.jpg" 
    },
    { 
        id: "cleanse_lrp", 
        name: "Toleriane Purifying Foaming", 
        category: "Cleansers", 
        description: "Gently cleanses without stripping.", 
        price: 16.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/2/5/2503388_alt05.jpg" 
    },
    { 
        id: "cleanse_lrp", 
        name: "Toleriane Purifying Foaming", 
        category: "Cleansers", 
        description: "Gently cleanses without stripping.", 
        price: 16.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/2/5/2503388_alt05.jpg" 
    },
    { 
        id: "cleanse_lrp", 
        name: "Toleriane Purifying Foaming", 
        category: "Cleansers", 
        description: "Gently cleanses without stripping.", 
        price: 16.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/2/5/2503388_alt05.jpg" 
    },
    { 
        id: "toner_byoma", 
        name: "Hydrating Milky Toner", 
        category: "Toner", 
        description: "Supports the skin barrier.", 
        price: 15.00, 
        image: "https://www.grove.co/cdn/shop/files/opqzkeubmoawsb4dtuqh_f6fb2519-0928-46b5-bdcb-c280fdbbf6fb.png?v=1736502177&width=668" 
    },
    { 
        id: "toner_byoma", 
        name: "Hydrating Milky Toner", 
        category: "Toner", 
        description: "Supports the skin barrier.", 
        price: 15.00, 
        image: "https://www.grove.co/cdn/shop/files/opqzkeubmoawsb4dtuqh_f6fb2519-0928-46b5-bdcb-c280fdbbf6fb.png?v=1736502177&width=668" 
    },
    { 
        id: "toner_byoma", 
        name: "Hydrating Milky Toner", 
        category: "Toner", 
        description: "Supports the skin barrier.", 
        price: 15.00, 
        image: "https://www.grove.co/cdn/shop/files/opqzkeubmoawsb4dtuqh_f6fb2519-0928-46b5-bdcb-c280fdbbf6fb.png?v=1736502177&width=668" 
    },
    { 
        id: "toner_byoma", 
        name: "Hydrating Milky Toner", 
        category: "Toner", 
        description: "Supports the skin barrier.", 
        price: 15.00, 
        image: "https://www.grove.co/cdn/shop/files/opqzkeubmoawsb4dtuqh_f6fb2519-0928-46b5-bdcb-c280fdbbf6fb.png?v=1736502177&width=668" 
    },
    { 
        id: "toner_byoma", 
        name: "Hydrating Milky Toner", 
        category: "Toner", 
        description: "Supports the skin barrier.", 
        price: 15.00, 
        image: "https://www.grove.co/cdn/shop/files/opqzkeubmoawsb4dtuqh_f6fb2519-0928-46b5-bdcb-c280fdbbf6fb.png?v=1736502177&width=668" 
    },
    { 
        id: "toner_byoma", 
        name: "Hydrating Milky Toner", 
        category: "Toner", 
        description: "Supports the skin barrier.", 
        price: 15.00, 
        image: "https://www.grove.co/cdn/shop/files/opqzkeubmoawsb4dtuqh_f6fb2519-0928-46b5-bdcb-c280fdbbf6fb.png?v=1736502177&width=668" 
    },
    { 
        id: "toner_byoma", 
        name: "Hydrating Milky Toner", 
        category: "Toner", 
        description: "Supports the skin barrier.", 
        price: 15.00, 
        image: "https://www.grove.co/cdn/shop/files/opqzkeubmoawsb4dtuqh_f6fb2519-0928-46b5-bdcb-c280fdbbf6fb.png?v=1736502177&width=668" 
    },
    { 
        id: "serum_hydrating", 
        name: "Hydrating Serum", 
        category: "Serums", 
        description: "Replenish and lock in moisture.", 
        price: 35.00, 
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019" 
    },
    { 
        id: "serum_skinceuticals", 
        name: "C E Ferulic Serum", 
        category: "Serums", 
        description: "Antioxidant serum for brightening.", 
        price: 182.00, 
        image: "https://target.scene7.com/is/image/Target/GUEST_4a8461e0-73b1-4ebf-aef4-b3a201aef08e" 
    },
    { 
        id: "serum_skinceuticals", 
        name: "C E Ferulic Serum", 
        category: "Serums", 
        description: "Antioxidant serum for brightening.", 
        price: 182.00, 
        image: "https://target.scene7.com/is/image/Target/GUEST_4a8461e0-73b1-4ebf-aef4-b3a201aef08e" 
    },
    { 
        id: "serum_skinceuticals", 
        name: "C E Ferulic Serum", 
        category: "Serums", 
        description: "Antioxidant serum for brightening.", 
        price: 182.00, 
        image: "https://target.scene7.com/is/image/Target/GUEST_4a8461e0-73b1-4ebf-aef4-b3a201aef08e" 
    },
    { 
        id: "serum_skinceuticals", 
        name: "C E Ferulic Serum", 
        category: "Serums", 
        description: "Antioxidant serum for brightening.", 
        price: 182.00, 
        image: "https://target.scene7.com/is/image/Target/GUEST_4a8461e0-73b1-4ebf-aef4-b3a201aef08e" 
    },
    { 
        id: "serum_skinceuticals", 
        name: "C E Ferulic Serum", 
        category: "Serums", 
        description: "Antioxidant serum for brightening.", 
        price: 182.00, 
        image: "https://target.scene7.com/is/image/Target/GUEST_4a8461e0-73b1-4ebf-aef4-b3a201aef08e" 
    },
    { 
        id: "serum_skinceuticals", 
        name: "C E Ferulic Serum", 
        category: "Serums", 
        description: "Antioxidant serum for brightening.", 
        price: 182.00, 
        image: "https://target.scene7.com/is/image/Target/GUEST_4a8461e0-73b1-4ebf-aef4-b3a201aef08e" 
    },
    { 
        id: "moist_night", 
        name: "Night Cream", 
        category: "Moisturizers", 
        description: "Repair and rejuvenate overnight.", 
        price: 42.00, 
        image: "https://static.independent.co.uk/2025/01/08/12/Anti-ageing-night-cream-hero-indybest.jpg?width=1200&height=1200&fit=crop" 
    },
    { 
        id: "moist_night", 
        name: "Night Cream", 
        category: "Moisturizers", 
        description: "Repair and rejuvenate overnight.", 
        price: 42.00, 
        image: "https://static.independent.co.uk/2025/01/08/12/Anti-ageing-night-cream-hero-indybest.jpg?width=1200&height=1200&fit=crop" 
    },
    { 
        id: "moist_night", 
        name: "Night Cream", 
        category: "Moisturizers", 
        description: "Repair and rejuvenate overnight.", 
        price: 42.00, 
        image: "https://static.independent.co.uk/2025/01/08/12/Anti-ageing-night-cream-hero-indybest.jpg?width=1200&height=1200&fit=crop" 
    },
    { 
        id: "moist_night", 
        name: "Night Cream", 
        category: "Moisturizers", 
        description: "Repair and rejuvenate overnight.", 
        price: 42.00, 
        image: "https://static.independent.co.uk/2025/01/08/12/Anti-ageing-night-cream-hero-indybest.jpg?width=1200&height=1200&fit=crop" 
    },
    { 
        id: "moist_night", 
        name: "Night Cream", 
        category: "Moisturizers", 
        description: "Repair and rejuvenate overnight.", 
        price: 42.00, 
        image: "https://static.independent.co.uk/2025/01/08/12/Anti-ageing-night-cream-hero-indybest.jpg?width=1200&height=1200&fit=crop" 
    },
    { 
        id: "moist_night", 
        name: "Night Cream", 
        category: "Moisturizers", 
        description: "Repair and rejuvenate overnight.", 
        price: 42.00, 
        image: "https://static.independent.co.uk/2025/01/08/12/Anti-ageing-night-cream-hero-indybest.jpg?width=1200&height=1200&fit=crop" 
    },
    { 
        id: "spf_eltamd", 
        name: "UV Clear Broad SPF 46", 
        category: "Sunscreen", 
        description: "Sunscreen for acne-prone skin.", 
        price: 41.00, 
        image: "https://princesscosmeticsqa.com/cdn/shop/products/eltamd-uv-clear-broad-spectrum-spf46-48g-renewal-lta-md-krym-alshms-spf46-48-jram-mtjdd-281186.jpg?v=1738160927&width=1946" 
    },
    { 
        id: "spf_eltamd", 
        name: "UV Clear Broad SPF 46", 
        category: "Sunscreen", 
        description: "Sunscreen for acne-prone skin.", 
        price: 41.00, 
        image: "https://princesscosmeticsqa.com/cdn/shop/products/eltamd-uv-clear-broad-spectrum-spf46-48g-renewal-lta-md-krym-alshms-spf46-48-jram-mtjdd-281186.jpg?v=1738160927&width=1946" 
    },
    { 
        id: "spf_eltamd", 
        name: "UV Clear Broad SPF 46", 
        category: "Sunscreen", 
        description: "Sunscreen for acne-prone skin.", 
        price: 41.00, 
        image: "https://princesscosmeticsqa.com/cdn/shop/products/eltamd-uv-clear-broad-spectrum-spf46-48g-renewal-lta-md-krym-alshms-spf46-48-jram-mtjdd-281186.jpg?v=1738160927&width=1946" 
    },
    { 
        id: "spf_eltamd", 
        name: "UV Clear Broad SPF 46", 
        category: "Sunscreen", 
        description: "Sunscreen for acne-prone skin.", 
        price: 41.00, 
        image: "https://princesscosmeticsqa.com/cdn/shop/products/eltamd-uv-clear-broad-spectrum-spf46-48g-renewal-lta-md-krym-alshms-spf46-48-jram-mtjdd-281186.jpg?v=1738160927&width=1946" 
    },
    { 
        id: "spf_eltamd", 
        name: "UV Clear Broad SPF 46", 
        category: "Sunscreen", 
        description: "Sunscreen for acne-prone skin.", 
        price: 41.00, 
        image: "https://princesscosmeticsqa.com/cdn/shop/products/eltamd-uv-clear-broad-spectrum-spf46-48g-renewal-lta-md-krym-alshms-spf46-48-jram-mtjdd-281186.jpg?v=1738160927&width=1946" 
    },
    { 
        id: "spf_eltamd", 
        name: "UV Clear Broad SPF 46", 
        category: "Sunscreen", 
        description: "Sunscreen for acne-prone skin.", 
        price: 41.00, 
        image: "https://princesscosmeticsqa.com/cdn/shop/products/eltamd-uv-clear-broad-spectrum-spf46-48g-renewal-lta-md-krym-alshms-spf46-48-jram-mtjdd-281186.jpg?v=1738160927&width=1946" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    },
    { 
        id: "lip_summer", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg" 
    }
];

const populationProducts = [
    { 
        id: "pop_1", 
        name: "Glow Essence", 
        category: "Essence", 
        description: "Radiance in a bottle.Radiance in a bottle.", 
        price: 45.00, 
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019" },
    { 
        id: "pop_2", 
        name: "Pro-Collagen Cleansing", 
        category: "Oil Cleansers", 
        description: "Melts away makeup and impurities.", 
        price: 60.00, 
        image: "https://m.media-amazon.com/images/I/81yOS+C9ixL._UF350,350_QL80_.jpg" 
    },
    { 
        id: "pop_3", 
        name: "Vitamin C Cleanser", 
        category: "Cleansers", 
        description: "Brighten and refresh your skin.", 
        price: 28.00, 
        image: "https://id-test-11.slatic.net/p/ff70fe3768512bbbb2a07a81f72b4421.jpg" 
    },
    { 
        id: "pop_4", 
        name: "Hydrating Milky Toner", 
        category: "Toner", 
        description: "Supports the skin barrier.", 
        price: 15.00, 
        image: "https://www.grove.co/cdn/shop/files/opqzkeubmoawsb4dtuqh_f6fb2519-0928-46b5-bdcb-c280fdbbf6fb.png?v=1736502177&width=668"  
    },
    { 
        id: "pop_5", 
        name: "C E Ferulic Serum", 
        category: "Serums", 
        description: "Antioxidant serum for brightening.", 
        price: 182.00, 
        image: "https://target.scene7.com/is/image/Target/GUEST_4a8461e0-73b1-4ebf-aef4-b3a201aef08e"  
    },
    { 
        id: "pop_6", 
        name: "Night Cream", 
        category: "Moisturizers", 
        description: "Repair and rejuvenate overnight.", 
        price: 42.00, 
        image: "https://static.independent.co.uk/2025/01/08/12/Anti-ageing-night-cream-hero-indybest.jpg?width=1200&height=1200&fit=crop" 
    },
    { 
        id: "pop_7", 
        name: "UV Clear Broad SPF 46", 
        category: "Sunscreen", 
        description: "Sunscreen for acne-prone skin.", 
        price: 41.00, 
        image: "https://princesscosmeticsqa.com/cdn/shop/products/eltamd-uv-clear-broad-spectrum-spf46-48g-renewal-lta-md-krym-alshms-spf46-48-jram-mtjdd-281186.jpg?v=1738160927&width=1946"  
    },
    { 
        id: "pop_8", 
        name: "Lip Butter Balm", 
        category: "Lip Oil", 
        description: "Nourishing balm for hydration.", 
        price: 24.00, 
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg"
    },
];

// 2. STATE
let cart = JSON.parse(localStorage.getItem('userCart')) || [];
let currentCategory = "All";
// Add this at the very top of your state section

// 3. SELECTORS
const getEl = id => document.getElementById(id);

// 4. CORE FUNCTIONS
function renderAll() {
    renderGrid(products, 'product-grid');
    renderGrid(populationProducts, 'population-grid');
}

function render(list) {
    grid.innerHTML = list.map(productCard).join('');    
    revealObserve();
}

window.addToCart = (id, btnElement) => {
    // 1. Find the product (searches both arrays)
    const allProds = [...products, ...populationProducts];
    const product = allProds.find(p => p.id === id);
    
    if (product && btnElement) {
        // 2. Logic to add to cart
        cart.push({...product});
        localStorage.setItem('userCart', JSON.stringify(cart));
        
        // 3. Update the UI counter (if you have these functions)
        if (typeof updateCartUI === "function") updateCartUI();
        if (typeof animateCartCounter === "function") animateCartCounter();

        // 4. Visual Feedback
        const originalText = btnElement.innerHTML; 
        
        // Apply "Success" state
        btnElement.classList.add('btn-success-state');
        btnElement.innerHTML = 'Added ✅'; 
        btnElement.style.pointerEvents = 'none'; // Prevent double clicking

        // Reset after 1.5 seconds
        setTimeout(() => {
            btnElement.classList.remove('btn-success-state');
            btnElement.innerHTML = originalText;
            btnElement.style.pointerEvents = 'auto';
        }, 1500);
    } else {
        console.error("Could not find product or button element.");
    }
};

function renderGrid(data, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = data.map((p, i) => `
        <div class="product-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 100}">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <span class="price">$${p.price.toFixed(2)}</span>
            <div class="card-buttons">
                <button onclick="addToCart('${p.id}', this)" class="add-to-cart">Add to Cart</button>
                ${gridId === 'population-grid' ? 
                `<button class="view-more" onclick="viewProductDetails('${p.id}')">View More</button>` : ''}
            </div>
        </div>
    `).join('');
}

function setupCardBehavior() {
    $$('.add').forEach(btn => btn.addEventListener('click', e => {
        cartCount++;
        cartCountEl.textContent = cartCount;
        cartPing();
        btnSuccessFlash(e.currentTarget);
    }));
}


function setupCardBehavior() {
    $$('.add').forEach(btn => btn.addEventListener('click', e => {
        // Find the product ID from the button's data attribute
        const productId = parseInt(e.currentTarget.dataset.id);
        const productToAdd = PRODUCTS.find(p => p.id === productId);

        if (productToAdd) {
            // Check if the item is already in the cart. If so, update quantity.
            // For simplicity, this example just adds it directly.
            cart.push(productToAdd);

            cartCount++;
            cartCountEl.textContent = cartCount;
            cartPing();
            btnSuccessFlash(e.currentTarget);
        }
    }));
}
function btnSuccessFlash(btnElement) {
    const original = btnElement.textContent;
    btnElement.innerHTML = 'Added ✅';
    btnElement.style.background = 'linear-gradient(135deg, rgba(43, 240, 4, 0.86), rgba(38, 218, 25, 0.81))';
    setTimeout(() => {
        btnElement.textContent = original;
        btnElement.style.background = '';
    }, 900);
}

function cartPing() {
    const c = cartCountEl;
    c.animate([
        { transform: 'scale(1)', offset: 0 },
        { transform: 'scale(1.2)', offset: .3 },
        { transform: 'scale(1)', offset: 1 }
    ], { duration: 350, easing: 'cubic-bezier(.2,.8,.2,1)' });
}

function viewProductDetails(productId) {
    // 1. Combine all arrays to find the product
    const allProds = [...products, ...populationProducts];
    const product = allProds.find(p => p.id === productId);
    
    // Target the specific grid you want to replace with details
    const container = document.getElementById('population-grid');

    if (!product || !container) {
        console.error("Product or container not found");
        return;
    }

    // 2. Inject the HTML
    // Note: I added a class to the container to handle the layout change
    container.classList.add('detail-view-active'); 
    container.innerHTML = `
        <div class="product-detail-container">
            <div class="detail-image-section">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="detail-info-section">
                <h3 class="name-products-detail">${product.name}</h3>
                <span class="price">$${product.price.toFixed(2)}</span>
                <p class="description">${product.description}</p>
                
                <div class="detail-actions">
                    <button class="add-to-cart-large"       onclick="addToCart('${product.id}', this)">Add to Cart</button>
                    <div class="wishlist-icon">
                        <svg viewBox="0 0 32 32" width="40" height="40">
                            <path d="M16 28.5L14.1 26.8C7.33 20.65 3 16.74 3 12.05C3 8.21 6.01 5.2 9.85 5.2C12.02 5.2 14.1 6.21 15.5 7.82C16.9 6.21 18.98 5.2 21.15 5.2C24.99 5.2 28 8.21 28 12.05C28 16.74 23.67 20.65 16.9 26.8L16 28.5Z" 
                                fill="none" 
                                stroke="red" 
                                stroke-width="2" />
                        </svg>
                    </div>
                    </div>
                <button class="back-btn" onclick="restorePopulationGrid()">← Back to Products</button>
            </div>
        </div>
    `;
    
    // Smooth scroll to top of details
    container.scrollIntoView({ behavior: 'smooth' });
}

// Helper function to go back correctly
function restorePopulationGrid() {
    const container = document.getElementById('population-grid');
    container.classList.remove('detail-view-active');
    renderGrid(populationProducts, 'population-grid');
}

function applyFilters() {
    const searchVal = getEl('productSearch')?.value.toLowerCase() || "";
    const selectedCat = getEl('categoryFilter')?.value || "all";
    const filtered = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(searchVal);
        const matchCat = (selectedCat === "all" || p.category.toLowerCase() === selectedCat.toLowerCase());
        
        return matchSearch && matchCat;
    });

    renderGrid(filtered, 'product-grid');
}

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};

function applySorting(sortOrder) {
    // Create a copy so we don't mess up the original products array order forever
    let sortedList = [...products];

    if (sortOrder === 'low') {
        sortedList.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
        sortedList.sort((a, b) => b.price - a.price);
    }

    // After sorting, we still want to respect any active search/category filters
    const searchVal = getEl('productSearch')?.value.toLowerCase() || "";
    const selectedCat = getEl('categoryFilter')?.value || "all";

    const finalData = sortedList.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(searchVal);
        const matchCat = (selectedCat === "all" || p.category.toLowerCase() === selectedCat.toLowerCase());
        return matchSearch && matchCat;
    });

    renderGrid(finalData, 'product-grid');
}

function updateCartUI() {
    const countEl = getEl('cartCount');
    if (countEl) countEl.textContent = cart.length;

    const cartItems = getEl('cartItems');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align:center; padding: 50px 20px; color: #c1c1c1;">
                <p style="font-size: 1.2rem;">Your cart is empty</p>
            </div>`;
        return;
    }

    // --- STEP 1: Group items by name to get quantities ---
    const groupedCart = cart.reduce((acc, item) => {
        if (!acc[item.name]) {
            acc[item.name] = { ...item, quantity: 1 };
        } else {
            acc[item.name].quantity += 1;
        }
        return acc;
    }, {});

    // Convert the object back into an array for mapping
    const groupedArray = Object.values(groupedCart);

    // --- STEP 2: Calculate Totals ---
    let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let discount = subtotal * 0.10;
    let total = subtotal - discount;

    // --- STEP 3: Generate HTML ---
    let html = groupedArray.map((item) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <img src="${item.image}">
                <div class="cart-item-details">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">${item.quantity} x $${item.price.toFixed(2)}</span>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCartByName('${item.name}')">&times;</button>
        </div>
    `).join('');

    html += `
        <div class="cart-summary">
            <div class="summary-row"><span>Subtotal:</span> <span>$${subtotal.toFixed(2)}</span></div>
            <div class="summary-row" style="color: #ff0026e6;"><span>Discount (10%):</span> <span>-$${discount.toFixed(2)}</span></div>
            <hr>
            <div class="summary-row total"><span>Total:</span> <span>$${total.toFixed(2)}</span></div>
            <button class="pay-now-btn" onclick="openPayment()">Pay Now</button>
        </div>
    `;
    cartItems.innerHTML = html;
}

// Helper to remove all items of one type (Optional)
// Change your remove function to this:
window.removeFromCartByName = (name) => {
    // Find the index of the first item with this name
    const index = cart.findIndex(item => item.name === name);
    if (index > -1) {
        cart.splice(index, 1); // Remove only one instance
        localStorage.setItem('userCart', JSON.stringify(cart)); // Save the new cart state!
        updateCartUI();
    }
};

// Updated openPayment function to show the total [Point 1]
window.openPayment = () => {
    // Re-calculate total to display it in the QR modal
    let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let discount = subtotal * 0.10;
    let total = subtotal - discount;

    // Set the total text under the QR code
    const qrTotalEl = document.getElementById('qrTotal');
    if (qrTotalEl) {
        qrTotalEl.textContent = `Total Payment: $${total.toFixed(2)}`;
    }
    // Inside your Cart Open Event
    getEl('cartBtn')?.addEventListener('click', () => {
        // NEW: Close mobile menu if it's open
        navlinks.classList.remove('expanded');
        menuToggle.classList.remove('active');
        
        updateCartUI();
        cartModal.classList.add('visible');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    getEl('cartModal')?.classList.remove('visible');
    getEl('qrModal')?.classList.add('visible');
};

// Add this inside your document.addEventListener('DOMContentLoaded', () => { ... })
// BACK FROM QR TO YOUR CART [Point 2]
getEl('backToCart')?.addEventListener('click', () => {
    getEl('qrModal').classList.remove('visible');
    getEl('cartModal').classList.add('visible');
});
// window.openPayment = () => {
//     getEl('cartModal')?.classList.remove('visible');
//     getEl('qrModal')?.classList.add('visible');
// };

// 6. INITIALIZATION & MODAL TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    if(window.AOS) AOS.init({ once: true });

    // OPEN CART
    const cartModal = getEl('cartModal');
    const overlay = document.querySelector('.cart-overlay');

    // OPEN CART
    getEl('cartBtn')?.addEventListener('click', () => {
        updateCartUI();
        cartModal.classList.add('visible');
        overlay.classList.add('active'); // Dims the background
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
    });

    // CLOSE CART
    const closeDrawer = () => {
        cartModal.classList.remove('visible');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enables scrolling
    };

    getEl('closeCartCross')?.addEventListener('click', closeDrawer);
    overlay?.addEventListener('click', closeDrawer); // Close if user clicks outside the drawer

    // Close on Background Click
    window.addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') getEl('cartModal').classList.remove('visible');
        if (e.target.id === 'qrModal') getEl('qrModal').classList.remove('visible');
    });
    // 1. Handle Header Dropdown Clicks
    document.querySelectorAll('.nav-filter').forEach(link => {
        link.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            
            // Sync the Select Box UI
            const selectBox = getEl('categoryFilter');
            if (selectBox) selectBox.value = category;
            
            // Update global state and filter
            currentCategory = category;
            applyFilters();
        });
    });

    // 2. Handle Select Box Changes
    getEl('categoryFilter')?.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        applyFilters();
    });
    // Add this to your DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle Header Dropdown Clicks
    document.querySelectorAll('.nav-filter').forEach(link => {
        link.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            
            // Sync the Select Box UI
            const selectBox = getEl('categoryFilter');
            if (selectBox) selectBox.value = category;
            
            // Update global state and filter
            currentCategory = category;
            applyFilters();
        });
    });

    // 2. Handle Select Box Changes
    getEl('categoryFilter')?.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        applyFilters();
    });
});

// 3. Robust Filter Function
    function applyFilters() {
        const searchVal = getEl('productSearch')?.value.toLowerCase() || "";
        // Use currentCategory state which is updated by both UI elements
        const selectedCat = currentCategory.toLowerCase();

        const filtered = products.filter(p => {
            const matchSearch = p.name.toLowerCase().includes(searchVal);
            const matchCat = (selectedCat === "all" || p.category.toLowerCase() === selectedCat);
            
            return matchSearch && matchCat;
        });

        renderGrid(filtered, 'product-grid');
    }

    // Search & Filter
    getEl('productSearch')?.addEventListener('input', applyFilters);
    
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = e.target.textContent.trim();
            applyFilters();
            getEl('product-grid')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Replace your "getEl" lines with this:
   const welcome = document.getElementById('welcome-modal');
    const closeBtn = document.getElementById('close-modal');

    if (closeBtn && welcome) {
        closeBtn.addEventListener('click', () => {
            welcome.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }

    // sort
    // Add this inside your DOMContentLoaded function
    getEl('categoryFilter')?.addEventListener('change', (e) => {
        currentCategory = e.target.value; // Updates the global state
        applyFilters(); // Runs your existing filter logic
    });

    getEl('priceSort')?.addEventListener('change', (e) => {
        applySorting(e.target.value);
    });

    setupSliders();
});

function setupSliders() {
    const sliders = document.querySelectorAll('.product-slider');
    sliders.forEach(slider => {
        let isDown = false, startX, scrollLeft;
        slider.onmousedown = (e) => { isDown = true; startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; };
        slider.onmouseleave = () => isDown = false;
        slider.onmouseup = () => isDown = false;
        slider.onmousemove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            slider.scrollLeft = scrollLeft - (x - startX) * 2;
        };
    });
}

function animateCartCounter() {
    const c = getEl('cartCount');
    c?.animate([{transform:'scale(1)'},{transform:'scale(1.5)'},{transform:'scale(1)'}], {duration:300});
}

// 1. SELECT THE TOGGLE BUTTON AND NAV
const menuToggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.navlinks');

// 2. TOGGLE MENU ON CLICK
menuToggle?.addEventListener('click', () => {
    // Check if it's already open
    const isExpanded = navlinks.classList.toggle('expanded');
    
    // Accessibility update
    menuToggle.setAttribute('aria-expanded', isExpanded);
    
    // Optional: Toggle a class on the hamburger icon to turn it into an 'X'
    menuToggle.classList.toggle('active');
});

// 3. CLOSE MENU IF CLICKED OUTSIDE
document.addEventListener('click', (e) => {
    if (!navlinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navlinks.classList.remove('expanded');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}); 