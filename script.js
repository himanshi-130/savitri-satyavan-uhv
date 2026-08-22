// DARK MODE WITH LOCAL STORAGE PERSISTENCE

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) themeBtn.textContent = "☀";
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.textContent = "☀";
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "☾";
            localStorage.setItem("theme", "light");
        }
    });
}


// MAGICAL BUTTERFLY BURST ANIMATION
function spawnButterflies() {
    let swarm = document.getElementById("butterflySwarm");
    if (!swarm) {
        swarm = document.createElement("div");
        swarm.id = "butterflySwarm";
        swarm.className = "butterfly-swarm-container";
        document.body.appendChild(swarm);
    }
    swarm.innerHTML = "";

    const butterflyColors = [
        { main: "#ffd700", glow: "rgba(255, 215, 0, 0.9)" },   // Glowing Gold
        { main: "#ff8c00", glow: "rgba(255, 140, 0, 0.9)" },   // Saffron
        { main: "#ff3399", glow: "rgba(255, 51, 153, 0.9)" },   // Magenta / Pink
        { main: "#00f2fe", glow: "rgba(0, 242, 254, 0.9)" },   // Electric Cyan
        { main: "#a855f7", glow: "rgba(168, 85, 247, 0.9)" },  // Royal Purple
        { main: "#34d399", glow: "rgba(52, 211, 153, 0.9)" }   // Emerald Green
    ];

    const butterflyCount = 35;

    for (let i = 0; i < butterflyCount; i++) {
        const item = document.createElement("div");
        item.className = "butterfly-item";

        const colorObj = butterflyColors[Math.floor(Math.random() * butterflyColors.length)];
        const tx = (Math.random() - 0.5) * window.innerWidth * 1.5;
        const ty = -Math.random() * window.innerHeight * 0.9 - 80;
        const rot = (Math.random() - 0.5) * 70;
        const flyTime = 2.4 + Math.random() * 1.4;
        const flapSpeed = 0.12 + Math.random() * 0.12;
        const delay = Math.random() * 0.45;
        const endScale = 1.2 + Math.random() * 0.8;

        item.style.setProperty("--tx", `${tx}px`);
        item.style.setProperty("--ty", `${ty}px`);
        item.style.setProperty("--rot", `${rot}deg`);
        item.style.setProperty("--fly-time", `${flyTime}s`);
        item.style.setProperty("--flap-speed", `${flapSpeed}s`);
        item.style.setProperty("--glow-color", colorObj.glow);
        item.style.setProperty("--end-scale", `${endScale}`);
        item.style.animationDelay = `${delay}s`;

        item.innerHTML = `
            <svg class="butterfly-svg" viewBox="0 0 50 50">
                <g class="wing-left">
                    <path d="M 25 25 C 10 5, 0 15, 5 30 C 10 40, 20 35, 25 25 Z" fill="${colorObj.main}" opacity="0.95"/>
                    <path d="M 25 25 C 15 30, 8 42, 18 45 C 24 47, 24 35, 25 25 Z" fill="${colorObj.main}" opacity="0.8"/>
                    <circle cx="12" cy="20" r="2.5" fill="#ffffff" opacity="0.85"/>
                </g>
                <g class="wing-right">
                    <path d="M 25 25 C 40 5, 50 15, 45 30 C 40 40, 30 35, 25 25 Z" fill="${colorObj.main}" opacity="0.95"/>
                    <path d="M 25 25 C 35 30, 42 42, 32 45 C 26 47, 26 35, 25 25 Z" fill="${colorObj.main}" opacity="0.8"/>
                    <circle cx="38" cy="20" r="2.5" fill="#ffffff" opacity="0.85"/>
                </g>
                <path d="M 25 15 L 25 35" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                <path d="M 25 15 Q 22 10 20 8 M 25 15 Q 28 10 30 8" stroke="${colorObj.main}" stroke-width="1.5" fill="none"/>
            </svg>
        `;

        swarm.appendChild(item);
    }

    setTimeout(() => {
        if (swarm) swarm.innerHTML = "";
    }, 4500);
}


// 3D GRAND ENTRANCE DOOR ANIMATION
const doorOverlay = document.getElementById("doorOverlay");
const openDoorBtn = document.getElementById("openDoorBtn");
const reopenDoorBtn = document.getElementById("reopenDoorBtn");

function playDoorChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, ctx.currentTime);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.8);
    } catch(e) {}
}

function openDoors() {
    if (!doorOverlay) return;
    playDoorChime();
    spawnButterflies();
    doorOverlay.classList.add("doors-open");
    sessionStorage.setItem("doorsOpened", "true");
}

