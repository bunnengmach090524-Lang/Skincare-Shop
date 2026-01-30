

// Data for the products
const products = [
    {
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },
    {
        id: "cleansers",
        name: "Vitamin C Cleanser",
        description: "Brighten and refresh your skin.",
        price: "$28",
        image: "https://id-test-11.slatic.net/p/ff70fe3768512bbbb2a07a81f72b4421.jpg"
    },
    {
        id: "moisturizers",
        name: "Night Cream",
        description: "Repair and rejuvenate overnight.",
        price: "$42",
        image: "https://static.independent.co.uk/2025/01/08/12/Anti-ageing-night-cream-hero-indybest.jpg?width=1200&height=1200&fit=crop"
    },
    {
        id: "masks",
        name: "Clay Mask",
        description: "Detoxify and purify your pores.",
        price: "$22",
        image: "https://freemanbeauty.com/cdn/shop/products/FRM_R16_DecemberSocialMedia2021_KoreanCica_504507_1.1.jpg?v=1724880494&width=360"
    }
    ,
    {
        id: "cleanse_elemis",
        name: "Pro-Collagen Cleansing Balm",
        category: "Cleanser (1st)",
        description: "Melts away makeup and impurities, leaves skin soft.",
        price: "$68.00",
        image: "https://m.media-amazon.com/images/I/81yOS+C9ixL._UF350,350_QL80_.jpg"
    },
    {
        id: "cleanse_lrp",
        name: "Toleriane Purifying Foaming",
        category: "Cleanser (2nd)",
        description: "Gently cleanses without stripping, ideal for skin.",
        price: "$16.00",
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/2/5/2503388_alt05.jpg"
    },
    {
        id: "treatment_hero",
        name: "Mighty Patch Original",
        category: "Treatment",
        description: "Hydrocolloid patches to absorb oil and flatten.",
        price: "$13.00",
        image: "https://m.media-amazon.com/images/I/61hG5XYbHsL._UF1000,1000_QL80_.jpg"
    },
    {
        id: "toner_byoma",
        name: "Hydrating Milky Toner milk",
        category: "Toner",
        description: "Hydrates and supports the skin barrier with a milky.",
        price: "$15.00",
        image: "https://www.grove.co/cdn/shop/files/opqzkeubmoawsb4dtuqh_f6fb2519-0928-46b5-bdcb-c280fdbbf6fb.png?v=1736502177&width=668"
    },
    {
        id: "exfoliant_paulas",
        name: "2% BHA Liquid Exfoliant",
        category: "Exfoliant",
        description: "Salicylic Acid to clear blackheads and unclog pores.",
        price: "$34.00",
        image: "https://paulaschoice.sg/cdn/shop/files/2_-bha-liquid-exfoliant-size_1080x.jpg?v=1751940509"
    },
    {
        id: "serum_skinceuticals_c",
        name: "C E Ferulic Serum Farmula",
        category: "Serum (Vitamin C)",
        description: "Gold-standard antioxidant serum for brightening and protecting.",
        price: "$182.00",
        image: "https://target.scene7.com/is/image/Target/GUEST_4a8461e0-73b1-4ebf-aef4-b3a201aef08e"
    },
    {
        id: "serum_lrp_ha",
        name: "Hyalu B5 Pure Hyaluronic",
        category: "Serum (Hyaluronic Acid)",
        description: "Plumps and hydrates the skin deeply skincare and improves elasticity.",
        price: "$30.00",
        image: "https://cosmetis.com/media/catalog/product/s/u/suractivatedserum4.jpg"
    },
    {
        id: "serum_ordinary_nia",
        name: "Niacinamide 10% + Zinc 1%",
        category: "Serum (Niacinamide)",
        description: "Reduces oiliness, minimizes pores, and targets blemishes.",
        price: "$7.00",
        image: "https://cdn11.bigcommerce.com/s-63354/images/stencil/1280x1280/products/5674/13452/The_Ordinary_Niacinamide_10_Zinc_1_-_60ml_Live_1__26372.1655896638.jpg?c=2&imbypass=on"
    },
    {
        id: "serum_glowrecipe",
        name: "Watermelon Glow Niacinamide",
        category: "Serum (Glow/Primer)",
        description: "Provides a dewy, glowing finish and brightens.",
        price: "$35.00",
        image: "https://www.glowrecipe.com/cdn/shop/files/PDP_IMAGES_Watermelon-Glow-Niacinamide-Hue-Drops-4.jpg?v=1762198257"
    },
    {
        id: "serum_kiehls_ret",
        name: "Micro-Dose Anti-Aging Retinol Serum",
        category: "Serum (Anti-Aging)",
        description: "Gentle Retinol formula to reduce fine lines.",
        price: "$65.00",
        image: "https://m.media-amazon.com/images/I/71IudYtfmUL._UF350,350_QL80_.jpg"
    },
    {
        id: "moist_kiehls_ultra",
        name: "Ultra Facial Cream with Squalane",
        category: "Moisturizer (Hydrating)",
        description: "Deeply hydrating, simple formula for all types.",
        price: "$35.00",
        image: "https://cdn-image.oliveyoung.com/prdtImg/1693/0d749a76-bccc-4671-b7b5-1d406b035093.jpg?RS=1500x1500&AR=0&SF=webp&QT=80"
    },
    {
        id: "moist_cerave",
        name: "Moisturizing Cream with Ceramides",
        category: "Moisturizer (Barrier Repair)",
        description: "Essential ceramides to restore and maintain.",
        price: "$15.00",
        image: "https://umma.io/wp-content/uploads/2023/06/1644117_MayUMMABlog2_opt-2_1000x1200_060923.jpg"
    },
    {
        id: "moist_neutro",
        name: "Hydro Boost Water Gel type moisturizer",
        category: "Moisturizer (Lightweight)",
        description: "Lightweight, oil-free gel with Hyaluronic Acid.",
        price: "$20.00",
        image: "https://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/67/82/813/6782813_00_W500_H652.jpg?lastmodified=202505260826052"
    },
    {
        id: "moist_ct",
        name: "Magic Cream Luxury Moisturizer",
        category: "Moisturizer (Luxury)",
        description: "Rich anti-aging moisturizer for deep hydration.",
        price: "$100.00",
        image: "https://m.media-amazon.com/images/I/61EBcmK-lOL._UF1000,1000_QL80_.jpg"
    },
    {
        id: "spf_eltamd",
        name: "UV Clear Broad",
        category: "SPF",
        description: "Oil-free, lightweight sunscreen for acne-prone and sensitive skin.",
        price: "$41.00",
        image: "https://princesscosmeticsqa.com/cdn/shop/products/eltamd-uv-clear-broad-spectrum-spf46-48g-renewal-lta-md-krym-alshms-spf46-48-jram-mtjdd-281186.jpg?v=1738160927&width=1946"
    },
    {
        id: "mask_laneige",
        name: "Water Sleeping Mask",
        category: "Mask (Overnight)",
        description: "Overnight gel mask to hydrate and revitalize skin while you sleep.",
        price: "$32.00",
        image: "https://us.laneige.com/cdn/shop/files/LN_WSM_Product_2025_1000x1000_1beb8c19-7e18-49fd-b91b-f7a42f0c659f.jpg?v=1754047241"
    },
    {
        id: "mask_clay_general",
        name: "Detox Clay Mask (General)",
        category: "Mask (Clay)",
        description: "Detoxifies and purifies pores,skin and for all skincare type  .",
        price: "$25.00",
        image: "https://glorioskin.com/cdn/shop/files/detox_1024x.jpg?v=1702329411"
    },
    {
        id: "eye_kiehls",
        name: "Avocado Eye Cream",
        category: "Eye Cream",
        description: "Nourishing Eye and Face Cream. ",
        price: "$35.00",
        image: "https://m.media-amazon.com/images/I/71lV5Ak-mrL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: "lip_summerfridays",
        name: "Lip Butter Balm style lip",
        category: "Lip Treatment",
        description: "Nourishing balm for instant hydration.",
        price: "$24.00",
        image: "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/71Xb05UzfDL._SL1500_.jpg"
    },
    {
        id: "body_clarins",
        name: "Moisture-Rich Body Lotion",
        category: "Body Care",
        description: "Intensely hydrating body lotion for dry .",
        price: "$40.00",
        image: "https://bimsbeautyltd.com/wp-content/uploads/2025/12/IMG_6889.jpg"
    }
];


