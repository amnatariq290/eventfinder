const events = [
  {
    name: "Tech Conference 2025",
    date: "June 10, 2025",
    time: "10:00 AM",
    location: "Lahore Expo Center",
    description: "Explore the future of technology and meet industry leaders."
  },
  {
    name: "Startup Meetup",
    date: "June 12, 2025",
    time: "3:00 PM",
    location: "NEST I/O, Karachi",
    description: "Connect with startup founders, VCs, and innovators."
  },
  {
    name: "Art & Culture Fest",
    date: "June 15, 2025",
    time: "12:00 PM",
    location: "Alhamra Arts Council, Lahore",
    description: "Experience diverse cultures and vibrant art performances."
  }
];

const container = document.getElementById("eventsContainer");

function displayEvents(filteredEvents) {
  container.innerHTML = "";
  filteredEvents.forEach(event => {
    container.innerHTML += `
      <div class="event-card">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p class="card-text">${event.description}</p>
            <a href="#" class="btn btn-primary">Register</a>
          </div>
        </div>
      </div>
    `;
  });
}

displayEvents(events);

// Search functionality
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = events.filter(event =>
    event.name.toLowerCase().includes(query)
  );
  displayEvents(filtered);
});
