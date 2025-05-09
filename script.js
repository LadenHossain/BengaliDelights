// Menu Data
const menuItems = {
    starters: [
        {
            name: "Vegetable Pakora",
            description: "Crispy fritters made with mixed vegetables and spices",
            price: "5৳",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Ezx1wbjkCP7sb9cFovPPlgvO2scpXR4mhqSk8WEBCIY_MAjjyqOvHGVy9lFtA0Lg912SlX7Ib9oZOy5cAI3W-Oj9G5-pvxIjbafw3FW_T53pWC8F5tI5RQyMzCRrdIsnu_LQXX7tUpgryuxYaXggX2DtTWajzukboF23psQD9jAfeJ5dT40ppRGs7g/s1600/1.%20Vegetable%20Pakora.png"
        },
        {
            name: "Chicken Tikka",
            description: "Tender chicken pieces marinated in spices and grilled",
            price: "8৳",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6Hvzd9IZ5XAzorI7J4ykdh8va2Bl8wH1hy3ptlJ02MhwquR3RxbWy4OU4I_a7oiPXoVA1Z3Kx7Sq4FE49KHicciYwM8YBKziXXEDz437BBa8nej7omTm_pR9AAShOFl3vpx1b5miLzOK9DX36i2BCFcHSRwi13H0V3hxRe_8dL6OZxtSb-fQ7WP9D9g/s1600/02.%20Chicken%20Tikka.png"
        }
    ],
    main: [
        {
            name: "Butter Chicken",
            description: "Tender chicken in a rich, creamy tomato sauce",
            price: "18৳",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicYZizIaVUxVCT0tToX-8WTKPbsvwOqtE6dInKS41t7pDvoZqnFE1p31u2l1XRs2KqV0CXGTsv3YJiMCOMuwnlgBXq69KjJtQ-vuYvw-24cXbDrkzB8It-hQNIA0kQA2lNtnHexsriIZHwhTVvDhrjFmzvrEmFuRL7kCQzdTrhOsh-iEC_zomx3JlijQ/s1600/3.%20Butter%20Chicken.png"
        },
        {
            name: "Vegetable Biryani",
            description: "Fragrant basmati rice cooked with mixed vegetables and spices",
            price: "16৳",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzHj873NFs09SIuSEdSjdXRupJyX6FTV4LcJb68unVi7-u6VTBfesRX2hiCdQyCXGcPHw4dXfdYoOQiYHIllouqQbkRr53wRK1EWrFyryb5CQYf2N7QQOSZvqD25bnwEgrpZTPdEzG4ea3OrBaNq3OPk0QiBzluu0Hz0X3DtvU2zTToOf-VO_uEgHaiA/s1600/4.%20Vegetable%20Biryani.png"
        }
    ],
    desserts: [
        {
            name: "Gulab Jamun",
            description: "Sweet milk dumplings in rose-flavored sugar syrup",
            price: "13৳",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOk8zddrzX-L_URUs1w-jeGmIp6ISt1foJDr_qHR-wVStO89I8KG01sCdsZbxa2mStxcsJgcFX_ibJGO5S0DQnijk4bZk4JlUnElnwl07waJh66ssf1D9uzY4icvMMSDObs8-KTG-uPizEyLcRT3V8TOZENU_p27qoQtINwdneApCX0g2stGCYCldY_A/s1600/5.%20Gulab%20Jamun.png"
        },
        {
            name: "Kheer",
            description: "Traditional rice pudding with nuts and cardamom",
            price: "11৳",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaqwWiWFUEX6QdiscVO8f5lDVkMtm5Zsg96nBqslDQbMsK89qFEA-bbAcV7i_TmMpa_p54UnaE5SHZiJC2YFH6aX74dtw_l8vl8ovLCsAvRTs6ugF8333lJOEO7R-zjjq5fOImHfVHIpcDX39S8_muNW8iLVK7nCw7g7jy3OsQtVuaIMyeM29XrDklKg/s1600/6.%20Kheer.png"
        }
    ],
    drinks: [
        {
            name: "Mango Lassi",
            description: "Sweet yogurt drink with fresh mango",
            price: "3৳",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGHTlYMQMtyuErN2r_na-jh2jpObUTixnlRHwXIk7njhRxi56Om_hzxUilXt4Ts-P8BwLHF7dyr44w0_iFVeGI6acl4TVV5-J5n3QT1dnQzsQMcDxxfF_DYCp7b0COS_w7e0UH8WacmMqozOpJwMS1ngHk-HA2VmWIf4Rt1nbtWmCL76tDaAPmPOUnLg/s1600/7.%20Mango%20Lassi.png"
        },
        {
            name: "Masala Chai",
            description: "Spiced Indian tea with milk",
            price: "3৳",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGDkoJBN6sN0sno2bgxzUtvZ5PNO93aUafd_AkyEXM1uaI5yJ0lH8MfxCraHpfR3pMhN7h2iloBZKTzQbhnwMhyCX5PdtaRjjlN7YwCUpkUjAQkaMb7WaZd_IlDrdPxz8MbdmBQTPklTUfYM1ieaT8FlYZbR0RziaH35MEdbjpbBRl1-jgPtEUG9Q9nw/s1600/8.%20Masala%20Chai.png"
        }
    ]
};

// DOM Elements
const menuItemsContainer = document.querySelector('.menu-items');
const categoryButtons = document.querySelectorAll('.category-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Initialize menu with starters
function initializeMenu() {
    displayMenuItems('starters');
}

// Display menu items for selected category
function displayMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    
    menuItems[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </div>
            ${item.image ? `<img src="${item.image}" alt="${item.name}" class="menu-item-image">` : ''}
        `;
        menuItemsContainer.appendChild(menuItem);
    });
}

// Handle category button clicks
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Display menu items for selected category
        displayMenuItems(button.dataset.category);
    });
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Form submission handling
const reservationForm = document.getElementById('reservation-form');
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your reservation! We will contact you shortly.');
        reservationForm.reset();
    });
}

// Initialize the menu when the page loads
document.addEventListener('DOMContentLoaded', initializeMenu);

// Add scroll event listener for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}); 