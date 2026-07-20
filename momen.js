
// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeWorks();
    initializeTestimonials();
    initializeAnimations();
    initializeNavigation();
    initializeMobileMenu();
    initializeEmailForm();
});





// ===== بيانات التصميمات =====
const designsData = {

    
    1: {
        id: 1,
        category: "Graphic Design",
        title: "Brand Identity Design",
        description: "A complete brand identity system for a modern tech startup, focusing on creating a memorable visual language that communicates innovation and reliability.",
        client: "TechVision Inc.",
        year: "2024",
        timeline: "6 weeks",
        status: "Completed",
        tags: ["Logo Design", "Branding", "Typography", "Color Palette", "Brand Guidelines"],
        livePreview: "https://dribbble.com/shots/your-design",
        images: {
            main: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
                "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=800&q=80"
            ]
        }
    },
    2: {
        id: 2,
        category: "UI/UX Design",
        title: "E-commerce UI Design",
        description: "Modern e-commerce platform design focusing on user experience, conversion optimization, and mobile responsiveness.",
        client: "ShopEasy",
        year: "2024",
        timeline: "8 weeks",
        status: "Live",
        tags: ["UI Design", "E-commerce", "Mobile First", "Prototyping", "User Testing"],
        livePreview: "https://dribbble.com/shots/your-ui-design",
        images: {
            main: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=800&q=80"
            ]
        }
    },
    3: {
        id: 3,
        category: "Graphic Design",
        title: "Illustration Series",
        description: "Digital illustration series exploring the intersection of technology and nature, created for a tech company's marketing campaign.",
        client: "NatureTech",
        year: "2023",
        timeline: "4 weeks",
        status: "Published",
        tags: ["Digital Art", "Illustration", "Marketing", "Visual Storytelling"],
        livePreview: "https://behance.net/gallery/your-illustrations",
        images: {
            main: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1104&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1104&q=80",
                "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=800&q=80"
            ]
        }
    },
    4: {
        id: 4,
        category: "Graphic Design",
        title: "Packaging Design",
        description: "Sustainable packaging design for an eco-friendly product line, focusing on minimalism and environmental consciousness.",
        client: "EcoGoods",
        year: "2023",
        timeline: "5 weeks",
        status: "In Production",
        tags: ["Packaging", "Sustainability", "Print", "Product Design"],
        livePreview: "https://behance.net/gallery/your-packaging",
        images: {
            main: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=800&q=80"
            ]
        }
    },
    5: {
        id: 5,
        category: "UI/UX Design",
        title: "Mobile App Design",
        description: "Fitness tracking mobile app with personalized workout plans and progress analytics.",
        client: "FitLife",
        year: "2024",
        timeline: "10 weeks",
        status: "In Development",
        tags: ["Mobile App", "Fitness", "UI Design", "User Flow", "Wireframing"],
        livePreview: "https://dribbble.com/shots/your-mobile-app",
        images: {
            main: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=800&q=80",
                "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&w=800&q=80"
            ]
        }
    }
};

// ===== Theme Toggle =====
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        document.body.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ===== Works Section =====
function initializeWorks() {
    // بيانات التصميم الجرافيكي
    const graphicWorks = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80',
            title: 'Brand Identity Design',
            category: 'Graphic Design',
            tags: ['Logo Design', 'Branding']
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1104&q=80',
            title: 'Illustration Series',
            category: 'Graphic Design',
            tags: ['Digital Art', 'Illustration']
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            title: 'Packaging Design',
            category: 'Graphic Design',
            tags: ['Packaging', 'Sustainability']
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
            title: 'Social Media Campaign',
            category: 'Marketing Design',
            tags: ['Social Media', 'Marketing']
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            title: 'Typography Project',
            category: 'Graphic Design',
            tags: ['Typography', 'Print']
        }
    ];
    
    // بيانات الـ UI/UX
    const uiWorks = [
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
            title: 'E-commerce UI Design',
            category: 'UI/UX Design',
            tags: ['E-commerce', 'Web Design']
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            title: 'Mobile App Design',
            category: 'UI/UX Design',
            tags: ['Mobile App', 'Fitness']
        },
        {
            id: 8,
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            title: 'Website Redesign',
            category: 'Web Design',
            tags: ['Web Design', 'Redesign']
        },
        {
            id: 9,
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            title: 'Dashboard Design',
            category: 'UI/UX Design',
            tags: ['Dashboard', 'Analytics']
        },
        {
            id: 10,
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            title: 'User Flow Mapping',
            category: 'UX Design',
            tags: ['User Flow', 'Wireframing']
        }
    ];
    
    const graphicScroll = document.querySelector('.graphic-scroll');
    const uiScroll = document.querySelector('.ui-scroll');
    
    graphicWorks.forEach(work => {
        const workCard = createWorkCard(work);
        graphicScroll.appendChild(workCard);
    });
    
    uiWorks.forEach(work => {
        const workCard = createWorkCard(work);
        uiScroll.appendChild(workCard);
    });
    
    initializeScrollControls();
}

