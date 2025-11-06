const planetsData = {
    sun: {
        name: "SUN",
        tagline: "The magnificent star powering our entire Solar System",
        tilt: "7.25°",
        gravity: "28x",
        hours: "609h",
        diameter: "1,392,700 km",
        mass: "1.989 × 10³⁰ kg",
        distance: "Center of Solar System",
        orbitalPeriod: "N/A",
        temperature: "5,500°C (surface)",
        moons: "0",
        overview: "The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.",
        funFact: "The Sun accounts for about 99.86% of the total mass of the Solar System! Every second, the Sun converts approximately 600 million tons of hydrogen into helium through nuclear fusion.",
        image: "images/sun.png",
        glowColor: "#ffaa00"
    },
    mercury: {
        name: "MERCURY",
        tagline: "The smallest and fastest planet in our Solar System",
        tilt: "0.03°",
        gravity: "0.38x",
        hours: "1,408h",
        diameter: "4,879 km",
        mass: "3.285 × 10²³ kg",
        distance: "57.9 million km from Sun",
        orbitalPeriod: "88 Earth days",
        temperature: "-173°C to 427°C",
        moons: "0",
        overview: "Mercury is the smallest planet in our Solar System and the closest to the Sun. Despite being the closest planet to the Sun, it's not the hottest. Mercury has a very thin atmosphere called an exosphere, which is composed of atoms blasted off the surface by solar radiation.",
        funFact: "A year on Mercury (one orbit around the Sun) takes only 88 Earth days, but a day on Mercury (one full rotation) takes 59 Earth days! This means Mercury rotates very slowly compared to its orbit.",
        image: "images/mercury.png",
        glowColor: "#999999"
    },
    venus: {
        name: "VENUS",
        tagline: "Earth's twin, but a scorching hellscape beneath the clouds",
        tilt: "177.4°",
        gravity: "0.91x",
        hours: "5,832h",
        diameter: "12,104 km",
        mass: "4.867 × 10²⁴ kg",
        distance: "108.2 million km from Sun",
        orbitalPeriod: "225 Earth days",
        temperature: "462°C (average)",
        moons: "0",
        overview: "Venus is the second planet from the Sun and Earth's closest planetary neighbor. Often called Earth's twin due to their similar size, Venus is actually a hellish world with crushing atmospheric pressure and temperatures hot enough to melt lead. It's the hottest planet in our solar system.",
        funFact: "Venus rotates backwards (retrograde rotation) compared to most planets, and it rotates so slowly that a day on Venus is longer than its year! Venus also has the most circular orbit of any planet.",
        image: "images/venus.png",
        glowColor: "#e8d4a0"
    },
    earth: {
        name: "EARTH",
        tagline: "Voted best planet in the Solar System by all organisms",
        tilt: "23.5°",
        gravity: "1.0x",
        hours: "24h",
        diameter: "12,742 km",
        mass: "5.972 × 10²⁴ kg",
        distance: "149.6 million km from Sun",
        orbitalPeriod: "365.25 days",
        temperature: "-88°C to 58°C",
        moons: "1 (The Moon)",
        overview: "Earth, our home planet, is the only place we know of so far that's inhabited by living things. It's also the only planet in our solar system with liquid water on the surface. Earth's atmosphere is rich in nitrogen and oxygen, and it has a strong magnetic field that protects us from harmful solar radiation.",
        funFact: "Earth is the only planet not named after a god or goddess. The name 'Earth' comes from Old English and Germanic words meaning 'ground' or 'soil'. Also, Earth is the densest planet in our solar system!",
        image: "images/earth.png",
        glowColor: "#00a8ff"
    },
    mars: {
        name: "MARS",
        tagline: "The Red Planet that may have once harbored life",
        tilt: "25.2°",
        gravity: "0.38x",
        hours: "24.6h",
        diameter: "6,779 km",
        mass: "6.39 × 10²³ kg",
        distance: "227.9 million km from Sun",
        orbitalPeriod: "687 Earth days",
        temperature: "-87°C to -5°C",
        moons: "2 (Phobos, Deimos)",
        overview: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Often called the 'Red Planet' due to iron oxide (rust) on its surface, Mars has the largest volcano in the solar system, Olympus Mons, and a canyon system that dwarfs the Grand Canyon.",
        funFact: "Mars has the largest dust storms in the solar system, which can last for months and cover the entire planet! Scientists have found evidence of ancient river valleys and lakebeds, suggesting Mars once had liquid water on its surface.",
        image: "images/mars.png",
        glowColor: "#ff4500"
    },
    jupiter: {
        name: "JUPITER",
        tagline: "The king of planets, protecting Earth from asteroids",
        tilt: "3.1°",
        gravity: "2.53x",
        hours: "9.9h",
        diameter: "139,820 km",
        mass: "1.898 × 10²⁷ kg",
        distance: "778.5 million km from Sun",
        orbitalPeriod: "11.86 Earth years",
        temperature: "-108°C (cloud tops)",
        moons: "95+ known moons",
        overview: "Jupiter is the largest planet in our Solar System and is known for its Great Red Spot, a giant storm that has been raging for hundreds of years. Jupiter is a gas giant composed mainly of hydrogen and helium. It has a strong magnetic field and at least 95 known moons, including the four large Galilean moons.",
        funFact: "Jupiter is so massive that it contains more than twice the mass of all other planets combined! The Great Red Spot is a storm so large that three Earths could fit inside it. Jupiter also acts as a cosmic vacuum cleaner, protecting inner planets from asteroids.",
        image: "images/jupiter.png",
        glowColor: "#d4a574"
    },
    saturn: {
        name: "SATURN",
        tagline: "The jewel of the Solar System with its magnificent rings",
        tilt: "26.7°",
        gravity: "1.07x",
        hours: "10.7h",
        diameter: "116,460 km",
        mass: "5.683 × 10²⁶ kg",
        distance: "1.43 billion km from Sun",
        orbitalPeriod: "29.45 Earth years",
        temperature: "-138°C (cloud tops)",
        moons: "145+ known moons",
        overview: "Saturn is the sixth planet from the Sun and the second-largest in our Solar System. It's famous for its spectacular ring system, which is made up of billions of pieces of ice and rock. Saturn is a gas giant like Jupiter, composed mainly of hydrogen and helium, and it has the lowest density of all planets.",
        funFact: "Saturn is the least dense planet in our solar system - it would actually float in water if you could find a bathtub big enough! Its rings are incredibly thin, only about 30 feet thick in some places despite being over 175,000 miles wide.",
        image: "images/saturn.png",
        glowColor: "#f4d47c"
    },
    uranus: {
        name: "URANUS",
        tagline: "The sideways planet rolling through space",
        tilt: "97.8°",
        gravity: "0.89x",
        hours: "17.2h",
        diameter: "50,724 km",
        mass: "8.681 × 10²⁵ kg",
        distance: "2.87 billion km from Sun",
        orbitalPeriod: "84 Earth years",
        temperature: "-197°C (cloud tops)",
        moons: "27 known moons",
        overview: "Uranus is the seventh planet from the Sun and has a unique feature - it rotates on its side! This ice giant appears as a featureless blue-green sphere, colored by methane in its atmosphere. Uranus was the first planet discovered with a telescope, found by William Herschel in 1781.",
        funFact: "Uranus rotates on its side at a 97.8° angle, likely due to a massive collision early in its history. This means it essentially rolls around the Sun like a ball! Each pole gets around 42 years of continuous sunlight, followed by 42 years of darkness.",
        image: "images/uranus.png",
        glowColor: "#4fd0e7"
    },
    neptune: {
        name: "NEPTUNE",
        tagline: "The windiest planet with supersonic storms",
        tilt: "28.3°",
        gravity: "1.14x",
        hours: "16.1h",
        diameter: "49,244 km",
        mass: "1.024 × 10²⁶ kg",
        distance: "4.5 billion km from Sun",
        orbitalPeriod: "164.8 Earth years",
        temperature: "-201°C (cloud tops)",
        moons: "14 known moons",
        overview: "Neptune is the eighth and farthest known planet from the Sun in our Solar System. It's an ice giant with the strongest winds in the solar system, reaching speeds of up to 2,100 km/h. Neptune has a deep blue color due to methane in its atmosphere, and it was the first planet located through mathematical predictions rather than observation.",
        funFact: "Neptune has the fastest winds in the solar system, reaching speeds of up to 1,200 mph (2,000 km/h)! Since its discovery in 1846, Neptune has completed only one full orbit around the Sun. That orbit was completed in 2011!",
        image: "images/neptune.png",
        glowColor: "#4169e1"
    }
};

