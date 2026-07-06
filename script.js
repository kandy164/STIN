// Handle Yes button click
document.getElementById("yesBtn").addEventListener("click", () => {
  alert("Yay! I love you too 💖");
});

// Handle No button hover (make it run away)
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
