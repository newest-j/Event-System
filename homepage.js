const registerButtons = document.querySelectorAll('.btn-primary');

for (let i = 0; i < registerButtons.length; i++) {
    registerButtons[i].addEventListener('click', () => {
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
                    alert("Registration comppleted")
                } else {
                    alert("Please enter a valid number of tickets.");
                }
            }
        }
    });
}
