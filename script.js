let mainSection = () => {
  const x = document.querySelector(".x-sec").value;
  const y = document.querySelector(".y-sec").value;
  const resetBtn = document.querySelector(".rst-btn");
  const menu = document.querySelector(".container-grid");
  const tempSec = document.querySelector(".mrk-x");
  const markTemp = document.querySelector(".mark-y");
  const subBtn = document.querySelector(".sub-btn");

  if (x <= 0 || y <= 0) {
    alert("Please enter postive X and Y");
  }

  menu.innerHTML = "";
  menu.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  menu.style.gridTemplateRows = `repeat(${y}, 1fr)`;

  const result = x * y;
  for (let i = 0; i < result; i++) {
    const num = document.createElement("div");
    num.className = "grid-num";
    menu.appendChild(num);
  }

  resetBtn.style.display = "block";
  tempSec.style.display = "block";
  markTemp.style.display = "block";
  subBtn.style.display = "block";
};

let resetSection = () => {
  const xInput = document.querySelector(".x-sec");
  const yInput = document.querySelector(".y-sec");
  const menu = document.querySelector(".container-grid");
  const rstBtn = document.querySelector(".rst-btn");
  const clearBtn = document.querySelector(".clr-btn");
  const subBtn = document.querySelector(".sub-btn");
  const tempSec = document.querySelector(".mrk-x");
  const markTemp = document.querySelector(".mark-y");

  menu.innerHTML = "";
  xInput.value = "";
  yInput.value = "";
  menu.style.gridTemplateColumns = "";
  menu.style.gridTemplateRows = "";

  rstBtn.style.display = "none";
  tempSec.style.display = "none";
  markTemp.style.display = "none";
  subBtn.style.display = "none";
  clearBtn.style.display = "none";
};

let submitSection = () => {
  const x = parseInt(document.querySelector(".mrk-x").value);
  const y = parseInt(document.querySelector(".mark-y").value);
  const cols = parseInt(document.querySelector(".x-sec").value);
  const rows = parseInt(document.querySelector(".y-sec").value);
  const menu = document.querySelector(".container-grid");
  const clrBtn = document.querySelector(".clr-btn");

  const flippedY = rows - 1 - y;
  const index = flippedY * cols + x;

  const cells = menu.querySelectorAll(".grid-num");
  if (cells[index]) {
    cells[index].style.backgroundColor = "lightgreen";
  }

  clrBtn.style.display = "block";
};

let clearSection = () => {
  const menu = document.querySelector(".container-grid");
  const temp = menu.querySelectorAll(".grid-num");

  for (let cell of temp) {
    const color = window.getComputedStyle(cell).backgroundColor;

    if (color === "rgb(144, 238, 144)") {
      cell.style.backgroundColor = "";
      break;
    }
  }
};
