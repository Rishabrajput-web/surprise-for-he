const config = {
  herName: "My CA",
  title: "For You, My CA",
  subtitle:
    "If love had a balance sheet, you would be my greatest asset in every year-end closing.",
  musicSrc: "assets/love-song.mp3",
  relationshipStart: "2024-02-14",
  fixedDaysTogether: 445,
  letter: [
    "In the audit of my life, every important figure traces back to you.",
    "You turned my uncertain days into steady growth, like compounding returns over time.",
    "If my heart were a ledger, it would record one truth every day: I am richest with you."
  ],
  photos: [
    {
      src: "photos/photo-1.jpg",
      title: "Opening Balance of My Happiness",
      date: "Our first long walk entry",
      thumb: "Prime asset.",
      meaning:
        "This was the first entry where my emotional balance sheet turned positive. Your smile became my most valuable opening balance."
    },
    {
      src: "photos/photo-2.jpg",
      title: "Zero Noise, Full Clarity",
      date: "A peaceful closing hour",
      thumb: "Stable cash flow.",
      meaning:
        "No words, no noise, just us. That day I learned silence with you has better returns than any loud celebration."
    },
    {
      src: "photos/photo-3.jpg",
      title: "Future Forecast Meeting",
      date: "When you discussed your goals",
      thumb: "Growth mindset.",
      meaning:
        "In this moment I saw your vision and discipline. You made me believe in long-term growth, both in life and in love."
    },
    {
      src: "photos/photo-4.jpg",
      title: "High-Risk, High-Joy Day",
      date: "One spontaneous transaction",
      thumb: "Best surprise audit.",
      meaning:
        "Life with you is never flat. Even unplanned moments with you close in profit and become memories worth preserving."
    },
    {
      src: "photos/photo-5.jpg",
      title: "My Permanent Address",
      date: "A normal day, premium feeling",
      thumb: "Home asset.",
      meaning:
        "This frame defines home for me. Not a location, but your presence, where all my worries get written off."
    },
    {
      src: "photos/photo-6.jpg",
      title: "Compounding Love Point",
      date: "A repeat-value memory",
      thumb: "Compounding returns.",
      meaning:
        "Whenever I revisit this memory, my feelings compound. This is where love stopped being a phase and became a commitment."
    },
    {
      src: "photos/photo-7.jpg",
      title: "Best Market Signal",
      date: "One of my greenest days",
      thumb: "Bullish smile.",
      meaning:
        "Your laugh is my strongest bullish signal. Even after a rough day, one smile from you recovers my entire market."
    },
    {
      src: "photos/photo-8.jpg",
      title: "Pure Transparency",
      date: "A moment of full disclosure",
      thumb: "No hidden liabilities.",
      meaning:
        "In your eyes I see trust, honesty, and comfort. With you, love feels fully audited and perfectly transparent."
    },
    {
      src: "photos/photo-9.jpg",
      title: "Strategic Merger",
      date: "A day we solved things together",
      thumb: "Joint venture.",
      meaning:
        "This memory proves our partnership works. Side by side, we turn pressure into progress and problems into solutions."
    },
    {
      src: "photos/photo-10.jpg",
      title: "Golden Hour Statement",
      date: "Evening closing note",
      thumb: "Premium calm.",
      meaning:
        "This is my favorite year-end feeling: no rush, no noise, just peace beside you and gratitude in every line item."
    },
    {
      src: "photos/photo-11.jpg",
      title: "Final Signed Commitment",
      date: "Forever retention record",
      thumb: "Long-term hold.",
      meaning:
        "This photo is my signed resolution: keep choosing you, keep investing in us, and keep growing this love for life."
    }
  ],
  memories: [
    "The day you laughed so hard you couldn't finish your sentence.",
    "That walk where we barely spoke, but understood each other perfectly.",
    "The way your eyes lit up when you talked about your dreams.",
    "That simple hand-hold that made everything feel calm.",
    "The kindness you show everyone around you, every single day.",
    "Every memory with you feels like a favorite song I never skip."
  ],
  loveReasons: [
    "You are the only asset whose value keeps appreciating in my life.",
    "Your smile gives me emotional returns no market can match.",
    "With you, even bad days close in net profit.",
    "You bring stability to my chaos like perfect cash flow.",
    "You are my long-term investment, and I never plan to exit.",
    "Every moment with you feels like compounding happiness.",
    "You reduce every risk in my life just by being beside me.",
    "If love were taxation, I would happily pay every due to keep us strong.",
    "You are the best merger my heart could ever sign.",
    "In my personal P&L, you are the reason the joy side always wins."
  ],
  timeline: [
    {
      date: "When We First Met",
      title: "The Start I Didn't Expect",
      note: "I thought it was a routine entry, but meeting you became the opening balance of everything meaningful."
    },
    {
      date: "Our First Long Conversation",
      title: "The Night Time Disappeared",
      note: "Hours passed like minutes, and I realized this connection had stronger fundamentals than anything I had known."
    },
    {
      date: "Our First Real Photo Together",
      title: "A Memory I Keep Replaying",
      note: "That photo became my favorite proof of concept: the best version of my life has you in the frame."
    },
    {
      date: "Today",
      title: "Still Choosing You",
      note: "After every high and low, my final statement stays unchanged: I choose you, every single day."
    }
  ],
  secretCode: "foreverus",
  secretHint: "Hint: the word that describes us in one line.",
  secretMessage:
    "Confidential note: in every forecast of my future, you remain my highest priority asset and my forever partner.",
  finalPromise:
    "I may not be perfect, but I promise consistent investment in us with honesty, effort, respect, and long-term commitment.",
  revealText:
    "No matter what life brings, I will keep choosing you, safeguarding this love, and helping it grow year after year."
};

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const daysCounter = document.getElementById("daysCounter");
const beginBtn = document.getElementById("beginBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const letterSection = document.getElementById("letterSection");
const openLetterBtn = document.getElementById("openLetterBtn");
const letter = document.getElementById("letter");
const letterLine1 = document.getElementById("letterLine1");
const letterLine2 = document.getElementById("letterLine2");
const letterLine3 = document.getElementById("letterLine3");
const photoSection = document.getElementById("photoSection");
const photoGrid = document.getElementById("photoGrid");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const photoMeaningBox = document.getElementById("photoMeaningBox");
const photoMeaningTitle = document.getElementById("photoMeaningTitle");
const photoMeaningDate = document.getElementById("photoMeaningDate");
const photoMeaningText = document.getElementById("photoMeaningText");
const loveLabSection = document.getElementById("loveLabSection");
const loveMeter = document.getElementById("loveMeter");
const loveMeterValue = document.getElementById("loveMeterValue");
const loveMeterText = document.getElementById("loveMeterText");
const randomReasonBtn = document.getElementById("randomReasonBtn");
const randomReasonText = document.getElementById("randomReasonText");
const timelineSection = document.getElementById("timelineSection");
const timelineList = document.getElementById("timelineList");
const secretSection = document.getElementById("secretSection");
const secretCodeInput = document.getElementById("secretCodeInput");
const unlockBtn = document.getElementById("unlockBtn");
const secretHint = document.getElementById("secretHint");
const secretMessage = document.getElementById("secretMessage");
const skySection = document.getElementById("skySection");
const starField = document.getElementById("starField");
const memoryText = document.getElementById("memoryText");
const finalSection = document.getElementById("finalSection");
const finalPromise = document.getElementById("finalPromise");
const revealBtn = document.getElementById("revealBtn");
const revealText = document.getElementById("revealText");
const heartLayer = document.getElementById("heartLayer");
const installBtn = document.getElementById("installBtn");
const sfxBtn = document.getElementById("sfxBtn");
const ambienceBtn = document.getElementById("ambienceBtn");
const navButtons = Array.from(document.querySelectorAll(".nav-btn"));
const loadingIntro = document.getElementById("loadingIntro");
const loadingText = document.getElementById("loadingText");
const introProgressBar = document.getElementById("introProgressBar");
const transitionLayer = document.getElementById("transitionLayer");
const transitionLabel = document.getElementById("transitionLabel");
const confettiCanvas = document.getElementById("confettiCanvas");

const seenPhotos = new Set();
const appBase = new URL(".", window.location.href);
let lastReasonIndex = -1;
let deferredInstallPrompt = null;
let sfxEnabled = true;
let audioCtx = null;
let ambienceEnabled = true;
let ambientMasterGain = null;
const ambientVoices = new Map();
let activeAmbientSection = "";
let confettiCtx = null;
let confettiParticles = [];
let confettiAnim = null;
const storage = {
  get(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  },
  set(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage issues in restricted browser modes.
    }
  }
};

