// xmasTree.js - mount function for vanilla JS / any framework
const css = `/* Xmas Tree shared CSS (XmasTree.css / xmas-tree.css) */

.tree-container {
  position: fixed;
  left: 20px;
  bottom: -10px;
  perspective: 1200px;
  transform-style: preserve-3d;
  z-index: 999;
}
.tree {
  position: relative;
  height: 40vmin;
  width: 20vmin;
  transform-style: preserve-3d;
  will-change: transform;
  -webkit-animation: spin3d 2s infinite linear;
  animation: spin3d 2s infinite linear;
}

.tree__light {
  transform-style: preserve-3d;
  will-change: transform;
  position: absolute;
  height: 1vmin;
  width: 1vmin;
  border-radius: 50%;
  -webkit-animation:
    flash calc(var(--speed) * 1s) calc(var(--delay) * 1s) infinite steps(4),
    appear 0.5s calc(var(--appear) * 0.05s) both;
  animation:
    flash calc(var(--speed) * 1s) calc(var(--delay) * 1s) infinite steps(4),
    appear 0.5s calc(var(--appear) * 0.05s) both;
  left: 50%;
  transform: translate(-50%, 50%) rotateY(calc(var(--rotate, 0) * 1deg))
    translate3d(0, 0, calc(var(--radius, 0) * 1vmin));
  bottom: calc(var(--y, 0) * 1%);
}

.tree__star {
  stroke-width: 5vmin;
  stroke: #f5e0a3;
  filter: drop-shadow(0 0 2vmin #fcf1cf);
  height: 5vmin;
  width: 5vmin;
  overflow: visible !important;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  stroke-dasharray: 1000 1000;
  fill: none;
  -webkit-animation: stroke 1s calc((var(--delay) * 0.95) * 0.05s) both;
  animation: stroke 1s calc((var(--delay) * 0.95) * 0.05s) both;
}
@keyframes stroke {
  from {
    stroke-dashoffset: -1000;
  }
}
@keyframes spin3d {
  to {
    transform: rotateY(360deg);
  }
}
@keyframes appear {
  from {
    opacity: 0;
  }
}
@keyframes flash {
  0%,
  100% {
    background: #f00;
  }
  20% {
    background: #fff;
  }
  40% {
    background: #f00;
  }
  60% {
    background: #fff;
  }
  80% {
    background: #f00;
  }
}
`;

