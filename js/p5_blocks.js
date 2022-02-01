/**
 * ========================================
 *              Structure
 * ========================================
 */
Blockly.Blocks["setup"] = {
  init: function () {
    this.appendStatementInput("SETUP_STATEMENTS")
      .setCheck(null)
      .appendField("setup");
    this.setColour("#00ced1");
    this.setTooltip(
      "The setup() function is called once when the program starts."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/setup");
  },
};

Blockly.Blocks["draw"] = {
  init: function () {
    this.appendStatementInput("DRAW_STATEMENTS")
      .setCheck(null)
      .appendField("draw");
    this.setColour("#00ced1");
    this.setTooltip(
      "The draw() function continuously executes the blocks of code contained inside its block until the program is stopped."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/draw");
  },
};

Blockly.Blocks["createcanvas"] = {
  init: function () {
    this.appendDummyInput().appendField("createCanvas");
    this.appendValueInput("WIDTH")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("width"), "WIDTH");
    this.appendValueInput("HEIGHT")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("height"), "HEIGHT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00ced1");
    this.setTooltip(
      "Creates a canvas element in the document, and sets the dimensions of it in pixels."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/createCanvas");
  },
};

Blockly.Blocks["width"] = {
  init: function () {
    this.appendDummyInput().appendField("width");
    this.setOutput(true, null);
    this.setColour("#00ced1");
    this.setTooltip(
      "System variable that stores the width of the drawing canvas."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/width");
  },
};

Blockly.Blocks["height"] = {
  init: function () {
    this.appendDummyInput().appendField("height");
    this.setOutput(true, null);
    this.setColour("#00ced1");
    this.setTooltip(
      "System variable that stores the height of the drawing canvas."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/height");
  },
};

/**
 * ========================================
 *               Colour
 * ========================================
 */
Blockly.Blocks["background"] = {
  init: function () {
    this.appendDummyInput().appendField("background");
    this.appendValueInput("COLOR").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#05427f");
    this.setTooltip(
      "The background() function sets the color used for the background of the p5.js canvas."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/background");
  },
};

Blockly.Blocks["fill"] = {
  init: function () {
    this.appendDummyInput().appendField("fill");
    this.appendValueInput("COLOR").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#05427f");
    this.setTooltip("Sets the color used to fill shapes.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/fill");
  },
};

Blockly.Blocks["stroke"] = {
  init: function () {
    this.appendDummyInput().appendField("stroke");
    this.appendValueInput("COLOR").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#05427f");
    this.setTooltip(
      "Sets the color used to draw lines and borders around shapes."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/stroke");
  },
};

Blockly.Blocks["strokeweight"] = {
  init: function () {
    this.appendDummyInput().appendField("strokeWeight");
    this.appendValueInput("WEIGHT").setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#05427f");
    this.setTooltip(
      "Sets the width of the stroke used for lines, points and the border around shapes."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/createCanvas");
  },
};

/**
 * ========================================
 *                Shape
 * ========================================
 */
Blockly.Blocks["circle"] = {
  init: function () {
    this.appendDummyInput().appendField("circle");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x"), "X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y"), "Y");
    this.appendValueInput("DIAMETER")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("d"), "DIAMETER");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7f50");
    this.setTooltip("Draws a circle to the screen.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/circle");
  },
};

Blockly.Blocks["square"] = {
  init: function () {
    this.appendDummyInput().appendField("square");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x"), "X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y"), "Y");
    this.appendValueInput("SIDE")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("s"), "SIDE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7f50");
    this.setTooltip("Draws a square to the screen.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/square");
  },
};

Blockly.Blocks["triangle"] = {
  init: function () {
    this.appendDummyInput().appendField("triangle");
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x1"), "X1");
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y1"), "Y1");
    this.appendValueInput("X2")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x2"), "X2");
    this.appendValueInput("Y2")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y2"), "Y2");
    this.appendValueInput("X3")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x3"), "X3");
    this.appendValueInput("Y3")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y3"), "Y3");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7f50");
    this.setTooltip("Draws a triangle to the screen.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/triangle");
  },
};

Blockly.Blocks["ellipse"] = {
  init: function () {
    this.appendDummyInput().appendField("ellipse");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x"), "X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y"), "Y");
    this.appendValueInput("WIDTH")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("w"), "WIDTH");
    this.appendValueInput("HEIGHT")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("h"), "HEIGHT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7f50");
    this.setTooltip("Draws an ellipse (oval) to the screen.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/ellipse");
  },
};

Blockly.Blocks["rect"] = {
  init: function () {
    this.appendDummyInput().appendField("rect");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x"), "X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y"), "Y");
    this.appendValueInput("WIDTH")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("w"), "WIDTH");
    this.appendValueInput("HEIGHT")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("h"), "HEIGHT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7f50");
    this.setTooltip("Draws a rectangle to the screen.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/rect");
  },
};

Blockly.Blocks["point"] = {
  init: function () {
    this.appendDummyInput().appendField("point");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x"), "X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y"), "Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7f50");
    this.setTooltip("Draws a point to the screen.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/point");
  },
};

Blockly.Blocks["line"] = {
  init: function () {
    this.appendDummyInput().appendField("line");
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x1"), "X1");
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y1"), "Y1");
    this.appendValueInput("X2")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x2"), "X2");
    this.appendValueInput("Y2")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y2"), "Y2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff7f50");
    this.setTooltip("Draws a line to the screen.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/triangle");
  },
};

/**
 * ========================================
 *               Transform
 * ========================================
 */
