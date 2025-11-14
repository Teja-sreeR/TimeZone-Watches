// Smooth scroll function for navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Navigation active link highlighting
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Scroll to section
        const sectionId = this.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// Modal functionality
const modal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close');

// Open modal when login button is clicked
loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    showLoginForm();
});

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Show login form
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

// Show register form
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Handle Login with validation
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate successful login
    alert('Login successful! Welcome back!');
    loginBtn.textContent = email.split('@')[0]; // Show username
    modal.style.display = 'none';
}

// Handle Registration with validation
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Password length validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Password match validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Simulate successful registration
    alert('Registration successful! Welcome ' + name + '!');
    loginBtn.textContent = name.split(' ')[0]; // Show first name
    modal.style.display = 'none';
}

// Cart functionality
let cart = [];

function addToCart(productName) {
    cart.push(productName);
    alert(productName + ' added to your orders!');
    updateOrderList();
}

function updateOrderList() {
    const orderList = document.getElementById('orderList');
    
    if (cart.length === 0) {
        orderList.innerHTML = '<li>No orders yet. Start shopping!</li>';
    } else {
        orderList.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = (index + 1) + '. ' + item;
            orderList.appendChild(li);
        });
    }
}

// Wishlist functionality
let wishlist = [];

function addToWishlist(productName) {
    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        alert(productName + ' added to your wishlist!');
        updateWishlist();
    } else {
        alert(productName + ' is already in your wishlist!');
    }
}

function updateWishlist() {
    const wishlistElement = document.getElementById('wishlist');
    
    if (wishlist.length === 0) {
        wishlistElement.innerHTML = '<li>Your wishlist is empty</li>';
    } else {
        wishlistElement.innerHTML = '';
        wishlist.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = (index + 1) + '. ' + item;
            wishlistElement.appendChild(li);
        });
    }
}

// Comment/Review functionality
function addComment() {
    const commentText = document.getElementById('commentText').value;
    
    if (!commentText.trim()) {
        alert('Please write a review before submitting');
        return;
    }
    
    const commentsList = document.getElementById('commentsList');
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = '<p>' + commentText + '</p><strong>⭐⭐⭐⭐⭐</strong>';
    
    commentsList.appendChild(commentDiv);
    document.getElementById('commentText').value = ''; // Clear textarea
    alert('Thank you for your review!');
}

// Issue Report Form
document.getElementById('issueForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('issueName').value;
    const email = document.getElementById('issueEmail').value;
    const description = document.getElementById('issueDescription').value;
    
    // Validation
    if (!name || !email || !description) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Success message
    alert('Thank you ' + name + '! Your issue has been reported. We will contact you at ' + email);
    
    // Clear form
    this.reset();
});
