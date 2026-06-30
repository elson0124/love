function startJourney() {
  switchScene(1, 2);
}

function openEnvelope() {
  switchScene(2, 4);
}

/* SCENE SWITCH */
function switchScene(from, to) {
  document.getElementById("scene" + from).classList.add("hidden");
  document.getElementById("scene" + from).classList.remove("active");

  setTimeout(() => {
    document.getElementById("scene" + to).classList.remove("hidden");
    document.getElementById("scene" + to).classList.add("active");
  }, 600);
}

/* 💌 LETTER DATA (2 LETTERS WITH DIFFERENT IMAGES) */
const letters = {
  1: {
    img: "1.jpg",
    text: "Memory 1 ❤️: Our day 1"
  },
  2: {
    img: "2.jpg",
    text: "Memory 2 ❤️: our 500th day together."
  }
};

/* 💌 OPEN LETTER (FIXED VERSION) */
function openLetter(id) {
  document.getElementById("modal").classList.remove("hidden");

  // change image dynamically
  document.getElementById("letterImage").src = letters[id].img;

  // change text dynamically
  document.getElementById("text").innerText = letters[id].text;

  /* 🎵 MUSIC START WITH FADE */
  const music = document.getElementById("music");

  if (music) {
    music.volume = 0;
    music.play();

    let v = 0;
    let fade = setInterval(() => {
      if (v < 1) {
        v += 0.05;
        music.volume = v;
      } else {
        clearInterval(fade);
      }
    }, 100);
  }
}
let yesSize = 18;

function noAnswer() {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  // make YES bigger each time
  yesSize += 8;
  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = (yesSize / 1.2) + "px";

  // small shake effect
  noBtn.style.animation = "shake 0.3s";

  setTimeout(() => {
    noBtn.style.animation = "";
  }, 300);
}

function yesAnswer() {
  alert("YAY ❤️ I knew it 😳💖");
}

/* ❌ CLOSE LETTER */
function closeLetter() {
  document.getElementById("modal").classList.add("hidden");
}