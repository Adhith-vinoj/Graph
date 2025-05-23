let mainConatiner = () => {
  const addingGraph = document.querySelector(".add-grph");
  const graphWrapper = document.querySelector(".graph-wrapper");
  addingGraph.addEventListener("click", () => {
    const graphHTML = `
          <div class="main-graphsection">
                <div class="second-mid">
                    <div class="container">
                        <input class="x-sec" type="number" placeholder="x">
                        <input class="y-sec" type="number" placeholder="Y">
                        <button class="drw-btn">Draw</button>
                    </div>
                    <div class="input-section">
                        <input class="mrk-x" type="number" placeholder="X">
                        <input type="number" class="mark-y" placeholder="Y">
                        <button class="sub-btn">Submit</button>
                    </div>
                    <div class="btn-container">
                        <button class="rst-btn">Reset</button>
                        <button class="clr-btn">Clear</button>
                    </div>
                    <div class="dlt-section">
                        <button class="dlt-btn">Delete</button>
                        </div>
                </div>
                <div class="wrapper">
                    <div class="container-grid"></div>
                </div>
            </div>
        `;
    const wrapper = document.createElement("div");
    wrapper.innerHTML = graphHTML;
    const graph = wrapper.firstElementChild;
    graphWrapper.appendChild(graph);


    const mainCont = document.querySelector(".main-container-section")
    mainCont.style.backgroundImage = "none"
    let aboutGrid = {
      columns: 0,
      rows: 0,
      boxColor: "#ffffff",
      border: "transparent",
      selectBoxColor: "lightgreen",
      aspectRatio: 0 / 0,
      columngap: "10px",
      containerBorder: "1px solid #ffff",
    };

    const drawBtn = graph.querySelector(".drw-btn");
    const resetBtn = graph.querySelector(".rst-btn");
    const submitBtn = graph.querySelector(".sub-btn");
    const clearBtn = graph.querySelector(".clr-btn");

    let mainSection = () => {
      const x = graph.querySelector(".x-sec").value;
      const y = graph.querySelector(".y-sec").value;
      const resetBtn = graph.querySelector(".rst-btn");
      const menu = graph.querySelector(".container-grid");
      const tempSec = graph.querySelector(".mrk-x");
      const markTemp = graph.querySelector(".mark-y");
      const subBtn = graph.querySelector(".sub-btn");

      if (x <= 0 || y <= 0) {
        alert("Please enter postive X and Y");
      }

      aboutGrid.columns = x;
      aboutGrid.rows = y;
      menu.innerHTML = "";
      menu.style.gridTemplateColumns = `repeat(${aboutGrid.columns}, 1fr)`;
      menu.style.gridTemplateRows = `repeat(${aboutGrid.rows}, 1fr)`;
      menu.style.columnGap = aboutGrid.columngap;
      menu.style.border = aboutGrid.containerBorder

      const result = x * y;
      for (let i = 0; i < result; i++) {
        const num = document.createElement("div");
        num.className = "grid-num";
        num.style.border = aboutGrid.border;
        num.style.backgroundColor = aboutGrid.boxColor;
        num.style.aspectRatio = aboutGrid.aspectRatio;
        menu.appendChild(num);
      }

      resetBtn.style.display = "block";
      tempSec.style.display = "block";
      markTemp.style.display = "block";
      subBtn.style.display = "block";
    };

    let resetSection = () => {
      const xInput = graph.querySelector(".x-sec");
      const yInput = graph.querySelector(".y-sec");
      const menu = graph.querySelector(".container-grid");
      const rstBtn = graph.querySelector(".rst-btn");
      const clearBtn = graph.querySelector(".clr-btn");
      const subBtn = graph.querySelector(".sub-btn");
      const tempSec = graph.querySelector(".mrk-x");
      const markTemp = graph.querySelector(".mark-y");

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
      const x = parseInt(graph.querySelector(".mrk-x").value);
      const y = parseInt(graph.querySelector(".mark-y").value);
      const menu = graph.querySelector(".container-grid");
      const clrBtn = graph.querySelector(".clr-btn");

      const cols = aboutGrid.columns;
      const rows = aboutGrid.rows;
      for( let i =0; i<= y; i++){
      const flippedY = rows - 1 - i;
      const index = flippedY * cols + x;
      const cells = menu.querySelectorAll(".grid-num");
      if (cells[index]) {
        cells[index].style.backgroundColor = aboutGrid.selectBoxColor;
      }
    }
      clrBtn.style.display = "block";
    };

    let clearSection = () => {
      const menu = graph.querySelector(".container-grid");
      const temp = menu.querySelectorAll(".grid-num");
      for (let char of temp) {
        const color = window.getComputedStyle(char).backgroundColor;
        if (color === "rgb(144, 238, 144)") {
          char.style.backgroundColor = "";
        
        }
      }
    };

    const dltBtn = graph.querySelector(".dlt-btn");
    let deleteSection = () => {
      graph.remove();
      const remainGraph = document.querySelectorAll(".main-graphsection");
      if(remainGraph.length === 0){
        mainCont.style.backgroundImage =mainCont.style.backgroundImage = "url('https://img.freepik.com/premium-vector/business-candle-stick-graph-chart-stock-market-investment-trading-white-background-design_41981-3730.jpg?semt=ais_hybrid&w=2000')";

      }
    };
    drawBtn.addEventListener("click", mainSection);
    resetBtn.addEventListener("click", resetSection);
    submitBtn.addEventListener("click", submitSection);
    clearBtn.addEventListener("click", clearSection);
    dltBtn.addEventListener("click", deleteSection);
  });
};
mainConatiner();
  