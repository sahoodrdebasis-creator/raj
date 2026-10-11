
/* ==============================
   ROMANTIC WEBSITE - JAVASCRIPT
============================== */

const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

const startBtn = document.getElementById("startBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const backBtn = document.getElementById("backBtn");

const finalSurprise = document.getElementById("finalSurprise");
const hearts = document.getElementById("hearts");

// OPEN THE WEBSITE
startBtn.addEventListener("click", function () {
    welcome.classList.add("hidden");
    mainContent.classList.remove("hidden");

    // Move to the top of the main page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHearts(25);
});

// SHOW THE FINAL SURPRISE
surpriseBtn.addEventListener("click", function () {
    finalSurprise.classList.remove("hidden");

    finalSurprise.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createHearts(35);
});

// RETURN TO THE PHOTO GALLERY
backBtn.addEventListener("click", function () {
    finalSurprise.classList.add("hidden");

    const memories = document.getElementById("memories");

    memories.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createHearts(15);
});

// CREATE FLOATING HEARTS
function createHearts(amount = 5) {
    const emojis = ["❤️", "💗", "💕", "💖", "💘", "💓"];

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            (16 + Math.random() * 22) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        hearts.appendChild(heart);

        // Remove hearts after animation to keep the page light
        heart.addEventListener("animationend", function () {
            heart.remove();
        });
    }
}

// CREATE HEARTS PERIODICALLY
setInterval(function () {
    if (!document.hidden) {
        createHearts(2);
    }
}, 1500);
