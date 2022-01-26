/**
 * A custom Renderer object that provides an interface to Computiful's
 * custom design.
 *
 * @param {String} name name of the custom renderer
 */
var ComputifulRenderer = function (name) {
  ComputifulRenderer.superClass_.constructor.call(this, name);
};

Blockly.utils.object.inherits(
  ComputifulRenderer,
  Blockly.blockRendering.Renderer
);
Blockly.blockRendering.register("computiful_renderer", ComputifulRenderer);

/**
 * A custom ConstantsProvider that implements Computiful's custom
 * design.
 *
 */
var ComputifulConstantsProvider = function () {
  ComputifulConstantsProvider.superClass_.constructor.call(this);

  this.NOTCH_WIDTH = 0;
  this.NOTCH_HEIGHT = 0;

  this.CORNER_RADIUS = 5;

  this.TAB_HEIGHT = 15;
  this.TAB_WIDTH = 7.5;
};

Blockly.utils.object.inherits(
  ComputifulConstantsProvider,
  Blockly.blockRendering.ConstantProvider
);
ComputifulRenderer.prototype.makeConstants_ = function () {
  return new ComputifulConstantsProvider();
};

Blockly.blockRendering.ConstantProvider.prototype.init = function () {
  this.NOTCH = this.makeNotch();
  this.PUZZLE_TAB = this.makePuzzleTab();
};

ComputifulConstantsProvider.prototype.makeRoundTab = function () {
  const width = this.TAB_WIDTH;
  const height = this.TAB_HEIGHT;

  function makeMainPath(up) {
    const forward = up ? -1 : 1;
    const back = -forward;

    const overlap = -5;
    const halfHeight = height / 2;
    const control1Y = halfHeight + overlap;
    const control2Y = halfHeight;
    const control3Y = overlap; // 2.5

    const endPoint1 = Blockly.utils.svgPaths.point(
      -width,
      forward * halfHeight
    );
    const endPoint2 = Blockly.utils.svgPaths.point(width, forward * halfHeight);

    return (
      Blockly.utils.svgPaths.curve("c", [
        Blockly.utils.svgPaths.point(0, forward * control1Y),
        Blockly.utils.svgPaths.point(-width, back * control2Y),
        endPoint1,
      ]) +
      Blockly.utils.svgPaths.curve("s", [
        Blockly.utils.svgPaths.point(width, back * control3Y),
        endPoint2,
      ])
    );
  }

  const pathUp = makeMainPath(true);
  const pathDown = makeMainPath(false);

  return {
    type: this.SHAPES.PUZZLE,
    width: width,
    height: height,
    pathDown: pathDown,
    pathUp: pathUp,
  };
};

ComputifulConstantsProvider.prototype.init = function () {
  ComputifulConstantsProvider.superClass_.init.call(this);
  this.JAGGED_TEETH = this.makeJaggedTeeth();
  this.NOTCH = this.makeNotch();
  this.START_HAT = this.makeStartHat();
  this.PUZZLE_TAB = this.makePuzzleTab();
  this.INSIDE_CORNERS = this.makeInsideCorners();
  this.OUTSIDE_CORNERS = this.makeOutsideCorners();
  this.ROUND_TAB = this.makeRoundTab();
};

ComputifulConstantsProvider.prototype.shapeFor = function (connection) {
  switch (connection.type) {
    case Blockly.INPUT_VALUE:
    case Blockly.OUTPUT_VALUE:
      return this.ROUND_TAB;
    case Blockly.PREVIOUS_STATEMENT:
    case Blockly.NEXT_STATEMENT:
      return this.NOTCH;
    default:
      throw Error("Unkown connection type");
  }
};