function resolveAsset(path) {
  return new URL(path, appBase).href;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }
  if (!audioCtx) {
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTone(freq, startAt, duration, type = "sine", volume = 0.03) {
  const ctx = getAudioContext();
  if (!ctx || !sfxEnabled) {
    return;
  }
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startAt);
  osc.stop(startAt + duration);
}

function playTapSfx() {
  const ctx = getAudioContext();
  if (!ctx || !sfxEnabled) {
    return;
  }
  const t = ctx.currentTime;
  playTone(760, t, 0.07, "triangle", 0.028);
  playTone(980, t + 0.03, 0.06, "triangle", 0.022);
}

function playRevealSfx() {
  const ctx = getAudioContext();
  if (!ctx || !sfxEnabled) {
    return;
  }
  const t = ctx.currentTime;
  playTone(420, t, 0.12, "sine", 0.03);
  playTone(560, t + 0.08, 0.12, "sine", 0.03);
  playTone(720, t + 0.16, 0.15, "triangle", 0.03);
}

function playSuccessSfx() {
  const ctx = getAudioContext();
  if (!ctx || !sfxEnabled) {
    return;
  }
  const t = ctx.currentTime;
  playTone(520, t, 0.1, "triangle", 0.03);
  playTone(660, t + 0.08, 0.1, "triangle", 0.028);
  playTone(880, t + 0.15, 0.16, "sine", 0.03);
}

