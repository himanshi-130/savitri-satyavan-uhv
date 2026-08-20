// DARK MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "☾";
    }

});


// REFLECTION SECTION

function showAnswer(choice) {

    const answer = document.getElementById("answer");

    if (choice === 1) {

        answer.innerHTML = `
            <strong>Acceptance is important, but silence is not always enough.</strong>
            <br>
            Savitri teaches us that difficult situations can be faced
            actively through courage and understanding.
        `;

    }

    else if (choice === 2) {

        answer.innerHTML = `
            <strong>Strength without wisdom can create more problems.</strong>
            <br>
            Savitri's greatest strength was not physical force,
            but her ability to remain calm, thoughtful and determined.
        `;

    }

    else {

        answer.innerHTML = `
            <strong>✨ This reflects Savitri's approach.</strong>
            <br>
            She faced an extraordinary situation with courage,
            wisdom, truthfulness and determination.
        `;

    }

}


// SCROLL REVEAL

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(".story-card, .character, .value-card, .timeline-item")
    .forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "all 0.7s ease";

        observer.observe(element);

    });


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});