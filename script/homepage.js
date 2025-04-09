// Function for handling the register action
function handleRegisterClick(e) {
    e.preventDefault(); // Prevent the default anchor behavior

    const name = document.getElementById("nameInput").value.trim();
    const eventName = document.getElementById("eventInput").value.trim();
    const ticketCount = document.getElementById("ticketInput").value.trim();

    if (!name || !eventName || isNaN(ticketCount) || Number(ticketCount) < 1) {
      alert("Please fill out all fields correctly.");
      return;
    }

    console.log(`Name: ${name}`);
    console.log(`Event: ${eventName}`);
    console.log(`Tickets: ${ticketCount}`);

    alert(`Thank you, ${name}! You've successfully registered for ${eventName} with ${ticketCount} ticket(s).`);

    // Close modal after successful submission
    const modal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
    modal.hide();

    // Optionally reset form
    document.getElementById("registrationForm").reset();

}



// Function to dynamically generate event cards
function generateEventCards() {
    const eventData = JSON.parse(localStorage.getItem('events')) || [];

    if (eventData.length > 0) {
        let html = '';

        for (let i = 0; i < eventData.length; i++) {
            const event = eventData[i];
            html += `
              <div class="card shadow-lg mb-4 pt-2" style="width: 18rem;">
                <img src="${event.image}" class="card-img-top"  style="height: 15rem; "alt="Event Image">
                <div class="card-body">
                  <h5 class="card-title">${event.name}</h5>
                  <h6 class="card-subtitle text-muted mb-2">${event.date}</h6>
                  <p class="card-text">${event.details}</p>
                  <a href="#" class="btn btn-primary btn-register"  data-bs-toggle="modal" data-bs-target="#registrationModal">Register</a>
                </div>
              </div>
            `;
        }

        document.getElementById('eventCardContainer').innerHTML = html;
    }

    // Attach listeners to all 'Register' buttons, including static ones
    const registerButtons = document.querySelectorAll('.btn-register');
    registerButtons.forEach(button => {
        button.addEventListener('click', handleRegisterClick);
    });
}

// Run this after DOM is loaded
document.addEventListener("DOMContentLoaded", generateEventCards);


function myFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const titleElement = card.querySelector(".card-title");
        const titleText = titleElement.textContent || titleElement.innerText;

        if (titleText.toUpperCase().includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}