function playErrorSfx() {
  const ctx = getAudioContext();
  if (!ctx || !sfxEnabled) {
    return;
  }
  const t = ctx.currentTime;
  playTone(320, t, 0.08, "sawtooth", 0.022);
  playTone(280, t + 0.07, 0.09, "sawtooth", 0.02);
}

function pulseHaptic(pattern = [12]) {
  if (!("vibrate" in navigator)) {
    return;
  }
  navigator.vibrate(pattern);
}

const ambientPresets = {
  hero: { freqs: [196, 294], type: "sine", volume: 0.018 },
  letterSection: { freqs: [220, 330], type: "triangle", volume: 0.02 },
  photoSection: { freqs: [247, 370], type: "triangle", volume: 0.018 },
  timelineSection: { freqs: [175, 262], type: "sine", volume: 0.017 },
  loveLabSection: { freqs: [262, 392], type: "sawtooth", volume: 0.013 },
  secretSection: { freqs: [165, 247], type: "triangle", volume: 0.016 },
  skySection: { freqs: [147, 220], type: "sine", volume: 0.02 },
  finalSection: { freqs: [262, 440], type: "triangle", volume: 0.02 }
};

function ensureAmbientSystem() {
  const ctx = getAudioContext();
  if (!ctx) {
    return null;
  }

  if (!ambientMasterGain) {
    ambientMasterGain = ctx.createGain();
    ambientMasterGain.gain.value = 0.0001;
    ambientMasterGain.connect(ctx.destination);
  }

  Object.entries(ambientPresets).forEach(([key, preset]) => {
    if (ambientVoices.has(key)) {
      return;
    }

    const layerGain = ctx.createGain();
    layerGain.gain.value = 0.0001;
    layerGain.connect(ambientMasterGain);
    const oscillators = preset.freqs.map((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = preset.type;
      osc.frequency.value = idx === 1 ? freq * 0.995 : freq;
      osc.connect(layerGain);
      osc.start();
      return osc;
    });
    ambientVoices.set(key, { gain: layerGain, oscillators, volume: preset.volume });
  });

  return ctx;
}