let cart = []; // The actual cart array
let cartCount = 0;
// Element selectors - Assuming these IDs exist in your HTML
const cartCountEl = document.getElementById('cartCount');
const productGrid = document.getElementById('product-grid');
const cartModal = document.getElementById('cartModal');
const qrModal = document.getElementById('qrModal');

// Helper function for query selectors
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


// =========================================================
// 2. CORE PRODUCT RENDERING LOGIC (Fixed)
// =========================================================

// Function to create and append product cards
function createProductCards() {
    if (!productGrid) {
        console.error("The element with ID 'product-grid' was not found.");
        return;
    }
    // Clear any existing cards before rendering
    productGrid.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Add the AOS attributes dynamically
        productCard.setAttribute('data-aos', 'fade-up');
        // Use modulus for a repeating delay effect
        productCard.setAttribute('data-aos-delay', (index % 4) * 100); 

        // Populate the card. Using 'price_display' if available, otherwise just 'price'.
        // IMPORTANT: The 'Add to Cart' button now has the data-id for the cart logic.
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 id="${product.id}">${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price_display || product.price}</span>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        productGrid.appendChild(productCard);
    });

    // Setup behavior for the newly created buttons
    setupCardBehavior();
}


// =========================================================
// 3. CART BEHAVIOR FUNCTIONS (Consolidated & Fixed)
// =========================================================

