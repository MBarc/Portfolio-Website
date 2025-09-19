console.log('JavaScript file is loading...');
alert('JavaScript is working!');

// Rest of your existing code here...
// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing all functionality...');
    
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

    // Dynamic copyright year
    function updateCopyrightYear() {
        const currentYear = new Date().getFullYear();
        const copyrightElement = document.querySelector('footer p');
        if (copyrightElement) {
            copyrightElement.innerHTML = `&copy; ${currentYear} Michael Barcelo. Built with passion for technology and continuous learning.`;
        }
    }

    // Update copyright year
    updateCopyrightYear();

    // Chat Bot Notification Pointer
    initializeChatPointer();

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

    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    // Toggle mobile menu
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the active classes
            mobileMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Add haptic feedback for mobile devices
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    }

    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu && mobileMenuToggle) {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
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
                mobileMenuToggle.classList.remove('active');
            }
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        }
    });

    // Handle window resize - close menu if switching to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links (starting with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                let targetSection;
                
                // Handle special case for "top" or "home"
                if (targetId === 'top' || targetId === '' || targetId === 'home') {
                    targetSection = document.querySelector('.hero') || document.body;
                } else {
                    targetSection = document.getElementById(targetId);
                }
                
                if (targetSection) {
                    // Calculate offset for fixed header
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });

    // Header scroll effects (optional - add if you want dynamic header behavior)
    let lastScrollTop = 0;
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > 50 && header) {
            header.classList.add('scrolled');
        } else if (header) {
            header.classList.remove('scrolled');
        }
        
        // Optional: Hide header when scrolling down, show when scrolling up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            if (header) header.classList.add('hidden');
        } else {
            // Scrolling up
            if (header) header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
        
        // Update scroll progress indicator
        const scrollProgress = document.getElementById('scroll-progress');
        if (scrollProgress) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + '%';
        }
    });

    // Portfolio Chatbot JavaScript with DEBUG
    console.log('Initializing Portfolio Chatbot...');
    
    class PortfolioChatbot {
        constructor() {
            console.log('Creating PortfolioChatbot instance...');
            
            this.chatToggle = document.getElementById('chatToggle');
            this.chatContainer = document.getElementById('chatContainer');
            this.chatMessages = document.getElementById('chatMessages');
            this.chatInput = document.getElementById('chatInput');
            this.sendButton = document.getElementById('sendButton');
            this.typingIndicator = document.getElementById('typingIndicator');
            
            console.log('Chat elements found:');
            console.log('- chatToggle:', this.chatToggle);
            console.log('- chatContainer:', this.chatContainer);
            console.log('- chatMessages:', this.chatMessages);
            console.log('- chatInput:', this.chatInput);
            console.log('- sendButton:', this.sendButton);
            console.log('- typingIndicator:', this.typingIndicator);
            
            this.isOpen = false;
            this.isLoading = false;
            
            // Your n8n webhook endpoint
            this.webhookUrl = 'https://michaelbarcelo.com/webhook/portfolio-chat';
            
            if (this.chatToggle && this.chatContainer) {
                this.init();
                console.log('Chatbot initialized successfully!');
            } else {
                console.error('ERROR: Required chat elements not found!');
                console.error('Missing chatToggle:', !this.chatToggle);
                console.error('Missing chatContainer:', !this.chatContainer);
            }
        }
        
        init() {
            console.log('Setting up event listeners...');
            
            if (this.chatToggle) {
                this.chatToggle.addEventListener('click', () => {
                    console.log('Chat toggle clicked!');
                    this.toggleChat();
                });
            }
            
            if (this.sendButton) {
                this.sendButton.addEventListener('click', () => this.sendMessage());
            }
            
            if (this.chatInput) {
                this.chatInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        this.sendMessage();
                    }
                });
                
                // Auto-resize textarea
                this.chatInput.addEventListener('input', () => {
                    this.chatInput.style.height = 'auto';
                    this.chatInput.style.height = this.chatInput.scrollHeight + 'px';
                });
            }
        }
        
        toggleChat() {
            console.log('Toggling chat. Current state:', this.isOpen);
            
            this.isOpen = !this.isOpen;
            
            if (this.chatContainer) {
                this.chatContainer.classList.toggle('active', this.isOpen);
                console.log('Chat container active class:', this.chatContainer.classList.contains('active'));
            }
            
            if (this.chatToggle) {
                this.chatToggle.classList.toggle('active', this.isOpen);
                this.chatToggle.textContent = this.isOpen ? '✕' : '💬';
                console.log('Chat toggle text changed to:', this.chatToggle.textContent);
            }
            
            if (this.isOpen && this.chatInput) {
                this.chatInput.focus();
            }
            
            console.log('Chat is now:', this.isOpen ? 'OPEN' : 'CLOSED');
        }
        
        async sendMessage() {
            const message = this.chatInput.value.trim();
            if (!message || this.isLoading) return;
            
            this.addMessage(message, 'user');
            this.chatInput.value = '';
            this.chatInput.style.height = 'auto';
            this.showTyping();
            
            try {
                const response = await this.callWebhook(message);
                this.hideTyping();
                this.addMessage(response, 'bot');
            } catch (error) {
                this.hideTyping();
                this.addMessage('Sorry, I\'m having trouble connecting right now. Please try again later or contact Michael directly through his LinkedIn.', 'bot');
                console.error('Chat error:', error);
            }
        }
        
        async callWebhook(message) {
            this.isLoading = true;
            this.sendButton.disabled = true;
            
            try {
                const response = await fetch(this.webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: message,
                        timestamp: new Date().toISOString()
                    })
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                
                const data = await response.json();
                return data.reply || data.message || 'I received your message but couldn\'t generate a response.';
            } finally {
                this.isLoading = false;
                this.sendButton.disabled = false;
            }
        }
        
        addMessage(content, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            
            const avatar = sender === 'bot' ? '🤖' : '👤';
            
            messageDiv.innerHTML = `
                <div class="message-avatar">${avatar}</div>
                <div class="message-content">${this.escapeHtml(content)}</div>
            `;
            
            this.chatMessages.appendChild(messageDiv);
            this.scrollToBottom();
        }
        
        showTyping() {
            if (this.typingIndicator) {
                this.typingIndicator.classList.add('active');
                this.scrollToBottom();
            }
        }
        
        hideTyping() {
            if (this.typingIndicator) {
                this.typingIndicator.classList.remove('active');
            }
        }
        
        scrollToBottom() {
            if (this.chatMessages) {
                setTimeout(() => {
                    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
                }, 100);
            }
        }
        
        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
    }
    
    // Global function for suggestion buttons
    window.sendSuggestion = function(question) {
        console.log('Suggestion clicked:', question);
        const chatbot = window.portfolioChatbot;
        if (chatbot && chatbot.chatInput) {
            chatbot.chatInput.value = question;
            chatbot.sendMessage();
        } else {
            console.error('Chatbot not available for suggestion');
        }
    };
    
    // Initialize chatbot - REMOVED the nested DOMContentLoaded event listener
    console.log('Creating chatbot instance...');
    window.portfolioChatbot = new PortfolioChatbot();
    console.log('Chatbot setup complete!');
});

