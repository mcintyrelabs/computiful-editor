Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
  scrollbars: true,
  renderer: "computiful_renderer",
  theme: Blockly.Themes.Computiful,
  zoom: {
    controls: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
  },
  trashcan: true,
});

function initializeWorkspace() {
  const workspace = Blockly.getMainWorkspace();
  workspace.clear();
  const name = "Hello, world";
  loadExample(name);
  $("#sketch-name").val(name);

  const blocklyArea = document.getElementById("blocklyArea");
  const blocklyDiv = document.getElementById("blocklyDiv");
  const onresize = function (e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    let element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + "px";
    blocklyDiv.style.top = y + "px";
    blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
    blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
    Blockly.svgResize(workspace);
  };
  window.addEventListener("resize", onresize, false);
  onresize();
  Blockly.svgResize(workspace);
}

window.onload = function () {
  initializeWorkspace();
  initializeFile();
  initializeExample();
  initializeControl();
  playSketch();
};

function initializeFile() {
  $("#btn-new").click(function () {
    const workspace = Blockly.getMainWorkspace();
    workspace.clear();
    loadExample("Hello, world");
    nameSketch();
  });
  $("#btn-load").click(function () {
    uploadSketch();
  });
  $("#btn-save").click(function () {
    saveSketch();
  });
  $("#btn-js").click(function () {
    saveScript();
  });
}

function initializeExample() {
  $("#example-hello-world").click(function () {
    const workspace = Blockly.getMainWorkspace();
    workspace.clear();
    const name = "Hello, world";
    loadExample(name);
    $("#sketch-name").val(name);
  });
  $("#example-stars").click(function () {
    const workspace = Blockly.getMainWorkspace();
    workspace.clear();
    const name = "Stars";
    loadExample(name);
    $("#sketch-name").val(name);
  });
  $("#example-bounce").click(function () {
    const workspace = Blockly.getMainWorkspace();
    workspace.clear();
    const name = "Bouncing ball";
    loadExample(name);
    $("#sketch-name").val(name);
  });
  $("#example-moon").click(function () {
    const workspace = Blockly.getMainWorkspace();
    workspace.clear();
    const name = "Moon";
    loadExample(name);
    $("#sketch-name").val(name);
  });
  $("#example-ccfest").click(function () {
    const workspace = Blockly.getMainWorkspace();
    workspace.clear();
    const name = "CC Fest - Turtle Earth";
    loadExample(name);
    $("#sketch-name").val(name);
  });
}

function initializeControl() {
  $("#btn-stop").click(function () {
    stopSketch();
  });
  $("#btn-play").click(function () {
    playSketch();
  });
}

function nameSketch() {
  const objects = [];
  const predicates = [];
  $.get("/assets/words/predicates.txt")
    .then((data) => {
      for (let adj of data.split("\n")) {
        if (adj.length < 8) predicates.push(adj);
      }
    })
    .then(() => {
      $.get("/assets/words/objects.txt").then((data) => {
        for (let obj of data.split("\n")) {
          if (obj.length < 8) objects.push(obj);
        }
        let adj = predicates[Math.floor(Math.random() * predicates.length)];
        adj = adj.charAt(0).toUpperCase() + adj.slice(1);
        const obj = objects[Math.floor(Math.random() * objects.length)];
        const name = `${adj} ${obj}`;
        $("#sketch-name").val(name);
      });
    });
}

function playSketch() {
  $("#btn-stop").removeClass("btn-active");
  $("#btn-play").addClass("btn-active");
  try {
    if (window._sketch) {
      window._sketch.remove();
    }
    const workspace = Blockly.getMainWorkspace();
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    const p5Div = document.getElementById("p5Container");
    p5Div.innerHTML = "";
    const f = new Function("p", code);
    window._sketch = new p5(f, "p5Container");
  } catch (error) {
    p5._friendlyError("Please tidy up your blocks :)");
  }
}

function stopSketch() {
  $("#btn-play").removeClass("btn-active");
  $("#btn-stop").addClass("btn-active");
  if (window._sketch) {
    window._sketch.remove();
  }
}

function saveSketch() {
  const filename = document.getElementById("sketch-name").value;
  const workspace = Blockly.getMainWorkspace();
  const txt = JSON.stringify(Blockly.serialization.workspaces.save(workspace));
  const data = new Blob([txt]);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(data, { type: "text/plain" });
  a.setAttribute("download", `${filename}.blocks`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function saveScript() {
  let js = Blockly.JavaScript.workspaceToCode();
  js = js.replace(/p\./g, "");
  js = js.replace(/setup = function/, "function setup");
  js = js.replace(/draw = function/, "function draw");
  js = js.replace(/cnv\.parent\(\'\#p5Container\'\)\;/, "");
  js = js.replace(/let cnv = /, "");
  js = js.replace(/  \n/g, "");
  const data = new Blob([js]);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(data, { type: "text/plain" });
  a.setAttribute("download", `sketch.js`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function uploadSketch() {
  stopSketch();
  const inputElement = document.getElementById("sketch-load");
  inputElement.click();
  inputElement.addEventListener("change", processSketch, false);
}

function processSketch() {
  const workspace = Blockly.getMainWorkspace();
  const reader = new FileReader();
  const file = this.files[0];
  const name = file.name.split(".")[0];
  $("#sketch-name").val(name);
  reader.onload = function (evt) {
    const sketch = JSON.parse(evt.target.result);
    Blockly.serialization.workspaces.load(sketch, workspace);
  };
  reader.readAsText(file);
}

function loadExample(filename) {
  stopSketch();
  const workspace = Blockly.getMainWorkspace();
  $.get(`/assets/sketches/${filename}.blocks`).then((data) => {
    const sketch = JSON.parse(data);
    Blockly.serialization.workspaces.load(sketch, workspace);
    playSketch();
  });
}

p5._mfriendlyError = p5._friendlyError;

p5._friendlyError = function (message, func, color) {
  let msg = message;
  if (msg.indexOf("An error") >= 0) {
    msg = msg.replace(/was called[^\r\n]*/, "was called.\n");
    msg = msg.replace(/ with message [^\r\n]*\."/, "");
    msg = msg.replace(/library/, "library\n");
    msg = msg.replace(/issue/, "issue\n");
  } else if (msg.indexOf("If not intentional") >= 0) {
    msg = msg.replace(/ \(on line[^\r\n]*/, "");
    msg = msg.replace(/If not intentional[^\r\n]*/, "");
    msg = msg.replace(/\n/, "");
    msg = msg.replace(/\(\)/, "");
    msg = msg.replace(/for the/, "for the\n");
  }

  window.fesMessage = msg;
  window._sketch.remove();
  window._sketch = new p5(oops, "p5Container");
  p5._mfriendlyError(message, func, color);
};

function oops(p) {
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background("white");
    p.fill("#ed225d");
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont("Inconsolata");
    p.textSize(14);
    p.text(window.fesMessage, 200, 200);
    p.textSize(64);
    p.text("*", 200, 100);
  };
}
