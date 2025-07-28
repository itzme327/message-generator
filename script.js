const messages = {
  random: [
    "Naa prathi day nee call tho start avthaadhi. 💕",
    "Neetho unde moments naaku chaalaa special.🌈",
    "I love you raa chunchu. 😌",
    "Nv naaku dhorikina oka peddha chettha kuppa... hehehe"
  ],
  romantic: [
    "Every time I look at you, I fall in love again. 💘",
    "You're my favorite place to be. 🌍",
    "I want to grow old with you. ❤️",
    "Our love is my favorite story. 📖"
  ],
  missed: [
    "I miss your voice, your laugh, your everything. 😔",
    "Ninnu chaala miss avthunnaa — my heart needs you. 🥺",
    "Not being with you feels empty. 😞",
    "Wish I could hug you right now. 🤗"
  ],
  low: [
    "Even when you're down, you're still my sunshine. ☀️",
    "I’m always here for you — no matter what. 🤝",
    "You're stronger than you know. 💪",
    "Take a deep breath, my love. You’ve got this. 🌻"
  ]
};

function showMood(mood) {
  const msgs = messages[mood];
  const randomIndex = Math.floor(Math.random() * msgs.length);
  const message = msgs[randomIndex];
  document.getElementById('messageBox').innerText = message;

  const music = document.getElementById("bgmusic");
  if (music.paused) music.play(); // play only once after interaction
}

const heartContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Surprise popup logic
function showPopup() {
  document.getElementById('surprisePopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('surprisePopup').style.display = 'none';
}

setTimeout(showPopup, 8000);

// Manual toggle for music button
function toggleMusic() {
  const music = document.getElementById("bgmusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// First click anywhere starts the music
function playMusic() {
  const audio = document.getElementById("bgmusic");
  if (audio.paused) audio.play();
}
