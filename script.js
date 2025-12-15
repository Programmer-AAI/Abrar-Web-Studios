    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navButtons = document.getElementById("navButtons");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        navButtons.classList.toggle("active");
    });

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".project-card");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const dotsContainer = document.querySelector(".carousel-dots");

    let currentIndex = 0;
    let interval;

    /* CREATE DOTS */
    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    });

    const dots = document.querySelectorAll(".carousel-dots span");

    function goToSlide(index) {
        slides[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        currentIndex = index;

        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    /* AUTO SLIDE */
    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    startAutoSlide();

    document.querySelector(".carousel")
        .addEventListener("mouseenter", stopAutoSlide);

    document.querySelector(".carousel")
        .addEventListener("mouseleave", startAutoSlide);

});


  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Show loading spinner
      document.getElementById('loadingSpinner').style.display = 'block';
      
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          contactForm.reset();
          document.getElementById('successMessage').style.display = 'block';
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        document.getElementById('loadingSpinner').style.display = 'none';
      }
    });




     function openWhatsApp(button) {
    const plan = button.dataset.plan;
    const price = button.dataset.price;

    const message =
`Hello,

I’m interested in your ${plan} plan.
Budget: ${price}

I’d like to know more details about the process and timeline.
Thank you.`;

    const phone = "8801330910019";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
  }









 
