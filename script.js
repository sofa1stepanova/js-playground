document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
});

  // button 1
  const firsBtn = document.querySelector('[data-js="t1-btn"]');
  const colorImage = document.querySelector('[data-js="t1-hex"]');
  firsBtn.addEventListener("click", () => {
    let newColor = Math.floor(Math.random() * 0xffffff).toString(16);
    firsBtn.style.background = "#" + newColor;
    colorImage.textContent = "#" + newColor;
  })

  // 2
  const firstEnter = document.querySelector('[data-js="t2-input"]');
  const t2Counst = document.querySelector('[data-js="t2-count"]');
  firstEnter.addEventListener("input", () => {
    if (firstEnter.value.length > 50) {
      firstEnter.value = firstEnter.value.substring(0, 50);
    }
    t2Counst.textContent = firstEnter.value.length;
  })

  // 3
  const thirdEnter = document.querySelector('[data-js="t3-input"]');
  const thirdClick = document.querySelector('[data-js="t3-add"]');
  const thirdSp = document.querySelector('[data-js="t3-list"]');
  thirdClick.addEventListener("click", () => {
    if (thirdEnter.value === "") return;
    let newSp = document.createElement("li");
    newSp.textContent = thirdEnter.value;
    thirdSp.appendChild(newSp);
    thirdEnter.value = "";
  })

  // 4
  const fourthMinus = document.querySelector('[data-js="t4-minus"]');
  const fourthPlus = document.querySelector('[data-js="t4-plus"]');
  const fourthReset = document.querySelector('[data-js="t4-reset"]');
  const fourthOut = document.querySelector('[data-js="t4-out"]');
  let fourthValue = 0;
  fourthMinus.addEventListener("click", () => {
    fourthValue -= 1;
    fourthOut.textContent = fourthValue;
  })
  fourthPlus.addEventListener("click", () => {
    fourthValue += 1
    fourthOut.textContent = fourthValue;
  })
  fourthReset.addEventListener("click", () => {
    fourthValue = 0;
    fourthOut.textContent = fourthValue;
  })

  // 5
  const fifthClick = document.querySelector('[data-js="t5-open"]');
  const fifthModal = document.querySelector('[data-js="t5-modal"]');
  const fifthSecondClick = document.querySelector('[data-js="t5-close"]');
  const fifthBack = document.querySelector('[data-js="t5-backdrop"]');
  fifthClick.addEventListener("click", () => {
    fifthModal.hidden = false;
  })
  fifthSecondClick.addEventListener("click", () => {
    fifthModal.hidden = true;
  })
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {fifthModal.hidden = true;}
  })
  fifthBack.addEventListener("click", (e) => {
    fifthModal.hidden = true;
  })

  // 6
  const sixthTabs = document.querySelectorAll(".tab");
  let sixthCurrentTab = "a";
  sixthTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelector(`[data-tab="${sixthCurrentTab}"]`).classList.toggle('is-active');
      document.querySelector(`[data-pane="${sixthCurrentTab}"]`).classList.toggle('is-active');
      sixthCurrentTab = tab.dataset.tab;
      tab.classList.toggle("is-active");
      document.querySelector(`[data-pane="${sixthCurrentTab}"]`).classList.toggle('is-active');
    })
  })

  //7
  const seventhEnter = document.querySelector('[data-js="t7-input"]');
  const seventhClick = document.querySelector('[data-js="t7-run"]');
  const seventhOut = document.querySelector('[data-js="t7-out"]');
  seventhClick.addEventListener("click", () => {
    let text = seventhEnter.value;
    seventhOut.textContent = text.split("").reverse().join("");
    seventhEnter.value = "";
  })

  // 8
  const eightA = document.querySelector('[data-js="t8-a"]');
  const eightB = document.querySelector('[data-js="t8-b"]');
  const eightSum = document.querySelector('[data-js="t8-add"]');
  const eightMul = document.querySelector('[data-js="t8-mul"]');
  const eightResult = document.querySelector('[data-js="t8-out"]');
  eightSum.addEventListener("click", () => {
    if (eightA.value === "" || eightB.value === "") return;
    let a = Number(eightA.value);
    let b = Number(eightB.value);
    eightResult.textContent = eightA.value + eightB.value;
    if (!Number.isNaN(a) && !Number.isNaN(b)) eightResult.textContent = a + b;
    eightA.value = "";
    eightB.value = "";
  })
  eightMul.addEventListener("click", () => {
    if (eightA.value === "" || eightB.value === "") return;
    let a = Number(eightA.value);
    let b = Number(eightB.value);

    if (!Number.isNaN(a) && !Number.isNaN(b)) {
      eightResult.textContent = eightA.value * eightB.value;
      eightA.value = "";
      eightB.value = "";
    }
  })

  // 9
  const ninthClick = document.querySelector('[data-js="t9-toggle"]');
  const ninthText = document.querySelector('[data-js="t9-text"]');
  ninthClick.addEventListener("click", () => {
    ninthText.hidden = !ninthText.hidden;
    ninthClick.textContent = ninthClick.textContent === "Показать" ? "Скрыть" : "Показать";
  })

  // 10
  const tenthRange = document.querySelector('[data-js="t10-range"]');
  const tenthOut = document.querySelector('[data-js="t10-out"]');
  const tenthBox = document.querySelector('[data-js="t10-box"]');
  tenthRange.addEventListener("input", (e) => {
    tenthOut.textContent = e.target.value + "px";
    tenthBox.style.width = tenthOut.value;
    tenthBox.style.height = tenthOut.value;
  })

  // 11
  const eleventhInput = document.querySelector('[data-js="t11-seconds"]');
  const eleventhStart = document.querySelector('[data-js="t11-start"]');
  const eleventhStop = document.querySelector('[data-js="t11-stop"]');
  const eleventhOut = document.querySelector('[data-js="t11-out"]');
  let eleventhSeconds = 0;
  eleventhStart.addEventListener("click", () => {
    eleventhSeconds = Number(eleventhInput.value);
    if (!Number.isNaN(eleventhSeconds)) {
      eleventhInput.value = "";
      eleventhOut.value = eleventhSeconds;
      const interval = setInterval(() => {
        eleventhSeconds--;
        eleventhOut.textContent = eleventhSeconds;
        if (eleventhSeconds <= 0) {
          eleventhOut.value = 0;
          clearInterval(interval);
        }
      }, 1000)
    }
  })
  eleventhStop.addEventListener("click", () => {
    eleventhSeconds = 0;
  })

  // 12
  const twelfthButton = document.querySelector('[data-js="t12-plus"]');
  const twelfthLabel = document.querySelector('[data-js="t12-label"]');
  const twelfthBar = document.querySelector('[data-js="t12-bar"]');
  let twelfthProgress = 0;
  twelfthButton.addEventListener("click", () => {
    if (twelfthProgress < 100){
      twelfthProgress += 10;
      twelfthLabel.textContent = twelfthProgress + "%";
      twelfthBar.style.width = twelfthProgress + "%";
    }
  })

  // 13
  const firteenthOut = document.querySelector('[data-js="t13-out"]');
  const firteenthInput = document.querySelector('[data-js="t13-input"]');
  const firteenthKeys = new Set();

  firteenthInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      firteenthInput.blur();
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    firteenthKeys.add(e.key);
    firteenthOut.textContent = Array.from(firteenthKeys).join(", ")  + " нажаты";
    if (e.key === "Control" || e.key === "q" || e.key === "й" || e.key === "Q" || e.key === "Й") {
      if (firteenthKeys.has("Control") && (firteenthKeys.has("q") || firteenthKeys.has("й") || firteenthKeys.has("Q") || firteenthKeys.has("Й"))) {
        firteenthInput.value = "";
      }
    }
  })

  document.addEventListener('keyup', (e) => {
    firteenthKeys.delete(e.key);
    firteenthOut.textContent = Array.from(firteenthKeys).join(", ")  + " нажаты";
    if (firteenthKeys.size === 0) {firteenthOut.textContent = "Ничего не нажато. "}
  })


  // 14
  const fourteenthButton = document.querySelector('[data-js="t14-next"]');
  const fourteenthOut = document.querySelector('[data-js="t14-out"]');
  const fourteenthArray = [
    "«Кто чувствует несвободу воли, тот душевнобольной; кто отрицает её, тот глуп.»<p>Фридрих Ницше.",
    "«Мы должны верить в свободу воли. У нас просто нет выбора.»<p>Айзек Зингер.",
    "«Если бы свободно падающий камень мог мыслить, он думал бы, что падает по свободной воле.»<p>Бенедикт (Барух) Спиноза.",
    "«Свобода воли означает… не что иное, как способность принимать решения со знанием дела.»<p>Фридрих Энгельс.",
    "«И всё же, ради того, чтобы не утратить свободу воли, я предположу, что, может быть, судьба распоряжается лишь половиной всех наших дел, другую же половину, или около того, она предоставляет самим людям.»<p>Никколо Макиавелли.",
    "«Кто страдает желудком, у того нет свободы воли.»<p>Винсент Ван Гог.",
    "«Свобода — это осознанная необходимость.»<p>Георг Гегель.",
    "«Человек рожден свободным, но везде он в цепях.»<p>Жан-Жак Руссо.",
    "«Ни один человек не свободен, если он не владеет собой.»<p>Эпиктет.",
    "«Свобода воли — это иллюзия, которая делает нас людьми.»<p>Артур Шопенгауэр.",
    "«Люди редко думают, что их поступки определяются причинами, лежащими за пределами их сознания.»<p>Сигмунд Фрейд.",
    "«Свобода — это право выбирать между добром и злом.»<p>Фёдор Достоевский.",
    "«Мир — это сцена, где люди играют по сценарию, который они считают своим.»<p>Альбер Камю.",
    "«Свобода — это не отсутствие законов, а возможность действовать по разуму.»<p>Исаак Ньютон.",
    "«Выбор — это то, что делает человека личностью.»<p>Жан-Поль Сартр."
  ];

  let fourteenthChoose = -1;
  fourteenthButton.addEventListener("click", () => {
    let fourteenthNext =  Math.floor(Math.random() * fourteenthArray.length);
    if (fourteenthNext === fourteenthChoose) fourteenthNext = (fourteenthNext + 1) % fourteenthArray.length;
    fourteenthChoose = fourteenthNext;
    fourteenthOut.innerHTML = fourteenthArray[fourteenthChoose];
  })

  // 15
  const fifteenthArea = document.querySelector('[data-js="t15-area"]');
  const fifteenthItem = document.querySelector('[data-js="t15-item"]');
  const fifteenthCoords = document.querySelector('[data-js="t15-coords"]');
  let fifteenthDown = false;
  let fifteenthX;
  let fifteenthY;

  fifteenthItem.addEventListener('mousedown', (e) => {
    const itemRect = fifteenthItem.getBoundingClientRect();
    fifteenthDown = true;
    fifteenthX = e.clientX - itemRect.left;
    fifteenthY = e.clientY - itemRect.top;
  })

  document.addEventListener('mousemove', (e) => {
    const itemRect = fifteenthItem.getBoundingClientRect();
    if (!fifteenthDown) return;
    let areaRect = fifteenthArea.getBoundingClientRect();
    let x = Math.min(Math.max(e.clientX - areaRect.left - fifteenthX, 0), areaRect.width - itemRect.width);
    let y = Math.min(Math.max(e.clientY - areaRect.top  - fifteenthY, 0), areaRect.height - itemRect.height);
    fifteenthCoords.textContent = `x: ${x}, y: ${y}`;
    fifteenthItem.style.left = x + 'px';
    fifteenthItem.style.top  = y + 'px';
  })

  document.addEventListener('mouseup', () => {
    fifteenthDown = false;
  });

  // 16
  const animBtn = document.querySelector('[data-js="t16-animate"]');
  const box = document.querySelector('[data-js="t16-box"]');
  animBtn.addEventListener('click', () => {
    box.classList.add('is_bouncing');
  })

  //17
  const spawnInterval = 1000;
  let block_size = 100
  function CreateDiv(x, y) {
    const div = document.createElement('div');
    div.className = "target-div";
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    return div;
  }
  
  function task17() {
    let area = document.querySelector('[data-js="t17-area"]');
    setInterval(() => {
      let maxX = Math.max(0, area.clientWidth - block_size);
      let maxY = Math.max(0, area.clientHeight - block_size);
      let xPosition = Math.floor(Math.random() * maxX);
      let yPosition = Math.floor(Math.random() * maxY);
      let block = CreateDiv(xPosition, yPosition);
      area.appendChild(block);
    }, spawnInterval)
  }
  
  task17();
  
  //18
  const area18 = document.querySelector('[data-js="t18-area"]');
  moveSquare(area18);
  
  function moveSquare(area) {
    const square = document.createElement('div');
    square.style.position = 'absolute';
    square.style.height = '100px';
    square.style.width = '100px';
    square.style.backgroundColor = 'black';
    area.appendChild(square);
  
    let lastTime = null;
    const speed = 400; 
  
    function resetSquare() {
      const centerY = (area.clientHeight / 2) - (square.offsetHeight / 2);
      square.style.top = centerY + 'px';
      square.style.left = area.clientWidth + 'px';
    }
  
    resetSquare();
  
    function frame(timestamp) {
      if (lastTime === null) lastTime = timestamp;
      const a = (timestamp - lastTime) / 1000;
      lastTime = timestamp;
  
      let left = parseFloat(square.style.left);
  
      if (left + square.offsetWidth < 0) {
        resetSquare(); 
        left = parseFloat(square.style.left); 
      }
  
      left -= speed * a; 
      square.style.left = left + 'px';
  
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  //19
  const area19 = document.querySelector('[data-js="t19-area"]');
  moveSquare19(area19);
  
  function moveSquare19(area) {
    const square = document.createElement('div');
    square.style.position = 'absolute';
    square.style.height = '100px';
    square.style.width = '100px';
    square.style.backgroundColor = 'black';
    area.appendChild(square);
  
    let lastTime = null;
    const speed = 400;
  
    function resetSquare() {
      square.style.top = Math.random() * (area.clientHeight - square.offsetHeight) + 'px';
      square.style.left = area.clientWidth + 'px';
    }
  
    resetSquare();
  
    function frame(timestamp) {
      if (lastTime === null) lastTime = timestamp;
      const b = (timestamp - lastTime) / 1000;
      lastTime = timestamp;
  
      let left = parseFloat(square.style.left);
  
      if (left + square.offsetWidth < 0) {
        resetSquare();
        left = parseFloat(square.style.left);
      }
  
      left -= speed * b;
      square.style.left = left + 'px';
  
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }