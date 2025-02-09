// Array of service data
const services = [
    {
        title: "Dry Cleaning",
        description: "Keep your clothes spotless and fresh.",
        imgSrc: "./assets/clothes.png"
    },
    {
        title: "Dyeing",
        description: "Give your clothes a new color and life.",
        imgSrc: "./assets/clothes.png"
    },
    {
        title: "Darning",
        description: "Repair holes and tears in your clothes.",
        imgSrc: "./assets/clothes.png"
    },
    {
        title: "Steam Ironing",
        description: "Remove wrinkles and give your clothes a crisp look.",
        imgSrc: "./assets/clothes.png"
    },
    {
        title: "Roll Polish",
        description: "Polish your clothes for a shiny finish.",
        imgSrc: "./assets/clothes.png"
    },
    {
        title: "Falls Stitching",
        description: "Secure the edges of your garments.",
        imgSrc: "./assets/clothes.png"
    }
];

// Function to create service HTML
function createServiceHTML(service) {
    return `
        <div class="service">
            <div class="service-img">
                <img src="${service.imgSrc}" alt="${service.title} ">
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
