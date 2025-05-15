const faqData = [
    {
        category: "General Questions",
        questions: [
            { title: "What is this mentorship program about?", content: "<h3>Program Overview</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>" },
            { title: "How long does the program last?", content: "<h3>Program Duration</h3><p>Our mentorship program typically runs for 3 months.</p>" }
        ]
    },
    {
        category: "For Mentees",
        questions: [
            { title: "How do I apply as a mentee?", content: "<h3>Mentee Application Process</h3><p>Complete the online form and get matched.</p>" },
            { title: "What should I expect from my mentor?", content: "<h3>Mentor Expectations</h3><p>Guidance, networking, and regular feedback.</p>" }
        ]
    },
    {
        category: "For Mentors",
        questions: [
            { title: "How do I become a mentor?", content: "<h3>Mentor Application Process</h3><p>Submit resume, write statement, and interview.</p>" },
            { title: "What is the time commitment?", content: "<h3>Time Commitment</h3><p>2-4 hours per month including check-ins.</p>" }
        ]
    },
    {
        category: "Technical & Support",
        questions: [
            { title: "How do I contact technical support?", content: "<h3>Technical Support</h3><p>Email, chat, or call during business hours.</p>" },
            { title: "What browsers are supported?", content: "<h3>Browser Compatibility</h3><p>Chrome, Firefox, Safari, and Edge.</p>" }
        ]
    }
];

function loadFAQs() {
    const faqHTML = faqData.map((section, index) => `
        <input type="radio" name="tabs" id="tab${index + 1}" class="tab-input" ${index === 0 ? "checked" : ""} />
        <label for="tab${index + 1}" class="tab-label">${section.category}</label>
        <div class="tab-content">
            ${section.questions.map((q, qIndex) => `
                <div class="accordion-item">
                    <input type="checkbox" id="accordion${index}-${qIndex}" class="accordion-input" />
                    <label for="accordion${index}-${qIndex}" class="accordion-label">${q.title}</label>
                    <div class="accordion-content">${q.content}</div>
                </div>
            `).join("")}
        </div>
    `).join("");

    document.querySelector(".faq-container").innerHTML = faqHTML;
}

document.addEventListener("DOMContentLoaded", function() {
    loadFAQs();
});