function setAmbientSection(sectionId) {
  const ctx = ensureAmbientSystem();
  if (!ctx) {
    return;
  }

  const nextSection = ambientPresets[sectionId] ? sectionId : "hero";
  activeAmbientSection = nextSection;
  const now = ctx.currentTime;

  if (!ambienceEnabled) {
    if (ambientMasterGain) {
      ambientMasterGain.gain.cancelScheduledValues(now);
      ambientMasterGain.gain.setTargetAtTime(0.0001, now, 0.18);
    }
    return;
  }

  ambientMasterGain.gain.cancelScheduledValues(now);
  ambientMasterGain.gain.setTargetAtTime(1, now, 0.35);

  ambientVoices.forEach((voice, key) => {
    const target = key === nextSection ? voice.volume : 0.0001;
    voice.gain.gain.cancelScheduledValues(now);
    voice.gain.gain.setTargetAtTime(target, now, 0.45);
  });
}

function initConfettiCanvas() {
  if (!confettiCanvas) {
    return;
  }
  confettiCtx = confettiCanvas.getContext("2d");
  if (!confettiCtx) {
    return;
  }
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    confettiCanvas.width = Math.floor(window.innerWidth * dpr);
    confettiCanvas.height = Math.floor(window.innerHeight * dpr);
    confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener("resize", resize);
}

function spawnConfetti(count = 120) {
  const colors = ["#52d1c7", "#ff9f68", "#ffcf7c", "#9bd2ff", "#ffd8ec"];
  const originX = window.innerWidth / 2;
  const originY = Math.max(140, window.innerHeight * 0.28);

  for (let i = 0; i < count; i += 1) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.42;
    const speed = 2.4 + Math.random() * 4.6;
    confettiParticles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (2 + Math.random() * 3.5),
      size: 4 + Math.random() * 7,
      spin: (Math.random() - 0.5) * 0.24,
      rotation: Math.random() * Math.PI,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      life: 70 + Math.random() * 50
    });
  }
}

function renderConfetti() {
  if (!confettiCtx) {
    return;
  }
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles = confettiParticles.filter((p) => p.life > 0 && p.alpha > 0.02);

  confettiParticles.forEach((p) => {
    p.vy += 0.08;
    p.vx *= 0.992;
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.spin;
    p.life -= 1;
    p.alpha *= 0.986;

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rotation);
    confettiCtx.globalAlpha = p.alpha;
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.66);
    confettiCtx.restore();
  });

  if (confettiParticles.length > 0) {
    confettiAnim = requestAnimationFrame(renderConfetti);
  } else {
    cancelAnimationFrame(confettiAnim);
    confettiAnim = null;
  }
}

function launchConfetti(count = 150) {
  spawnConfetti(count);
  if (!confettiAnim) {
    confettiAnim = requestAnimationFrame(renderConfetti);
  }
}

function daysTogether() {
  const start = new Date(config.relationshipStart);
  const now = new Date();
  const ms = now.setHours(0, 0, 0, 0) - start.setHours(0, 0, 0, 0);
  return Math.max(0, Math.floor(ms / 86400000));
}

function applyContent() {
  document.title = `For ${config.herName}`;
  if (title) {
    title.textContent = config.title;
  }
  if (subtitle) {
    subtitle.textContent = config.subtitle;
  }
  if (finalPromise) {
    finalPromise.textContent = config.finalPromise;
  }
  if (daysCounter) {
    const totalDays = Number(config.fixedDaysTogether) || daysTogether();
    daysCounter.textContent = `${totalDays} days with you, and still not enough.`;
  }
  if (config.musicSrc && bgMusic) {
    bgMusic.src = resolveAsset(config.musicSrc);
  }
  if (secretHint) {
    secretHint.textContent = config.secretHint || "";
  }
}

