// testimonials.js

// Simulate fetching testimonial data (can be replaced with actual API call later)
function fetchTestimonials() {
  return new Promise((resolve, reject) => {
    // Simulated data
    const testimonialsData = [
      {
        imgSrc: "assets/img/testimonial/01.jpg",
        name: "Sylvia H Green",
        role: "Customer",
        quote:
          "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
        rating: 5,
      },
      {
        imgSrc: "assets/img/testimonial/02.jpg",
        name: "Gordo Novak",
        role: "Customer",
        quote:
          "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
        rating: 5,
      },
      {
        imgSrc: "assets/img/testimonial/03.jpg",
        name: "Reid E Butt",
        role: "Customer",
        quote:
          "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
        rating: 5,
      },
      {
        imgSrc: "assets/img/testimonial/04.jpg",
        name: "Parker Jimenez",
        role: "Customer",
        quote:
          "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
        rating: 5,
      },
      {
        imgSrc: "assets/img/testimonial/05.jpg",
        name: "Heruli Nez",
        role: "Customer",
        quote:
          "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
        rating: 5,
      },
    ];

    // Simulate an API response delay (optional)
    setTimeout(() => resolve(testimonialsData), 1000);
  });
}

// Function to render testimonials dynamically
function renderTestimonials() {
  fetchTestimonials().then((testimonials) => {
    const testimonialSlider = document.getElementById("testimonial-slider");

    testimonials.forEach((testimonial) => {
      const testimonialItem = document.createElement("div");
      testimonialItem.classList.add("testimonial-single");

      testimonialItem.innerHTML = `
       
        <div class="testimonial-content">
          <div class="testimonial-author-img">
            <img src="${testimonial.imgSrc}" alt="" />
          </div>
          <div class="testimonial-author-info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.role}</p>
          </div>
        </div>
        <div class="testimonial-quote">
          <span class="testimonial-quote-icon"><i class="flaticon-quote"></i></span>
          <p>${testimonial.quote}</p>
        </div>
        <div class="testimonial-rate">
          ${"★".repeat(testimonial.rating)} ${"☆".repeat(
        5 - testimonial.rating
      )}
        </div>
       
      `;

      testimonialSlider.appendChild(testimonialItem);
    });
  });
}

// Call the renderTestimonials function once the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  renderTestimonials();
});