function createWorkCard(work) {
    const workCard = document.createElement('div');
    workCard.className = 'work-card glass-effect';
    workCard.setAttribute('data-design-id', work.id);
    workCard.setAttribute('data-category', work.category.toLowerCase().includes('graphic') ? 'graphic' : 'ui');
    
    workCard.innerHTML = `
        <img src="${work.image}" alt="${work.title}" class="work-image" loading="lazy">
        <div class="work-content">
            <h3>${work.title}</h3>
            <p>${work.category}</p>
            <div class="work-tags">
                ${work.tags.map(tag => `<span class="work-tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="work-overlay">
            <i class="fas fa-expand-alt"></i>
            <span>View Details</span>
        </div>
    `;
    
    // إضافة event listener للنقر
    workCard.addEventListener('click', function(e) {
        if (!e.target.closest('a') && !e.target.closest('button')) {
            openDesignDetails(work.id);
        }
    });
    
    return workCard;
}

function initializeScrollControls() {
    const graphicScroll = document.querySelector('.graphic-scroll');
    const prevGraphicBtn = document.querySelector('.prev-graphic');
    const nextGraphicBtn = document.querySelector('.next-graphic');
    
    const uiScroll = document.querySelector('.ui-scroll');
    const prevUiBtn = document.querySelector('.prev-ui');
    const nextUiBtn = document.querySelector('.next-ui');
    
    function scrollContainer(container, direction) {
        const scrollAmount = 350 + 24;
        container.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    }
    
    prevGraphicBtn.addEventListener('click', () => scrollContainer(graphicScroll, 'prev'));
    nextGraphicBtn.addEventListener('click', () => scrollContainer(graphicScroll, 'next'));
    
    prevUiBtn.addEventListener('click', () => scrollContainer(uiScroll, 'prev'));
    nextUiBtn.addEventListener('click', () => scrollContainer(uiScroll, 'next'));
    
    // Drag scroll
    function initializeDragScroll(container) {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.style.cursor = 'grabbing';
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    }
    
    initializeDragScroll(graphicScroll);
    initializeDragScroll(uiScroll);
}

// ===== صفحة تفاصيل التصميم =====
function openDesignDetails(designId) {
    const design = designsData[designId];
    if (!design) {
        console.error('Design not found:', designId);
        return;
    }
    
    // حفظ الـ designId للرجوع إليه
    localStorage.setItem('currentDesignId', designId);
    
    // إنشاء صفحة التفاصيل
    createDesignDetailsPage(design);
}

function createDesignDetailsPage(design) {
    const template = document.getElementById('designDetailsTemplate');
    if (!template) {
        console.error('Template not found!');
        return;
    }
    
    const clone = template.content.cloneNode(true);
    
    // ملء البيانات
    clone.getElementById('designCategory').textContent = design.category;
    clone.getElementById('designTitle').textContent = design.title;
    clone.getElementById('designDescription').textContent = design.description;
    clone.getElementById('designClient').textContent = design.client;
    clone.getElementById('designYear').textContent = design.year;
    clone.getElementById('designTimeline').textContent = design.timeline;
    clone.getElementById('designStatus').textContent = design.status;
    
    const livePreviewBtn = clone.getElementById('livePreviewBtn');
    livePreviewBtn.href = design.livePreview;
    
    // الصورة الرئيسية
    const mainImage = clone.getElementById('mainDesignImage');
    mainImage.src = design.images.main;
    mainImage.alt = design.title;
    mainImage.onclick = () => openLightbox(design.images.main);
    
    // التاغات
    const tagsContainer = clone.getElementById('designTags');
    design.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'design-tag';
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });
    
    // الصور المصغرة
    const thumbnailsContainer = clone.getElementById('designThumbnails');
    design.images.thumbnails.forEach((thumbnail, index) => {
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnailDiv.onclick = (e) => {
            changeMainImage(thumbnail);
            // إزالة النشط من كل الصور وإضافته للصورة المختارة
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
        };
        
        const img = document.createElement('img');
        img.src = thumbnail;
        img.alt = `${design.title} - Image ${index + 1}`;
        img.loading = 'lazy';
        
        thumbnailDiv.appendChild(img);
        thumbnailsContainer.appendChild(thumbnailDiv);
    });
    
    // إخفاء المحتوى الحالي
    document.body.innerHTML = '';
    document.body.appendChild(clone);
    
    // تحديث الـ title
    document.title = `${design.title} | Momen Saleh`;
    
    // إضافة تأثير دخول
    setTimeout(() => {
        document.querySelector('.design-details-page').style.opacity = '1';
    }, 100);
}

function changeMainImage(imageUrl) {
    const mainImage = document.getElementById('mainDesignImage');
    if (mainImage) {
        mainImage.src = imageUrl;
        mainImage.onclick = () => openLightbox(imageUrl);
    }
}

// ===== Lightbox Functions =====
let currentLightboxImageIndex = 0;
let currentLightboxImages = [];

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (!lightbox || !lightboxImage) {
        console.error('Lightbox elements not found!');
        return;
    }
    
    lightboxImage.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // جمع كل الصور من الصفحة
    currentLightboxImages = Array.from(document.querySelectorAll('.thumbnail img')).map(img => img.src);
    currentLightboxImageIndex = currentLightboxImages.indexOf(imageSrc);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function prevImage() {
    if (currentLightboxImages.length === 0) return;
    
    currentLightboxImageIndex = (currentLightboxImageIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    document.getElementById('lightboxImage').src = currentLightboxImages[currentLightboxImageIndex];
}

function nextImage() {
    if (currentLightboxImages.length === 0) return;
    
    currentLightboxImageIndex = (currentLightboxImageIndex + 1) % currentLightboxImages.length;
    document.getElementById('lightboxImage').src = currentLightboxImages[currentLightboxImageIndex];
}

// ===== وظائف إضافية =====
function shareDesign() {
    const designId = localStorage.getItem('currentDesignId');
    const design = designsData[designId];
    
    if (!design) return;
    
    if (navigator.share) {
        navigator.share({
            title: design.title,
            text: `Check out this design by Momen Saleh: ${design.title}`,
            url: window.location.href,
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
}

function downloadDesign() {
    const designId = localStorage.getItem('currentDesignId');
    const design = designsData[designId];
    
    if (!design) return;
    
    const downloadLink = document.createElement('a');
    downloadLink.href = design.images.main;
    downloadLink.download = `${design.title.replace(/\s+/g, '_')}.jpg`;
    downloadLink.click();
}

// ===== Testimonials =====
function initializeTestimonials() {
    const sliderContainer = document.querySelector('.slider-container');
    const testimonials = [
        {
            content: "Working with Momen was a game-changer for our mobile app. His UX/UI expertise resulted in a 40% increase in user retention. He's not just a designer, he's a problem-solver.",
            name: "Michael Chen",
            position: "Product Manager, InnovateApp",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
        },
        {
            content: "Momen's design sensibility is exceptional. He managed to capture our brand essence perfectly while pushing creative boundaries. The final deliverables were polished and professional.",
            name: "Emma Rodriguez",
            position: "Creative Director, StyleBrand",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        }
    ];
    
    let currentSlide = 0;
    
    testimonials.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card glass-effect';
        testimonialCard.style.display = index === 0 ? 'block' : 'none';
        
        testimonialCard.innerHTML = `
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.position}</p>
                </div>
            </div>
            
            <div class="testimonial-content">
                "${testimonial.content}"
            </div>
        `;
        
        sliderContainer.appendChild(testimonialCard);
    });
    
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    function showSlide(index) {
        testimonialCards.forEach(card => card.style.display = 'none');
        testimonialCards[index].style.display = 'block';
        currentSlide = index;
    }
    
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= testimonialCards.length) nextIndex = 0;
        showSlide(nextIndex);
    }
    
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) prevIndex = testimonialCards.length - 1;
        showSlide(prevIndex);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    setInterval(nextSlide, 5000);
}

// ===== باقي الدوال =====
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.work-card, .stat, .contact-method, .floating-element');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.glass-nav');
        if (window.scrollY > 100) {
            header.style.background = 'var(--glass-bg)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });
}

function initializeMobileMenu() {
    if (window.innerWidth <= 768) {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;

        if (!hamburger || !navLinks) return;

        let overlay = document.querySelector('.nav-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'nav-overlay';
            document.body.appendChild(overlay);
        }

        function openMenu() {
            hamburger.classList.add('active');
            navLinks.classList.add('active');
            overlay.classList.add('active');
            body.classList.add('menu-open');
        }

        function closeMenu() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
        }

        hamburger.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        overlay.addEventListener('click', closeMenu);

        const navItems = navLinks.querySelectorAll('.nav-link');
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                closeMenu();
                
                setTimeout(() => {
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        const offset = 70;
                        const targetPosition = targetSection.offsetTop - offset;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 400);
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
    }
}

function initializeEmailForm() {
    emailjs.init("ywTx9zNtmAqgIcmCp");
    
    const form = document.getElementById('contactForm');
    if (!form) {
        console.log('❌ الفورم مش موجود');
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        emailjs.sendForm('service_xogtiwu', 'template_zfi6ew9', this)
            .then(function(response) {
                console.log('✅ تم الإرسال بنجاح:', response);
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
                this.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }.bind(this))
            .catch(function(error) {
                console.log('❌ خطأ في الإرسال:', error);
                submitBtn.innerHTML = '<i class="fas fa-times"></i> Error! Try Again';
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            });
    });
}

// ===== Event Listeners للـ Lightbox =====
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    }
    if (e.key === 'ArrowLeft') {
        prevImage();
    }
    if (e.key === 'ArrowRight') {
        nextImage();
    }
});

// إغلاق الـ Lightbox عند النقر خارج الصورة
document.addEventListener('click', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    }
});

// أضف في momen.js
// Preload الصور المهمة
function preloadCriticalImages() {
    const criticalImages = [
        '4.jpg',
        'CV-new.jpg',
        'https://images.unsplash.com/photo-1558655146-9f40138edfeb'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Lazy loading متقدم
const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            lazyLoadObserver.unobserve(img);
        }
    });
}, { threshold: 0.1 });

// Compress الصور قبل الرفع
function optimizeImages() {
    // استخدم tools مثل:
    // - Squoosh (Google)
    // - ImageOptim
    // - TinyPNG API
}

// إضافة Service Worker للتخزين المؤقت
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
        console.log('Service Worker registered');
    });
}
// Parallax Scrolling Effect
gsap.registerPlugin(ScrollTrigger);

// تأثير Parallax للخلفيات
gsap.to(".parallax-bg", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

// تحريك العناصر عند التمرير
gsap.utils.toArray(".animate-on-scroll").forEach(element => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

// تحريك أشرطة المهارات
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    gsap.to(bar, {
      width: width + '%',
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bar.parentElement,
        start: "top 80%"
      }
    });
  });
}

// فلترة المشاريع
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        gsap.to(item, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          display: 'block'
        });
      } else {
        gsap.to(item, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          display: 'none'
        });
      }
    });
  });
});

const FX = {
  reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  isMobile: window.matchMedia("(max-width: 768px)").matches,
  canAnimate() {
    return !this.reducedMotion;
  }
};

// اختياري: لو تغير إعدادات reduced motion أثناء فتح الصفحة
window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", (e) => {
  FX.reducedMotion = e.matches;
});



// ===== Featured Works - Simple & Clean =====

function initWorksSection() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    if (!filterBtns.length) return;
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.dataset.filter;
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // View button click
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.project-card');
            const title = card.querySelector('.project-title').textContent;
            const category = card.querySelector('.project-category').textContent;
            
            // Show preview
            showProjectPreview(title, category, card.querySelector('img').src);
        });
    });
    
    // Card click to open details
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.project-title').textContent;
            const category = this.querySelector('.project-category').textContent;
            
            // Navigate to project details or show modal
            openProjectDetails(title, category);
        });
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        observer.observe(card);
    });
}

// Show project preview
function showProjectPreview(title, category, imageSrc) {
    // Create simple overlay
    const overlay = document.createElement('div');
    overlay.className = 'preview-overlay';
    overlay.innerHTML = `
        <div class="preview-container">
            <div class="preview-header">
                <h3>${title}</h3>
                <span class="preview-category">${category}</span>
                <button class="close-preview">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="preview-image">
                <img src="${imageSrc}" alt="${title}">
            </div>
            <div class="preview-actions">
                <button class="btn btn-primary open-details">
                    <i class="fas fa-info-circle"></i>
                    View Details
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    // Close preview
    overlay.querySelector('.close-preview').addEventListener('click', () => {
        document.body.style.overflow = '';
        overlay.remove();
    });
    
    // View details
    overlay.querySelector('.open-details').addEventListener('click', () => {
        openProjectDetails(title, category);
    });
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.querySelector('.close-preview').click();
        }
    });
}

