document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item h3");
    
    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                document.querySelectorAll(".faq-item p").forEach(p => p.style.display = "none");
                answer.style.display = "block";
            }
        });
    });
});
