document.addEventListener("DOMContentLoaded", function () {
  // Text animation for hero section
  const heroText = "Hi, I'm Mohammed";
  const animatedText = document.querySelector(".animated-text");

  if (animatedText) {
    animatedText.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < heroText.length) {
        animatedText.textContent += heroText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    typeWriter();
  }

  // View More Button Functionality
  const viewMoreBtn = document.getElementById("view-more-btn");
  const moreContent = document.getElementById("more-content");

  if (viewMoreBtn && moreContent) {
    viewMoreBtn.addEventListener("click", function () {
      moreContent.classList.toggle("hidden");

      if (moreContent.classList.contains("hidden")) {
        viewMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> View more';
      } else {
        viewMoreBtn.innerHTML = '<i class="fas fa-chevron-up"></i> View less';
      }
    });
  }

  // Projects Carousel Functionality
  const projectsWrapper = document.querySelector(".projects-wrapper");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (projectsWrapper && prevBtn && nextBtn && projectCards.length > 0) {
    const cardWidth = projectCards[0].offsetWidth + 24; // Adding gap
    const visibleCards = Math.floor(projectsWrapper.offsetWidth / cardWidth);
    let currentIndex = 0;

    // Disable prev button initially
    prevBtn.style.opacity = "0.5";
    prevBtn.style.cursor = "not-allowed";

    // If there are only as many or fewer cards than can be displayed at once, disable both buttons
    if (projectCards.length <= visibleCards) {
      prevBtn.style.opacity = "0.5";
      prevBtn.style.cursor = "not-allowed";
      nextBtn.style.opacity = "0.5";
      nextBtn.style.cursor = "not-allowed";
    }

    prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        projectsWrapper.scrollLeft -= cardWidth;

        // Enable next button
        nextBtn.style.opacity = "1";
        nextBtn.style.cursor = "pointer";

        // If at the beginning, disable prev button
        if (currentIndex === 0) {
          prevBtn.style.opacity = "0.5";
          prevBtn.style.cursor = "not-allowed";
        }
      }
    });

    nextBtn.addEventListener("click", function () {
      if (currentIndex < projectCards.length - visibleCards) {
        currentIndex++;
        projectsWrapper.scrollLeft += cardWidth;

        // Enable prev button
        prevBtn.style.opacity = "1";
        prevBtn.style.cursor = "pointer";

        // If at the end, disable next button
        if (currentIndex >= projectCards.length - visibleCards) {
          nextBtn.style.opacity = "0.5";
          nextBtn.style.cursor = "not-allowed";
        }
      }
    });
  }
});
