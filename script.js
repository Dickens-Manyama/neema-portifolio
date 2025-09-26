// ===== DOM Elements =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const contactForm = document.getElementById('contact-form');
const downloadCvBtn = document.getElementById('download-cv');
const langButtons = document.querySelectorAll('.lang-btn');

// ===== Language Translations =====
const translations = {
    en: {
        // Navigation
        'nav-name': 'Neema Theonest',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-leadership': 'Leadership',
        'nav-experience': 'Experience',
        'nav-media': 'Media',
        'nav-youth': 'Youth Empowerment',
        'nav-charity': 'Charity',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-name': 'Neema Theonest',
        'hero-subtitle': 'Environmental & Natural Resources Conserver',
        'hero-tagline': 'Dedicated to conservation, climate action, and youth empowerment.',
        'btn-cv': 'Download CV',
        'btn-contact': 'Contact Me',
        
        // About Section
        'about-title': 'About Me',
        'about-description': 'My name is Neema Theonest. I am an Environmental and Natural Resources Conserver by profession, holding a Bachelor\'s degree in this field. I have been working with various NGOs, government agencies, and local government institutions in implementing projects that emphasize the conservation of the environment and biodiversity.',
        'about-skills-intro': 'I am highly skilled in data collection, report writing, capacity building, and stakeholder engagement, with strong communication skills and technical knowledge in matters concerning environmental conservation.',
        
        // Skills
        'skill-data': 'Data Analysis',
        'skill-data-desc': 'Expert in environmental data collection and analysis',
        'skill-stakeholder': 'Stakeholder Engagement',
        'skill-stakeholder-desc': 'Building strong partnerships for conservation initiatives',
        'skill-reporting': 'Report Writing',
        'skill-reporting-desc': 'Comprehensive documentation and communication',
        'skill-capacity': 'Capacity Building',
        'skill-capacity-desc': 'Training and empowering communities',
        
        // Leadership Section
        'leadership-title': 'Leadership & Advocacy',
        'parliament-title': 'Member of Parliament',
        'parliament-subtitle': 'East Africa Community Youth Parliament',
        'leadership-description': 'I am highly passionate about empowering youth in diverse areas, including entrepreneurship and leadership. Currently, I serve as a Member of Parliament in the East Africa Community Youth Parliament, where I bring up the voices of fellow youth on different aspects, particularly advocating for technical and financial support towards innovative solutions in environmental conservation and climate action.',
        'advocacy-climate': 'Climate Action Advocacy',
        'advocacy-innovation': 'Innovation Support',
        'advocacy-youth': 'Youth Voice Amplification',
        
        // Experience Section
        'experience-title': 'Professional Experience',
        'exp-coordinator': 'Project Coordinator',
        'exp-coordinator-desc': 'Leading environmental conservation initiatives including mangrove restoration, ocean cleanups in Dar es Salaam and Bagamoyo, and tree planting programs in schools.',
        'exp-research': 'Research Assistant',
        'exp-research-desc': 'Conducting research on mangrove reforestation studies, focusing on the consequences of mangrove deforestation along coastal areas and developing sustainable restoration strategies.',
        'achievement-mangrove': 'Mangrove Restoration Projects',
        'achievement-ocean': 'Ocean Cleanup Initiatives',
        'achievement-tree': 'School Tree Planting',
        'achievement-research': 'Coastal Area Research',
        'achievement-analysis': 'Impact Analysis',
        
        // Media Section
        'media-title': 'Media & Advocacy',
        'media-description': 'I am skilled in both social media and traditional media advocacy, using these platforms to promote awareness and mobilize action on environmental conservation and climate justice.',
        'platform-social': 'Social Media Campaigns',
        'platform-traditional': 'Traditional Media',
        'platform-podcast': 'Podcast Features',
        
        // Youth Section
        'youth-title': 'Youth Empowerment & Entrepreneurship',
        'youth-description': 'I specialize in empowering youth, especially young girls, in leadership and entrepreneurship. I conduct training sessions that equip youth with the skills and confidence to participate in decision-making, contribute to policy formulation, and pursue entrepreneurship.',
        'youth-impact': 'Through technical and financial empowerment, I support youth in overcoming poverty and driving sustainable development in their communities.',
        'empower-girls': 'Young Girls Leadership',
        'empower-entrepreneur': 'Entrepreneurship Training',
        'empower-development': 'Sustainable Development',
        
        // Charity Section
        'charity-title': 'Charity & Generosity',
        'charity-description': 'I am deeply passionate about promoting the spirit of generosity and showing love to individuals in need. I have organized and participated in charitable initiatives, including visiting vulnerable communities to provide support, resources, and encouragement.',
        
        // Mission Section
        'mission-quote': 'I strive to create sustainable solutions that address climate change, foster social transformation, and build resilient communities.',
        'mission-summary': 'In summary, I am a dedicated environmental conservationist, youth advocate, and leader. Through my work in conservation, youth empowerment, and community generosity, I strive to create sustainable solutions that address climate change, foster social transformation, and build resilient communities.',
        
        // Contact Section
        'contact-title': 'Contact Me',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Phone',
        'contact-location-label': 'Location',
        'contact-location': 'Dar es Salaam, Tanzania',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        
        // Footer
        'footer-copyright': '© 2025 Neema Theonest. All rights reserved.',
        
        // Gallery Titles
        'env-gallery-title': 'Environmental Conservation Projects',
        'leadership-gallery-title': 'Leadership & Parliamentary Activities',
        'meetings-gallery-title': 'Youth Entrepreneurship & Advocacy Meetings',
        
        // Environmental Gallery Captions
        'env-caption-1': 'Natural Habitat Conservation',
        'env-caption-2': 'Ecosystem Restoration',
        'plant-caption-1': 'Reforestation Projects',
        'plant-caption-2': 'Community Planting',
        'plant-caption-3': 'School Programs',
        'plant-caption-4': 'Sustainable Agriculture',
        'plant-caption-5': 'Community Conservation',
        
        // Leadership Gallery Captions
        'leadership-caption-1': 'Leadership Training',
        'leadership-caption-2': 'Parliamentary Sessions',
        'leadership-caption-3': 'Community Leadership',
        'leadership-caption-4': 'Policy Advocacy',
        'leadership-caption-7': 'Regional Conferences',
        'leadership-caption-8': 'Climate Summits',
        
        // Meetings Gallery Captions
        'meeting-caption-3': 'Entrepreneurship Workshops',
        'meeting-caption-4': 'Strategic Planning',
        'meeting-caption-6': 'Policy Forums',
        'meeting-caption-8': 'Stakeholder Consultations',
        
        // Charity Gallery Captions
        'charity-caption-1': 'Community Support',
        'charity-caption-2': 'Vulnerable Groups Support',
        'charity-caption-3': 'Resource Distribution',
        'givingback-caption-1': 'Giving Back Programs',
        'givingback-caption-2': 'Community Events',
        'givingback-caption-3': 'Educational Support',
        'givingback-caption-4': 'Healthcare Support',
        'givingback-caption-6': 'Community Empowerment'
    },
    sw: {
        // Navigation
        'nav-name': 'Neema Theonest',
        'nav-home': 'Nyumbani',
        'nav-about': 'Kuhusu',
        'nav-leadership': 'Uongozi',
        'nav-experience': 'Uzoefu',
        'nav-media': 'Vyombo vya Habari',
        'nav-youth': 'Uwongozi wa Vijana',
        'nav-charity': 'Hisani',
        'nav-contact': 'Mawasiliano',
        
        // Hero Section
        'hero-name': 'Neema Theonest',
        'hero-subtitle': 'Mhifadhi wa Mazingira na Rasilimali Asili',
        'hero-tagline': 'Nimejitolea kwa uhifadhi, vitendo vya tabianchi, na uwongozi wa vijana.',
        'btn-cv': 'Pakua CV',
        'btn-contact': 'Wasiliana Nami',
        
        // About Section
        'about-title': 'Kuhusu Mimi',
        'about-description': 'Jina langu ni Neema Theonest. Mimi ni Mhifadhi wa Mazingira na Rasilimali Asili kwa taaluma, nina shahada ya kwanza katika uwanda huu. Nimekuwa nikifanya kazi na mashirika mbalimbali yasiyo ya kiserikali, mashirika ya serikali, na taasisi za serikali za mitaa katika kutekeleza miradi inayosisitiza uhifadhi wa mazingira na utofauti wa kibayolojia.',
        'about-skills-intro': 'Nina ustadi mkuu katika ukusanyaji wa data, uandishi wa ripoti, ujenzi wa uwezo, na ushirikiano wa wadau, na ujuzi mkuu wa mawasiliano na ujuzi wa kiufundi katika mambo yanayohusu uhifadhi wa mazingira.',
        
        // Skills
        'skill-data': 'Uchambuzi wa Data',
        'skill-data-desc': 'Mtaalamu katika ukusanyaji na uchambuzi wa data ya mazingira',
        'skill-stakeholder': 'Ushirikiano wa Wadau',
        'skill-stakeholder-desc': 'Kujenga ushirikiano mkuu kwa ajili ya mipango ya uhifadhi',
        'skill-reporting': 'Uandishi wa Ripoti',
        'skill-reporting-desc': 'Uandishi kamili wa nyaraka na mawasiliano',
        'skill-capacity': 'Ujenzi wa Uwezo',
        'skill-capacity-desc': 'Mafunzo na uwongozi wa jamii',
        
        // Leadership Section
        'leadership-title': 'Uongozi na Utetezi',
        'parliament-title': 'Mbunge',
        'parliament-subtitle': 'Bunge la Vijana la Jumuiya ya Afrika Mashariki',
        'leadership-description': 'Nina shauku kubwa ya kuwongoza vijana katika maeneo mbalimbali, ikiwa ni pamoja na ujasiriamali na uongozi. Kwa sasa, ninahudumu kama Mbunge katika Bunge la Vijana la Jumuiya ya Afrika Mashariki, ambapo ninaleta sauti za vijana wenzangu katika mambo mbalimbali, hasa kutetea msaada wa kiufundi na kifedha kuelekea suluhisho za ubunifu katika uhifadhi wa mazingira na vitendo vya tabianchi.',
        'advocacy-climate': 'Utetezi wa Vitendo vya Tabianchi',
        'advocacy-innovation': 'Msaada wa Ubunifu',
        'advocacy-youth': 'Kukuza Sauti za Vijana',
        
        // Experience Section
        'experience-title': 'Uzoefu wa Kitaaluma',
        'exp-coordinator': 'Mratibu wa Mradi',
        'exp-coordinator-desc': 'Kuongoza mipango ya uhifadhi wa mazingira ikiwa ni pamoja na urudishaji wa mikoko, usafishaji wa bahari huko Dar es Salaam na Bagamoyo, na mipango ya kupanda miti katika shule.',
        'exp-research': 'Msaidizi wa Utafiti',
        'exp-research-desc': 'Kufanya utafiti juu ya masomo ya urudishaji wa misitu ya mikoko, kikizingatia matokeo ya uharibifu wa mikoko kando ya maeneo ya pwani na kuendeleza mikakati endelevu ya urudishaji.',
        'achievement-mangrove': 'Miradi ya Urudishaji wa Mikoko',
        'achievement-ocean': 'Mipango ya Usafishaji wa Bahari',
        'achievement-tree': 'Kupanda Miti Shuleni',
        'achievement-research': 'Utafiti wa Maeneo ya Pwani',
        'achievement-analysis': 'Uchambuzi wa Athari',
        
        // Media Section
        'media-title': 'Vyombo vya Habari na Utetezi',
        'media-description': 'Nina ujuzi katika utetezi wa vyombo vya habari vya kijamii na vya jadi, nikitumia majukwaa haya kukuza uelewa na kuhamasisha vitendo juu ya uhifadhi wa mazingira na haki za tabianchi.',
        'platform-social': 'Kampeni za Vyombo vya Habari vya Kijamii',
        'platform-traditional': 'Vyombo vya Habari vya Jadi',
        'platform-podcast': 'Vipengele vya Podcast',
        
        // Youth Section
        'youth-title': 'Uwongozi wa Vijana na Ujasiriamali',
        'youth-description': 'Nimejiweka katika kuwongoza vijana, hasa wasichana wachanga, katika uongozi na ujasiriamali. Ninafanya vikao vya mafunzo ambavyo vinawaongoza vijana kwa ujuzi na kujiamini kushiriki katika kufanya maamuzi, kuchangia katika kuunda sera, na kufuata ujasiriamali.',
        'youth-impact': 'Kupitia uwongozi wa kiufundi na kifedha, ninawasaidia vijana kushinda umaskini na kuongoza maendeleo endelevu katika jamii zao.',
        'empower-girls': 'Uongozi wa Wasichana Wachanga',
        'empower-entrepreneur': 'Mafunzo ya Ujasiriamali',
        'empower-development': 'Maendeleo Endelevu',
        
        // Charity Section
        'charity-title': 'Hisani na Ukarimu',
        'charity-description': 'Nina shauku kubwa ya kukuza roho ya ukarimu na kuonyesha upendo kwa watu wanaohitaji. Nimepanga na kushiriki katika mipango ya hisani, ikiwa ni pamoja na kutembelea jamii zilizo hatarini kutoa msaada, rasilimali, na hamu.',
        
        // Mission Section
        'mission-quote': 'Najitahidi kuunda suluhisho endelevu zinazoshughulikia mabadiliko ya tabianchi, kukuza mabadiliko ya kijamii, na kujenga jamii zenye uvumilivu.',
        'mission-summary': 'Kwa muhtasari, mimi ni mhifadhi mkuu wa mazingira, mtetezi wa vijana, na kiongozi. Kupitia kazi yangu katika uhifadhi, uwongozi wa vijana, na ukarimu wa jamii, najitahidi kuunda suluhisho endelevu zinazoshughulikia mabadiliko ya tabianchi, kukuza mabadiliko ya kijamii, na kujenga jamii zenye uvumilivu.',
        
        // Contact Section
        'contact-title': 'Wasiliana Nami',
        'contact-email-label': 'Barua Pepe',
        'contact-phone-label': 'Simu',
        'contact-location-label': 'Mahali',
        'contact-location': 'Dar es Salaam, Tanzania',
        'form-name': 'Jina Lako',
        'form-email': 'Barua Pepe Yako',
        'form-message': 'Ujumbe Wako',
        'form-submit': 'Tuma Ujumbe',
        
        // Footer
        'footer-copyright': '© 2025 Neema Theonest. Haki zote zimehifadhiwa.',
        
        // Gallery Titles
        'env-gallery-title': 'Miradi ya Uhifadhi wa Mazingira',
        'leadership-gallery-title': 'Uongozi na Shughuli za Kibunge',
        'meetings-gallery-title': 'Ujasiriamali wa Vijana na Mikutano ya Utetezi',
        
        // Environmental Gallery Captions
        'env-caption-1': 'Uhifadhi wa Mazingira ya Asili',
        'env-caption-2': 'Urudishaji wa Mfumo wa Mazingira',
        'plant-caption-1': 'Miradi ya Urudishaji Misitu',
        'plant-caption-2': 'Kupanda kwa Jamii',
        'plant-caption-3': 'Mipango ya Shule',
        'plant-caption-4': 'Kilimo Endelevu',
        'plant-caption-5': 'Uhifadhi wa Jamii',
        
        // Leadership Gallery Captions
        'leadership-caption-1': 'Mafunzo ya Uongozi',
        'leadership-caption-2': 'Vikao vya Bunge',
        'leadership-caption-3': 'Uongozi wa Jamii',
        'leadership-caption-4': 'Utetezi wa Sera',
        'leadership-caption-7': 'Mikutano ya Kikanda',
        'leadership-caption-8': 'Mikutano ya Tabianchi',
        
        // Meetings Gallery Captions
        'meeting-caption-3': 'Warsha za Ujasiriamali',
        'meeting-caption-4': 'Mipango ya Kimkakati',
        'meeting-caption-6': 'Majukwaa ya Sera',
        'meeting-caption-8': 'Mazungumzo ya Wadau',
        
        // Charity Gallery Captions
        'charity-caption-1': 'Msaada wa Jamii',
        'charity-caption-2': 'Msaada wa Vikundi vyenye Hatari',
        'charity-caption-3': 'Mgawanyo wa Rasilimali',
        'givingback-caption-1': 'Mipango ya Kurudisha',
        'givingback-caption-2': 'Hafla za Jamii',
        'givingback-caption-3': 'Msaada wa Elimu',
        'givingback-caption-4': 'Msaada wa Afya',
        'givingback-caption-6': 'Uwongozi wa Jamii'
    }
};