// The main function to attach listeners to the 'Add to Cart' buttons
function setupCardBehavior() {
    // 1. Target the 'Add to Cart' buttons generated by createProductCards
    const addToCartButtons = $$('.product-card .add-to-cart');

    addToCartButtons.forEach(btn => btn.addEventListener('click', e => {
        const productId = e.currentTarget.dataset.id;
        // Find the product data from the master list
        const productToAdd = products.find(p => p.id === productId);

        if (productToAdd) {
            // Add the product to the cart array
            cart.push({ ...productToAdd, price: parseFloat(productToAdd.price) || parseFloat(productToAdd.price.replace('$', '')) });

            cartCount++;
            if (cartCountEl) cartCountEl.textContent = cartCount;
            cartPing();
            btnSuccessFlash(e.currentTarget);
        }
    }));
    
    // 2. Also keep the listener for the old '.add' class if you still use it elsewhere
    // NOTE: This part relies on global 'PRODUCTS' and integer IDs which might still cause errors if not defined.
    // I'm keeping your original logic here, but the fix is above.
    // $$('.add').forEach(btn => btn.addEventListener('click', e => {
    //     // ... original logic from your provided code ...
    // }));
}

function btnSuccessFlash(el) {
    const original = el.textContent;
    el.textContent = 'Added ✓';
    // Use a solid color for better visibility on button
    el.style.backgroundColor = '#2ecc71'; 
    el.style.color = '#fff'; 
    el.style.border = '1px solid #2ecc71';
    
    setTimeout(() => {
        el.textContent = original;
        el.style.backgroundColor = '';
        el.style.color = '';
        el.style.border = '';
    }, 900);
}

function cartPing() {
    const c = document.getElementById('cartCount');
    if (!c) return;
    c.animate([
        { transform: 'scale(1)', offset: 0 },
        { transform: 'scale(1.2)', offset: .3 },
        { transform: 'scale(1)', offset: 1 }
    ], { duration: 350, easing: 'cubic-bezier(.2,.8,.2,1)' });
}

// Function to open/close the cart modal
function toggleCart() {
    if (!cartModal) return console.error("Cart modal element not found.");
    cartModal.classList.toggle('visible');
    
    if (cartModal.classList.contains('visible')) {
        renderCart();
    }
}

// Function to render the contents of the cart modal
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return console.error("Cart items container not found.");

    let cartHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
        return; 
    }

    cart.forEach(item => {
        // Ensure price is a number for calculation
        const itemPrice = parseFloat(item.price);
        subtotal += itemPrice; 
        
        cartHTML += `
            <div class="cart-item" data-id="${item.id}">
                <img class="cart-item-image" src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">$${itemPrice.toFixed(2)}</p>
                </div>
                <span class="remove-btn" data-id="${item.id}">&times;</span>
            </div>
        `;
    });

    const discountRate = 0.10;
    const discount = subtotal * discountRate;
    const total = subtotal - discount;

    const totalHTML = `
        <div class="cart-summary">
            <div class="summary-line"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
            <div class="summary-line"><span>Discount (10%)</span><span>-$${discount.toFixed(2)}</span></div>
            <div class="summary-line total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
        </div>
        <button id="pay-now-btn" class="pay-now-btn">Pay Now</button>
    `;

    cartItemsContainer.innerHTML = cartHTML + totalHTML;

    // Attach the 'Pay Now' button listener
    const payNowBtn = document.getElementById('pay-now-btn');
    if (payNowBtn) {
        payNowBtn.addEventListener('click', () => {
            toggleCart();
            toggleQrModal();
        });
    }
    
    setupRemoveListeners();
}

function removeItemFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
        cart.splice(index, 1);
        cartCount--;
        if (cartCountEl) cartCountEl.textContent = cartCount;
        cartPing();
        renderCart();
    }
}

