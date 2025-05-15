const pricingPlans = [
    {
        title: "Basic",
        target: "For individuals",
        price: "$99",
        icon: "./images/pricing1.svg",
        features: ["1:1 Mentorship", "Weekly Check-ins", "Access to Resources", "Community Support"],
        containerClass: "", // No unique class
        buttonClass: "pricing-btn"
    },
    {
        title: "Pro",
        target: "For Startups",
        price: "$199",
        icon: "./images/pricing2.svg",
        features: ["1:1 Mentorship", "Weekly Check-ins", "Access to Resources", "Community Support"],
        containerClass: "pricing-container-pro", 
        headerTextClass: "pro-h5",
        listClass: "pricing-list-pro",
        buttonClass: "pricing-btn pricing-btn-pro"
    },
    {
        title: "Enterprise",
        target: "For big companies",
        price: "$399",
        icon: "./images/pricing3.svg",
        features: ["All analytics features", "Customizable dashboard", "Priority support", "Dedicated account manager"],
        containerClass: "", 
        buttonClass: "pricing-btn"
    }
];

function loadPricingPlans() {
    const pricingHTML = pricingPlans.map(plan => `
        <div class="pricing-container scroll-reveal ${plan.containerClass}">
            <div class="pricing-header">
                <img src="${plan.icon}" alt="${plan.title} plan Icon" />
                <div>
                    <p>${plan.target}<br /><strong class="${plan.headerTextClass || ''}">${plan.title}</strong></p>
                </div>
            </div>
            <p class="pricing-description">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
            </p>
            <p class="pricing-price">
                <strong>${plan.price}</strong> <span class="${plan.headerTextClass || ''}">/monthly</span>
            </p>
            <h5 class="${plan.headerTextClass || ''}">What's included</h5>
            <ul class="pricing-list ${plan.listClass || ''}">
                ${plan.features.map(feature => `<li>${feature}</li>`).join("")}
            </ul>
            <button class="${plan.buttonClass}">Get started</button>
        </div>
    `).join("");

    document.querySelector("main").innerHTML = pricingHTML;
}

document.addEventListener("DOMContentLoaded", function() {
    // Call the function to load pricing plans
    loadPricingPlans();
});
