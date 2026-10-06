document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOBILE MENU TOGGLE ---
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and times (X)
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close mobile menu when a navigation link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }


    // --- 2. CONTACT FORM TO WHATSAPP REDIRECT ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Fetch form field values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const category = document.getElementById('category').value;
            const message = document.getElementById('message').value.trim();

            // Ensure required fields are filled
            if (!name || !phone) {
                alert('Please fill in your Name and Phone Number.');
                return;
            }

            // Replace with your actual WhatsApp business number (include country code without + or 0)
            const whatsappNumber = "2348000000000"; 

            // Formulate WhatsApp message text
            let text = `Hello! I would like to make an inquiry.\n\n`;
            text += `*Name:* ${name}\n`;
            text += `*Phone:* ${phone}\n`;
            if (category) text += `*Product Interest:* ${category}\n`;
            if (message) text += `*Message:* ${message}\n`;

            // Encode for URL format
            const encodedText = encodeURIComponent(text);

            // Open WhatsApp with pre-filled message
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
            window.open(whatsappURL, '_blank');
        });
    }


    // --- 3. STICKY HEADER SHADOW ON SCROLL ---
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
        } else {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        }
    });

});
