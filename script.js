/* ============================================
   ENGAGEMENT INVITATION
   B & W
============================================ */


/* ============================================
   OPEN INVITATION
============================================ */

const openButton = document.getElementById("openInvitation");
const envelopeScreen = document.getElementById("envelopeScreen");

openButton.addEventListener("click", function () {

    envelopeScreen.classList.add("opened");

    setTimeout(() => {

        document
            .getElementById("invitation")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 300);

});


/* ============================================
   SCROLL TO SECTION
============================================ */

function scrollToSection(sectionID) {

    const section = document.getElementById(sectionID);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ============================================
   COUNTDOWN
============================================ */

/*
    CHANGE THIS DATE.

    Format:

    YYYY-MM-DDTHH:MM:SS

    Example:

    October 25, 2026 at 2:00 PM

    2026-10-25T14:00:00
*/

const eventDate = new Date(
    "2026-10-25T14:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;


    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ============================================
   MUSIC
============================================ */

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");

let musicPlaying = false;


musicButton.addEventListener("click", function () {

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicText.textContent = "Pause";

                musicButton.classList.add("playing");

            })
            .catch(() => {

                musicText.textContent = "Play";

            });

    } else {

        music.pause();

        musicPlaying = false;

        musicText.textContent = "Music";

        musicButton.classList.remove("playing");

    }

});


/* ============================================
   SCROLL REVEAL
============================================ */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* ============================================
   PARALLAX EFFECT
============================================ */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", function () {

    if (!hero) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${50 + scrollPosition * 0.03}%`;

    }

});


/* ============================================
   SUBTLE FLOWER ROTATION
============================================ */

const flowers =
    document.querySelectorAll(".floating-flower");


window.addEventListener("scroll", function () {

    const scrollY = window.scrollY;

    flowers.forEach(function (flower, index) {

        const amount =
            Math.sin(scrollY * 0.002 + index) * 5;

        flower.style.transform =
            `translateY(${amount}px) rotate(${amount}deg)`;

    });

});


/* ============================================
   PREVENT BROKEN IMAGE EXPERIENCE
============================================ */

const images =
    document.querySelectorAll("img");


images.forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.backgroundColor = "#e8e0d2";

        image.style.minHeight = "300px";

        image.alt =
            "Photo will be added here";

    });

});


/* ============================================
   CONSOLE MESSAGE
============================================ */

console.log(
    "♡ Welcome to B & W's engagement invitation ♡"
);