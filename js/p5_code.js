/**
 * ========================================
 *              Structure
 * ========================================
 */
Blockly.JavaScript["setup"] = function (block) {
  const statements_setup_statements = Blockly.JavaScript.statementToCode(
    block,
    "SETUP_STATEMENTS"
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.setup = function() {\np.angleMode(p.DEGREES);\n${statements_setup_statements};\n}\n`;
  return code;
};

Blockly.JavaScript["draw"] = function (block) {
  const statements_draw_statements = Blockly.JavaScript.statementToCode(
    block,
    "DRAW_STATEMENTS"
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.draw = function() {\n${statements_draw_statements};\n}\n`;
  return code;
};

Blockly.JavaScript["createcanvas"] = function (block) {
  const value_width = Blockly.JavaScript.valueToCode(
    block,
    "WIDTH",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_height = Blockly.JavaScript.valueToCode(
    block,
    "HEIGHT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `
  let cnv = p.createCanvas(${value_width}, ${value_height});\n
  cnv.parent('#p5Container');\n
  `;
  return code;
};

Blockly.JavaScript["width"] = function () {
  // TODO: Assemble JavaScript into code variable.
  const code = "p.width";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["height"] = function () {
  // TODO: Assemble JavaScript into code variable.
  const code = "p.height";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/**
 * ========================================
 *               Colour
 * ========================================
 */
Blockly.JavaScript["background"] = function (block) {
  const value_color = Blockly.JavaScript.valueToCode(
    block,
    "COLOR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.background(${value_color});\n`;
  return code;
};

Blockly.JavaScript["fill"] = function (block) {
  const value_color = Blockly.JavaScript.valueToCode(
    block,
    "COLOR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.fill(${value_color});\n`;
  return code;
};

Blockly.JavaScript["stroke"] = function (block) {
  const value_color = Blockly.JavaScript.valueToCode(
    block,
    "COLOR",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.stroke(${value_color});\n`;
  return code;
};

Blockly.JavaScript["strokeweight"] = function (block) {
  const value_weight = Blockly.JavaScript.valueToCode(
    block,
    "WEIGHT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.strokeWeight(${value_weight});\n`;
  return code;
};

/**
 * ========================================
 *                Shape
 * ========================================
 */
Blockly.JavaScript["circle"] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_diameter = Blockly.JavaScript.valueToCode(
    block,
    "DIAMETER",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.circle(${value_x}, ${value_y}, ${value_diameter});\n`;
  return code;
};

Blockly.JavaScript["square"] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_side = Blockly.JavaScript.valueToCode(
    block,
    "SIDE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.square(${value_x}, ${value_y}, ${value_side});\n`;
  return code;
};

Blockly.JavaScript["triangle"] = function (block) {
  const value_x1 = Blockly.JavaScript.valueToCode(
    block,
    "X1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y1 = Blockly.JavaScript.valueToCode(
    block,
    "Y1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_x2 = Blockly.JavaScript.valueToCode(
    block,
    "X2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y2 = Blockly.JavaScript.valueToCode(
    block,
    "Y2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_x3 = Blockly.JavaScript.valueToCode(
    block,
    "X3",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y3 = Blockly.JavaScript.valueToCode(
    block,
    "Y3",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.triangle(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, ${value_x3}, ${value_y3});\n`;
  return code;
};

Blockly.JavaScript["ellipse"] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_width = Blockly.JavaScript.valueToCode(
    block,
    "WIDTH",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_height = Blockly.JavaScript.valueToCode(
    block,
    "HEIGHT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.ellipse(${value_x}, ${value_y}, ${value_width}, ${value_height});\n`;
  return code;
};

Blockly.JavaScript["rect"] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_width = Blockly.JavaScript.valueToCode(
    block,
    "WIDTH",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_height = Blockly.JavaScript.valueToCode(
    block,
    "HEIGHT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.rect(${value_x}, ${value_y}, ${value_width}, ${value_height});\n`;
  return code;
};

Blockly.JavaScript["point"] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.point(${value_x}, ${value_y});\n`;
  return code;
};

Blockly.JavaScript["line"] = function (block) {
  const value_x1 = Blockly.JavaScript.valueToCode(
    block,
    "X1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y1 = Blockly.JavaScript.valueToCode(
    block,
    "Y1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_x2 = Blockly.JavaScript.valueToCode(
    block,
    "X2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y2 = Blockly.JavaScript.valueToCode(
    block,
    "Y2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
  return code;
};

/**
 * ========================================
 *               Transform
 * ========================================
 */
Blockly.JavaScript["translate"] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.translate(${value_x}, ${value_y});\n`;
  return code;
};

Blockly.JavaScript["rotate"] = function (block) {
  const value_angle = Blockly.JavaScript.valueToCode(
    block,
    "ANGLE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.rotate(${value_angle});\n`;
  return code;
};

Blockly.JavaScript["scale"] = function (block) {
  const value_scale = Blockly.JavaScript.valueToCode(
    block,
    "SCALE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.scale(${value_scale});\n`;
  return code;
};

Blockly.JavaScript["push"] = function () {
  // TODO: Assemble JavaScript into code variable.
  const code = "p.push();\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript["pop"] = function () {
  // TODO: Assemble JavaScript into code variable.
  const code = "p.pop();\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript["group"] = function (block) {
  const statements_group_statements = Blockly.JavaScript.statementToCode(
    block,
    "GROUP_STATEMENTS"
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.push();\n${statements_group_statements};\np.pop();\n`;
  return code;
};

/**
 * ========================================
 *                Events
 * ========================================
 */
Blockly.JavaScript["mousepressed"] = function (block) {
  const statements_mousepressed_statements = Blockly.JavaScript.statementToCode(
    block,
    "MOUSEPRESSED_STATEMENTS"
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.mousePressed = function() {\n${statements_mousepressed_statements};\n}\n`;
  return code;
};

Blockly.JavaScript["mousereleased"] = function (block) {
  const statements_mousereleased_statements =
    Blockly.JavaScript.statementToCode(block, "MOUSERELEASED_STATEMENTS");
  // TODO: Assemble JavaScript into code variable.
  const code = `p.mouseReleased = function() {\n${statements_mousereleased_statements};\n}\n`;
  return code;
};

Blockly.JavaScript["mousex"] = function () {
  // TODO: Assemble JavaScript into code variable.
  const code = "p.mouseX";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["mousey"] = function () {
  // TODO: Assemble JavaScript into code variable.
  const code = "p.mouseY";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["keypressed"] = function (block) {
  const statements_keypressed_statements = Blockly.JavaScript.statementToCode(
    block,
    "KEYPRESSED_STATEMENTS"
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.keyPressed = function() {\n${statements_keypressed_statements};\n}\n`;
  return code;
};

Blockly.JavaScript["keyreleased"] = function (block) {
  const statements_keypressed_statements = Blockly.JavaScript.statementToCode(
    block,
    "KEYRELEASED_STATEMENTS"
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.keyReleased = function() {\n${statements_keypressed_statements};\n}\n`;
  return code;
};

Blockly.JavaScript["key"] = function () {
  // TODO: Assemble JavaScript into code variable.
  const code = "p.key";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["keycode"] = function () {
  // TODO: Assemble JavaScript into code variable.
  const code = "p.keyCode";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/**
 * ========================================
 *                 Text
 * ========================================
 */
Blockly.JavaScript["p5text"] = function (block) {
  const value_text = Blockly.JavaScript.valueToCode(
    block,
    "TEXT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const value_y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.text(${value_text}, ${value_x}, ${value_y});\n`;
  return code;
};

Blockly.JavaScript["textsize"] = function (block) {
  const value_size = Blockly.JavaScript.valueToCode(
    block,
    "SIZE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.textSize(${value_size});\n`;
  return code;
};

Blockly.JavaScript["textfont"] = function (block) {
  const value_font = Blockly.JavaScript.valueToCode(
    block,
    "FONT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `p.textFont(${value_font});\n`;
  return code;
};
