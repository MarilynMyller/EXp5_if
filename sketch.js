let x=100; 
let y=50; 
let directionX = 1 ; 
let directionY = 1; 
let velocityX = 10; 
let velocityY = 10; 
let string="text"; 
let boolean = false; 
let something

function setup() {
  // put setup code here
  //createCanvas(600, 600); 
  createCanvas(innerWidth, innerHeight); 
colorMode (HSB); 
//noStroke (); 
//stroke (random(360), 40, 80); // S 20 - 50, B 90-130
//background(100, 10, 95);//soft green
background(0); 
}

function draw() {
	fill (x % 15, 20, 200); //soft pink
	//fill (x % 360, 20, 200); // soft rainbow(360, 360,  = full color rainbow)
	ellipse (x,y, 40); 
	ellipse (x,y, random(120)); 
	//fill (random (255), random (255)); 
	//stroke (255); 
	y+=velocityX*directionY; 
	x+=velocityY*directionX; 
	//x+= 10; 
	if (y > innerHeight){ //hier kein Semikolon
		//y=0;
		directionY = -1; 
		//x+=30;
	}

	if (y<0) {
		directionY = 1; 
	}
if (x>innerWidth) {
	directionX = -2; 
} 
if (x<0) {
	directionX = 1; 
}
if (frameCount % 10 == 0) {
	//add some random number to the x and y 
	//x+= random (5); 
	//y+= random(3); 
	velocityX= random (5); 
	velocityY= random(3); 
}

	//for-loops iterate a function n-times
	/*for (let i=0; i<10; i++){
		console.log(i); 
		ellipse (mouseX, mouseY,random(200)); 
		fill (255, random(10)); 
	}*/
	  // put drawing code here
}