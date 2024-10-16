document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.getElementById("intro");
    const navigationSection = document.getElementById("navigation");
    const description = document.querySelector('.typed-blurb');

    // Function to reveal elements
    const revealElements = () => {
        // Reveal the intro section
        introSection.style.opacity = '1';
        const profilePic = document.querySelector('.profile-pic');
        const typedText = document.querySelector('.typed-text');

        profilePic.style.opacity = '1';
        profilePic.style.transform = 'translateY(0)';
        typedText.style.opacity = '1';
        typedText.style.transform = 'translateY(0)';
        
        // Make the description visible first
        description.style.opacity = '1'; 

        // Add class to start typing animation
        description.classList.add('typed-blurb');

        // Hide cursor after typing is complete
        setTimeout(() => {
            description.classList.add('cursor-hidden');
        }, 4000); // Match this duration with the typing animation
        
        // Reveal navigation
        navigationSection.classList.add('visible');
    };

    // Listen for mouse movement events
    document.addEventListener('mousemove', () => {
        // Check if elements are already visible
        if (introSection.style.opacity === '1') return;

        // Reveal elements on first mouse movement
        revealElements();
    });
});