function resetDoors() {
    if (!doorOverlay) return;
    doorOverlay.classList.remove("doors-open");
    sessionStorage.removeItem("doorsOpened");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (doorOverlay) {
    if (sessionStorage.getItem("doorsOpened") === "true") {
        doorOverlay.classList.add("doors-open");
    }

    if (openDoorBtn) {
        openDoorBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            openDoors();
        });
    }

    doorOverlay.addEventListener("click", () => {
        openDoors();
    });
}

if (reopenDoorBtn) {
    reopenDoorBtn.addEventListener("click", resetDoors);
}


// SAVITRI REFLECTION SECTION (BACKWARDS COMPATIBILITY)
function showAnswer(choice) {
    const answer = document.getElementById("answer");
    if (!answer) return;

    if (choice === 1) {
        answer.innerHTML = `
            <strong>Acceptance is important, but silence is not always enough.</strong><br>
            Savitri teaches us that difficult situations can be faced actively through courage and understanding.
        `;
    } else if (choice === 2) {
        answer.innerHTML = `
            <strong>Strength without wisdom can create more problems.</strong><br>
            Savitri's greatest strength was not physical force, but her ability to remain calm, thoughtful and determined.
        `;
    } else {
        answer.innerHTML = `
            <strong>✨ This reflects Savitri's approach.</strong><br>
            She faced an extraordinary situation with courage, wisdom, truthfulness and determination.
        `;
    }
}


// HOME PAGE REFLECTION QUIZ
function showHomeAnswer(choice) {
    const answer = document.getElementById("answer");
    if (!answer) return;

    if (choice === 1) {
        answer.innerHTML = `
            <strong>Incorrect.</strong> Both kings and spiritual seekers cultivate Prema. Social role does not dictate the capacity for selfless love.
        `;
    } else if (choice === 2) {
        answer.innerHTML = `
            <strong>Incorrect.</strong> Indian philosophy distinguishes sharply between transactional desire (Kāma/Eros) and unconditional love (Prema/Bhakti).
        `;
    } else {
        answer.innerHTML = `
            <strong>✨ Correct!</strong><br>
            <strong>Eros (Kāma)</strong> is desire focused on self-gratification and conditions. <strong>Prema</strong> is unconditioned, egoless love seeking the ultimate truth and well-being of the other (as shown by Krishna & Sudama, Rantideva, and Savitri).
        `;
    }
}


// STORY-SPECIFIC REFLECTION RESPONSES
function showStoryAnswer(storyKey, choice) {
    const answer = document.getElementById("answer");
    if (!answer) return;

    const feedbackMap = {
        satyakama: {
            1: "Exaggeration creates a false identity. Satyakāma chose absolute truthfulness over false prestige.",
            2: "Avoidance postpones growth. Real integrity comes from facing truth directly.",
            3: "✨ Excellent! Like Satyakāma Jābāla, true noble character is defined by unflinching truthfulness."
        },
        harishchandra: {
            1: "Breaking promises undermines social trust and personal integrity.",
            2: "A partial lie is still a compromise of Satya. Harishchandra showed that Truth is unbending.",
            3: "✨ Inspiring! King Harishchandra proved that Truth (Satya) is the eternal foundation of human dignity."
        },
        nachiketa: {
            1: "Preyas (immediate pleasure) is temporary and binds the human mind to endless desire.",
            2: "Taking the easy way out avoids life's deepest questions.",
            3: "✨ Outstanding choice! Like Nachiketa, choosing Shreyas (ultimate Truth & Wisdom) leads to true liberation."
        },
        rantideva: {
            1: "Hoarding in times of need alienates us from our shared humanity.",
            2: "Giving only leftovers lacks the spirit of true empathy and sacrifice.",
            3: "✨ Beautiful! King Rantideva embodied Sarva-bhūta-hita—seeing divine life in all creatures."
        },
        shibi: {
            1: "Turning away vulnerable beings violates the duty of care (Sharaṇāgati).",
            2: "Handing over the weak to save oneself lacks moral courage.",
            3: "✨ Powerful! King Shibi proved that protecting the refuge-seeker is the highest duty (Dharma)."
        },
        'krishna-sudama': {
            1: "Status-based discrimination corrupts true human relationships.",
            2: "Showcasing wealth reflects ego rather than genuine friendship.",
            3: "✨ Heartwarming! Krishna & Sudama demonstrate Sakhya-Bhava—love (Prema) that transcends wealth and status."
        }
    };

    if (feedbackMap[storyKey] && feedbackMap[storyKey][choice]) {
        answer.innerHTML = `<strong>${feedbackMap[storyKey][choice]}</strong>`;
    }
}


// SCROLL REVEAL OBSERVER
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.1 }
);

document
    .querySelectorAll(".story-card, .character, .value-card, .timeline-item, .member-card, .portal-card")
    .forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "all 0.7s ease";
        observer.observe(element);
    });


// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }
    }
});