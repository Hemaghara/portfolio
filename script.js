const images = document.querySelectorAll('.circle-container img');
const centralLogo = document.querySelector('.central-logo');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        centralLogo.src = img.getAttribute('src');  
        centralLogo.style.opacity = 1;
    });

    img.addEventListener('mouseleave', () => {
        centralLogo.style.opacity = 0;
    });
});


/*contact form*/

document.getElementById("contactForm").addEventListener("submit", async function(event) {
            event.preventDefault(); 

            const form = event.target;
            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData
                });

           
                const result = await response.json();
                
                if (response.ok && result.success) {
                    document.querySelector(".contact-container").style.display = 'none'; 
                    document.getElementById("formMessage").style.display = 'flex'; 
                } else {
                    console.error('Form submission error:', result);
                    alert('There was an error submitting the form. Please try again.');
                }
            } catch (error) {
                console.error("Form submission error:", error);
                alert('There was a network error. Please try again later.');
            }
        });

        document.getElementById("goBack").addEventListener("click", function(event) {
            event.preventDefault(); 

       
            document.querySelector("#contactForm").reset();

            
            document.getElementById("formMessage").style.display = 'none'; 
            document.querySelector(".contact-container").style.display = 'flex';
        });

        function toggleMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
        }