// Chat Pointer Notification JavaScript
// Add this function to your javascript/index.js file

function initializeChatPointer() {
    const pointerNotification = document.getElementById('chatPointerNotification');
    let hasScrolled = false;
    let pointerDismissed = false;
    
    if (!pointerNotification) {
        console.log('Chat pointer notification element not found');
        return;
    }
    
    // Removed localStorage check - pointer will show on every visit
    
    console.log('Initializing chat pointer notification...');
    
    // Function to hide the pointer
    function hidePointer() {
        if (pointerDismissed) return;
        
        console.log('Hiding chat pointer...');
        pointerDismissed = true;
        pointerNotification.classList.add('hidden');
        
        // Removed localStorage persistence - no longer storing that user has seen pointer
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (pointerNotification.parentNode) {
                pointerNotification.remove();
            }
        }, 500);
    }
    
    // Removed scroll-based hiding functionality
    
    // Hide pointer when chat is opened
    function handleChatToggle() {
        if (pointerDismissed) return;
        
        const chatContainer = document.getElementById('chatContainer');
        if (chatContainer && chatContainer.classList.contains('active')) {
            hidePointer();
        }
    }
    
    // Hide pointer when clicking on it
    pointerNotification.addEventListener('click', hidePointer);
    
    // Remove scroll listener (not needed anymore)
    
    // Add chat toggle listener (check periodically since chat might not exist yet)
    const checkChatToggle = setInterval(() => {
        const chatToggle = document.getElementById('chatToggle');
        if (chatToggle) {
            chatToggle.addEventListener('click', handleChatToggle);
            clearInterval(checkChatToggle);
        }
    }, 100);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        if (!pointerDismissed) {
            console.log('Auto-hiding pointer after 10 seconds');
            hidePointer();
        }
    }, 10000);
    
    console.log('Chat pointer notification initialized successfully');
}
