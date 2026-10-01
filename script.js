// Sample Property Data
const properties = [
  {
    id: 1,
    title: "2 BHK Independent Builder Floor",
    category: "2bhk",
    price: "₹38 Lakhs (For Sale)",
    location: "Sector 10 HBC, Faridabad",
    size: "900 Sq. Ft.",
    type: "Freehold Floor",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    desc: "2 BHK independent floor near Sector 10 market with modular kitchen, lift, and dedicated car parking."
  },
  {
    id: 2,
    title: "3 BHK Luxury Apartment",
    category: "3bhk",
    price: "₹68 Lakhs (For Sale)",
    location: "Sector 85, Greater Faridabad",
    size: "1550 Sq. Ft.",
    type: "Gated Society",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    desc: "Spacious 3 BHK apartment in modern high-rise society with clubhouse, security, and power backup."
  },
  {
    id: 3,
    title: "1 BHK Floor / Room Unit",
    category: "1bhk",
    price: "₹12,000 / Mo (For Rent)",
    location: "Sector 15, Faridabad",
    size: "500 Sq. Ft.",
    type: "Rental Unit",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    desc: "Furnished 1 BHK rental flat near main market & metro station, ideal for working professionals."
  },
  {
    id: 4,
    title: "4 BHK Premium Builder Floor",
    category: "4bhk",
    price: "₹1.15 Crore (For Sale)",
    location: "Sector 14, Faridabad",
    size: "2200 Sq. Ft.",
    type: "Luxury Floor",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    desc: "4 BHK luxury floor with Italian marble flooring, attached washrooms, and top-class woodwork."
  },
  {
    id: 5,
    title: "Industrial Storage Warehouse / Plot",
    category: "commercial",
    price: "₹90,000 / Mo (Rent / Lease)",
    location: "Sector 58, Industrial Area",
    size: "4500 Sq. Ft.",
    type: "Commercial Space",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    desc: "Commercial warehouse ready for lease with heavy vehicles entry, high ceiling, and 24x7 security."
  }
];

const phoneNum = "919599634332";

// Theme Switch Logic
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (theme === 'dark') {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// Load Saved Theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Mobile Nav Toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}

// Render Property Cards
function renderProperties(data) {
  const grid = document.getElementById('property-grid');
  grid.innerHTML = '';
  
  data.forEach(item => {
    const waText = encodeURIComponent(`Hi Nilesh Ji, I am interested in "${item.title}" at ${item.location} (${item.price}). Please share details.`);
    grid.innerHTML += `
      <div class="card">
        <div class="card-img-wrapper">
          <img src="${item.img}" alt="${item.title}" class="card-img">
          <span class="card-badge">${item.category}</span>
          <span class="card-price">${item.price}</span>
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-location"><i class="fa-solid fa-location-dot"></i> ${item.location}</p>
          <div class="card-specs">
            <span><i class="fa-solid fa-vector-square"></i> ${item.size}</span>
            <span><i class="fa-solid fa-building"></i> ${item.type}</span>
          </div>
          <div class="card-actions">
            <button class="btn btn-outline" onclick="openModal(${item.id})"><i class="fa-solid fa-eye"></i> Details</button>
            <a href="https://wa.me/${phoneNum}?text=${waText}" target="_blank" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> Inquiry</a>
          </div>
        </div>
      </div>
    `;
  });
}

// Category Filter Function
function filterProperties(category, event) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  if (category === 'all') { 
    renderProperties(properties); 
  } else { 
    renderProperties(properties.filter(item => item.category === category)); 
  }
}

// Modal View Function
function openModal(id) {
  const item = properties.find(p => p.id === id);
  const waText = encodeURIComponent(`Hi Nilesh Ji, I am interested in "${item.title}" at ${item.location}. Please share full details.`);
  
  document.getElementById('modal-body').innerHTML = `
    <img src="${item.img}" style="width:100%; height:200px; object-fit:cover;">
    <div style="padding: 20px;">
      <h3 style="font-size: 1.3rem; margin-bottom: 5px; color: var(--accent);">${item.title}</h3>
      <p style="color: var(--accent); font-weight:800; font-size:1.1rem; margin-bottom: 10px;">${item.price}</p>
      <p style="color: var(--text-muted); font-size:0.88rem; margin-bottom: 12px;"><i class="fa-solid fa-location-dot"></i> ${item.location}</p>
      <p style="font-size: 0.95rem; margin-bottom: 20px; color: var(--text-main);">${item.desc}</p>
      <a href="https://wa.me/${phoneNum}?text=${waText}" target="_blank" class="btn btn-whatsapp" style="width: 100%; padding: 12px;">
        <i class="fa-brands fa-whatsapp"></i> Chat with Nilesh Ji
      </a>
    </div>
  `;
  document.getElementById('property-modal').style.display = 'flex';
}

function closeModal() { 
  document.getElementById('property-modal').style.display = 'none'; 
}

window.onclick = function(e) { 
  if (e.target === document.getElementById('property-modal')) {
    closeModal(); 
  }
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('active');
  });
});

renderProperties(properties);