// Open project details (simplified)
function openProjectDetails(title, category) {
    // In real implementation, navigate to project page
    // For now, show alert or console log
    console.log(`Opening project: ${title} (${category})`);
    
    // Optional: Show notification
    showNotification(`Opening "${title}" details`);
}

// Simple notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'simple-notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for preview and notification
function addWorksStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .preview-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .preview-container {
            background: var(--card-bg);
            border-radius: 20px;
            max-width: 600px;
            width: 100%;
            border: 1px solid var(--glass-border);
            overflow: hidden;
        }
        
        .preview-header {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--glass-border);
        }
        
        .preview-header h3 {
            margin: 0;
            font-size: 1.3rem;
        }
        
        .preview-category {
            background: var(--glass-bg);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
        }
        
        .close-preview {
            background: transparent;
            border: none;
            color: var(--text-color);
            font-size: 1.2rem;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .close-preview:hover {
            background: var(--glass-bg);
            transform: rotate(90deg);
        }
        
        .preview-image {
            padding: 20px;
        }
        
        .preview-image img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            display: block;
        }
        
        .preview-actions {
            padding: 20px;
            text-align: center;
            border-top: 1px solid var(--glass-border);
        }
        
        .simple-notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: var(--primary-color);
            color: white;
            padding: 12px 24px;
            border-radius: 10px;
            font-weight: 600;
            z-index: 9999;
            transition: transform 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .simple-notification.show {
            transform: translateX(-50%) translateY(0);
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initWorksSection();
    addWorksStyles();
});

