const listBeach = document.querySelectorAll("li");
const skies = [
  "#87CEEB",
  "#ADD8E6",
  "#C6EFFF",
  // "#FF7F50",
  // "#FFA07A",
  // "#FF69B4",
  // "#DB7093",
];
const sandColors = [
  "#F5F5DC", // Silican Sand
  "#FFF5E1", // Powdery White Sand
  "#F5F5DC", // Silican Sand
  "#FFF5E1", // Powdery White Sand
  "#FAF9F6", // Pristine White Sand
  "#F8F4E3", // Soft White Sand
  "#EED6C4", // Soft Coral Sand
  "#EED6C4", // Soft Coral Sand
  "#FFF5E1", // Powdery White Sand
  "#D8BFD8", // Pink-Hued Sand
];

const sand = document.createElement("div");
const sea = document.createElement("div");
sand.classList.add("sand");
sea.classList.add("sea");

listBeach.forEach((beach, index) => {
  const customSand = sand.cloneNode(true);
  const customSea = sea.cloneNode(true);
  customSand.innerHTML = `
    <svg width="100%" height="150" viewBox="0 0 100 100">
      <path d="M0 100 Q 50 0 200 0 L200 100 Z" fill="${sandColors[index]}" />
    </svg>
  `;
  customSea.innerHTML = `
    <svg width="100%" height="150" viewBox="0 0 100 100">
    <path d="
    M -100 200
    V 20
    Q -60 0 -20 20
    Q 20 40 60 20
    Q 100 0 140 20
    Q 180 40 220 20
    V 150
    " fill="#00CED1" />
    </svg>
  `;
  const randomSky = skies[Math.floor(Math.random() * skies.length)];
  beach.style.backgroundColor = randomSky;
  beach.classList.add("beach__card");
  beach.appendChild(customSand);
  beach.appendChild(customSea);

  beach.addEventListener("mouseenter", () => {
    customSand.style.bottom = "-5px";
    customSand.style.transform = "scale(1.2)";
  });

  beach.addEventListener("mouseleave", () => {
    customSand.style.bottom = "-10px";
    customSand.style.transform = "scale(1)";
  });
});