Blockly.Blocks["translate"] = {
  init: function () {
    this.appendDummyInput().appendField("translate");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x"), "X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y"), "Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#88e088");
    this.setTooltip(
      "Specifies an amount to displace objects within the display window."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/translate");
  },
};

Blockly.Blocks["rotate"] = {
  init: function () {
    this.appendDummyInput().appendField("rotate");
    this.appendValueInput("ANGLE")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("angle"), "ANGLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#88e088");
    this.setTooltip(
      "Rotates a shape by the amount specified by the angle parameter."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/rotate");
  },
};

Blockly.Blocks["group"] = {
  init: function () {
    this.appendStatementInput("GROUP_STATEMENTS")
      .setCheck(null)
      .appendField("group");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#88e088");
    this.setTooltip("Applies transformations to a group of blocks.");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["scale"] = {
  init: function () {
    this.appendDummyInput().appendField("scale");
    this.appendValueInput("SCALE")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("factor"), "SCALE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#88e088");
    this.setTooltip(
      "Increases or decreases the size of a shape by expanding or contracting vertices."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/scale");
  },
};

Blockly.Blocks["push"] = {
  init: function () {
    this.appendDummyInput().appendField("push");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#88e088");
    this.setTooltip(
      "The push() function saves the current drawing style settings and transformations, while pop() restores these settings."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/push");
  },
};

Blockly.Blocks["pop"] = {
  init: function () {
    this.appendDummyInput().appendField("pop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#88e088");
    this.setTooltip(
      "The pop() function saves the current drawing style settings and transformations, while pop() restores these settings."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/pop");
  },
};

/**
 * ========================================
 *                Events
 * ========================================
 */
Blockly.Blocks["mousepressed"] = {
  init: function () {
    this.appendStatementInput("MOUSEPRESSED_STATEMENTS")
      .setCheck(null)
      .appendField("mousePressed");
    this.setColour("#ff69b4");
    this.setTooltip(
      "The mousePressed() function is called once after every time a mouse button is pressed."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/mousePressed");
  },
};

Blockly.Blocks["mousereleased"] = {
  init: function () {
    this.appendStatementInput("MOUSERELEASED_STATEMENTS")
      .setCheck(null)
      .appendField("mouseReleased");
    this.setColour("#ff69b4");
    this.setTooltip(
      "The mouseReleased() function is called once after every time a mouse button is released."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/mouseReleased");
  },
};

Blockly.Blocks["mousex"] = {
  init: function () {
    this.appendDummyInput().appendField("mouseX");
    this.setOutput(true, null);
    this.setColour("#ff69b4");
    this.setTooltip(
      "The system variable mouseX always contains the current horizontal position of the mouse."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/mouseX");
  },
};

Blockly.Blocks["mousey"] = {
  init: function () {
    this.appendDummyInput().appendField("mouseY");
    this.setOutput(true, null);
    this.setColour("#ff69b4");
    this.setTooltip(
      "The system variable mouseY always contains the current vertical position of the mouse."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/mouseY");
  },
};

Blockly.Blocks["keypressed"] = {
  init: function () {
    this.appendStatementInput("KEYPRESSED_STATEMENTS")
      .setCheck(null)
      .appendField("keyPressed");
    this.setColour("#ff69b4");
    this.setTooltip(
      "The keyPressed() function is called once every time a key is pressed."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/keyPressed");
  },
};

Blockly.Blocks["keyreleased"] = {
  init: function () {
    this.appendStatementInput("KEYRELEASED_STATEMENTS")
      .setCheck(null)
      .appendField("keyReleased");
    this.setColour("#ff69b4");
    this.setTooltip(
      "The keyReleased() function is called once every time a key is released."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/keyReleased");
  },
};

Blockly.Blocks["key"] = {
  init: function () {
    this.appendDummyInput().appendField("key");
    this.setOutput(true, null);
    this.setColour("#ff69b4");
    this.setTooltip(
      "The system variable key always contains the value of the most recent key on the keyboard that was typed."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/key");
  },
};

Blockly.Blocks["keycode"] = {
  init: function () {
    this.appendDummyInput().appendField("keyCode");
    this.setOutput(true, null);
    this.setColour("#ff69b4");
    this.setTooltip(
      "The variable keyCode is used to detect special keys. Visit https://keycode.info"
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/keyCode");
  },
};

/**
 * ========================================
 *                 Text
 * ========================================
 */
Blockly.Blocks["p5text"] = {
  init: function () {
    this.appendDummyInput().appendField("text");
    this.appendValueInput("TEXT").setCheck(null);
    this.appendValueInput("X").setCheck("Number").appendField("x");
    this.appendValueInput("Y").setCheck("Number").appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#058863");
    this.setTooltip("Draws text to the screen.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/text");
  },
};

Blockly.Blocks["textsize"] = {
  init: function () {
    this.appendDummyInput().appendField("textSize");
    this.appendValueInput("SIZE").setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#058863");
    this.setTooltip("Sets the current font size.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/textSize");
  },
};

Blockly.Blocks["textfont"] = {
  init: function () {
    this.appendDummyInput().appendField("textFont");
    this.appendValueInput("FONT").setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#058863");
    this.setTooltip(
      "Sets the current font that will be drawn with the text() function."
    );
    this.setHelpUrl("https://p5js.org/reference/#/p5/textFont");
  },
};

/**
 * ========================================
 *                 Math
 * ========================================
 */
Blockly.Blocks["dist"] = {
  init: function () {
    this.appendDummyInput().appendField("dist");
    this.setOutput(true, null);
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x1"), "X1");
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y1"), "Y1");
    this.appendValueInput("X2")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("x2"), "X2");
    this.appendValueInput("Y2")
      .setCheck("Number")
      .appendField(new Blockly.FieldLabelSerializable("y2"), "Y2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e6da39");
    this.setTooltip("Calculates the distance between two points.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/dist");
  },
};