export function mountXmasTree(selector) {
  const container = document.querySelector(selector);
  if (!container) return;

  // Inject CSS (if not already present)
  if (!document.getElementById("xmas-tree-styles")) {
    const style = document.createElement("style");
    style.id = "xmas-tree-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  const lights = [
    { appear: 0, y: 0, rotate: 1440, radius: 12.5, speed: 5.8063069718666664, delay: -1.7712136464858697 },
    { appear: 1, y: 2, rotate: 1411.2, radius: 12.25, speed: 1.9048887919115098, delay: -4.094831297550055 },
    { appear: 2, y: 4, rotate: 1382.4, radius: 12, speed: 9.803304238716965, delay: -2.139420085034358 },
    { appear: 3, y: 6, rotate: 1353.6000000000001, radius: 11.75, speed: 0.9075687594618143, delay: -8.57475397403746 },
    { appear: 4, y: 8, rotate: 1324.8, radius: 11.5, speed: 9.15288108823705, delay: -1.3081122221606223 },
    { appear: 5, y: 10, rotate: 1296, radius: 11.25, speed: 4.523578551040153, delay: -6.973304600496122 },
    { appear: 6, y: 12, rotate: 1267.2, radius: 11, speed: 7.074364965436133, delay: -3.319825322296055 },
    { appear: 7, y: 14, rotate: 1238.4, radius: 10.75, speed: 0.37671554955348574, delay: -2.514572278736855 },
    { appear: 8, y: 16, rotate: 1209.6000000000001, radius: 10.5, speed: 3.757258848434142, delay: -3.097222369287249 },
    { appear: 9, y: 18, rotate: 1180.8, radius: 10.25, speed: 7.01794816556927, delay: -1.4889107411158897 },
    { appear: 10, y: 20, rotate: 1152, radius: 10, speed: 7.59121101292997, delay: -8.893957174868277 },
    { appear: 11, y: 22, rotate: 1123.2, radius: 9.75, speed: 3.6543363168252507, delay: -3.021417797918393 },
    { appear: 12, y: 24, rotate: 1094.4, radius: 9.5, speed: 5.761484520814433, delay: -6.3400810789865965 },
    { appear: 13, y: 26, rotate: 1065.6000000000001, radius: 9.25, speed: 4.992350707724129, delay: -4.465255363840432 },
    { appear: 14, y: 28, rotate: 1036.8, radius: 9, speed: 5.9714801114039195, delay: -8.922905991722914 },
    { appear: 15, y: 30, rotate: 1008, radius: 8.75, speed: 2.422153068227275, delay: -3.8359662535359584 },
    { appear: 16, y: 32, rotate: 979.2, radius: 8.5, speed: 5.769510043347765, delay: -2.3397180922171112 },
    { appear: 17, y: 34, rotate: 950.4, radius: 8.25, speed: 7.143310450641001, delay: -5.73529258329267 },
    { appear: 18, y: 36, rotate: 921.6, radius: 8, speed: 6.634175245874248, delay: -4.659709093660358 },
    { appear: 19, y: 38, rotate: 892.8000000000001, radius: 7.75, speed: 8.40663079946756, delay: -6.627575204880043 },
    { appear: 20, y: 40, rotate: 864, radius: 7.5, speed: 9.092578395992083, delay: -3.3807970205658644 },
    { appear: 21, y: 42, rotate: 835.2, radius: 7.25, speed: 2.795056075638751, delay: -9.348001472222812 },
    { appear: 22, y: 44, rotate: 806.4, radius: 7, speed: 4.466022078821927, delay: -1.0272401913218099 },
    { appear: 23, y: 46, rotate: 777.6, radius: 6.75, speed: 9.523416291122508, delay: -5.109555028852246 },
    { appear: 24, y: 48, rotate: 748.8000000000001, radius: 6.5, speed: 5.648038245700526, delay: -4.158588015392361 },
    { appear: 25, y: 50, rotate: 720, radius: 6.25, speed: 3.7878031753008234, delay: -8.689710893502337 },
    { appear: 26, y: 52, rotate: 691.2, radius: 6, speed: 1.5060837196738563, delay: -5.542191812338899 },
    { appear: 27, y: 54, rotate: 662.4, radius: 5.75, speed: 8.263773288966314, delay: -7.600175873314194 },
    { appear: 28, y: 56, rotate: 633.6, radius: 5.5, speed: 1.0406184743295466, delay: -0.8939287756459646 },
    { appear: 29, y: 58, rotate: 604.8000000000001, radius: 5.25, speed: 9.514998196769135, delay: -6.099204389988846 },
    { appear: 30, y: 60, rotate: 576, radius: 5, speed: 9.590335610370015, delay: -9.727068620920962 },
    { appear: 31, y: 62, rotate: 547.2, radius: 4.75, speed: 6.547385058886393, delay: -3.337254097319775 },
    { appear: 32, y: 64, rotate: 518.4, radius: 4.5, speed: 5.203632437965837, delay: -1.8284702235341532 },
    { appear: 33, y: 66, rotate: 489.6, radius: 4.25, speed: 1.939459565904662, delay: -3.732095066877288 },
    { appear: 34, y: 68, rotate: 460.8, radius: 4, speed: 0.1492898817841426, delay: -3.240070411316396 },
    { appear: 35, y: 70, rotate: 432, radius: 3.75, speed: 2.1775000105501285, delay: -1.9039801784953747 },
    { appear: 36, y: 72, rotate: 403.2, radius: 3.5, speed: 4.377753096952333, delay: -7.775287067704042 },
    { appear: 37, y: 74, rotate: 374.40000000000003, radius: 3.25, speed: 6.0159399225879895, delay: -7.396255584139353 },
    { appear: 38, y: 76, rotate: 345.6, radius: 3, speed: 7.117076597212646, delay: -9.81852524071276 },
    { appear: 39, y: 78, rotate: 316.8, radius: 2.75, speed: 2.686251446947263, delay: -5.592242706174792 },
    { appear: 40, y: 80, rotate: 288, radius: 2.5, speed: 8.159213192076432, delay: -0.4731456368889386 },
    { appear: 41, y: 82, rotate: 259.2, radius: 2.25, speed: 5.28051419101703, delay: -9.981803245506544 },
    { appear: 42, y: 84, rotate: 230.4, radius: 2, speed: 2.89311671030577, delay: -0.36717264445522035 },
    { appear: 43, y: 86, rotate: 201.6, radius: 1.75, speed: 7.6028555716797275, delay: -4.57821219679309 },
    { appear: 44, y: 88, rotate: 172.8, radius: 1.5, speed: 9.594923566051474, delay: -6.385724711793996 },
    { appear: 45, y: 90, rotate: 144, radius: 1.25, speed: 8.09168291274053, delay: -1.5122285993567153 },
    { appear: 46, y: 92, rotate: 115.2, radius: 1, speed: 5.717933755119415, delay: -9.493716097746914 },
    { appear: 47, y: 94, rotate: 86.4, radius: 0.75, speed: 9.090543435248852, delay: -0.5933846000162868 },
    { appear: 48, y: 96, rotate: 57.6, radius: 0.5, speed: 9.823749200360847, delay: -4.7420985119521974 },
    { appear: 49, y: 98, rotate: 28.8, radius: 0.25, speed: 2.95957301675398, delay: -2.0371556584842487 }
  ];

  // Build tree HTML
  const tree = document.createElement("div");
  tree.className = "tree";
  lights.forEach(light => {
    const d = document.createElement("div");
    d.className = "tree__light";
    d.style.setProperty("--appear", light.appear);
    d.style.setProperty("--y", light.y);
    d.style.setProperty("--rotate", light.rotate);
    d.style.setProperty("--radius", light.radius);
    d.style.setProperty("--speed", light.speed);
    d.style.setProperty("--delay", light.delay);
    tree.appendChild(d);
  });

  const starSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  starSvg.setAttribute("class","tree__star");
  starSvg.setAttribute("viewBox","0 0 113.32 108.44");
  starSvg.innerHTML = '<path d="M90.19 104.33L57.12 87.38 24.4 105l5.91-36.69L3.44 42.65l36.72-5.72 16.1-33.5L73.06 36.6l36.83 4.97-26.35 26.21z" fill="none" stroke-width="6.88" stroke-linecap="round" stroke-linejoin="round"></path>';

  const wrapper = document.createElement("div");
  wrapper.className = "tree-container";
  wrapper.appendChild(tree);
  tree.style.transformStyle = "preserve-3d";
  wrapper.insertBefore(starSvg, tree);

  // Clear container and append
  container.innerHTML = "";
  container.appendChild(wrapper);
}
