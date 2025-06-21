document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('.logo, .btn-signin, .tagline, .subtitle');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
    });

    // Message input functionality
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendMessage');

    function handleMessage() {
        const message = userInput.value.trim();
        if (message) {
            // Add ripple effect to button
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            sendButton.appendChild(ripple);
            
            // Clear input
            userInput.value = '';
            
            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 1000);
        }
    }

    // Event listeners
    sendButton.addEventListener('click', handleMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleMessage();
        }
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .ripple {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        animation: ripple 1s ease-out;
    }

    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
