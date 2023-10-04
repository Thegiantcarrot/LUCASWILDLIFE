document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("popup-close");
    const hideButton = document.getElementById("hide-button");
    const dismissCheckbox = document.getElementById("dismiss-checkbox");

    // Function to display the popup
    function showPopup() {
        popup.style.display = "block";
    }

    // Function to hide the popup
    function hidePopup() {
        popup.style.display = "none";
    }

    // Show the popup initially if not dismissed previously
    if (!localStorage.getItem("dismissed")) {
        setTimeout(showPopup, 15000); // Show after 1 minute (adjust as needed)
    }

    // Event listener for the close button
    closeButton.addEventListener("click", hidePopup);

    // Event listener for the "Hide" button
    hideButton.addEventListener("click", function () {
        hidePopup();
        localStorage.setItem("dismissed", "true"); // Mark as dismissed
    });

    // Event listener for the "Don't show again" checkbox
    dismissCheckbox.addEventListener("change", function () {
        if (dismissCheckbox.checked) {
            localStorage.setItem("dismissed", "true"); // Mark as dismissed
        } else {
            localStorage.removeItem("dismissed"); // Remove the dismissed flag
        }
    });
});

