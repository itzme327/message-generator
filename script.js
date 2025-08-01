const messages = {
  random: [
    "Naa prathi day nee call tho start avthaadhi. 💕",
    "Neetho unde moments naaku chaalaa special.🌈",
    "I love you raa chunchu. 😌",
    "Nv naaku dhorikina oka peddha chettha kuppa... hehehe"
  ],
  romantic: [
    "oopiri aadanantha varaku hug cheskovaali ninnu",
    "saraddhaaga nee breath naa breath mix cheddaamaa❤️",
    "Evvaru leni world ki vellipovaali only nv nenu undaali anthe📖",
    "Naa waist endhuku antha sannagaa untadho thelusaa nee chethullo odhigipodaaniki"
  ],
  missed: [
    "Ninnu chaala miss avthunnaa — my heart needs you. 🥺",
    "Not being with you feels empty. 😞",
    "Wish I could hug you right now. 🤗",
    "Ento em chesina nuvve gurthosthunnaav..."
  ],
  low: [
    "Nv elaa unaa ye situation lo unna eppudu nen neethone untaa ☀️",
    "Nv baadhalo unnappudu ventane naa smiling face raavaali naa mind loki 🤝",
    "Neeku thelusaa Nv chaala strong enough neeku thelisina dhaani kannaa 💪",
    "Ey... endhuku raa feel avthunnaav neekosam ee picchidhi undhi ani marchipoku...🌻"
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