let currentPlanet = 'earth';

const mainPlanet = document.getElementById('mainPlanet');
const planetTitle = document.getElementById('planetTitle');
const planetTagline = document.getElementById('planetTagline');
const panelTitle = document.getElementById('panelTitle');
const planetGlow = document.querySelector('.planet-glow');
const dataPanelTrigger = document.getElementById('dataPanelTrigger');
const dataPanel = document.getElementById('dataPanel');
const closePanel = document.getElementById('closePanel');

function updatePlanetDisplay(planetKey) {
    const data = planetsData[planetKey];
    if (!data) return;
    
    const planetContainer = document.getElementById('planetContainer');
    const isMobile = window.innerWidth <= 768;
    
    const planetOrder = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'sun'];
    const currentIndex = planetOrder.indexOf(currentPlanet);
    const newIndex = planetOrder.indexOf(planetKey);
    
    if (mainPlanet) {
        if (isMobile && currentPlanet !== planetKey) {
            const direction = newIndex > currentIndex ? 'left' : 'right';
            
            planetContainer.classList.remove('slide-in-left', 'slide-in-right', 'prepare-left', 'prepare-right');
            planetContainer.classList.add(`slide-out-${direction}`);
            
            setTimeout(() => {
                mainPlanet.style.backgroundImage = `url('${data.image}')`;
                planetContainer.classList.remove(`slide-out-${direction}`);
                planetContainer.classList.add(`prepare-${direction === 'left' ? 'left' : 'right'}`);
                
                setTimeout(() => {
                    planetContainer.classList.remove('prepare-left', 'prepare-right');
                    planetContainer.classList.add(`slide-in-${direction}`);
                }, 50);
            }, 600);
        } else if (!isMobile) {
            mainPlanet.style.opacity = '0';
            mainPlanet.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                mainPlanet.style.backgroundImage = `url('${data.image}')`;
                mainPlanet.style.opacity = '1';
                mainPlanet.style.transform = 'scale(1)';
            }, 300);
        } else {
            mainPlanet.style.backgroundImage = `url('${data.image}')`;
        }
    }
    
    currentPlanet = planetKey;
    
    if (planetTitle) {
        planetTitle.textContent = data.name;
        planetTitle.setAttribute('data-text', data.name);
    }
    
    if (planetTagline) {
        planetTagline.textContent = data.tagline;
    }
    
    if (panelTitle) {
        panelTitle.textContent = `${data.name} SPECIFICATIONS`;
    }
    
    const elements = {
        tiltValue: data.tilt,
        gravityValue: data.gravity,
        hoursValue: data.hours,
        diameter: data.diameter,
        mass: data.mass,
        distance: data.distance,
        orbitalPeriod: data.orbitalPeriod,
        temperature: data.temperature,
        moons: data.moons,
        overview: data.overview,
        funFact: data.funFact
    };
    
    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
    
    if (planetGlow) {
        planetGlow.style.background = `radial-gradient(circle, ${data.glowColor} 0%, transparent 70%)`;
    }
    
    document.querySelectorAll('.nav-planet-btn').forEach(btn => {
        if (btn.getAttribute('data-planet') === planetKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    if (mainPlanet) {
        mainPlanet.style.animation = 'none';
        setTimeout(() => {
            mainPlanet.style.animation = 'planetFloat 8s ease-in-out infinite, planetRotate 120s linear infinite';
        }, 10);
    }
}

function positionNavButtons() {
    const navContainer = document.getElementById('planetNavigation');
    const buttons = navContainer.querySelectorAll('.nav-planet-btn');
    
    const containerRect = navContainer.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    const radius = Math.min(containerRect.width, containerRect.height) / 2;
    const isMobile = window.innerWidth <= 768;
    
    buttons.forEach((button, index) => {
        if (isMobile) {
            const isSunButton = button.classList.contains('sun-btn');
            
            if (isSunButton) {
                button.style.left = centerX + 'px';
                button.style.top = (centerY - radius * 0.3) + 'px';
            } else {
                const arcButtons = Array.from(buttons).filter(btn => !btn.classList.contains('sun-btn'));
                const buttonIndex = arcButtons.indexOf(button);
                const totalButtons = arcButtons.length;
                const arcStart = -160;
                const arcEnd = -20;
                const arcSpan = arcEnd - arcStart;
                const angleStep = arcSpan / (totalButtons - 1);
                const angle = arcStart + (buttonIndex * angleStep);
                const angleRad = angle * (Math.PI / 180);
                
                const x = centerX + radius * Math.cos(angleRad);
                const y = centerY + radius * Math.sin(angleRad);
                
                button.style.left = x + 'px';
                button.style.top = y + 'px';
            }
        } else {
            const angle = parseFloat(button.getAttribute('data-angle'));
            const offset = parseFloat(button.getAttribute('data-offset')) || 0;
            const angleRad = (angle - 90) * (Math.PI / 180);
            
            const x = centerX + (radius + offset) * Math.cos(angleRad);
            const y = centerY + (radius + offset) * Math.sin(angleRad);
            
            button.style.left = x + 'px';
            button.style.top = y + 'px';
        }
    });
}

dataPanelTrigger.addEventListener('click', () => {
    dataPanel.classList.toggle('active');
    dataPanelTrigger.classList.toggle('active');
});

closePanel.addEventListener('click', () => {
    dataPanel.classList.remove('active');
    dataPanelTrigger.classList.remove('active');
});

document.querySelectorAll('.nav-planet-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const planetKey = this.getAttribute('data-planet');
        updatePlanetDisplay(planetKey);
    });
});

window.addEventListener('resize', positionNavButtons);
window.addEventListener('orientationchange', () => {
    setTimeout(positionNavButtons, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    updatePlanetDisplay('earth');
    positionNavButtons();
});
