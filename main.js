   // Async function to fetch data from the backend
   async function fetchProjects() {
    try {
        const response = await axios.get('http://127.0.0.1:4000/api/works'); // Backend API URL
        const projects = response.data.data; // Assuming the response is an array of project objects

        const gridContainer = document.getElementById('project-grid');
        gridContainer.innerHTML = ''; // Clear existing content

        // Loop through projects and append them to the grid using template literals
        projects.forEach(project => {
            const projectElement = `
                <div class="bg-zinc-900 rounded-lg overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                </div>
            `;
            gridContainer.innerHTML += projectElement; // Append the created HTML
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

// Call the function to fetch projects
fetchProjects();