function typeLine(target, text, speed = 24) {
  return new Promise((resolve) => {
    target.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      target.textContent += text[i] || "";
      i += 1;
      if (i > text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

async function revealLetter() {
  if (!letter || !letterLine1 || !letterLine2 || !letterLine3) {
    return;
  }
  letter.classList.remove("hidden");
  await typeLine(letterLine1, config.letter[0]);
  await typeLine(letterLine2, config.letter[1]);
  await typeLine(letterLine3, config.letter[2]);
}

function updateProgress() {
  if (!progressBar || !progressText) {
    return;
  }
  const total = config.photos.length;
  const seen = seenPhotos.size;
  const pct = total ? (seen / total) * 100 : 0;
  progressBar.style.width = `${pct}%`;
  progressText.textContent = `${seen}/${total} memories opened`;
}

function photoFallback(label) {
  const fallback = document.createElement("div");
  fallback.className = "fallback";
  fallback.textContent = label;
  return fallback;
}

function openPhoto(index) {
  if (!photoMeaningBox || !photoMeaningTitle || !photoMeaningDate || !photoMeaningText) {
    return;
  }
  const item = config.photos[index];
  if (!item) {
    return;
  }

  photoMeaningTitle.textContent = item.title || "Our Memory";
  photoMeaningDate.textContent = item.date || "";
  photoMeaningText.textContent =
    item.meaning || "You mean everything to me in this moment.";
  photoMeaningBox.classList.remove("hidden");

  seenPhotos.add(index);
  updateProgress();
}

function createPhotos() {
  if (!photoGrid) {
    return;
  }
  config.photos.forEach((item, index) => {
    const card = document.createElement("button");
    card.className = "photo-card";
    const tilt = Math.random() * 5 - 2.5;
    card.style.transform = `rotate(${tilt}deg)`;

    const img = document.createElement("img");
    img.src = resolveAsset(item.src);
    img.alt = item.title;

    img.onerror = () => {
      img.replaceWith(photoFallback(`Missing: ${item.src}`));
    };

    const label = document.createElement("p");
    label.textContent = item.thumb;

    card.append(img, label);
    card.addEventListener("click", () => openPhoto(index));
    photoGrid.appendChild(card);
  });

  updateProgress();
}

function createStars() {
  if (!starField || !memoryText) {
    return;
  }
  const used = new Set();

  for (let i = 0; i < config.memories.length; i += 1) {
    const star = document.createElement("button");
    star.className = "star";

    let left = 0;
    let top = 0;
    let key = "";

    do {
      left = Math.floor(8 + Math.random() * 84);
      top = Math.floor(10 + Math.random() * 76);
      key = `${Math.round(left / 12)}-${Math.round(top / 12)}`;
    } while (used.has(key));

    used.add(key);
    star.style.left = `${left}%`;
    star.style.top = `${top}%`;

    star.addEventListener("click", () => {
      playTapSfx();
      pulseHaptic([8]);
      memoryText.textContent = config.memories[i];
      star.style.opacity = "0.45";
    });

    starField.appendChild(star);
  }
}

function createTimeline() {
  if (!timelineList) {
    return;
  }
  timelineList.innerHTML = "";
  config.timeline.forEach((item) => {
    const card = document.createElement("article");
    card.className = "timeline-item";

    const titleEl = document.createElement("h3");
    titleEl.textContent = item.title;

    const dateEl = document.createElement("p");
    dateEl.className = "date";
    dateEl.textContent = item.date;

    const noteEl = document.createElement("p");
    noteEl.textContent = item.note;

    card.append(titleEl, dateEl, noteEl);
    timelineList.appendChild(card);
  });
}

function meterMessage(value) {
  if (value < 30) {
    return "Low? Impossible. My heart doesn't support that setting.";
  }
  if (value < 60) {
    return "This is me trying to act calm, but I still miss you every minute.";
  }
  if (value < 85) {
    return "Strong feelings, constant smile, zero doubt.";
  }
  if (value < 100) {
    return "This is the real level: deeply, madly, fully in love.";
  }
  return "100%. Maximum. Forever mode activated.";
}

function updateLoveMeter(value) {
  if (!loveMeterValue || !loveMeterText) {
    return;
  }
  loveMeterValue.textContent = value;
  loveMeterText.textContent = meterMessage(value);
  if (value >= 98) {
    burstHearts(8);
  }
}

function randomReason() {
  if (!config.loveReasons.length) {
    return "I love you in more ways than I can count.";
  }

  let nextIndex = 0;
  do {
    nextIndex = Math.floor(Math.random() * config.loveReasons.length);
  } while (config.loveReasons.length > 1 && nextIndex === lastReasonIndex);

  lastReasonIndex = nextIndex;
  return config.loveReasons[nextIndex];
}

function tryUnlockSecret() {
  if (!secretCodeInput || !secretMessage) {
    return;
  }
  const userCode = secretCodeInput.value.trim().toLowerCase();
  const expected = String(config.secretCode || "").trim().toLowerCase();

  if (!userCode) {
    playTapSfx();
    pulseHaptic([8]);
    secretMessage.textContent = "Enter the code first.";
    return;
  }

  if (userCode === expected) {
    playSuccessSfx();
    pulseHaptic([18, 30, 40]);
    secretMessage.textContent = config.secretMessage;
    secretCodeInput.value = "";
    burstHearts(18);
    return;
  }

  playErrorSfx();
  pulseHaptic([16, 20, 16]);
  secretMessage.textContent = "Not this one. Try our special word.";
}

function burstHearts(count = 26) {
  if (!heartLayer) {
    return;
  }
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = i % 2 === 0 ? "❤" : "✦";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `${10 + Math.random() * 30}px`;
    heart.style.animationDelay = `${Math.random() * 0.6}s`;
    heart.style.color = i % 2 === 0 ? "#ff9ca5" : "#ffbf7f";
    heartLayer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

async function runLoadingIntro() {
  if (!loadingText || !introProgressBar || !loadingIntro) {
    document.body.classList.add("app-ready");
    return;
  }

  const firstVisit = !storage.get("forYouIntroSeen");
  const lines = [
    "Gathering memories...",
    "Calibrating love meter...",
    "Syncing stars and promises...",
    "Almost ready..."
  ];
  let progress = 0;
  let lineIdx = 0;
  loadingText.textContent = lines[lineIdx];

  while (progress < 88) {
    progress += Math.floor(6 + Math.random() * 9);
    introProgressBar.style.width = `${Math.min(progress, 88)}%`;
    lineIdx = Math.min(lines.length - 1, lineIdx + 1);
    loadingText.textContent = lines[lineIdx];
    await sleep(firstVisit ? 220 : 90);
  }

  introProgressBar.style.width = "100%";
  loadingText.textContent = "Ready.";
  await sleep(firstVisit ? 450 : 120);
  loadingIntro.classList.add("done");
  document.body.classList.add("app-ready");
  storage.set("forYouIntroSeen", "1");
  setAmbientSection("hero");
}

async function transitionToSection(targetId) {
  const target = document.getElementById(targetId);
  if (!target || target.classList.contains("hidden")) {
    return;
  }

  const heading = target.querySelector("h1, h2");
  if (transitionLabel) {
    transitionLabel.textContent = heading?.textContent || "Opening";
  }
  if (transitionLayer) {
    transitionLayer.classList.add("active");
  }
  await sleep(160);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  target.classList.add("panel-pop");
  playTapSfx();
  pulseHaptic([10]);
  setAmbientSection(targetId);
  setTimeout(() => {
    target.classList.remove("panel-pop");
  }, 540);
  setTimeout(() => {
    if (transitionLayer) {
      transitionLayer.classList.remove("active");
    }
  }, 340);
}

function revealStorySections() {
  [
    photoSection,
    timelineSection,
    loveLabSection,
    secretSection,
    skySection,
    finalSection
  ].forEach((section, idx) => {
    if (!section) {
      return;
    }
    setTimeout(() => {
      section.classList.remove("hidden");
    }, idx * 90);
  });
}

function activateNav(id) {
  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === id);
  });
}

function connectNav() {
  if (!navButtons.length) {
    return;
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target || target.classList.contains("hidden")) {
        return;
      }
      activateNav(btn.dataset.target);
      transitionToSection(btn.dataset.target);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) {
        activateNav(visible.target.id);
        setAmbientSection(visible.target.id);
      }
    },
    { threshold: [0.2, 0.45, 0.7] }
  );

  document.querySelectorAll(".panel").forEach((panel) => observer.observe(panel));
}

