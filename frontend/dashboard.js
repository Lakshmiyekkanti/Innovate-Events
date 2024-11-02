// Sample credentials for demonstration purposes
const adminUsername = "admin"; // Replace with your admin username
const adminPassword = "password"; // Replace with your admin password

document.getElementById('login-button').addEventListener('click', login);
// Sample events data
let events = [];

// Load event data into the event list
function loadEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = ''; // Clear the list
    events.forEach((event, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${event.name} (${event.date})</span>
            <button onclick="deleteEvent(${index})"><i class="fas fa-trash"></i></button>
        `;
        eventList.appendChild(li);
    });
}

// Add an event when the form is submitted
document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventDescription = document.getElementById('event-description').value;

    // Add the new event to the events array
    events.push({ name: eventName, date: eventDate, description: eventDescription });

    // Clear the form
    this.reset();

    // Load the updated event list
    loadEvents();
});

// Delete an event from the list
function deleteEvent(index) {
    events.splice(index, 1); // Remove the event from the array
    loadEvents(); // Refresh the event list
}

// Existing code for login and other sections...

function loadDashboardData() {
    // Load users and reservations data...
    loadEvents(); // Load events when the dashboard is accessed
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('login-error');
    const loginSuccess = document.getElementById('login-success');

    // Clear any previous messages
    loginError.textContent = '';
    loginSuccess.textContent = '';

    // Check if credentials are correct
    if (username === adminUsername && password === adminPassword) {
        // Hide the login form and show the dashboard
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        loginSuccess.textContent = 'Login successful!'; // Optional success message

        // Optionally, you can call a function to load data
        loadDashboardData();
    } else {
        // Display an error message
        loginError.textContent = 'Invalid username or password.';
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function logout() {
    // Hide the dashboard and show the login form
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function loadDashboardData() {
    // Here, you can add logic to fetch and display data for total users, reservations, etc.
    document.getElementById('total-users').textContent = '100'; // Example data
    document.getElementById('total-reservations').textContent = '50'; // Example data
    document.getElementById('recent-bookings').textContent = '20'; // Example data

    // Example of loading recent reservations
    const recentReservations = [
        { type: 'Room', name: 'John Doe', date: '2024-11-01', guests: 10 },
        { type: 'Table', name: 'Jane Smith', date: '2024-11-02', guests: 5 }
    ];

    const recentReservationsTable = document.getElementById('recent-reservations');
    recentReservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${reservation.type}</td><td>${reservation.name}</td><td>${reservation.date}</td><td>${reservation.guests}</td>`;
        recentReservationsTable.appendChild(row);
    });
}
