// Get buttons and elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMessage = document.getElementById('successMessage');
const content = document.querySelector('.content');

// Make the "No" button move away when mouse hovers over it
noBtn.addEventListener('mouseenter', function() {
    // Calculate random position within viewport, accounting for button size
    const maxX = Math.max(20, document.documentElement.clientWidth - noBtn.offsetWidth - 20);
    const maxY = Math.max(20, document.documentElement.clientHeight - noBtn.offsetHeight - 20);
    
    const randomX = 20 + Math.random() * (maxX - 20);
    const randomY = 20 + Math.random() * (maxY - 20);
    
    // Position the button absolutely and move it
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Handle "Yes" button click
let heartsInterval = null;
yesBtn.addEventListener('click', function() {
    content.style.display = 'none';
    successMessage.classList.remove('hidden');
    
    // Create floating hearts animation
    createFloatingHearts();
});

// Create floating hearts for celebration
let heartCount = 0;
const maxHearts = 50; // Limit total hearts to prevent memory issues

function createFloatingHearts() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];
    
    heartsInterval = setInterval(() => {
        // Stop creating hearts after reaching the limit
        if (heartCount >= maxHearts) {
            clearInterval(heartsInterval);
            return;
        }
        
        heartCount++;
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * document.documentElement.clientWidth + 'px';
        heart.style.top = document.documentElement.clientHeight + 'px';
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