function registerPwa() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Silent fallback for local file mode.
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    if (installBtn) {
      installBtn.classList.remove("hidden");
    }
  });

  if (!installBtn) {
    return;
  }

  installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installBtn.classList.add("hidden");
  });
}

function bindSfx() {
  if (!sfxBtn) {
    return;
  }
  sfxBtn.addEventListener("click", () => {
    sfxEnabled = !sfxEnabled;
    sfxBtn.textContent = sfxEnabled ? "Sound: On" : "Sound: Off";
    playTapSfx();
    pulseHaptic([10]);
  });
}

function bindAmbience() {
  if (!ambienceBtn) {
    return;
  }
  ambienceBtn.addEventListener("click", () => {
    ambienceEnabled = !ambienceEnabled;
    ambienceBtn.textContent = ambienceEnabled ? "Ambience: On" : "Ambience: Off";
    playTapSfx();
    pulseHaptic([10]);
    setAmbientSection(activeAmbientSection || "hero");
  });
}

if (beginBtn) {
  beginBtn.addEventListener("click", () => {
    playTapSfx();
    pulseHaptic([14]);
    if (letterSection) {
      letterSection.classList.remove("hidden");
    }
    activateNav("letterSection");
    transitionToSection("letterSection");
  });
}

if (openLetterBtn) {
  openLetterBtn.addEventListener("click", async () => {
    playRevealSfx();
    pulseHaptic([20, 24, 30]);
    openLetterBtn.disabled = true;
    await revealLetter();
    revealStorySections();
    setTimeout(() => {
      activateNav("photoSection");
      transitionToSection("photoSection");
    }, 260);
  });
}

