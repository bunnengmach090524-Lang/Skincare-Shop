
// login
// // 2. Form switching logic
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