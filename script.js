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
const carouselTrack = document.getElementById('carouselTrack');

const planetOrder = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'sun'];

function isMobileView() {
    return window.innerWidth <= 768;
}

function updateCarouselPosition(planetKey) {
    if (!isMobileView()) return;

    const buttons = Array.from(carouselTrack.querySelectorAll('.nav-planet-btn'));
    const activeIndex = buttons.findIndex(btn => btn.getAttribute('data-planet') === planetKey);

    if (activeIndex === -1) return;

    const totalButtons = buttons.length;
    const arcRadius = 40;

    buttons.forEach((btn, index) => {
        btn.classList.remove('active', 'adjacent');

        const relativeIndex = index - activeIndex;

        if (relativeIndex === 0) {
            btn.classList.add('active');
            btn.style.left = '50%';
            btn.style.top = '50%';
            btn.style.transform = 'translate(-50%, -50%)';
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'all';
        } else if (Math.abs(relativeIndex) <= 2) {
            if (Math.abs(relativeIndex) === 1) {
                btn.classList.add('adjacent');
            }

            const position = relativeIndex;
            const angle = position * 40;
            const angleRad = (angle) * (Math.PI / 180);

            const x = 50 + Math.sin(angleRad) * arcRadius;
            const y = 50 - Math.cos(angleRad) * arcRadius * 0.5;

            btn.style.left = x + '%';
            btn.style.top = y + '%';
            btn.style.transform = 'translate(-50%, -50%)';
            btn.style.opacity = Math.abs(relativeIndex) === 1 ? '0.6' : '0.35';
            btn.style.pointerEvents = 'all';
        } else {
            btn.style.opacity = '0';
            btn.style.pointerEvents = 'none';
            btn.style.left = '50%';
            btn.style.top = '-100%';
        }
    });
}

