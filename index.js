const listBeach = document.querySelectorAll("li");
const lightSkyColors = ["#87CEEB", "#ADD8E6", "#C6EFFF"];
const sunsetSkyColors = ["#FF7F50", "#FFA07A", "#FF69B4", "#DB7093"];

listBeach.forEach((beach, index) => {
  const randomColorSky =
    lightSkyColors[Math.floor(Math.random() * lightSkyColors.length)];
  const randomColorSunset =
    sunsetSkyColors[Math.floor(Math.random() * sunsetSkyColors.length)];
  if (index % 2 === 0) {
    beach.style.background = randomColorSky;
  } else {
    beach.style.background = randomColorSunset;
  }
  beach.classList.add("beach__card");
});

// First Beach - Pink Sand
const firstBeach = listBeach[0];
const firstBeachDecoration = document.createElement("div");
firstBeachDecoration.id = "pink__sand";

firstBeachDecoration.innerHTML = `
<svg width="100%" height="150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 100 Q 50 0 200 0 L200 100 Z" fill="black" />
</svg>
`;

firstBeach.addEventListener("mouseenter", () => {
  firstBeachDecoration.style.bottom = "-5px";
  firstBeachDecoration.style.transform = "scale(1.2)";
});

firstBeach.addEventListener("mouseleave", () => {
  firstBeachDecoration.style.bottom = "-10px";
  firstBeachDecoration.style.transform = "scale(1)";
});

firstBeach.appendChild(firstBeachDecoration);