// ===== Current Language State =====
let currentLang = 'en';

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    initializeScrollSpy();
    initializeAnimations();
    initializeLanguage();
    initializeSmoothScroll();
}

// ===== Event Listeners Setup =====
function setupEventListeners() {
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Language toggle
    langButtons.forEach(btn => {
        btn.addEventListener('click', handleLanguageChange);
    });
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // CV download
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', handleCvDownload);
    }
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', handleOutsideClick);
}

// ===== Mobile Menu Functions =====
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    
    // Toggle hamburger icon
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

function handleOutsideClick(e) {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        closeMobileMenu();
    }
}

// ===== Navigation Functions =====
function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    
    if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    closeMobileMenu();
}

// ===== Scroll Spy and Header Effects =====
function initializeScrollSpy() {
    updateActiveNavLink();
    updateHeaderStyle();
}

function handleScroll() {
    updateActiveNavLink();
    updateHeaderStyle();
    handleScrollAnimations();
}

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + header.offsetHeight + 10;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function updateHeaderStyle() {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
}

// ===== Smooth Scrolling =====
function initializeSmoothScroll() {
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        if (link.getAttribute('href') !== '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
}

// ===== Scroll Animations =====
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.skill-item, .timeline-item, .empowerment-item, .charity-image');
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    handleScrollAnimations();
}

