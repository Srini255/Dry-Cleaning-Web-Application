const bubbleContainer = document.querySelector('.bubble-container');

// Function to create a bubble
function createBubble() {
    const bubble = document.createElement('div');
    const size = Math.random() * 50 + 10; // Random size between 10px and 60px

    bubble.classList.add('bubble');
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
    bubble.style.animationDuration = `${Math.random() * 5 + 3}s`; // Random speed (3-8s)

    bubbleContainer.appendChild(bubble);

    // Remove the bubble after it finishes animation
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Generate bubbles periodically
setInterval(createBubble, 5000);