// ===== Testimonials Organized Script =====

function initTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.nav-dots .dot');
    const cards = document.querySelectorAll('.testimonial-card');
    
    if (!testimonialsGrid) return;
    
    let currentIndex = 0;
    
    // Update active state
    function updateActive() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Update card visibility for mobile
        if (window.innerWidth <= 768) {
            cards.forEach((card, index) => {
                card.style.display = index === currentIndex ? 'block' : 'none';
            });
        }
    }
    
    // Next button
    nextBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateActive();
        scrollToCard();
    });
    
    // Previous button
    prevBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateActive();
        scrollToCard();
    });
    
    // Dot click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateActive();
            scrollToCard();
        });
    });
    
    // Scroll to active card (for mobile)
    function scrollToCard() {
        if (window.innerWidth <= 768) {
            const activeCard = cards[currentIndex];
            activeCard.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }
    
    // Auto rotate every 5 seconds
    let autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateActive();
        scrollToCard();
    }, 5000);
    
    // Pause on hover
    testimonialsGrid.addEventListener('mouseenter', () => {
        clearInterval(autoRotate);
    });
    
    testimonialsGrid.addEventListener('mouseleave', () => {
        autoRotate = setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateActive();
            scrollToCard();
        }, 5000);
    });
    
    // Initialize
    updateActive();
    
    // Card hover effects
    cards.forEach(card => {
        const header = card.querySelector('.card-header');
        const footer = card.querySelector('.card-footer');
        
        card.addEventListener('mouseenter', () => {
            // Add subtle animations
            gsap.to(header, {
                y: -3,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(footer, {
                y: 3,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to([header, footer], {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        // Click to expand testimonial
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-btn') && !e.target.closest('.dot')) {
                this.classList.toggle('expanded');
                const text = this.querySelector('.testimonial-text');
                text.classList.toggle('show-full');
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTestimonials);

// Add responsive behavior
window.addEventListener('resize', function() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.nav-dots .dot');
    
    if (window.innerWidth <= 768) {
        // Show only active card on mobile
        dots.forEach((dot, index) => {
            if (dot.classList.contains('active')) {
                cards.forEach((card, i) => {
                    card.style.display = i === index ? 'block' : 'none';
                });
            }
        });
    } else {
        // Show all cards on desktop
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }
});

// ===== 3D PARALLAX EFFECT - كثري دي =====

document.addEventListener('DOMContentLoaded', function() {
    // كاردات الأعمال والعملاء
    const cards = document.querySelectorAll(
        '.works-grid .project-card, .work-card, .testimonial-card'
    );
    
    cards.forEach(card => {
        // تأثير حركة الماوس
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            
            // موقع الماوس داخل الكارد (0 إلى 1)
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            // حساب الحركة - كثري دي
            const rotateY = (x - 0.5) * 30; // -15deg إلى 15deg
            const rotateX = (0.5 - y) * 30; // -15deg إلى 15deg
            
            // حركة الصورة داخل الكارد
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = `scale(1.1) translateX(${(x - 0.5) * 20}px) translateY(${(y - 0.5) * 20}px)`;
            }
            
            // حركة النصوص داخل الكارد
            const title = this.querySelector('h3, .project-title, .client-name');
            const text = this.querySelector('p, .testimonial-text');
            const meta = this.querySelector('.project-meta, .testimonial-meta, .card-footer');
            
            if (title) {
                title.style.transform = `translateX(${(x - 0.5) * 15}px) translateY(${(y - 0.5) * 15}px)`;
                title.style.transition = 'transform 0.1s ease';
            }
            
            if (text) {
                text.style.transform = `translateX(${(x - 0.5) * 10}px) translateY(${(y - 0.5) * 10}px)`;
                text.style.transition = 'transform 0.1s ease';
            }
            
            if (meta) {
                meta.style.transform = `translateX(${(x - 0.5) * 8}px) translateY(${(y - 0.5) * 8}px)`;
                meta.style.transition = 'transform 0.1s ease';
            }
            
            // حركة الكارد الرئيسية
            this.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(20px)
                scale(1.02)
            `;
            
            // تأثير الضوء المتحرك
            this.style.background = `radial-gradient(
                circle at ${x * 100}% ${y * 100}%,
                rgba(77, 166, 255, 0.15),
                rgba(255, 255, 255, 0.05) 50%,
                transparent 100%
            )`;
            
            this.style.borderColor = `rgba(77, 166, 255, ${0.3 + (x * 0.3)})`;
            
            // حركة الظل
            this.style.boxShadow = `
                ${(x - 0.5) * 30}px ${(y - 0.5) * 30}px 40px rgba(0,0,0,0.2),
                0 0 0 2px rgba(77, 166, 255, ${0.2 + (x * 0.3)})
            `;
        });
        
        // عند خروج الماوس
        card.addEventListener('mouseleave', function() {
            // إعادة كل العناصر لوضعها الطبيعي
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)';
            this.style.background = '';
            this.style.borderColor = '';
            this.style.boxShadow = '';
            this.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1) translateX(0) translateY(0)';
                img.style.transition = 'transform 0.5s ease';
            }
            
            const title = this.querySelector('h3, .project-title, .client-name');
            const text = this.querySelector('p, .testimonial-text');
            const meta = this.querySelector('.project-meta, .testimonial-meta, .card-footer');
            
            if (title) {
                title.style.transform = 'translateX(0) translateY(0)';
                title.style.transition = 'transform 0.5s ease';
            }
            
            if (text) {
                text.style.transform = 'translateX(0) translateY(0)';
                text.style.transition = 'transform 0.5s ease';
            }
            
            if (meta) {
                meta.style.transform = 'translateX(0) translateY(0)';
                meta.style.transition = 'transform 0.5s ease';
            }
        });
        
        // عند دخول الماوس
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.1s ease, background 0.1s ease, border-color 0.1s ease, box-shadow 0.1s ease';
            
            const img = this.querySelector('img');
            if (img) {
                img.style.transition = 'transform 0.1s ease';
            }
        });
    });
});


// ===== مشاريع متعددة - إنشاء صفحات ديناميكية =====
const projectsData = {
    1: {
        title: "Brand Identity Design",
        category: "Graphic Design",
        mainImage: "15.jpg",
        images: [
            "15.jpg",
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800"
        ],
        description: "A complete brand identity system for a modern tech startup...",
        client: "TechVision Inc.",
        year: "2024",
        timeline: "6 Weeks",
        budget: "$3,500 - $4,000",
        location: "Palestine",
        tags: ["Logo Design", "Typography", "Color Palette", "Brand Guidelines"],
        challenge: "TechVision Inc. came to us with a clear challenge...",
        solution: "We developed a comprehensive brand identity system...",
        colors: [
            { name: "Primary Blue", hex: "#4da6ff" },
            { name: "Dark Navy", hex: "#2C3E50" },
            { name: "Accent Red", hex: "#E74C3C" },
            { name: "Light Gray", hex: "#F8F9FA" }
        ],
        results: [
            { metric: "+45%", label: "Brand Recognition" },
            { metric: "+32%", label: "Website Traffic" },
            { metric: "+28%", label: "Client Inquiries" }
        ]
    },
    2: {
        title: "E-commerce App UI",
        category: "UI/UX Design",
        mainImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
        // ... بيانات المشروع الثاني
    }
    // أضف باقي المشاريع
};

// دالة فتح المشروع
function openProject(projectId) {
    // حفظ ID المشروع
    localStorage.setItem('currentProjectId', projectId);
    
    // التوجيه لصفحة التفاصيل
    window.location.href = 'project-details.html';

    
}

// ===== فلتر المشاريع - النسخة المستقرة =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ تشغيل الفلتر...');
    
    // التحقق من وجود العناصر
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length === 0) {
        console.log('⚠️ لا توجد أزرار فلتر');
        return;
    }
    
    if (projectCards.length === 0) {
        console.log('⚠️ لا توجد كاردات مشاريع');
        return;
    }
    
    console.log(`✅ تم العثور على ${filterButtons.length} زر و ${projectCards.length} كارد`);
    
    // تفعيل أول زر
    filterButtons[0].classList.add('active');
    
    // تحديد تصنيف لكل كارد
    projectCards.forEach((card, index) => {
        const categoryElement = card.querySelector('.project-category');
        let category = 'graphic'; // افتراضي
        
        if (categoryElement) {
            const text = categoryElement.textContent.toLowerCase();
            if (text.includes('ui') || text.includes('ux')) category = 'ui';
            else if (text.includes('branding')) category = 'branding';
        }
        
        card.dataset.category = category;
        console.log(`كارد ${index + 1}: ${category}`);
    });
    
    // إضافة حدث النقر للأزرار
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة active من الكل
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // تفعيل الزر الحالي
            this.classList.add('active');
            
            // قيمة الفلتر
            const filterValue = this.dataset.filter || 'all';
            console.log('🔍 تصفية:', filterValue);
            
            // تصفية الكاردات
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    console.log('✅ الفلتر يعمل بنجاح');
});

// تعطيل GSAP مؤقتاً
// إذا كان عندك كود GSAP، علق عليه
// gsap.registerPlugin(ScrollTrigger);
// etc...

// ===== الفلتر المثالي - شغال 100% =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥 تشغيل الفلتر...');
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterBtns.length || !projectCards.length) {
        console.log('❌ عناصر الفلتر غير موجودة');
        return;
    }
    
    console.log(`✅ تم العثور على ${filterBtns.length} زر و ${projectCards.length} كارد`);
    
    // تنظيف الأزرار من أي تأثيرات سابقة
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // تفعيل أول زر
    filterBtns[0].classList.add('active');
    
    // إضافة التصنيفات للكاردات
    projectCards.forEach(card => {
        const categoryEl = card.querySelector('.project-category');
        if (categoryEl) {
            const text = categoryEl.textContent.toLowerCase();
            if (text.includes('ui') || text.includes('ux')) {
                card.dataset.category = 'ui';
            } else if (text.includes('branding')) {
                card.dataset.category = 'branding';
            } else {
                card.dataset.category = 'graphic';
            }
        } else {
            card.dataset.category = 'graphic';
        }
    });
    
    // إضافة حدث النقر للأزرار
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة active من الكل
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // تفعيل الزر الحالي
            this.classList.add('active');
            
            // قيمة الفلتر
            const filter = this.dataset.filter || 'all';
            console.log('🔍 عرض:', filter);
            
            // تصفية الكاردات
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    console.log('✅ الفلتر جاهز!');
});

// ===== تأثيرات الظهور الاحترافية عند التمرير =====
(function() {
    'use strict';
    
    // تهيئة التأثيرات عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        initRevealEffects();
    });
    
    function initRevealEffects() {
        // إخفاء جميع العناصر أولاً
        hideAllElements();
        
        // مراقبة العناصر للظهور
        observeElements();
        
        console.log('✅ تأثيرات الظهور جاهزة');
    }
    
    function hideAllElements() {
        // العناصر التي نريد إخفائها
        const elementsToHide = [
            // Hero section
            '.hero-badge',
            '.hero-title',
            '.hero-description',
            '.hero-actions',
            '.hero-stats',
            '.hero-visual',
            '.floating-elements',
            
            // Profile card
            '.profile-card',
            '.profile-image',
            '.profile-info h3',
            '.profile-info p',
            '.profile-skills',
            '.cv-corner-btn',
            
            // Section headers
            '.section-header',
            '.section-title',
            '.section-subtitle',
            
            // Filter buttons
            '.works-filter',
            '.filter-btn',
            
            // Project cards
            '.project-card',
            
            // Testimonials
            '.testimonials-grid',
            '.flip-card',
            '.testimonial-card',
            '.trust-badges',
            '.badge',
            
            // Contact section
            '.contact-info h2',
            '.contact-info p',
            '.contact-method',
            '.contact-form-container',
            
            // Footer
            '.footer-brand',
            '.footer-column',
            '.social-links',
            '.footer-bottom',
            
            // Stats
            '.stat'
        ];
        
        // تطبيق الإخفاء على كل عنصر
        elementsToHide.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.9, 0.3, 1)';
                }
            });
        });
        
        // إخفاء الكاردات بشكل متقدم
        document.querySelectorAll('.project-card, .work-card, .flip-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px)';
        });
    }
    
    function observeElements() {
        // إنشاء مراقب للتمرير
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // تحديد نوع العنصر لحساب التأخير
                    const element = entry.target;
                    const delay = getDelayByElement(element);
                    
                    // تأخير الظهور حسب نوع العنصر
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, delay);
                    
                    // إلغاء مراقبة العنصر بعد ظهوره
                    observer.unobserve(element);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // مراقبة جميع العناصر
        const allElements = document.querySelectorAll(
            '.hero-badge, .hero-title, .hero-description, .hero-actions, .hero-stats, ' +
            '.hero-visual, .floating-elements, .profile-card, .profile-image, ' +
            '.profile-info h3, .profile-info p, .profile-skills, .cv-corner-btn, ' +
            '.section-header, .section-title, .section-subtitle, .works-filter, ' +
            '.filter-btn, .project-card, .testimonials-grid, .flip-card, ' +
            '.testimonial-card, .trust-badges, .badge, .contact-info h2, ' +
            '.contact-info p, .contact-method, .contact-form-container, ' +
            '.footer-brand, .footer-column, .social-links, .footer-bottom, .stat'
        );
        
        allElements.forEach(el => {
            if (el) observer.observe(el);
        });
    }
    
    function getDelayByElement(element) {
        // تأخيرات مختلفة حسب نوع العنصر
        
        // Hero section
        if (element.classList.contains('hero-badge')) return 100;
        if (element.classList.contains('hero-title')) return 200;
        if (element.classList.contains('hero-description')) return 300;
        if (element.classList.contains('hero-actions')) return 400;
        if (element.classList.contains('hero-stats')) return 500;
        if (element.classList.contains('hero-visual')) return 600;
        
        // Profile card elements
        if (element.classList.contains('profile-image')) return 100;
        if (element.matches('.profile-info h3')) return 200;
        if (element.matches('.profile-info p')) return 300;
        if (element.classList.contains('profile-skills')) return 400;
        if (element.classList.contains('cv-corner-btn')) return 500;
        
        // Section headers
        if (element.classList.contains('section-title')) return 100;
        if (element.classList.contains('section-subtitle')) return 200;
        
        // Filter buttons
        if (element.classList.contains('filter-btn')) {
            const index = Array.from(element.parentNode?.children || []).indexOf(element);
            return 300 + (index * 50);
        }
        
        // Project cards
        if (element.classList.contains('project-card')) {
            const index = Array.from(element.parentNode?.children || []).indexOf(element);
            return 400 + (index * 80);
        }
        
        // Flip cards
        if (element.classList.contains('flip-card')) {
            const index = Array.from(element.parentNode?.children || []).indexOf(element);
            return 500 + (index * 100);
        }
        
        // Trust badges
        if (element.classList.contains('badge')) {
            const index = Array.from(element.parentNode?.children || []).indexOf(element);
            return 600 + (index * 50);
        }
        
        // Contact methods
        if (element.classList.contains('contact-method')) {
            const index = Array.from(element.parentNode?.children || []).indexOf(element);
            return 700 + (index * 80);
        }
        
        // Footer columns
        if (element.classList.contains('footer-column')) {
            const index = Array.from(element.parentNode?.children || []).indexOf(element);
            return 800 + (index * 100);
        }
        
        // Stats
        if (element.classList.contains('stat')) {
            const index = Array.from(element.parentNode?.children || []).indexOf(element);
            return 900 + (index * 50);
        }
        
        return 200; // تأخير افتراضي
    }
})();

// ===== تأثير ظهور متقدم للنصوص =====
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        initTextReveal();
    });
    
    function initTextReveal() {
        // عناوين الأقسام
        const headings = document.querySelectorAll('h1, h2, .section-title, .hero-title');
        
        headings.forEach(heading => {
            if (heading.classList.contains('hero-title')) {
                // تقسيم عنوان الهيرو لسطور
                const lines = heading.querySelectorAll('.title-line');
                lines.forEach((line, index) => {
                    line.style.opacity = '0';
                    line.style.transform = 'translateY(20px)';
                    line.style.transition = `all 0.6s cubic-bezier(0.2, 0.9, 0.3, 1) ${index * 0.2}s`;
                });
                
                // مراقبة العنوان
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const lines = entry.target.querySelectorAll('.title-line');
                            lines.forEach(line => {
                                line.style.opacity = '1';
                                line.style.transform = 'translateY(0)';
                            });
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                
                observer.observe(heading);
            }
        });
    }
})();

// ===== تأثير ظهور الصور =====
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        initImageReveal();
    });
    
    function initImageReveal() {
        const images = document.querySelectorAll('.project-image img, .profile-image img, .author-image, .client-image-large img');
        
        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            img.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'scale(1)';
                        }, 300);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(img);
        });
    }
})();

// ===== تأثير ظهور متدرج للكاردات =====
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        initStaggeredCards();
    });
    
    function initStaggeredCards() {
        const cards = document.querySelectorAll('.project-card, .work-card, .flip-card, .testimonial-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.2, 0.9, 0.3, 1)';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 80);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(card);
        });
    }
})();

// ===== إضافة CSS مخصص للتأثيرات =====
(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* تأثيرات الظهور الأساسية */
        .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        
        .fade-up.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* تأثير التكبير */
        .scale-in {
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .scale-in.revealed {
            opacity: 1;
            transform: scale(1);
        }
        
        /* تأخيرات متدرجة */
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }
        .delay-7 { transition-delay: 0.7s; }
        .delay-8 { transition-delay: 0.8s; }
        .delay-9 { transition-delay: 0.9s; }
        .delay-10 { transition-delay: 1s; }
        
        /* للشاشات الصغيرة */
        @media (max-width: 768px) {
            .fade-up,
            .scale-in {
                transition-duration: 0.5s;
            }
        }
    `;
    
    document.head.appendChild(style);
})();

// ===== الدائرة الكريستالية =====
(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        if (document.querySelector('.crystal-dot')) return;
        
        const dot = document.createElement('div');
        dot.className = 'crystal-dot';
        dot.setAttribute('role', 'button');
        dot.setAttribute('aria-label', 'Back to top');
        
        dot.innerHTML = `
            <div class="crystal-fill"></div>
            <i class="fas fa-arrow-up crystal-arrow"></i>
        `;
        
        document.body.appendChild(dot);
        
        const fill = dot.querySelector('.crystal-fill');
        
        function updateDot() {
            const scrollY = window.scrollY;
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const maxScroll = docHeight - winHeight;
            
            let percent = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
            percent = Math.min(100, Math.max(0, percent));
            
            fill.style.height = percent + '%';
            
            if (scrollY > 300) {
                dot.classList.add('visible');
            } else {
                dot.classList.remove('visible');
            }
            
            if (percent >= 99.5) {
                dot.classList.add('complete');
            } else {
                dot.classList.remove('complete');
            }
        }
        
        window.addEventListener('scroll', updateDot);
        window.addEventListener('resize', updateDot);
        
        setTimeout(updateDot, 100);
        
        dot.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
})();

// ===== Skills Elite - تفعيل الحركات =====
(function() {
    'use strict';
    
    // تشغيل بعد تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        if (!document.querySelector('.skills-elite')) return;
        
        initEliteSkills();
        initEliteStats();
        initAOS();
    });
    
    // تفعيل أشرطة التقدم
    function initEliteSkills() {
        const cards = document.querySelectorAll('.elite-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // تشغيل أشرطة التقدم
                    const fills = entry.target.querySelectorAll('.progress-fill');
                    fills.forEach(fill => {
                        const width = fill.style.width;
                        fill.style.width = '0';
                        setTimeout(() => {
                            fill.style.width = width;
                        }, 100);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.2,
            rootMargin: '0px'
        });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(card);
        });
    }
    
    // تفعيل الأرقام المتحركة
function initEliteStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                
                // ✅ التحقق إذا كان العنصر في hero-stats
                if (stat.closest('.hero-stats')) {
                    // hero-stats: ابقها كما هي بدون تغيير
                    observer.unobserve(stat);
                    return;
                }
                
                // ✅ باقي الإحصائيات (Skills section)
                const target = parseInt(stat.dataset.count);
                
                // التحقق من أن target رقم صحيح
                if (!isNaN(target) && target > 0) {
                    let current = 0;
                    const increment = target / 50;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, 30);
                }
                
                observer.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}    
    // AOS تأثيرات بسيطة
    function initAOS() {
        const cards = document.querySelectorAll('[data-aos]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }
})();

// ===== Navbar Glass Effect on Scroll =====
(function() {
    'use strict';
    
    const navbar = document.querySelector('.glass-nav');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // الخلفية الزجاجية تظهر بعد 50px
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // تشغيلها مرة عشان تتأكد من الحالة أول ما تتحمل الصفحة
    setTimeout(() => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        }
    }, 100);
    
    console.log('✅ Navbar glass effect activated');

})();

