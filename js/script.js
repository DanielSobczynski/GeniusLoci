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
        
        // Karty usług
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
        cardEsgTitle: "Ochrona Środowiska & ESG",
        cardEsgDesc: "Analizy ryzyka powodziowego i suszowego, wyznaczanie stref retencji, analiza miejskich wysp ciepła oraz ocena ryzyk klimatycznych na potrzeby raportowania ESG.",
        cardGeoTitle: "Geomarketing & Analizy Rynkowe",
        cardGeoDesc: "Wyznaczanie stref ciążenia (Catchment Area), analizy demograficzne i przestrzenne nasycenia rynku, wspierające wybór optymalnych lokalizacji dla handlu i usług.",
        cardRoutingTitle: "Routing & Analizy Sieciowe",
        cardRoutingDesc: "Optymalizacja tras dostaw (VRP), modelowanie kosztów transportu, wyznaczanie stref obsługi (Service Areas) oraz analizy dostępności komunikacyjnej dla łańcuchów dostaw.",
        
        // Portfolio
        sectionPortfolioTitle: "Interaktywne Portfolio",
        portfolioSubtitle: "Przykładowe realizacje przestrzenne. Przesuwaj, przybliżaj i klikaj, aby zbadać dane.",
        portOzeTitle: "Analiza Potencjału Solarnego (OZE)",
        portOzeDesc: "Interaktywna mapa nasłonecznienia dachów. Kliknij na budynek, aby sprawdzić szacowany uzysk energii i optymalny kąt nachylenia paneli.",
        portSciTitle: "Detekcja obiektów (LiDAR vs Ortofotomapa)",
        portSciDesc: "Użyj suwaka, aby zobaczyć jak cieniowanie NMT ukryte pod gęstym lasem ujawnia zarysy wczesnośredniowiecznego grodziska.",
        
        // Kontakt
        sectionContactTitle: "Skontaktuj się ze mną",
        contactSubtitle: "Szukasz wsparcia przy analizie przestrzennej lub automatyzacji procesów GIS?",
        contactLinkedin: "Zobacz mój profil",
        contactGoogle: "Profil Firmowy",
        
        footerRights: "Genius Loci - Analizy Przestrzenne. Wszelkie prawa zastrzeżone."
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
        
        // Karty usług
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
        cardEsgTitle: "Environment & ESG Analytics",
        cardEsgDesc: "Flood and drought risk analysis, retention zone mapping, urban heat island assessment, and climate risk evaluation for ESG reporting.",
        cardGeoTitle: "Geomarketing & Market Analysis",
        cardGeoDesc: "Catchment area delineation, spatial demographic analysis, and market saturation assessment to optimize retail and service locations.",
        cardRoutingTitle: "Routing & Network Analysis",
        cardRoutingDesc: "Delivery route optimization (VRP), transportation cost modeling, service area generation, and accessibility analysis for supply chains.",
        
        // Portfolio
        sectionPortfolioTitle: "Interactive Portfolio",
        portfolioSubtitle: "Sample spatial projects. Pan, zoom, and click to explore the data.",
        portOzeTitle: "Solar Potential Analysis (Renewable Energy)",
        portOzeDesc: "Interactive roof insolation map. Click on a building to check the estimated energy yield and optimal panel tilt angle.",
        portSciTitle: "Feature Detection (LiDAR vs. Orthophoto)",
        portSciDesc: "Use the slider to see how DEM hillshading beneath dense forest reveals the outlines of an early medieval settlement.",
        
        // Kontakt
        sectionContactTitle: "Get in Touch",
        contactSubtitle: "Looking for spatial analysis support or GIS process automation?",
        contactLinkedin: "View my profile",
        contactGoogle: "Business Profile",
        
        footerRights: "Genius Loci - Spatial Analytics. All rights reserved."
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