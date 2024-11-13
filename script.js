// Sample data
const players = [
    { name: 'Joel Embiid', team: 'PHI', points: 33, rebounds: 10.8, assists: 5.7 },
    { name: 'Jalen Brunson', team: 'NYK', points: 32.4, rebounds: 3.3, assists: 7.5 },
    { name: 'Shai Gilgeous-Alexander', team: 'OKC', points: 30.2, rebounds: 7.2, assists: 6.4 },
    { name: 'Tyrese Maxey', team: 'PHI', points: 29.8, rebounds: 5.2, assists: 6.8 },
    { name: 'Donovan Mitchell', team: 'CLE', points: 29.6, rebounds: 5.4, assists: 4.7 }
];

// Function to populate the table
function populateTable(data) {
    const tableBody = document.getElementById('player-data');
    tableBody.innerHTML = ''; // Clear the table body

    data.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.team}</td>
            <td>${player.points}</td>
            <td>${player.rebounds}</td>
            <td>${player.assists}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listeners
document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);

// Populate the table on initial load
populateTable(players);
