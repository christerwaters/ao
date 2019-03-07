console.clear();

// Get the canvas element from the DOM
const canvas = document.getElementById('mathglobe');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
// Store the 2D context
const ctx = canvas.getContext('2d');

if (window.devicePixelRatio > 1) {
  canvas.width = canvas.clientWidth * 2;
  canvas.height = canvas.clientHeight * 2;
  ctx.scale(2, 2);
}

function getTexture(emoji) {
  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");
  tempCanvas.width = 60;
  tempCanvas.height = 60;
  tempCtx.textAlign = 'center';
  tempCtx.textBaseline = 'middle';
  tempCtx.font = '12px sans-serif';
  tempCtx.fillText(emoji, 30, 35);
  return tempCanvas;
}		
const textures = [getTexture('X'), getTexture('π'), getTexture('Y'), getTexture('Ω'), getTexture('Φ'), getTexture('Σ')];
/* ====================== */
/* ====== VARIABLES ===== */
/* ====================== */
let width = canvas.offsetWidth; // Width of the canvas
let height = canvas.offsetHeight; // Height of the canvas
const dots = []; // Every dots in an array

/* ====================== */
/* ====== CONSTANTS ===== */
/* ====================== */
/* Some of those constants may change if the user resizes their screen but I still strongly believe they belong to the Constants part of the variables */
let DOTS_AMOUNT = Math.min(width, height); // Amount of dots on the screen
const DOT_RADIUS = 20; // Radius of the dots
let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
let PERSPECTIVE = width * 0.8;
let GLOBE_RADIUS = Math.min(width, height) * 0.4;

class Dot {
  constructor() {
    this.theta = Math.random() * 2 * Math.PI; // Random value between [0, 2Pi]
    this.phi = Math.acos((Math.random() * 2) - 1); // Random value between [0, Pi]
    
    this.texture = textures[Math.floor(Math.random() * textures.length)];
    
    // Calculate the [x, y, z] coordinates of the dot along the globe
    this.x = 0;
    this.y = 0;
    this.z = 0;
    
    this.radius = Math.random() * (GLOBE_RADIUS * 0.2) + (GLOBE_RADIUS * 0.8);
    
    this.xProjected = 0;
    this.yProjected = 0;
    this.scaleProjected = 0;
    
    TweenMax.to(this, 40, {
      theta: this.theta + Math.PI * 2,
      repeat: -1,
      ease: Power0.easeNone
    });
  }
  // Do some math to project the 3D position into the 2D canvas
  project() {
    this.x = this.radius * Math.sin(this.phi) * Math.cos(this.theta);
    this.y = this.radius * Math.cos(this.phi);
    this.z = this.radius * Math.sin(this.phi) * Math.sin(this.theta) + this.radius;
    
    this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
    this.xProjected = (this.x * this.scaleProjected) + PROJECTION_CENTER_X;
    this.yProjected = (this.y * this.scaleProjected) + PROJECTION_CENTER_Y;
  }
  // Draw the dot on the canvas
  draw() {
    ctx.drawImage(this.texture, this.xProjected - DOT_RADIUS, this.yProjected - DOT_RADIUS, DOT_RADIUS * 2 * this.scaleProjected, DOT_RADIUS * 2 * this.scaleProjected)
  }
}

function createDots() {
  // Empty the array of dots
  dots.length = 0;
  
  // Create a new dot based on the amount needed
  for (let i = 0; i < DOTS_AMOUNT; i++) {
    // Create a new dot and push it into the array
    dots.push(new Dot());
  }
}

/* ====================== */
/* ======== RENDER ====== */
/* ====================== */
function render() {
  // Clear the scene
  ctx.clearRect(0, 0, width, height);
  
  // Loop through the dots array and project every dot
  for (var i = 0; i < dots.length; i++) {
    dots[i].project();
  }
  
  // Sort dots array based on their projected size
  dots.sort((dot1, dot2) => {
    return dot1.scaleProjected - dot2.scaleProjected;
  });
  
  // Loop through the dots array and draw every dot
  for (var i = 0; i < dots.length; i++) {
    dots[i].draw();
  }
  
  window.requestAnimationFrame(render);
}


// Function called after the user resized its screen
function afterResize () {
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;
  if (window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);
  } else {
    canvas.width = width;
    canvas.height = height;
  }
  PROJECTION_CENTER_X = width / 2;
  PROJECTION_CENTER_Y = height / 2;
  PERSPECTIVE = width * 0.8;
  GLOBE_RADIUS = Math.min(width, height) * 0.4;
  DOTS_AMOUNT = Math.min(width, height);
  
  createDots(); // Reset all dots
}

// Variable used to store a timeout when user resized its screen
let resizeTimeout;
// Function called right after user resized its screen
function onResize () {
  // Clear the timeout variable
  resizeTimeout = window.clearTimeout(resizeTimeout);
  // Store a new timeout to avoid calling afterResize for every resize event
  resizeTimeout = window.setTimeout(afterResize, 500);
}
window.addEventListener('resize', onResize);

// Populate the dots array with random dots
createDots();

// Render the scene
window.requestAnimationFrame(render);