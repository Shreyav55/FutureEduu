document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchQuery = document.getElementById('searchInput').value;
    fetch(`http://localhost:3000/search?query=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = '';
            if (data.length > 0) {
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.textContent = item.name;
                    resultsContainer.appendChild(div);
                });
            } else {
                resultsContainer.textContent = 'No results found';
            }
        });
});
async function searchColleges(query) {
    const response = await fetch(`http://localhost:5000/api/colleges/search?name=${query}&state=${query}&city=${query}`);
    const data = await response.json();
    
    displayColleges(data);
}

function displayColleges(colleges) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; 
    colleges.forEach(college => {
        const collegeElement = document.createElement('div');
        collegeElement.innerHTML = `
            <h2>${college.name}</h2>
            <p>Address: ${college.address}</p>
            <p>Contact: ${college.contact}</p>
            <p>Location: ${college.location}</p>
            <p>State: ${college.state}</p>
            <p>City: ${college.city}</p>
        `;
        resultsContainer.appendChild(collegeElement);
    });
}

document.getElementById('searchBar').addEventListener('input', (event) => {
    searchColleges(event.target.value);
});