function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// ===== Language System =====
function initializeLanguage() {
    updateLanguageContent();
}

function handleLanguageChange(e) {
    const selectedLang = e.target.getAttribute('data-lang');
    
    if (selectedLang !== currentLang) {
        currentLang = selectedLang;
        
        // Update active button
        langButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update content
        updateLanguageContent();
        
        // Store preference
        localStorage.setItem('preferred-language', currentLang);
    }
}

function updateLanguageContent() {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
    
    // Update document language
    document.documentElement.lang = currentLang;
    
    // Update page title
    const titleKey = currentLang === 'sw' ? 
        'Kazi za Neema Theonest | Mhifadhi wa Mazingira na Rasilimali Asili' :
        'Portfolio - Neema Theonest | Environmental & Natural Resources Conserver';
    document.title = titleKey;
}

// ===== Contact Form =====
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showLoadingState();
    
    setTimeout(() => {
        hideLoadingState();
        showNotification('Thank you for your message! I will get back to you soon.', 'success');
        contactForm.reset();
        
        // Create mailto link as fallback
        const subject = encodeURIComponent('Portfolio Contact Form');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:neema.theonest@example.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
    }, 1500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showLoadingState() {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    submitBtn.setAttribute('data-original-text', originalText);
}

function hideLoadingState() {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.getAttribute('data-original-text');
    
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    submitBtn.removeAttribute('data-original-text');
}

// ===== CV Download =====
function handleCvDownload(e) {
    e.preventDefault();
    
    // Check if CV file exists
    const cvFileName = 'Neema_Theonest_CV.pdf';
    
    // Create a temporary link for download
    const link = document.createElement('a');
    link.href = cvFileName;
    link.download = cvFileName;
    
    // Try to download, if file doesn't exist, show message
    link.onclick = function() {
        setTimeout(() => {
            const message = currentLang === 'sw' ? 
                'Faili la CV halijawekwa bado. Tafadhali wasiliana nami kwa barua pepe.' :
                'CV file not yet available. Please contact me via email for my CV.';
            showNotification(message, 'info');
        }, 100);
    };
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track download attempt
    if (typeof gtag !== 'undefined') {
        gtag('event', 'cv_download', {
            'event_category': 'engagement',
            'event_label': 'cv_download_attempt'
        });
    }
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1002;
        max-width: 350px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: auto;
        padding: 0.25rem;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#4caf50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3'
    };
    return colors[type] || colors.info;
}

