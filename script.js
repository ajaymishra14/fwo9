const welcomeScreen = document.getElementById("welcomeScreen");
const surpriseButton = document.getElementById("surpriseButton");
const birthdayPage = document.getElementById("birthdayPage");

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");

const reasonCards = document.querySelectorAll(".reason-card");
const cardMessage = document.getElementById("cardMessage");

const confettiContainer = document.getElementById("confetti");


/* =========================
   OPEN SURPRISE
========================= */

surpriseButton.addEventListener("click", () => {

  welcomeScreen.classList.add("hide");
  birthdayPage.classList.add("show");

  setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 800);

  createConfetti(70);

});


/* =========================
   REASON CARDS
========================= */

reasonCards.forEach((card) => {

  card.addEventListener("click", () => {

    reasonCards.forEach((item) => {
      item.classList.remove("active");
    });

    card.classList.add("active");

    const message = card.dataset.message;

    cardMessage.innerHTML = `
      <span>♡</span>
      <p>${message}</p>
    `;

  });

});


/* =========================
   BIRTHDAY CAKE
========================= */

wishButton.addEventListener("click", () => {

  const candles = document.querySelectorAll(".candle");

  candles.forEach((candle, index) => {

    setTimeout(() => {
      candle.classList.add("out");
    }, index * 70);

  });

  wishMessage.innerHTML =
    "✨ Wish made. May it come true, Shreya. ✨";

  wishButton.innerHTML =
    "🎉 Happy Birthday Shreya!";

  createConfetti(160);

});


/* =========================
   CONFETTI
========================= */

function createConfetti(amount) {

  const symbols = [
    "♥",
    "✦",
    "✧",
    "●",
    "◆"
  ];

  for (let i = 0; i < amount; i++) {

    const piece = document.createElement("div");

    piece.classList.add("confetti");

    piece.innerHTML =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.left =
      Math.random() * 100 + "%";

    piece.style.fontSize =
      Math.random() * 12 + 8 + "px";

    piece.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    piece.style.animationDelay =
      Math.random() * 0.8 + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    confettiContainer.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4500);

  }

}


/* =========================
   PAGE LOAD
========================= */

document.body.style.overflow = "hidden";
