// Function for handling the register action
function handleRegisterClick() {
    let name = prompt("Please enter your name:", "John Doe");

    if (name) {
        let eventName = prompt("Enter the name of the event you want to register for:", "Tech Conference");

        if (eventName) {
            let ticketCount = prompt("How many tickets would you like to buy?", "1");

            if (ticketCount && !isNaN(ticketCount)) {
                // Do something with the data
                console.log(`Name: ${name}`);
                console.log(`Event: ${eventName}`);
                console.log(`Tickets: ${ticketCount}`);
                alert("Registration completed");
            } else {
                alert("Please enter a valid number of tickets.");
            }
        }
    }
}

// Function to dynamically generate event cards
function generateEventCards() {
    const eventData = JSON.parse(localStorage.getItem('events')) || [];

    // Check if there are any events stored
    if (eventData.length > 0) {
        let html = '';

        // Loop through each event and create the HTML content
        for (let i = 0; i < eventData.length; i++) {
            const event = eventData[i];
            html += `
              <div class="card shadow-lg mb-4 pt-2" style="width: 18rem;">
                <img src="${event.image}" class="card-img-top" alt="Event Image">
                <div class="card-body">
                  <h5 class="card-title">${event.name}</h5>
                  <h6 class="card-subtitle text-muted mb-2">${event.date}</h6>
                  <p class="card-text">${event.details}</p>
                  <a href="#" class="btn btn-primary btn-register">Register</a>
                </div>
              </div>
            `;
        }

        // Inject the generated HTML into the container
        document.getElementById('eventCardContainer').innerHTML = html;

        // Attach the event listener to all the dynamically generated 'Register' buttons
        const registerButtons = document.querySelectorAll('.btn-register');
        registerButtons.forEach(button => {
            button.addEventListener('click', handleRegisterClick);
        });
    } 
}

// Call the function to generate the event cards after the DOM content is loaded
document.addEventListener("DOMContentLoaded", generateEventCards);

