const translations = {
    pl: {
        navServices: "Usługi",
        navPortfolio: "Portfolio",
        navContact: "Kontakt",
        heroSubtitle: "Doradztwo Specjalistyczne • Ekspertyzy GIS",
        heroTitle: "Duch miejsca ukryty w danych",
        heroDesc: "Profesjonalne analizy przestrzenne (GIS), wizualizacje NMT oraz automatyzacja przetwarzania danych dla biznesu, nauki i rynku nieruchomości.",
        heroBtn: "Porozmawiajmy o Twoim projekcie",
        sectionServicesTitle: "Dla kogo pracuję?",
        
        // Klucze kart usługowych
        cardDevTitle: "Deweloperzy & Inwestorzy",
        cardDevDesc: "Analizy chłonności terenu, optymalizacja ukształtowania działki (LiDAR/NMT), ocena ograniczeń przestrzennych oraz weryfikacja zapisów MPZP.",
        cardOzeTitle: "Inwestorzy OZE & Fotowoltaika",
        cardOzeDesc: "Analizy potencjału solarnego, badania widoczności i oddziaływania krajobrazowego, przesiewanie terenu (site screening) pod farmy PV oraz ocena stref ochronnych.",
        cardRETitle: "Rynek Nieruchomości",
        cardREDesc: "Raporty atrakcyjności działek, mapy izochron (czasów dojazdu), uzbrojenia terenu i dostępności infrastruktury ułatwiające obrót nieruchomościami.",
        cardSciTitle: "Nauka & Archeologia",
        cardSciDesc: "Zaawansowane przetwarzanie danych przestrzennych, cyfrowe modele terenu, detekcja mikrorzeźby oraz identyfikacja obiektów z danych LiDAR do publikacji.",
        cardB2BTitle: "Biznes & Automatyzacja (B2B)",
        cardB2BDesc: "Automatyzacja powtarzalnych procesów GIS w Python/ArcPy, tworzenie narzędzi FME oraz dedykowanych aplikacji na platformach ESRI.",
        
        sectionPortfolioTitle: "Interaktywne Portfolio",
        portfolioSubtitle: "Przykładowe realizacje przestrzenne. Przesuwaj i powiększaj mapy.",
        map1Title: "Analiza chłonności i NMT",
        map2Title: "Wizualizacja dla archeologii",
        sectionContactTitle: "Skontaktuj się ze mną",
        contactSubtitle: "Szukasz wsparcia przy analizie przestrzennej lub automatyzacji procesów GIS?",
        footerRights: "Genius Loci - Specialized Consultancy. Wszelkie prawa zastrzeżone."
    },
    en: {
        navServices: "Services",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        heroSubtitle: "Specialized Consultancy • GIS Expertise",
        heroTitle: "Genius Loci – Hidden in Spatial Data",
        heroDesc: "Professional GIS spatial analysis, 3D terrain modeling (DEM), and data processing automation for business, research, and real estate.",
        heroBtn: "Let's discuss your project",
        sectionServicesTitle: "Who I Work With",
        
        // Service cards keys
        cardDevTitle: "Developers & Investors",
        cardDevDesc: "Site capacity analysis, terrain optimization based on LiDAR/DEM data, spatial constraint evaluation, and zoning plan verification.",
        cardOzeTitle: "Renewable Energy & PV Solar",
        cardOzeDesc: "Solar potential assessment, visibility & landscape impact analysis, PV site screening, and environmental constraint mapping.",
        cardRETitle: "Real Estate Market",
        cardREDesc: "Property attractiveness reports, isochrone (travel time) mapping, utility availability, and infrastructure analysis to aid transactions.",
        cardSciTitle: "Science & Archaeology",
        cardSciDesc: "Advanced spatial data processing, digital elevation models, micro-relief detection, and LiDAR-based feature identification for publications.",
        cardB2BTitle: "Business & GIS Automation (B2B)",
        cardB2BDesc: "Automation of repetitive GIS workflows in Python/ArcPy, FME tools, and custom spatial application development on ESRI platforms.",
        
        sectionPortfolioTitle: "Interactive Portfolio",
        portfolioSubtitle: "Sample spatial projects. Pan and zoom to explore the interactive maps.",
        map1Title: "Site Capacity & DEM Analysis",
        map2Title: "Visualizations for Archaeology",
        sectionContactTitle: "Get in Touch",
        contactSubtitle: "Looking for spatial analysis support or GIS process automation?",
        footerRights: "Genius Loci - Specialized Consultancy. All rights reserved."
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const btnPl = document.getElementById('btn-pl');
    const btnEn = document.getElementById('btn-en');
    
    if (btnPl && btnEn) {
        btnPl.classList.toggle('active', lang === 'pl');
        btnEn.classList.toggle('active', lang === 'en');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'pl';
    setLanguage(savedLang);

    const btnPl = document.getElementById('btn-pl');
    const btnEn = document.getElementById('btn-en');
    
    if (btnPl) btnPl.addEventListener('click', () => setLanguage('pl'));
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});