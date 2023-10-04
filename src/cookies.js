         // Function to delete all existing cookies
        function deleteAllCookies() {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                const cookieName = cookie.split('=')[0];
                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            }
        }

        // Event handler for "Reject All" button click
        document.getElementById('rejectAll').addEventListener('click', function() {
            // Delete all existing cookies
            deleteAllCookies();

            // Hide the cookie preferences popup
            document.getElementById('cookiePopup').style.display = 'none';

            // Optionally, you can display a message indicating that cookies have been rejected.
            alert('Cookies have been rejected.');

            // Additional actions can be performed here as needed.
        });

        // Event handler for "Accept All" button click
        document.getElementById('acceptAll').addEventListener('click', function() {
            // Handle accepting cookies (e.g., set necessary cookies).
            // This part of the code would depend on your specific cookie handling logic.

            // Hide the cookie preferences popup
            document.getElementById('cookiePopup').style.display = 'none';

            // Optionally, you can display a message indicating that cookies have been accepted.
            alert('Cookies have been accepted.');

            // Additional actions can be performed here as needed.
        });

        // Show the cookie preferences popup when the page loads (you can trigger this based on user preferences)
        document.getElementById('cookiePopup').style.display = 'block';