function setupRemoveListeners() {
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.currentTarget.dataset.id;
            removeItemFromCart(productId);
        });
    });
}

function toggleQrModal() {
    if (!qrModal) return console.error("QR modal element not found.");
    qrModal.classList.toggle('visible');
}


// =========================================================
// 4. INITIALIZATION (Consolidated)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial product card creation and button setup
    createProductCards();
    
    // 2. Initialize AOS library for scroll animations
    AOS.init({ once: true });
    
    // 3. Event listener for the main cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }
    
    // 4. Close cart modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            toggleCart();
        }
    });

    // 5. Dropdown Logic
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown");
    if (dropdownBtn && dropdown) {
        dropdownBtn.addEventListener("click", () => {
            dropdown.classList.toggle("show");
            const expanded = dropdownBtn.getAttribute("aria-expanded") === "true";
            dropdownBtn.setAttribute("aria-expanded", !expanded);
        });

        window.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target) && e.target !== dropdownBtn) {
                dropdown.classList.remove("show");
                dropdownBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    // 6. Join Button Logic
    const joinBtn = $('#joinBtn');
    if (joinBtn) {
        joinBtn.addEventListener('click', () => {
            const emailInput = $('#email');
            if (emailInput) {
                const email = emailInput.value.trim();
                if (!email || !email.includes('@')) return alert('Please enter a valid email.');
                alert('Thanks for subscribing, ' + email + '!');
                emailInput.value = '';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... existing initialization code ...

    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const emailInput = document.getElementById('email-newsletter');
            if (emailInput) {
                const email = emailInput.value.trim();
                if (!email || !email.includes('@')) {
                    alert('Please enter a valid email address to subscribe.');
                } else {
                    alert('Thank you for subscribing, ' + email + '!');
                    emailInput.value = ''; // Clear the input field
                }
            }
        });
    }

    // ... rest of your existing DOMContentLoaded code ...
});

function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('main-navigation');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('expanded');
            
            console.log("Menu button clicked! Expanded class added.");
        });
    } else {
        console.error("Could not find menu-toggle or main-navigation in the HTML!");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // ... all your other initialization functions ...
    setupMobileMenu();
});

const slider = document.querySelector('.product-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    slider.scrollLeft = scrollLeft - walk;
});


// 1. Separate Data for Population Products
const populationProducts = [
    {
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },{
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },{
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },{
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },{
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },{
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },{
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },{
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },{
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },{
        id: "serums",
        name: "Hydrating Serum",
        description: "Replenish and lock in moisture.",
        price: "$35",
        image: "https://pamojaskincare.com/cdn/shop/files/STEP_2_REPLENISH_HYDRATING_SERUM_PAMOJA_ULTIMATE_RITUAL_1080x.jpg?v=1757400019"
    },
];

// 2. Function to Render ONLY Population Products
function createPopulationCards() {
    const popGrid = document.getElementById('population-grid');
    if (!popGrid) return;

    popGrid.innerHTML = ''; // Clear existing static HTML

    populationProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-aos', 'fade-up');
        productCard.setAttribute('data-aos-delay', (index % 4) * 100); 
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
                <h3 id="${product.id}">${product.name}</h3>
                <p>${product.description}</p>
                <span class="price">${product.price_display || product.price}</span>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="view-more" data-id="${product.id}">View More</button>
            </div>
        `;

        popGrid.appendChild(productCard);
    });

    // Re-run setupCardBehavior so the new "Add to Cart" buttons work
    setupCardBehavior();
}

// 3. Initialize in your DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
    createProductCards();    // Your Featured Products
    createPopulationCards(); // Your NEW Population Products
    
    // ... rest of your code ...
});

// This targets ALL sliders on the page
const sliders = document.querySelectorAll('.product-slider');

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => { isDown = false; });
    slider.addEventListener('mouseup', () => { isDown = false; });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk;
    });
});

// login
// 2. Form switching logic
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const formTitle = document.getElementById('formTitle');
const toggleLink = document.getElementById('toggleLink');
const passwordMatchError = document.getElementById('passwordMatchError');

toggleLink.addEventListener('click', () => {
    if (loginForm.style.display === 'none') {
        // Currently on Register form, switch to Login
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        formTitle.textContent = 'LOGIN';
        toggleLink.textContent = 'Don\'t have an account? Register here.';
    } else {
        // Currently on Login form, switch to Register
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'REGISTER';
        toggleLink.textContent = 'Already have an account? Login here.';
    }
});

// 3. Simple form validation (for the Register form)
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        passwordMatchError.style.display = 'block';
    } else {
        passwordMatchError.style.display = 'none';
        // In a real app, you would submit the form data to a server here.
        console.log('Registration form submitted successfully (in a real app).');
        // For this example, we'll show a message box.
        showMessage('Registration successful!');
    }
});

// 4. Simple login handling
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    // In a real app, you would send the login data to a server for authentication.
    console.log('Login form submitted successfully (in a real app).');
    // For this example, we'll show a message box.
    showMessage('Logged in successfully!');
});

// 5. Function to show a temporary message box
function showMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--primary-color);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.5s ease;
    `;
    messageBox.textContent = message;
    document.body.appendChild(messageBox);

    // Animate the message box in
    setTimeout(() => {
        messageBox.style.opacity = '1';
    }, 10);

    // Animate the message box out and remove it
    setTimeout(() => {
        messageBox.style.opacity = '0';
        setTimeout(() => messageBox.remove(), 500);
    }, 2000);
}
function render(list) {
    grid.innerHTML = list.map(productCard).join('');
    setupCardBehavior();
    revealObserve();
}