function updatePlanetDisplay(planetKey) {
    const data = planetsData[planetKey];
    if (!data) return;

    const planetContainer = document.getElementById('planetContainer');
    const isMobile = isMobileView();

    const currentIndex = planetOrder.indexOf(currentPlanet);
    const newIndex = planetOrder.indexOf(planetKey);

    const saturnRingBack = document.getElementById('saturnRingBack');
    const saturnRingFront = document.getElementById('saturnRingFront');
    
    if (planetKey === 'saturn') {
        if (saturnRingBack) saturnRingBack.classList.add('visible');
        if (saturnRingFront) saturnRingFront.classList.add('visible');
    } else {
        if (saturnRingBack) saturnRingBack.classList.remove('visible');
        if (saturnRingFront) saturnRingFront.classList.remove('visible');
    }

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

    if (isMobile) {
        updateCarouselPosition(planetKey);
    }

    if (planetTitle) {
        planetTitle.textContent = data.name;
        planetTitle.setAttribute('data-text', data.name);
    }

    if (planetTagline) {
        planetTagline.textContent = data.tagline;
    }
    
    const orbitalValue = document.getElementById('orbitalValue');
    if (orbitalValue) {
        orbitalValue.textContent = data.orbitalPeriod;
    }

    if (panelTitle) {
        panelTitle.textContent = `${data.name}`;
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
    const isMobile = isMobileView();

    if (isMobile) {
        updateCarouselPosition(currentPlanet);
        return;
    }

    const navContainer = document.getElementById('planetNavigation');
    const buttons = navContainer.querySelectorAll('.nav-planet-btn');

    const containerRect = navContainer.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    const radius = Math.min(containerRect.width, containerRect.height) / 2;

    buttons.forEach((button) => {
        const angle = parseFloat(button.getAttribute('data-angle'));
        const offset = parseFloat(button.getAttribute('data-offset')) || 0;
        const angleRad = (angle - 90) * (Math.PI / 180);

        const x = centerX + (radius + offset) * Math.cos(angleRad);
        const y = centerY + (radius + offset) * Math.sin(angleRad);

        button.style.left = x + 'px';
        button.style.top = y + 'px';
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

const constellationsData = {
    capricorn: {
        name: "Capricorn",
        position: { top: '15%', left: '10%' },
        stars: [
            { x: 0, y: 0, bright: true },
            { x: 25, y: 15 },
            { x: 50, y: 20, bright: true },
            { x: 75, y: 10 },
            { x: 100, y: 0 },
            { x: 85, y: 30 },
            { x: 60, y: 45 },
            { x: 35, y: 40 },
            { x: 10, y: 25 }
        ],
        connections: [
            [0, 1], [1, 2], [2, 3], [3, 4],
            [2, 5], [5, 6], [6, 7], [7, 1]
        ]
    },
    aquarius: {
        name: "Aquarius",
        position: { top: '20%', right: '5%' },
        stars: [
            { x: 0, y: 20, bright: true },
            { x: 30, y: 0 },
            { x: 60, y: 15, bright: true },
            { x: 90, y: 5 },
            { x: 70, y: 35 },
            { x: 40, y: 45 },
            { x: 10, y: 50 },
            { x: 50, y: 30 }
        ],
        connections: [
            [0, 1], [1, 2], [2, 3],
            [2, 4], [4, 5], [5, 6],
            [4, 7], [7, 5]
        ]
    },
    pisces: {
        name: "Pisces",
        position: { top: '50%', left: '20%' },
        stars: [
            { x: 0, y: 0 },
            { x: 20, y: 15, bright: true },
            { x: 40, y: 25 },
            { x: 60, y: 20 },
            { x: 80, y: 5 },
            { x: 100, y: 0 },
            { x: 50, y: 45 },
            { x: 30, y: 50 },
            { x: 70, y: 50 }
        ],
        connections: [
            [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
            [2, 6], [6, 7], [6, 8]
        ]
    },
    aries: {
        name: "Aries",
        position: { bottom: '20%', right: '15%' },
        stars: [
            { x: 0, y: 30 },
            { x: 30, y: 15, bright: true },
            { x: 60, y: 0 },
            { x: 50, y: 35 },
            { x: 70, y: 45 }
        ],
        connections: [
            [0, 1], [1, 2], [1, 3], [3, 4]
        ]
    },
    taurus: {
        name: "Taurus",
        position: { bottom: '15%', left: '12%' },
        stars: [
            { x: 0, y: 40 },
            { x: 25, y: 25, bright: true },
            { x: 50, y: 15 },
            { x: 75, y: 0 },
            { x: 100, y: 10 },
            { x: 60, y: 35 },
            { x: 40, y: 50 },
            { x: 80, y: 45 }
        ],
        connections: [
            [0, 1], [1, 2], [2, 3], [3, 4],
            [2, 5], [5, 6], [5, 7]
        ]
    },
    gemini: {
        name: "Gemini",
        position: { top: '12%', left: '75%' },
        stars: [
            { x: 0, y: 0, bright: true },
            { x: 0, y: 30 },
            { x: 0, y: 60 },
            { x: 50, y: 0, bright: true },
            { x: 50, y: 30 },
            { x: 50, y: 60 },
            { x: 25, y: 65 }
        ],
        connections: [
            [0, 1], [1, 2], [3, 4], [4, 5],
            [2, 6], [5, 6]
        ]
    },
    leo: {
        name: "Leo",
        position: { top: '87%', right: '50%' },
        stars: [
            { x: 0, y: 30 },
            { x: 30, y: 15 },
            { x: 60, y: 0, bright: true },
            { x: 90, y: 10 },
            { x: 70, y: 25 },
            { x: 50, y: 40 },
            { x: 30, y: 50 },
            { x: 10, y: 55 }
        ],
        connections: [
            [0, 1], [1, 2], [2, 3], [2, 4],
            [4, 5], [5, 6], [6, 7], [6, 1]
        ]
    },
    virgo: {
        name: "Virgo",
        position: { bottom: '50%', left: '75%' },
        stars: [
            { x: 0, y: 20 },
            { x: 25, y: 0, bright: true },
            { x: 50, y: 10 },
            { x: 75, y: 5 },
            { x: 100, y: 20 },
            { x: 80, y: 40 },
            { x: 50, y: 50 },
            { x: 20, y: 45 }
        ],
        connections: [
            [0, 1], [1, 2], [2, 3], [3, 4],
            [3, 5], [5, 6], [6, 7], [7, 0]
        ]
    }
};

function renderConstellations() {
    const container = document.getElementById('constellationsLayer');
    if (!container) return;

    Object.entries(constellationsData).forEach(([key, constellation]) => {
        const constElement = document.createElement('div');
        constElement.className = 'constellation';
        constElement.id = `constellation-${key}`;
        
        Object.entries(constellation.position).forEach(([prop, value]) => {
            constElement.style[prop] = value;
        });

        const maxX = Math.max(...constellation.stars.map(s => s.x));
        const maxY = Math.max(...constellation.stars.map(s => s.y));
        
        constElement.style.width = maxX + 20 + 'px';
        constElement.style.height = maxY + 20 + 'px';

        constellation.stars.forEach((star, index) => {
            const starElement = document.createElement('div');
            starElement.className = 'constellation-star' + (star.bright ? ' bright' : '');
            starElement.style.left = star.x + 'px';
            starElement.style.top = star.y + 'px';
            starElement.style.animationDelay = (index * 0.3) + 's';
            constElement.appendChild(starElement);
        });

        constellation.connections.forEach(([start, end]) => {
            const star1 = constellation.stars[start];
            const star2 = constellation.stars[end];
            
            const dx = star2.x - star1.x;
            const dy = star2.y - star1.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            
            const line = document.createElement('div');
            line.className = 'constellation-line';
            line.style.width = length + 'px';
            line.style.left = star1.x + 'px';
            line.style.top = star1.y + 'px';
            line.style.transform = `rotate(${angle}deg)`;
            
            constElement.appendChild(line);
        });

        const label = document.createElement('div');
        label.className = 'constellation-label';
        label.textContent = constellation.name;
        label.style.left = (maxX / 2) + 'px';
        label.style.top = (maxY + 15) + 'px';
        label.style.transform = 'translateX(-50%)';
        constElement.appendChild(label);

        container.appendChild(constElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updatePlanetDisplay('earth');
    positionNavButtons();
    renderConstellations();
});