// ===== Window Resize Handler =====
function handleResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
    
    // Recalculate scroll positions
    updateActiveNavLink();
}

// ===== Lazy Loading for Images =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== Performance Optimization =====
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = handleScroll;
    
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = requestAnimationFrame(originalScrollHandler);
    });
}

// ===== Accessibility Enhancements =====
function enhanceAccessibility() {
    // Add focus indicators
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Add ARIA labels dynamically
    const socialLinks = document.querySelectorAll('.social-link, .footer-social-link');
    socialLinks.forEach(link => {
        if (!link.getAttribute('aria-label')) {
            const icon = link.querySelector('i');
            if (icon) {
                const iconClass = icon.className;
                let label = 'Social Media';
                
                if (iconClass.includes('linkedin')) label = 'LinkedIn';
                else if (iconClass.includes('twitter')) label = 'Twitter';
                else if (iconClass.includes('instagram')) label = 'Instagram';
                else if (iconClass.includes('facebook')) label = 'Facebook';
                else if (iconClass.includes('envelope')) label = 'Email';
                
                link.setAttribute('aria-label', label);
            }
        }
    });
}

// ===== Initialize Additional Features =====
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && (savedLang === 'en' || savedLang === 'sw')) {
        currentLang = savedLang;
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
        });
    }
    
    // Initialize additional features
    initializeLazyLoading();
    optimizePerformance();
    enhanceAccessibility();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// ===== Service Worker Registration (for PWA capabilities) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// ===== Analytics and Tracking =====
function trackUserInteraction(action, category = 'engagement') {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': window.location.pathname
        });
    }
}

// Track important interactions
document.addEventListener('click', function(e) {
    const target = e.target.closest('a, button');
    if (target) {
        const action = target.getAttribute('data-track') || target.textContent.trim().toLowerCase().replace(/\s+/g, '_');
        if (action) {
            trackUserInteraction(action);
        }
    }
});

// ===== Error Handling =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // Log error to analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            'description': e.error.toString(),
            'fatal': false
        });
    }
});

// ===== Print Styles Handler =====
window.addEventListener('beforeprint', function() {
    // Expand all collapsed sections for printing
    const collapsedElements = document.querySelectorAll('.collapsed');
    collapsedElements.forEach(el => el.classList.remove('collapsed'));
});

// ===== Export functions for testing =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        currentLang,
        translations
    };
}