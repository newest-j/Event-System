
const eventData = JSON.parse(localStorage.getItem('events')) || [];

// Get both signout elements
const signoutButtons = document.querySelectorAll('#signout');

// Add event listener for each signout button
signoutButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    window.location.href = "index.html";
  });
});


// Check if there are any events stored
if (eventData.length > 0) {
  let html = '';

  // Loop through each event and create the HTML content
  for (let i = 0; i < eventData.length; i++) {
    const event = eventData[i];
    html += `
          <div class="card shadow-lg mb-4" style="width: 18rem;">
            <img src="${event.image}" class="card-img-top" alt="Event Image">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <h6 class="card-subtitle text-muted mb-2">${event.date}</h6>
              <p class="card-text">${event.details}</p>
            </div>
          </div>
          <a href="user.html" class="btn btn-outline-primary">Create Another Event</a>
        `;
  }

  // Inject the generated HTML into the container
  document.getElementById('eventCardContainer').innerHTML = html;
} else {
  // If no events are found, display a warning message
  document.getElementById('eventCardContainer').innerHTML = `
        <div class="alert alert-warning text-center w-100">
          No event data found. Please go back and create an event.
        </div>
      `;
}
const userData = JSON.parse(localStorage.getItem('user'));
if (userData && userData.userName) {
  document.getElementById('username').textContent = userData.userName;
}