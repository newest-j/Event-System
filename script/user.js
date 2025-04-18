const isLoggedIn = localStorage.getItem('user');




// Check if the user is logged in, if not redirect to the signin page
if (!isLoggedIn) {
    window.location.href = "signin.html";
}

// Get both signout elements
const signoutButtons = document.querySelectorAll('#signout');

// Add event listener for each signout button
signoutButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        window.location.href = "/index.html";
    });
});


const form = document.querySelector('#eventForm');
const button = document.querySelector('.btn');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const eventName = formData.get('name').trim();
    const eventDate = formData.get('date').trim();
    const details = formData.get('details').trim();
    const number = formData.get('number').trim()
    const imageFile = formData.get('image');

    const defaultImage = '../images/default.jpg'; // Make sure this path is correct relative to events.html

    // Load existing events from localStorage or initialize an empty array if none exist
    let events = JSON.parse(localStorage.getItem('events')) || [];

    const saveEvent = (image) => {
        const newEvent = {
            name: eventName,
            date: eventDate,
            number: number,
            details: details,
            image: image
        };

        events.push(newEvent); // Add the new event to the array
        localStorage.setItem('events', JSON.stringify(events)); // Save the updated array
        window.location.href = 'event.html'; // Redirect to events page
    };

    if (imageFile && imageFile.size > 0) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const eventImage = event.target.result;
            saveEvent(eventImage);
        };
        reader.readAsDataURL(imageFile);
    } else {
        saveEvent(defaultImage); // Use the default image if no image is provided
    }
});

const userData = JSON.parse(localStorage.getItem('user'));
if (userData && userData.userName) {
  document.getElementById('username').textContent = userData.userName;
}