function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const cat = categorySelect.value;
    let list = PRODUCTS.filter(p => (
        (cat === 'all' || p.cat === cat) &&
        (p.name.toLowerCase().includes(q))
    ));
    list = list.sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);
    render(list);
}

function setupCardBehavior() {
    $$('.add').forEach(btn => btn.addEventListener('click', e => {
        cartCount++;
        cartCountEl.textContent = cartCount;
        cartPing();
        btnSuccessFlash(e.currentTarget);
    }));
}

function btnSuccessFlash(el) {
    const original = el.textContent;
    el.textContent = 'Added ✓';
    el.style.background = 'linear-gradient(135deg, rgba(46, 204, 113, .25), rgba(49,169,255,.18))';
    setTimeout(() => {
        el.textContent = original;
        el.style.background = '';
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

let observer;
function revealObserve() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
        for (const e of entries) {
            if (e.isIntersecting) {
                e.target.classList.add('in-view');
                observer.unobserve(e.target);
            }
        }
    }, { threshold: .2 });
    $$('.reveal, .card').forEach(el => observer.observe(el));
}

const onScroll = () => {
    document.body.classList.toggle('scrolled', window.scrollY > 8);
}
window.addEventListener('scroll', onScroll, { passive: true });

if (searchInput) {
    [searchInput, categorySelect].forEach(el => el.addEventListener('input', applyFilters));
}
if (sortBtn) {
    sortBtn.addEventListener('click', () => {
        sortAsc = !sortAsc;
        sortBtn.textContent = sortAsc ? '↕ Sort by Price' : '↕ Sort by Price (Desc)';
        applyFilters();
    });
}

const joinBtn = $('#joinBtn');
if (joinBtn) {
    joinBtn.addEventListener('click', () => {
        const emailInput = $('#email');
        if (emailInput) {
            const email = emailInput.value.trim();
            if (!email || !email.includes('@')) return alert('Please enter a valid email.');
            alert('Thanks for subscribing, ' + email + '!');
            emailInput.value = '';
        }
    });
}

applyFilters();

    document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdown = document.querySelector(".dropdown");

  dropdownBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");

    // update aria-expanded for accessibility
    const expanded = dropdownBtn.getAttribute("aria-expanded") === "true";
    dropdownBtn.setAttribute("aria-expanded", !expanded);
  });

  // close dropdown when clicking outside
  window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });
});

// Close the dropdown if the user clicks outside of it
// dog section
document.addEventListener('DOMContentLoaded', () => {
            const factButton = document.getElementById('fact-button');
            const factBox = document.getElementById('fun-fact');

            const funFacts = [
                "Golden Retrievers have 'soft mouths,' meaning they were bred to carry game gently without damaging it. Some can even carry a raw egg without cracking it!",
                "The breed originated in Scotland in the mid-19th century and was developed by Lord Tweedmouth to be an ideal gun dog for hunting waterfowl.",
                "They are one of the most popular dog breeds in the United States and have a reputation for being excellent family pets due to their patient and tolerant nature.",
                "Golden Retrievers are known to be one of the smartest dog breeds, ranking in the top tier for intelligence and trainability.",
                "Two U.S. Presidents, Gerald Ford and Ronald Reagan, had Golden Retrievers while in office."
            ];

            let lastFactIndex = -1;

            factButton.addEventListener('click', () => {
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * funFacts.length);
                } while (newIndex === lastFactIndex);
                
                factBox.textContent = funFacts[newIndex];
                lastFactIndex = newIndex;
            });
        });