// Portfolio Interactive Features

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add scroll animations for sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Add fade-in animation to project items
const projectItems = document.querySelectorAll('.projects li');
projectItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
  
  setTimeout(() => {
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  }, 100);
});

// Contact form handler (if you add a form later)
function handleContactForm(event) {
  event.preventDefault();
  console.log('Form submitted!');
  // Add your form handling logic here
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', function() {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Utility function to add animation class
function addAnimation(element, animationName) {
  element.classList.add(animationName);
  element.addEventListener('animationend', () => {
    element.classList.remove(animationName);
  });
}

// Export functions for use in HTML (if needed)
window.portfolioScript = {
  handleContactForm,
  addAnimation
};
