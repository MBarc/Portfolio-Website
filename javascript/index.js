// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Calculate years of experience dynamically
    function calculateYearsExperience() {
        const startDate = new Date('2016-08-01'); // August 1, 2016
        const currentDate = new Date();
        
        // Calculate the difference in years
        const diffTime = currentDate - startDate;
        const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years
        
        // Round to nearest half year for more precision
        const roundedYears = Math.round(diffYears * 2) / 2;
        
        // Update the display
        const experienceElement = document.getElementById('years-experience');
        if (experienceElement) {
            experienceElement.textContent = roundedYears + '+';
        }
    }

    // Call the function to calculate experience
    calculateYearsExperience();

    // Slideshow functionality
    const slideshowImages = [
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true", // Image 1
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true", // Image 2 - Replace with your second image URL
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true", // Image 3 - Replace with your third image URL
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true", // Image 4 - Replace with your fourth image URL
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true", // Image 5 - Replace with your fifth image URL
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true", // Image 6 - Replace with your sixth image URL
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true", // Image 7 - Replace with your seventh image URL
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true", // Image 8 - Replace with your eighth image URL
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true", // Image 9 - Replace with your ninth image URL
        "https://github.com/MBarc/Portfolio-Website/blob/main/pictures/Michael_Barcelo_Profile_Picture.jpg?raw=true"  // Image 10 - Replace with your tenth image URL
    ];
    
    let currentSlideIndex = 0;
    
    function updateSlideshow() {
        const slideshowImage = document.getElementById('slideshow-image');
        const slideIndicator = document.getElementById('slide-indicator');
        
        slideshowImage.style.opacity = '0';
        
        setTimeout(() => {
            slideshowImage.src = slideshowImages[currentSlideIndex];
            slideIndicator.textContent = `${currentSlideIndex + 1} / ${slideshowImages.length}`;
            slideshowImage.style.opacity = '1';
        }, 250);
    }
    
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slideshowImages.length;
        updateSlideshow();
    }
    
    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slideshowImages.length) % slideshowImages.length;
        updateSlideshow();
    }

    // Setup slideshow controls and initialize
    document.getElementById('next-btn').addEventListener('click', nextSlide);
    document.getElementById('prev-btn').addEventListener('click', prevSlide);
    
    // Initialize the slideshow counter
    const slideIndicator = document.getElementById('slide-indicator');
    slideIndicator.textContent = `1 / ${slideshowImages.length}`;

    // Multi-language greeting animation
    const greetingElement = document.getElementById('greeting-text');
    const greetings = [
        { text: "👋 ¡Hola! Soy", language: "Spanish" },
        { text: "👋 Salut! Je suis", language: "French Canadian" },
        { text: "👋 Ciao! Sono", language: "Italian" },
        { text: "👋 Hallo! Ich bin", language: "German" },
        { text: "👋 Olá! Eu sou", language: "Portuguese" },
        { text: "👋 Привет! Я", language: "Russian" },
        { text: "👋 Hi! I'm", language: "English" }
    ];
    
    let currentGreetingIndex = 0;
    
    function animateGreeting() {
        // Fade out current greeting
        greetingElement.classList.remove('active');
        
        setTimeout(() => {
            // Change text and fade in
            greetingElement.textContent = greetings[currentGreetingIndex].text;
            greetingElement.classList.add('active');
            
            currentGreetingIndex++;
            
            // Continue cycling until we reach English, then stop
            if (currentGreetingIndex < greetings.length) {
                setTimeout(animateGreeting, currentGreetingIndex === greetings.length - 1 ? 2000 : 1500);
            }
        }, 400);
    }

    // Typing animation for job titles
    const typingElement = document.querySelector('.typing-animation');
    const jobTitles = ['DevOps Engineer', 'Software Engineer', 'IoT Engineer'];
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeAnimation() {
        const currentTitle = jobTitles[currentTitleIndex];
        
        if (isDeleting) {
            // Backspacing
            typingElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typeSpeed = 50; // Faster backspacing
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
                typeSpeed = 200; // Pause before starting next word
            }
        } else {
            // Typing forward
            typingElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typeSpeed = 100; // Normal typing speed
            
            if (currentCharIndex === currentTitle.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause when word is complete
            }
        }
        
        setTimeout(typeAnimation, typeSpeed);
    }
    
    // Start greeting animation immediately
    setTimeout(() => {
        greetingElement.classList.add('active');
        setTimeout(animateGreeting, 2000); // Start cycling after 2 seconds
    }, 500);
    
    // Start typing animation after greeting settles
    setTimeout(typeAnimation, 4500); // Start after all greetings are done
});

// Add this JavaScript code to your index.js file, after the existing DOMContentLoaded event

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get mobile menu elements
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    // Toggle mobile menu
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the active class
            mobileMenu.classList.toggle('active');
            
            // Change the hamburger icon
            if (mobileMenu.classList.contains('active')) {
                mobileMenuToggle.innerHTML = '✕'; // X icon when open
            } else {
                mobileMenuToggle.innerHTML = '☰'; // Hamburger when closed
            }
        });
    }

    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.innerHTML = '☰'; // Reset to hamburger
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenuToggle) {
            const isClickInsideMenu = mobileMenu.contains(e.target);
            const isClickOnToggle = mobileMenuToggle.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = '☰'; // Reset to hamburger
            }
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.innerHTML = '☰'; // Reset to hamburger
            }
        }
    });

    // Handle window resize - close menu if switching to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.innerHTML = '☰'; // Reset to hamburger
            }
        }
    });
});

// Navigation scroll functionality (add this too if you don't have it)
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links (starting with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Calculate offset for fixed header
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
});
