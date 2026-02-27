console.log("I didn't know you could use the console Jade!");
alert("Hey baby! I hope you're alright.");

function love()
{
  const audio = document.getElementById('bg-music');
  audio.play();
   const LOVE_MESSAGES = [
  "I love you so much! You are my sunshine on a cloudy day! ☀️",
  "I am so grateful to have you in my life. You make everything better just by being you! ✨",
  "I will always be here for you, no matter what. You can count on me unconditionally! 💖",
  "You're my favorite person to do absolutely nothing with. 🏠",
  "Every day with you is my new favorite day. 🌹",
  "I’m so proud of everything you are and everything you do. ⭐",
  "Just a reminder: you are incredibly beautiful, inside and out. 🌸",
  "Thank you for being my home. 💑",
  "I love the way you laugh; it's my favorite sound in the world. 🎶",
  "You are my greatest adventure. 🗺️",
  "I still get butterflies every time I see you. 🦋",
  "You’re the best thing that’s ever happened to me. 💌"
];

const randomIndex = Math.floor(Math.random() * LOVE_MESSAGES.length);
 
const messageDisplay = document.getElementById('message-display');
  messageDisplay.textContent = LOVE_MESSAGES[randomIndex];

}

function affirmation()
{
  const audio = document.getElementById('bg-music');
  audio.play();
    const AFFIRMATION_MESSAGES = [
    "You are doing an amazing job, and I am so proud of you! 🌟",
    "You are strong, capable, and resilient. You've got this! 💪",
    "Your kindness and compassion make the world a better place. 🌍",
    "You are worthy of all the love and happiness in the world. 💖",
    "Every day you grow stronger and more confident. 🚀",
    "You are loved more than you could ever imagine. 💌",
    "You are enough, exactly as you are. ✨",
    "Your potential is limitless, and I believe in you. 🌈",
    "You bring so much light into the lives of everyone around you. 💡",
    "Don't forget how far you've come; you've survived 100% of your bad days. 🏆",
    "You deserve to take up space and be heard. 📣",
    "Your feelings are valid, and it's okay to take a break. ☁️",
    "You are a rare and precious gift to this world. 🎁",
    "I am constantly in awe of your intelligence and grace. 🧠",
    "You have the power to create the life you want. 🛠️",
    "The world is better because you are in it. 🌏",
    "You are braver than you believe and smarter than you think. 🦁",
    "Keep going; the best is yet to come. 🔜"
];

    const randomIndex = Math.floor(Math.random() * AFFIRMATION_MESSAGES.length);
  
    const messageDisplay = document.getElementById('message-display');
  messageDisplay.textContent = AFFIRMATION_MESSAGES[randomIndex];
}

function support()
{
  const audio = document.getElementById('bg-music');
  audio.play();
    const SUPPORT_MESSAGES = [
    "I am here for you, no matter what. You can always count on me. 💖",
    "You are not alone; we will get through this together. 🤝",
    "It's okay to ask for help when you need it. I'm here to support you. 🆘",
    "I believe in you and your ability to overcome any challenge. 🌟",
    "Your feelings are valid, and it's okay to take time for yourself. 🕰️",
    "You are stronger than you think, and I am here to remind you of that. 💪",
    "I will always listen without judgment and offer a shoulder to lean on. 🛋️",
    "You are loved and valued, even in your toughest moments. 💌",
    "Remember that it's okay to not be okay sometimes. I'm here for you through it all. 🌈",
    "You have a support system that cares deeply about you, and I am a part of that. 🤗",
    "I am proud of you for facing your struggles head-on. You are incredibly brave. 🦁",
    "No matter what happens, I will always be by your side. 💑"
];

    const randomIndex = Math.floor(Math.random() * SUPPORT_MESSAGES.length);
  const messageDisplay = document.getElementById('message-display');
  messageDisplay.textContent = SUPPORT_MESSAGES[randomIndex];
}

function yesreally() {
  const audio = document.getElementById('bg-music');
  audio.play();
  const SUPPORT_MESSAGES = [
    "I'm here for you, always. 💖",
    "We can get through anything together. 🤝",
    "It's okay to ask for help. 🆘",
    "I believe in you completely. 🌟",
    "Your feelings are valid. 🕰️",
    "You are stronger than you think. 💪",
    "I'm always here to listen. 🛋️",
    "You are loved and valued. 💌",
    "It's okay to not be okay. 🌈",
    "I care deeply about you. 🤗",
    "You are incredibly brave. 🦁",
    "I'm always by your side. 💑"
  ];

  const randomIndex = Math.floor(Math.random() * SUPPORT_MESSAGES.length);
  const yes = document.getElementById('yes-display');
  
  yes.textContent = "Yes, forever! 💖 " + SUPPORT_MESSAGES[randomIndex];
}
const PLANS = [
  "Fuhhhhh 🛏️",
  "Listen To Music 🎶",
  "Go on a picnic! 🧺",
  "Chill in the Sun ☀️",
  "The park 🌳",
  "A Dinner Date! 🍝"
];

let currentRotation = 0;


const labelContainer = document.getElementById('wheel-labels');

if (labelContainer) {
  PLANS.forEach((plan, i) => {
    const angle = (360 / PLANS.length) * i;
    const span = document.createElement('span');

    span.style.transform = `rotate(${angle + (360 / PLANS.length / 2)}deg)`;
    span.textContent = plan;
    labelContainer.appendChild(span);
  });
}


function spinWheel() {
  const audio = document.getElementById('bg-music');
  audio.play();
  const wheel = document.getElementById('wheel');
  const result = document.getElementById('result-display');
  
  if (!wheel) return;
  const extraDegrees = Math.floor(Math.random() * 360);
  currentRotation += 1800 + extraDegrees; 
  
  wheel.style.transform = `rotate(${currentRotation}deg)`;


  setTimeout(() => {
    const actualDegree = currentRotation % 360;
    const index = Math.floor((360 - actualDegree) / (360 / PLANS.length)) % PLANS.length;
    
    if (result) {
      result.textContent = "We're going to: " + PLANS[index];
    }
  }, 4000);
}

