class Effect {
  #pixels = [];
  #navs = [];
  #ctx;
  #width = window.innerWidth;
  #height = window.innerWidth;
  #finalStep = 10;
  #stepSize = 5;
  #fps = 60;
  #media;
  #step = 0;

  constructor(navigationPoints, canvasContext, media) {
    this.#media = media;
    this.#ctx = canvasContext;
    this.#navs = navigationPoints;
    document.onmousemove = ev => this.#getStep(ev);
    if (this.isImage(this.#media)) {
      this.#imageInit();
    } else if (this.isVideo(this.#media)) {
      this.#videoInit();
    }
    this.windowSize();
  }

  isImage(media) {
    return media instanceof HTMLImageElement;
  }

  isVideo(media) {
    return media instanceof HTMLVideoElement;
  }

  #videoInit() {
    let $ = this;
    var back = document.createElement("canvas");
    var backcontext = back.getContext("2d");
    console.log("here");
    this.#media.addEventListener("play", function() {
      back.width = $.#width;
      back.height = $.#height;
      let $this = this;
      $.drawVideo($this, $.#ctx, backcontext, $.#width, $.#height);
    });
  }

  #imageInit() {
    this.#ctx.drawImage(this.#media, 0, 0, this.#width, this.#height);
    this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height);
    this.drawEffect(this.#step);
  }

  #getStep(e) {
    let step = 0;
    let points = this.getElementPoints();
    function d(point) {
      return Math.pow(point.x, 2) + Math.pow(point.y, 2);
    }

    let p = {
      x: e.clientX,
      y: e.clientY
    };
    var closest = points.reduce((a, b) =>
      this.distanceTo(p, a) < this.distanceTo(p, b) ? a : b
    );
    let rng = this.distanceTo(closest, p);
    let rngValue = this.mapStep(rng, 0, 600, 0, 5);
    step = this.reverseStep(rngValue);
    this.#step = step;
  }

  getElementPoints() {
    let pointArray = [];
    for (let nav of this.#navs) {
      let d = nav.getBoundingClientRect();
      let x = d.x + d.width / 2;
      let y = d.y + d.height / 2;
      let point = { x, y };
      pointArray.push({ x, y });
    }
    return pointArray;
  }

  drawEffect(step) {
    let effectData = this.contrastImage(step);
    let newImageData = effectData.imageData;
    this.#ctx.putImageData(newImageData, 0, 0);
  }

  contrastImage(step) {
    let newImageData = new ImageData(
      new Uint8ClampedArray(this.#pixels.data),
      this.#pixels.width,
      this.#pixels.height
    );
    let highlight = step * 20 + 1;
    let contrast = step * 0.25 + 1;
    let intercept = 255 * (-contrast / 2 + 0.5);

    var data = newImageData.data; // original array modified, but canvas not updated
    let transparentCount = 0;

    for (let i = 0, n = data.length; i < n; i += 4) {
      data[i] += highlight; // R
      data[i + 1] += highlight; // G
      data[i + 2] += highlight; // B
      data[i] = data[i] * contrast + intercept;
      data[i + 1] = data[i + 1] * contrast + intercept;
      data[i + 2] = data[i + 2] * contrast + intercept;

      if (
        step > 0 &&
        (contrast !== 1 &&
          (data[i] >= 255 && data[i + 1] >= 255 && data[i + 2] >= 255))
      ) {
        data[i + 3] = 0; // A
        transparentCount++;
      }
    }
    return {
      imageData: newImageData,
      fullyTransparent: transparentCount === data.length / 4
    };
  }

  mapStep(value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
  }

  distanceTo(point1, point2) {
    var xs = point2.x - point1.x;
    var ys = point2.y - point1.y;
    xs *= xs;
    ys *= ys;
    return Math.sqrt(xs + ys);
  }

  windowSize() {
    window.onresize = () => {
      this.#width = window.innerWidth;
      this.#height = window.innerWidth;
    };
  }

  reverseStep(step) {
    let value = step.toString().split(".");
    let possibleValues = [0, 1, 2, 3, 4, 5];
    let reversedValues = [...possibleValues].reverse();
    let res;
    possibleValues.forEach((v, i) => {
      if (Number(value[0]) === v) {
        res = value[1]
          ? Number(`${reversedValues[i]}.${value[1]}`)
          : Number(`${reversedValues[i]}`);
      }
    });
    return res;
  }

  drawVideo(v, c, bc, w, h) {
    if (v.paused || v.ended) return false;
    // First, draw it into the backing canvas
    bc.drawImage(v, 0, 0, w, h);
    // Grab the pixel data from the backing canvas
    this.#pixels = bc.getImageData(0, 0, w, h);

    this.drawEffect(this.#step);
    // Start over!
    window.requestAnimationFrame(() => {
      this.drawVideo(v, c, bc, w, h);
    });
  }
}

export default Effect;

// Written for Mao Churong by ªlvin ªShiatey ©