if (musicBtn && bgMusic) {
  musicBtn.addEventListener("click", async () => {
    if (!bgMusic.getAttribute("src")) {
      musicBtn.textContent = "Add musicSrc in script.js";
      return;
    }
    if (bgMusic.paused) {
      try {
        await bgMusic.play();
        musicBtn.textContent = "Pause Music";
      } catch (error) {
        musicBtn.textContent = "Tap Again to Play";
      }
    } else {
      bgMusic.pause();
      musicBtn.textContent = "Play Music";
    }
  });
}

if (revealBtn) {
  revealBtn.addEventListener("click", () => {
    playSuccessSfx();
    pulseHaptic([22, 35, 60]);
    if (revealText) {
      revealText.textContent = config.revealText;
    }
    launchConfetti(180);
    burstHearts();
  });
}

if (loveMeter) {
  loveMeter.addEventListener("input", (event) => {
    updateLoveMeter(Number(event.target.value));
  });
}

if (randomReasonBtn && randomReasonText) {
  randomReasonBtn.addEventListener("click", () => {
    playTapSfx();
    pulseHaptic([8]);
    randomReasonText.textContent = randomReason();
    randomReasonText.classList.remove("hidden");
  });
}

if (unlockBtn) {
  unlockBtn.addEventListener("click", tryUnlockSecret);
}
if (secretCodeInput) {
  secretCodeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      tryUnlockSecret();
    }
  });
}

if (photoGrid) {
  photoGrid.addEventListener("click", playTapSfx);
  photoGrid.addEventListener("click", () => pulseHaptic([8]));
}

applyContent();
createPhotos();
createStars();
createTimeline();
initConfettiCanvas();
updateLoveMeter(Number(loveMeter?.value || 0));
connectNav();
registerPwa();
bindSfx();
bindAmbience();
window.addEventListener("load", () => {
  runLoadingIntro().catch(() => {
    document.body.classList.add("app-ready");
    if (loadingIntro) {
      loadingIntro.classList.add("done");
    }
  });
});
