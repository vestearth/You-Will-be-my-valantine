// Get buttons and elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMessage = document.getElementById('successMessage');
const content = document.querySelector('.content');

// Make the "No" button move away when mouse hovers over it
noBtn.addEventListener('mouseenter', function() {
    // Get the button's current position
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();
    
    // Calculate random position within viewport
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Position the button absolutely and move it
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Handle "Yes" button click
yesBtn.addEventListener('click', function() {
    content.style.display = 'none';
    successMessage.classList.remove('hidden');
    
    // Create floating hearts animation
    createFloatingHearts();
});

// Create floating hearts for celebration
function createFloatingHearts() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.opacity = '0.8';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.transition = 'all 3s ease-out';
        
        document.body.appendChild(heart);
        
        // Animate the heart floating up
        setTimeout(() => {
            heart.style.top = '-100px';
            heart.style.opacity = '0';
            heart.style.transform = 'translateX(' + (Math.random() * 200 - 100) + 'px)';
        }, 100);
        
        // Remove the heart after animation
        setTimeout(() => {
            heart.remove();
        }, 3100);
    }, 300);
}

// Prevent accidental clicks on "No" button (mobile devices)
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // Trigger the mouseenter event behavior
    noBtn.dispatchEvent(new Event('mouseenter'));
});

// Make "No" button also move on touch devices
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    noBtn.dispatchEvent(new Event('mouseenter'));
});
