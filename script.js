document.getElementById("learnMore").addEventListener("click", function() {
    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        this.textContent = "Show Less";
    } else {
        moreInfo.style.display = "none";
        this.textContent = "Learn More";
    }
});
// JavaScript for form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    var form = this;
    
    // Check if the form is valid
    if (form.checkValidity() === false) {
        event.stopPropagation();
    } else {
        // Display success message
        document.getElementById("successMessage").style.display = "block";

        // Optionally: Clear form fields after successful submission
        form.reset();
       
    }

    
});
