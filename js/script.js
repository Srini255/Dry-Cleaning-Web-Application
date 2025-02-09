// Array of service data
const services = [
    {
        title: "Dry Cleaning",
        description: "Keep your clothes spotless and fresh.",
        imgSrc: "path/to/image1.jpg"
    },
    {
        title: "Dyeing",
        description: "Give your clothes a new color and life.",
        imgSrc: "path/to/image2.jpg"
    },
    {
        title: "Darning",
        description: "Repair holes and tears in your clothes.",
        imgSrc: "path/to/image3.jpg"
    },
    {
        title: "Steam Ironing",
        description: "Remove wrinkles and give your clothes a crisp look.",
        imgSrc: "path/to/image4.jpg"
    },
    {
        title: "Roll Polish",
        description: "Polish your clothes for a shiny finish.",
        imgSrc: "path/to/image5.jpg"
    },
    {
        title: "Falls Stitching",
        description: "Secure the edges of your garments.",
        imgSrc: "path/to/image6.jpg"
    }
];

// Function to create service HTML
function createServiceHTML(service) {
    return `
        <div class="service">
            <div class="service-img">
                <img src="${service.imgSrc}" alt="${service.title}">
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        </div>
    `;
}

// Function to add services to the page
function addServicesToPage(services) {
    const container = document.getElementById('services-container');
    container.innerHTML = services.map(createServiceHTML).join('');
}

// Call the function to add services to the page
document.addEventListener('DOMContentLoaded', () => {
    addServicesToPage(services);
});
