const servicesItems = [
  {
    id: "service1",
    icon: "./images/icon1.svg",
    title: "Choose Your Mentor",
    description: `Browse our list of verified mentors in tech, business,<br />
            and design. Pick the one who aligns with <br />
            your goals.`,
    image: "./images/image1.svg",
  },
  {
    id: "service2",
    icon: "./images/icon2.svg",
    title: "Share Your Goals",
    description: ` Tell us what you are looking to learn or achieve.<br />
            We'll help you shape a roadmap with <br />your mentor`,
            image:"./images/image2.svg",
  },
  {
    id: "service3",
    icon: "./images/icon3.svg",
    title: "Start Your Mentorship Journey",
    description: `Book your first session and begin your personalized<br />
            mentorship experience with confidence.`,
            image:"./images/image3.svg",
  }
];

// Function to load services items dynamically




function loadServicesItems() {
    let serviceHTML = "";
    servicesItems.forEach((item) => {
        serviceHTML += `
            <div class="service-one scroll-reveal">
                <img src="${item.icon}" alt="service icon" width="40px" />
                <h4 class="sub-header">${item.title}</h4>
                <p class="service-sub-text">${item.description}</p>
                <img src="${item.image}" alt="service image" class="service-img" width="250px" />
            </div>
        `;
    });

    // Append the generated HTML to the services-content div
    document.querySelector(".services-content").innerHTML = serviceHTML;
}

document.addEventListener("DOMContentLoaded", function() {
    // Call the function to load services items
    loadServicesItems();
});

// Call the function when the page loads
// window.onload = loadServicesItems;
